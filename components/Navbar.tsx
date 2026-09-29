"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = [
	{ label: "SPACE", href: "/#what" },
	{ label: "COST", href: "/#cost" },
	{ label: "WORK", href: "/work" },
	{ label: "ABOUT", href: "/about" },
];

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	/* Close menu on route change / resize to desktop */
	useEffect(() => {
		const onResize = () => {
			if (window.innerWidth >= 768) setOpen(false);
		};
		window.addEventListener("resize", onResize);
		return () => window.removeEventListener("resize", onResize);
	}, []);

	/* Subtle shadow when scrolled */
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 10);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	/* Lock body scroll when menu open */
	useEffect(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);

	const close = () => setOpen(false);

	return (
		<>
			{/* ── Fixed top bar ───────────────────────────────── */}
			<header
				className={`fixed top-0 left-0 right-0 z-50 bg-void/95 backdrop-blur-sm border-b border-pearl/[0.06] transition-shadow duration-300 ${
					scrolled ? "shadow-[0_2px_24px_rgba(0,0,0,0.4)]" : ""
				}`}
			>
				<div className="mx-auto flex h-14 max-w-[1600px] items-center justify-between gap-6 px-4 sm:px-6 md:px-10 lg:px-12">
					{/* Logo */}
					<Link
						href="/"
						onClick={close}
						className="font-syne font-black text-sm sm:text-base tracking-tighter text-pearl hover:text-spark transition-colors duration-200 z-10"
					>
						TAAS®
					</Link>

					{/* Desktop nav */}
					<nav className="hidden md:flex items-center gap-8 lg:gap-10">
						{NAV_LINKS.map((l) => (
							<Link
								key={l.label}
								href={l.href}
								className="font-dm text-[10px] tracking-[0.18em] uppercase text-pearl/40 hover:text-pearl transition-colors duration-200"
							>
								{l.label}
							</Link>
						))}
					</nav>

					{/* Desktop CTA */}
					<div className="hidden md:flex items-center gap-3">
						<Link
							href="/challenge"
							className="inline-flex bg-spark text-void font-dm font-bold text-[10px] tracking-[0.22em] uppercase px-5 py-2.5 hover:bg-pearl transition-colors duration-300"
						>
							TAKE CHALLENGE →
						</Link>
					</div>

					{/* Hamburger — mobile only */}
					<button
						onClick={() => setOpen((o) => !o)}
						aria-label={open ? "Close menu" : "Open menu"}
						className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] z-10 relative"
					>
						<span
							className={`block w-5 h-[1.5px] bg-pearl transition-all duration-300 origin-center ${
								open ? "rotate-45 translate-y-[6.5px]" : ""
							}`}
						/>
						<span
							className={`block w-5 h-[1.5px] bg-pearl transition-all duration-300 ${
								open ? "opacity-0 scale-x-0" : ""
							}`}
						/>
						<span
							className={`block w-5 h-[1.5px] bg-pearl transition-all duration-300 origin-center ${
								open ? "-rotate-45 -translate-y-[6.5px]" : ""
							}`}
						/>
					</button>
				</div>
			</header>

			{/* ── Mobile fullscreen menu ───────────────────────── */}
			<div
				className={`md:hidden fixed inset-0 z-40 bg-void flex flex-col transition-all duration-500 ease-in-out ${
					open
						? "opacity-100 pointer-events-auto"
						: "opacity-0 pointer-events-none"
				}`}
			>
				{/* Top spacer to clear header */}
				<div className="h-14" />

				{/* Links */}
				<nav className="flex-1 flex flex-col justify-center px-6 gap-1">
					{NAV_LINKS.map((l, i) => (
						<Link
							key={l.label}
							href={l.href}
							onClick={close}
							className="font-syne font-black text-[11vw] xs:text-[10vw] leading-tight tracking-[-0.03em] uppercase text-pearl/20 hover:text-pearl transition-colors duration-200"
							style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
						>
							{l.label}
						</Link>
					))}
				</nav>

				{/* Bottom CTA inside mobile menu */}
				<div className="px-6 pb-10 flex flex-col gap-4">
					<Link
						href="/challenge"
						onClick={close}
						className="w-full bg-spark text-void font-dm font-bold text-[11px] tracking-[0.25em] uppercase py-4 text-center hover:bg-pearl transition-colors duration-300"
					>
						TAKE CHALLENGE →
					</Link>
					<p className="font-dm text-[9px] tracking-[0.2em] uppercase text-pearl/20 text-center">
						TAAS® · Mumbai
					</p>
				</div>
			</div>
		</>
	);
}
