import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function MainNav() {
  return (
    <nav>
      <Link href={"/"}>
        <Button>ホーム画面に戻る</Button>
      </Link>
    </nav>
  );
}
