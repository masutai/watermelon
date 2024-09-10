module.exports = {
	types: [
		{ value: "feat", name: "feat:     新機能追加" },
		{ value: "add", name: "add:      ファイル追加" },
		{ value: "fix", name: "fix:      バグ修正" },
		{ value: "change", name: "change:   仕様変更により、既存の機能の修正" },
		{
			value: "update",
			name: "update:   既存の機能に問題がないが、修正を加えたい場合"
		},
		{ value: "docs", name: "docs:     ドキュメント更新" },
		{
			value: "style",
			name: "style:    コードスタイル修正（機能に影響しない変更）"
		},
		{ value: "refactor", name: "refactor: コードリファクタリング" },
		{ value: "perf", name: "perf:     パフォーマンス改善" },
		{ value: "test", name: "test:     テスト追加・修正" },
		{ value: "revert", name: "revert:   コミットの取り消し" },
		{ value: "remove", name: "remove:   ファイル削除" },
		{ value: "rename", name: "rename:   ファイル名変更" },
		{ value: "move", name: "move:     ファイル移動" },
		{ value: "disable", name: "disable:  機能を無効化" },
		{ value: "improve", name: "improve:  コードの改善" },
		{
			value: "chore",
			name: "chore:    ビルドなどで自動生成されたもの + その他"
		}
	],
	messages: {
		type: "コミットする変更タイプを選択してください:",
		scope:
			"変更の影響範囲を記入してください（例: コンポーネント名、ファイル名）:",
		customScope: "変更の影響範囲を記入してください:",
		subject: "変更内容を簡潔に記述してください:\n",
		body: "変更内容の詳細を記述してください（理由や背景など）:\n ",
		breaking: "破壊的変更がある場合、その内容を記述してください:\n",
		footer: "関連するIssue番号を記入してください（例: #123, #456）:\n",
		confirmCommit: "このコミット内容でよろしいですか?"
	},
	allowCustomScopes: true,
	allowBreakingChanges: ["feat", "fix", "refactor"],
	skipQuestions: ["breaking"],
	subjectLimit: 100,
	upperCaseSubject: false,
	footerPrefix: "ISSUES CLOSED:",
	breaklineChar: "|"
};
