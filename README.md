# 企画案　 　　　　　　

テーマ：Next.js, Websocketで理想のスイカ割りゲームを作る

概要 (どのような or 何をするもの、背景．箇条書きでOK)：  
・**現実のスイカ割りのデメリットを無くした理想のスイカ割りゲーム**

・現実のデメリット：危ない(目隠し+バットを振り回す、回転して酔う・転ぶ)、  
　　　　　　　　　　　スイカを綺麗に割れない、準備が大変

・web上で操作を行うので、周囲の安全を確保する必要もない+準備も要らない。  
　　スイカを食べなくてもいいので、スイカが苦手な人でも遊べる。

・リアルタイム同期通信を行い、協力してスイカを割る \=\> Web上で再現できる！  
　　援助側と割る側に分かれて操作する。

・キーボード※1またはPAD(gamepad api)でキャラクターを操作する。。  
　・プレイヤーはプレイ画面が見えず、観戦者は別デバイスでプレイ画面を見ることができる

・2Dで、計3ステージ用意する。

・難易度によって  
　　スイカを移動させる、  
　　攻撃・トラップなどをよける  
　　移動のずれ(敢えて真っ直ぐ進めない 少しズレる)　などを行う(行ってみたい)。

追加機能

・3つの陣営に分かれ、妨害、割る、援助をそれぞれ行う。  
　・プレイヤー画面を完全にブラックアウトするのではなく、スイカとの距離や方向によって画面にノイズ(もやもや)を入れる。

新たな学び(やってみたいこと)：  
・リアルタイムでの同期通信(Websocket):観戦モードを別デバイスで表示する  
　Pusherを使って実装してみる予定。  
　コマンドでプレイヤーを助ける（向き・移動方向の調整など）  
・サーバー側で当たり判定の処理  
・テスト：Jest, Storybook, playwright, testing libraryなどを使って、単体・結合・UI(VRT)・E2Eテストなどを行いたい。

扱うデータ：  
・キャラクター、スイカなどの座標  
・キー||PAD入力データ(コマンド)。

※1:J:左回転、K:後ろ移動、L:右回転、I:前移動 ␣ (スペースキー) | クリックでスイカを割るの予定

**簡単なイメージ**図
