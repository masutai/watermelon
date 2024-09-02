"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-4 flex items-center space-x-2 lg:mr-6">
        <span className="hidden font-bold lg:inline-block">Home</span>
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        <Link
          href="/game"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/game" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Game
        </Link>
        <Link
          href="/books"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/books" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Books
        </Link>
      </nav>
    </div>
  );
}
