import MainNav from "./Main-nav";
import SubNav from "./Sub-nav";

export default function Header() {
  return (
    <header className="flex">
      <MainNav />
      <SubNav />
    </header>
  );
}
