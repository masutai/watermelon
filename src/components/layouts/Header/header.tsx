import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import SubNav from "./sub-nav";

export default function Header() {
	return (
		// ヘッダーの位置がわかるように一時的に背景を設定
		<header className="flex fixed w-full items-center justify-between bg-gray-200 dark:bg-gray-800">
			<MainNav />
			<MobileNav />
			<SubNav />
		</header>
	);
}
