# 開発者ガイド

## 目次

1. [開発環境のセットアップ](#開発環境のセットアップ)
2. [基本的なコマンド](#基本的なコマンド)
3. [Git の基本](#gitの基本)
4. [使ってる技術](#使ってる技術)
5. [Tailwind CSSの使い方](#tailwind-cssの使い方)
6. [StorybookとChromaticの使用方法](#storybookとchromaticの使用方法)
7. [Next.jsのディレクトリ構造と触っていいファイル](#nextjsのディレクトリ構造と触っていいファイル)

## 開発環境のセットアップ

1. Node.jsをインストール（バージョン14以上推奨）
2. このリポジトリをクローン (git clone https://github.com/masutai/library.git)
3. `npm install` を実行して依存関係をインストール

## 基本的なコマンド

- `npm run dev`: 開発サーバーを起動 (編集しながらブラウザで確認できる、重い)
- `npm run build`: プロジェクトをビルド (最後に保存した状態の静的ファイルを生成する)
- `npm run start`: ビルドしたファイルを起動 (ブラウザで確認できる、軽い)
- `npm run test`: テストを実行 (あなたは触らんといて)
- `npm run lint:fix`: コードのリント (コードをルールに基づき自動で修正してくれるやつ、git add する前に絶対やること)
- `npm run format`: コードのフォーマット (コードをルールに基づき自動で修正してくれるやつ、git add する前に絶対やること)

## Gitの基本

- `git add .`: 変更をステージング
- `git commit -m "メッセージ"`: コミット
- `git pull`: リモートの変更をローカルにマージ
- `git push`: リモートにプッシュ

## 使ってる技術

- Next.js (静的サイト生成)
- TypeScript (静的型付け)
- Tailwind CSS (スタイリング)
- shadcn/ui (UIコンポーネント)
- hono (APIサーバー)
- Storybook (UIコンポーネントのテスト、UIカタログ)
- Chromatic (UIコンポーネントのテスト、UIカタログ)
- Playwright (E2Eテスト)
- Jest (単体、結合、ユニットテスト)
- ESLint (コードのリント)
- Prettier (コードのフォーマット)
- Husky (git commit前にコードのチェックを行う)
- Commitizen (コミットメッセージを規約に基づき自動で修正してくれる)

## Tailwind CSSの使い方

- クラス名を使用してスタイリング
- オススメの拡張機能: Tailwind CSS IntelliSense (クラス名にカーソルを合わせると、cssが表示される、コード補完も効く)

### 例

- `<div className="bg-blue-500">背景を青</div>`
- `<div className="text-red-500">文字を赤</div>`
- `<div className="p-4">パディングを4</div>`
- `<div className="rounded-lg">角を丸く</div>`
- `<div className="w-100 h-100">大きさを100x100</div>`
- `<div className="flex">フレックスボックス</div>`
- `<div className="justify-center">真ん中にする</div>`

## StorybookとChromaticの使用方法

- `npm run storybook`: Storybookを起動
- `npx chromatic --project-token=<your-project-token>`: Chromaticにデプロイ

## Next.jsのディレクトリ構造と触っていいファイル

```
.husky / ※絶対に触らない
.next / ※絶対に触らない
.storybook / ※絶対に触らない
coverage / ※絶対に触らない
node_modules / ※絶対に触らない
public / 画像ファイルはここに入れる
src /
├── __tests__ / ※必要に応じて編集する（テストファイルを入れるディレクトリ）
├── app / ※主に作業するディレクトリ（ブラウザで表示されるファイル）/
│   ├── api / ※必要に応じて編集する（API用のディレクトリ）
│   ├── 〇〇 /
│   │   ├── page.tsx ※主に編集する（http://localhost:3000/〇〇 のページを作るファイル）
│   │   └── layout.tsx ※必要に応じて編集する（http://localhost:3000/〇〇 のレイアウト構造とタイトルなどを決められるファイル）
│   ├── page.tsx ※主に編集する（http://localhost:3000/ のページを作るファイル）
│   └── layout.tsx ※必要に応じて編集する（全体のレイアウト構造とタイトルなどを決められるファイル）
├── components / ※主に編集する（共通のボタンなどを作るディレクトリ）/
│   ├── layouts / ※主に編集する（ヘッダーやフッターなどを作るところ）/
│   │   └── 〇〇 / ※主に編集する/
│   │       └── 〇〇.stories.tsx ※必要に応じて編集する（storybook用のファイル、見た目のテストができる）
│   ├── elements / ※主に編集する（ボタンなどの個別パーツを作るディレクトリ）
│   └── ui / ※必要に応じて編集する（shadcn/uiから持ってきたコンポーネントなどを入れるディレクトリ）
├── config / ※必要に応じて編集する（アプリケーションの設定ファイルを格納するディレクトリ）
├── constants / ※必要に応じて編集する（定数を宣言するファイルを入れるディレクトリ）
├── features / ※必要に応じて編集する（特定の機能をグループ化したもの）
├── hooks / ※必要に応じて編集する（React hooks≒ロジックを格納するディレクトリ）
├── lib / ※必要に応じて編集する（ユーティリティ関数や共通ロジックを格納するディレクトリ）
├── stories / ※必要に応じて編集する（見た目のテストをするためのディレクトリ）
└── types / ※必要に応じて編集する（TypeScriptの型定義ファイルを格納するディレクトリ）
storybook-static / ※絶対に触らない
test-results / ※絶対に触らない
.cz-config.js ※なるべく触らない（npm run commitコマンドで出てくる内容のファイル）
.eslintrc.json ※なるべく触らない（コードの品質をチェックして、警告などのルールを決めるファイル）
.env.local ※環境変数の設定が必要な場合のみ編集する（絶対に外部に漏らしちゃいけないファイル）
.gitignore ※なるべく触らない（gitの管理下から外すファイルを設定するファイル）
.prettierrc ※なるべく触らない（インデントなどのフォーマットを決めるファイル）
components.json　※触らない（shadcn/ui用の設定ファイル）
DEVELOPER_GUIDE.md ※なるべく触らない（このファイル）
gitcommand.md ※必要に応じて参照・編集する
jest.config.mjs ※なるべく触らない（テストの設定ファイル）
jest.setup.js ※なるべく触らない（テストのセットアップ用ファイル）
next-env.d.ts ※なるべく触らない（Next.jsの型定義ファイル）
next.config.mjs ※なるべく触らない（Next.jsの設定ファイル）
package-lock.json ※なるべく触らない（npmの依存関係を記録するファイル）
package.json ※慎重に編集する（プロジェクト、コマンドの設定ファイル）
postcss.config.mjs ※なるべく触らない（postCSSの設定ファイル）
README.md ※なるべく触らない（開発者や利用者にプロジェクトの概要や開発方法などを教えるファイル）
tailwind.config.ts ※なるべく触らない（tailwindcssの設定ファイル）
tsconfig.json ※なるべく触らない（typescriptの設定ファイル）
```
