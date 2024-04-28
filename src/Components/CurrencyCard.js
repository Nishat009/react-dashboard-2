import React from "react";

function CurrencyCard({data}){

    const textColor = data.pnlDaily.value.startsWith('-')
    ? 'text-[#EB5757]'
    : 'text-[#219653]';

    const bgColor = data.pnlDaily.percentage.startsWith('-')
    ? 'text-[#EB5757] bg-[#eb575738]'
    : 'text-[#219653] bg-[#2196543c]';
return (
 <div className="rounded-xl p-5 bg-[#f1efef]">
    <div className="flex justify-between">
        <div className="flex justify-start items-center gap-4">
            <div className="w-8 h-8 rounded-xl">
                <img className="w-full max-h-8 object-contain" src={data.icon} alt="" />
            </div>
            <div className="flex flex-col">
                <p className="text-[#000] dark:text-white text-[16px] leading-[28px] font-semibold word-break">{data.name}</p>
                <p className="text-[#626D7D] text-[13px] leading-[22px] font-medium word-break">{data.description}</p>
            </div>
        </div>
        <div className="relative">
            <div className="absolute right-2 top-[28px] w-[133px] h-[56px]">
              <img
                className="object-cover w-full max-h-[56px]"
                src={data.vector}
                alt="img"
              />
            </div>
          </div>
    </div>
    <div className="mt-[18px]">
          <p className="text-[#000] dark:text-white text-[20px] leading-[22px] font-semibold word-break">
            {data.price}
          </p>
        </div>
        <div className="flex justify-between items-center mt-[19px]">
          <p className="text-[#626D7D] text-[13px] leading-[22px] font-medium word-break">
            PNL Daily
          </p>
          <p className={`text-[13px] leading-[22px] font-semibold word-break ${textColor}`}>
                {data.pnlDaily.value}
          </p>
          <span className={`rounded-[60px] px-2 text-[11px] leading-[22px] font-semibold word-break ${bgColor}`}>
            {data.pnlDaily.percentage}
          </span>
        </div>
 </div>
);
}

export default CurrencyCard;