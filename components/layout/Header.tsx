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
        <button className="flex items-center gap-2 h-9 cursor-pointhover:opacity-80 transition-opacity outline-none">
          {/* Avatar Wrapper */}
          <div className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center border border-gray-200 flex-shrink-0">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {/* Text */}
          <span className="text-base font-semibold leading-6 text-gray-900">
            Profile
          </span>

          {/* Chevron */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 text-gray-500 shrink-0"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      </div>
    </header>
  );
}
