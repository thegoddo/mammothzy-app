import Image from "next/image";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full max-w-[1440px] h-[394px] mx-auto flex flex-col justify-between border-t border-gray-200 bg-white py-12 px-16">
      {/* Main Content Area */}
      <div className="w-full max-w-[1216px] mx-auto flex flex-col gap-8 justify-center items-center">
        {/* Logo */}
        <Image
          src="/logo.png"
          alt="Mammothzy logo"
          width={250}
          height={96}
          className="object-contain"
        />

        {/* Tagline - Removed the unnecessary span wrapper */}
        <p className="max-w-[800px] text-base font-normal leading-6 text-center text-[#6B6B6B]">
          Marketplace for searching, filtering and instantly booking team
          activities
        </p>

        {/* Social Icons - Added color and hover effects */}
        <div className="flex gap-6 justify-center text-[#6B6B6B]">
          <Facebook className="w-6 h-6 cursor-pointer hover:text-black transition-colors" />
          <Instagram className="w-6 h-6 cursor-pointer hover:text-black transition-colors" />
          <Linkedin className="w-6 h-6 cursor-pointer hover:text-black transition-colors" />
          <Mail className="w-6 h-6 cursor-pointer hover:text-black transition-colors" />
        </div>
      </div>

      {/* Copyright Row */}
      <div className="w-full max-w-[1216px] mx-auto flex justify-center border-t border-gray-100 pt-8">
        <div className="text-base font-medium leading-[160%] text-[#6B6B6B]">
          Copyright © 2024
        </div>
      </div>
    </footer>
  );
}
