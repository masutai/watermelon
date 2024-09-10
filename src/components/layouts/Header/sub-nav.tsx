"use client";

import { Icons } from "@/components/icons";
import { ModeToggle } from "@/components/mode-toggle";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function SubNav() {
	return (
		<div className="flex items-center gap-2">
			<Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
				<div className="hover:bg-accent hover:text-accent-foreground h-8 w-8 px-0">
					<Icons.gitHub className="h-7 w-7" />
					<span className="sr-only">GitHub</span>
				</div>
			</Link>
			<ModeToggle />
		</div>
	);
}
