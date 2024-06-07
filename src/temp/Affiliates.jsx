import React, { Fragment, useState } from 'react';
import Monet from './../assets/monet.png';
import { TbCopy } from 'react-icons/tb';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export const Affiliates = () => {
  const [CopyValue, setCopyValue] = useState(
    'https://rustyloot.gg/r/undefined'
  );
  const [Copied, setCopied] = useState(false);

  const onCopyText = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // value={CopyValue}
  // onChange={(e) => setCopyValue(e.target.value)}`

  return (
    <Fragment>
      <div className="flex pt-6">
        <button
          type="button"
          className="pt-1.5 pb-1.5 px-4 uppercase text-[#8c98a9] hover:bg-[#737999] hover:text-[#1b2235] rounded-sm transition ease-in-out duration-400"
        >
          Overview
        </button>
        <button
          type="button"
          className="pt-1.5 pb-1.5 px-4 uppercase text-[#8c98a9] hover:bg-[#737999] hover:text-[#1b2235] rounded-sm transition ease-in-out duration-400"
        >
          Users
        </button>
        <button
          type="button"
          className="pt-1.5 pb-1.5 px-4 uppercase text-[#8c98a9] hover:bg-[#737999] hover:text-[#1b2235] rounded-sm transition ease-in-out duration-400"
        >
          Tiers
        </button>
      </div>

      <div className="flex flex-grow">
        <div className="">
          <h3 className="text-left pt-6 font-base text-[#8C98A9]">
            Your affiliate code
          </h3>
          <input
            type="text"
            placeholder="Enter Code"
            className="border-none rounded p-2 bg-[#20273d] text-[#9ca3af] text-sm mt-1 w-[260px] h-[36px]"
          />
        </div>

        <div className="ml-8">
          <h3 className="text-left pt-6 font-base text-[#8C98A9]">
            Your affiliate link
          </h3>

          <div className="relative">
            <input
              type="url"
              value={'https://rustyloot.gg/r/undefined'}
              className="border-none rounded p-2 bg-[#20273d] text-[#9ca3af] text-sm mt-1 w-[407px] h-[36px]"
            />
            <CopyToClipboard text={CopyValue} onCopy={onCopyText}>
              <button className="absolute top-[15px] left-[380px]">
                <TbCopy />
              </button>
            </CopyToClipboard>
            {Copied && <p>Text copied to clipboard!</p>}
          </div>
        </div>
      </div>

      <button
        type="button"
        className="block border-none rounded-sm w-[208px] h-[40px] text-sm text-[#8c98a9] font-semibold bg-transparent uppercase hover:bg-[#ffc138] hover:text-[#161b2a] mt-4 transition-all duration-300"
      >
        Create Code
      </button>

      <div className="grid grid-col gap-4 mt-4">
        <div className="row-start-1 row-auto w-[233px] h-[80px] bg-[#22273e]">
          <div className="flex gap-3 pt-[18px] pl-[16px]">
            <img src={Monet} alt="Monet Image" />
            <p className="font-bold">0</p>
          </div>
          <p className="text-center text-sm font-normal text-[#8c98a9] mt-2">
            depositors
          </p>
        </div>
        <div className="row-start-1 row-auto w-[233px] h-[80px] bg-[#22273e]">
          <div className="flex gap-3 pt-[18px] pl-[16px]">
            <img src={Monet} alt="Monet Image" />
            <p className="font-bold">0</p>
          </div>
          <p className="text-center text-sm font-normal text-[#8c98a9] mt-2">
            depositors
          </p>
        </div>
        <div className="row-start-1 row-auto w-[233px] h-[80px] bg-[#22273e]">
          <div className="flex gap-3 pt-[18px] pl-[16px]">
            <img src={Monet} alt="Monet Image" />
            <p className="font-bold">0</p>
          </div>
          <p className="text-center text-sm font-normal text-[#8c98a9] mt-2">
            depositors
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center mt-4 w-[732px] h-[344px] bg-[#222939]">
        <div className="pb-4">
          <div className="border-solid border-2 border-[#ffc701] w-[40px] h-[40px] bg-[#161b2a] rounded-full"></div>
          <h3 className="font-bold text-sm">Unknown</h3>
          <p className="font-normal text-sm text-[#8c98a9] capitalize">
            0.00% Progress to next tier
          </p>
        </div>

        <div className="w-[480px] h-[16px] bg-[#22273e] rounded-full pb-4"></div>

        <div className="flex items-center">
          <div className="flex justify-between gap-3">
            <img src={Monet} alt="" />
            <p>0</p>
          </div>

          <p className="text-[#8c98a9] text-xl mt-2">Available earnings</p>

          <div className="flex justify-around gap-4">
            <button
              type="button"
              className="rounded-sm w-[208px] h-[40px] font-semibold text-center text-sm uppercase transition-all duration-300 bg-[#131620] border-solid border-2 border-[#ffc138] text-[#ffc701] hover:bg-[#ffc138] hover:text-[#161b2a]"
            >
              Claim earnings
            </button>
            <button
              type="button"
              className="rounded-sm w-[208px] h-[40px] font-semibold text-center text-sm uppercase transition-all duration-300 bg-[#131620] border-solid border-2 border-[#ffc138] text-[#ffc701] hover:bg-[#ffc138] hover:text-[#161b2a]"
            >
              Tier benefits
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Affiliates;
