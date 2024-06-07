import { Fragment } from "react";
import Coins from "./../icons/coins.svg";
import Bg from "./../icons/bg.svg"

export const Affiliates = () => {
    return <Fragment>
        <div className="flex gap-10 pb-6">
              <button className="text-[#8C98A9] font-semibold px-3 py-2 rounded hover:bg-[#AAA8AC] hover:text-[#1B2235] ease-linear duration-200 ml-[-10px]">
                OVERVIEW
              </button>
              <button className="text-[#8C98A9] font-semibold px-3 py-2 rounded hover:bg-[#AAA8AC] hover:text-[#1B2235] ease-linear duration-200">
                USERS
              </button>
              <button className="text-[#8C98A9] font-semibold px-3 py-2 rounded hover:bg-[#AAA8AC] hover:text-[#1B2235] ease-linear duration-200">
                TIERS
              </button>
            </div>
            <div className="flex gap-8">
              <div>
                <p className="ml-[10px] text-[#8C98A9] pb-2">
                  Your affilate code
                </p>
                <input
                  type="text"
                  placeholder="ENTER CODE"
                  className="bg-[#20273D] w-[260px] text-sm h-9 p-3 font-semibold rounded-sm"
                />
              </div>
              <div className="pb-5">
                <p className="ml-[10px] text-[#8C98A9] pb-2">
                  Your affilate link
                </p>
                <input
                  type="text"
                  placeholder="https://rustyloot.gg/r/undefined"
                  className="bg-[#20273D] w-[460px] text-sm h-9 p-3 font-semibold rounded-sm"
                  disabled
                />
              </div>
            </div>

            <button className="uppercase bg-[#AAA8AC] text-[#1B2235] font-semibold hover:bg-[#ffb508] hover:text-[text-[#161B2A]] ease-linear duration-150 py-2 px-12 rounded-sm">
              Create code
            </button>

            <div className="flex pt-8 gap-5 ">
              <div className="h-20 w-[233px] border 1px border-gray-700 flex items-center gap-2 p-3 bg-[#666E9733] rounded">
                <img src={Coins} alt="" className="w-9 mt-[-30px]" />
                <p className="font-bold mt-[-30px]">0</p>
                <p className="text-sm text-[#8C98A9] mt-7">depositors</p>
              </div>
              <div className="h-20 w-[233px] border 1px border-gray-700 flex items-center gap-2 p-3 bg-[#666E9733] rounded">
                <img src={Coins} alt="" className="w-9 mt-[-30px]" />
                <p className="font-bold mt-[-30px]">0</p>
                <p className="text-sm text-[#8C98A9] mt-7">total deposited</p>
              </div>
              <div className="h-20 w-[233px] border 1px border-gray-700 flex items-center gap-2 p-3 bg-[#666E9733] rounded">
                <img src={Coins} alt="" className="w-9 mt-[-30px]" />
                <p className="font-bold mt-[-30px]">0</p>
                <p className="text-sm text-[#8C98A9] mt-7">total earned</p>
              </div>
            </div>
              <div className="bg-[#666E9733] w-[732px] h-[330px] mt-10 rounded flex items-center pt-7 flex-col">
                <div className="flex justify-center gap-4">
                    <div className="bg-[#161B2A] w-12 h-12 rounded-[50%] border 2px border-[#FFC139]"></div>
                    <div>
                    <p className="font-bold">Unknown</p>
                    <p className="text-sm text-[#8C98A9]">0.00% Progress To TierNext</p>
                    </div>
                </div>
                <div className="bg-[#5d636b] w-[500px] h-4 rounded-[13px] mt-14">
                </div>
                <div className="flex mt-8 gap-4 text-xl">
                <img src={Coins} alt="" />
                <p className="font-bold">0</p>
                </div>
                <p className="text-[#8C98A9] text-sm">Available Earnings</p>

                <div className="flex gap-4 pt-6" >
                    <button className="w-[250px] h-10 border 2px border-[#ffbe3b] bg-[#161B2A] text-[#ffbe3b] hover:bg-[#ffb508] hover:text-[black] ease-linear duration-200  rounded font-semibold">CLAIM EARNINGS</button>
                    <button className="w-[250px] h-10 border 2px border-[#ffbe3b] bg-[#161B2A] text-[#ffbe3b] hover:bg-[#ffb508] hover:text-[black] ease-linear duration-200  rounded font-semibold">TIER BENEFITS</button>
                </div>
              </div>
    </Fragment>
}