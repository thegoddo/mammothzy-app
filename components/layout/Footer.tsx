import Image from "next/image";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full max-w-[1440px] h-[394px] mx-auto flex flex-col gap-6 border-t border-gray-200 bg-white py-12 px-16">
      <div className="w-full max-w-[1216px] h-[192px] mx-auto flex flex-col gap-6 justify-center items-center">
        {/* TODO: Your other footer links, columns, and logos will go here! */}
        <Image src="/logo.png" alt="Mammothzy logo" width={250} height={96} />
        <span className="w-[1216px] h-[24px]">
          <p className="text-base font-normal leading-6 text-center">
            Marketplace for searching, filtering and instantly booking team
            activities
          </p>
        </span>
        <div className="flex gap-[24px] w-full h-[24px] justify-center">
          <Facebook className="w-[24px] h-[24px]" />
          <Instagram className="w-[24px] h-[24px]" />
          <Linkedin className="w-[24px] h-[24px]" />
          <Mail className="w-[24px] h-[24px]" />
        </div>
      </div>

      <div className="w-full max-w-[1216px] mx-auto flex justify-center">
        <div className="w-[139px] h-[26px] text-base font-medium leading-[160%] text-[#6B6B6B] text-center">
          Copyright © 2024
        </div>
      </div>
    </footer>
  );
}
