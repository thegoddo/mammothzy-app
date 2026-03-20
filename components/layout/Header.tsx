import Image from "next/image";

export default function Header() {
  return (
    <header className="w-360 h-24.25 flex flex-col gap-4 py-4.5 px-6 opacity-100 bg-white border-b border-[#E7E7E7] shadow-[0px_1px_2px_0px_#0000000D]">
      <div className="w-312 h-18.75 flex justify-between items-center">
        <div className="w-104.25 h-18.75 flex flex-col opacity-100">
          <Image
            alt="Mammothzy Logo"
            src="/logo.png"
            width={195}
            height={75}
            className="w-full h-full object-contain object-left"
          />
        </div>

        <div className="w-223.5 h-9 flex gap-1.5">
          <div className="flex gap-16  w-194 h-9">
            <div className="flex w-19.25 h-9 px-4 pt-1 pb-2 gap-2.5">
              <div className="w-11.25 h-6 text-base font-normal leading-6 text-[#6B6B6B]">
                Home
              </div>
            </div>
            <div className="flex w-19.25 h-9 px-4 pt-1 pb-2 gap-2.5">
              <div className="w-11.25 h-6 text-base font-normal leading-6 text-[#6B6B6B]">
                Home
              </div>
            </div>
            <div className="flex w-19.25 h-9 px-4 pt-1 pb-2 gap-2.5">
              <div className="w-11.25 h-6 text-base font-normal leading-6 text-[#6B6B6B]">
                Home
              </div>
            </div>
            <div className="flex w-19.25 h-9 px-4 pt-1 pb-2 gap-2.5">
              <div className="w-11.25 h-6 text-base font-normal leading-6 text-[#6B6B6B]">
                Home
              </div>
            </div>
            <div className="flex w-19.25 h-9 px-4 pt-1 pb-2 gap-2.5">
              <div className="w-11.25 h-6 text-base font-normal leading-6 text-[#6B6B6B]">
                Home
              </div>
            </div>
            <div className="flex w-19.25 h-9 px-4 pt-1 pb-2 gap-2.5">
              <div className="w-11.25 h-6 text-base font-normal leading-6 text-[#6B6B6B]">
                Home
              </div>
            </div>
            <div className="flex w-19.25 h-9 px-4 pt-1 pb-2 gap-2.5">
              <div className="w-11.25 h-6 text-base font-normal leading-6 text-[#6B6B6B]">
                Home
              </div>
            </div>
          </div>
          <div className="flex gap-2 w-23.5 h-9">
            
          </div>
        </div>
      </div>
    </header>
  );
}
