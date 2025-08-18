"use client"

import Link from "next/link"
import { Briefcase, FileText } from "lucide-react"

export default function Menu() {
	const items = [
		{ href: "/myworks", label: "My Work", Icon: Briefcase },
		{ href: "/articles", label: "Articles", Icon: FileText },
	]

	return (
		<header className="fixed top-0 z-50  bg-black/30 backdrop-blur supports-[backdrop-filter]:bg-black/40 right-0 w-full">
					<nav className="container mx-auto max-w-6xl px-4 ">
						<div className="flex h-12 w-full items-center justify-end gap-6 mx-auto pr-6">
					{items.map(({ href, label, Icon }) => (
						<Link
							key={href}
							href={href}
							className="inline-flex items-center gap-2 text-sm text-gray-200 hover:text-white transition-colors"
						>
							<Icon size={18} className="text-gray-300" />
							<span>{label}</span>
						</Link>
					))}
				</div>
			</nav>
		</header>
	)
}

