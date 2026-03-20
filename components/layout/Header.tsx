import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full max-w-[1440px] mx-auto h-[97px] flex flex-col gap-4 py-[18px] px-6 opacity-100 bg-white border-b border-[#E7E7E7] shadow-[0px_1px_2px_0px_#0000000D]">
      <div className="w-[1248px] h-[75px] flex justify-between items-center mx-auto">
        <div className="w-[417px] h-[75px] flex flex-col opacity-100">
          <Image
            alt="Mammothzy Logo"
            src="/logo.png"
            width={195}
            height={75}
            className="w-full h-full object-contain object-left"
          />
        </div>

        <div className="w-223.5 h-9 flex gap-6">
          {/* Fixed all nav links: w-19.25 -> w-[77px] */}
          {["Home", "Home", "Home", "Home", "Home", "Home", "Home"].map(
            (link, index) => (
              <div
                key={index}
                className="flex w-[77px] h-9 px-4 pt-1 pb-2 gap-[10px]"
              >
                <div className="w-full h-6 text-base font-normal leading-6 text-[#6B6B6B]">
                  {link}
                </div>
              </div>
            ),
          )}
        </div>

        <button className="flex items-center gap-2 h-9 cursor-pointer hover:opacity-80 transition-opacity outline-none">
          <div className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center border border-gray-200 shrink-0">
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

          <span className="text-base font-semibold leading-6 text-gray-900">
            Profile
          </span>

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
