import { ModeToggle } from "@/components/mode-toggle";

export default function Header() {
  return (
    // ヘッダーの位置がわかるように一時的に背景を設定
    <header className="flex fixed w-full items-center justify-between bg-gray-200 dark:bg-gray-800">
      <h1>Header</h1>
      <ModeToggle />
    </header>
  )
}