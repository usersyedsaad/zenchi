"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { logo, OpenButton, CloseButton } from "@/app/utils/index.js";
import Image from "next/image";
import { navList } from "../consts";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [underlineStyle, setUnderlineStyle] = useState<{
    left: number;
    width: number;
  } | null>(null);

  useEffect(() => {
    setTimeout(() => {
      const activeLink = document.querySelector(`[data-link="${pathname}"]`);
      if (activeLink) {
        const { offsetLeft, offsetWidth } = activeLink as HTMLElement;
        setUnderlineStyle({ left: offsetLeft, width: offsetWidth });
      } else {
        setUnderlineStyle(null);
      }
    }, 100); // Small delay ensures DOM is updated
  }, [pathname]);

  return (
    <nav className="relative max-w-full h-full w-full mx-auto flex items-center justify-between border-b-[2px] border-b-white/30 py-[3.5vh] z-50">
      {/* Logo */}
      <Link href="/">
        <Image
          src={logo}
          alt="logo"
          width={158}
          height={50}
          className="object-contain max-sm:w-[25vw]"
          priority
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="relative hidden lg:flex items-center gap-[56px]">
        {navList.map((item) => {
          const itemPath = `/${item.toLowerCase()}`;
          return (
            <Link
              key={item}
              data-link={itemPath}
              href={itemPath}
              className={`relative font-inter font-[300] text-[16px] leading-5 ${
                pathname === itemPath ? "text-white" : "text-gray-200"
              }`}
            >
              {item}
            </Link>
          );
        })}

        {/* Underline Animation */}
        {underlineStyle && (
          <span
            style={{
              transform: `translateX(${underlineStyle.left}px)`,
              width: underlineStyle.width,
            }}
            className="absolute bottom-[-8px] left-0 h-[2px] bg-yellow-300 transition-all duration-300 ease-in-out"
          />
        )}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden z-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <Image
          src={isOpen ? CloseButton : OpenButton}
          alt="menu button"
          width={32}
          height={32}
        />
      </button>

      {/* Mobile Navigation */}
      <div
        className={`absolute top-0 right-0 h-screen w-[70%] bg-black text-white flex flex-col items-center justify-center transition-transform duration-300 ${
          isOpen ? "translate-x-[-20%]" : "translate-x-[110%]"
        } lg:hidden`}
      >
        {navList.map((item) => (
          <Link
            key={item}
            href={`/${item.toLowerCase()}`}
            className="text-xl py-4"
            onClick={() => setIsOpen(false)} // Close menu on click
          >
            {item}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
