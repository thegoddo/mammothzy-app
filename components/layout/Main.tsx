import { Flag, MapPin } from "lucide-react";
export default function Main() {
  return (
    <main className="flex flex-col w-[1440px] min-h-[1137px] pt-8 pb-8 px-[112px] gap-[60px] bg-white border-b border-[#E7E7E7]">
      <div className="flex flex-col w-[1216px] h-[1073px] gap-[32px]">
        <div className="flex w-[1216px] h-[31px] gap-[10px]">
          <h2 className="font-sans font-bold text-[24px] leading-[130%] align-middle">
            Create new Activity
          </h2>
        </div>
        <div className="flex flex-row items-start gap-[32px]">
          <div className="sticky top-0 flex flex-col w-[212px] bg-white z-10">
            <button className="flex w-[212px] h-[48px] items-center px-7 py-2 gap-[10px] border-b border-[#E7E7E7] shadow-[0px_1px_2px_0px_#55494B0D]">
              <Flag className="w-6 h-6" />
              <span className="font-semibold text-base leading-6">
                Activity Details
              </span>
            </button>

            <button className="flex w-[212px] h-[48px] items-center px-7 py-2 gap-[10px] border-b border-[#E7E7E7] shadow-[0px_1px_2px_0px_#55494B0D]">
              <MapPin className="w-6 h-6" />
              <span className="font-semibold text-base leading-6">
                Location Details
              </span>
            </button>
          </div>
          <div className="border-r border-[#E7E7E7] h-[1010px] w-0" />
        </div>
      </div>
    </main>
  );
}
