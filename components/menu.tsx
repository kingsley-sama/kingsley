"use client"
import { Box, Circle, Square, Triangle, X } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import type React from "react"
import { Briefcase, FileText } from "lucide-react"
import { usePreloader } from "./preloader-provider"
import TextScramble from "./scramble_text"

export default function Menu() {
	const router = useRouter()
	const { trigger } = usePreloader()
	const items = [
		{ href: "/myworks", label: "My Works", Icon: Briefcase },
		/* { href: "/articles", label: "Articles", Icon: FileText }, */
	]

	return (
		<header className="fixed top-0 z-50  bg-black backdrop-blur supports-[backdrop-filter]:bg-black/70 right-0 w-full">
					<nav className="container px-1 mx-auto sm:max-w-8xl sm:px-4 flex items-end justify-between">

						{/* Header with traffic lights */}
						<div className="flex flex-1 h-12 w-full items-center space-x-1/2">
							<div className="flex items-center justify-center w-4 h-4 md:w-5 md:h-5" ><Square className="text-blue-200 font-600"/></div>
							<div className="flex items-center justify-center w-4 h-4 md:w-5 md:h-5 " ><X className="font-600 text-green-200"/></div>
							<div className="flex items-center justify-center w-4 h-4 md:w-5 md:h-5" ><Circle className="text-purple-200"/></div> 
							<TextScramble text="KINGSLEY" />
						</div>
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

