"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

interface LinkButtonProps {
  text: string;
  href?: string;
  className?: string;
}

const LinkButton = ({ text, href, className }: LinkButtonProps) => {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href ? href : "/"}
      className={`  px-4 md:text-2xl font-bold text-lg
        hover:text-[var(--bg-red)]
        
      `}
    >
      <div
        className={`whitespace-nowrap  relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:bg-[var(--bg-red)] after:h-[2px] after:w-full 
            after:origin-center after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out ease-in hover:after:scale-x-100
            
          ${className}
          ${isActive ? "after:scale-x-100 " : ""}`}
      >
        {text}
      </div>
    </Link>
  );
};

export default LinkButton;
