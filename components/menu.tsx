"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import type React from "react"
import { Briefcase, FileText } from "lucide-react"
import { usePreloader } from "./preloader-provider"

export default function Menu() {
	const router = useRouter()
	const { trigger } = usePreloader()
	const items = [
		{ href: "/myworks", label: "My Work", Icon: Briefcase },
		{ href: "/articles", label: "Articles", Icon: FileText },
	]

	return (
		<header className="fixed top-0 z-50  bg-black/30 backdrop-blur supports-[backdrop-filter]:bg-black/40 right-0 w-full">
					<nav className="container mx-auto max-w-6xl px-4 ">
						<div className="flex h-12 w-full items-center justify-end gap-6 mx-auto pr-6">
								  {items.map(({ href, label, Icon }) => {
												const onClick = (e: React.MouseEvent) => {
										e.preventDefault()
										// Fire preloader, then navigate after the entrance delay
									  trigger({ imageSrc: "/shadow_in_view.png", durationMs: 2400, title: label })
									  setTimeout(() => router.push(href), 900)
									}
									return (
										<Link
											key={href}
											href={href}
											onClick={onClick}
											className="inline-flex items-center gap-2 text-sm text-gray-200 hover:text-white transition-colors"
										>
											<Icon size={18} className="text-gray-300" />
											<span>{label}</span>
										</Link>
									)
								})}
				</div>
			</nav>
		</header>
	)
}

