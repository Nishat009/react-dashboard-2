import React from "react";
import Navbar from '../layouts/navbar'
import Sidebar from '../layouts/sidebar';
import Tab from '../Components/tab';
import {cardData} from '../data/currencyData';
import CurrencyCard from '../Components/CurrencyCard'
import ChartBar from '../Components/ChartBars';
function dashboard() {
    return ( 
        <div>
            <Navbar></Navbar>
        <div className="w-full flex justify-between pt-[56px]">
            <div className="h-screen sidebar-nav md:fixed z-[100] md:z-50  left-0 w-[270px] text-color-14 flex flex-col top-[80px]">
                <Sidebar/>
            </div>
            <div className="w-[84.5%] pt-10 pb-28 main-content flex flex-col flex-1 left-[280px] dark:bg-[#292929] border-l dark:border-[#474746] pl-5 border-color-DF h-screen absolute">
                
              <div>
                  <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 min-[1620px]:grid-cols-4 gap-[25px]'>
                      {/* {BalanceData.map((currency) => (
                        <BalanceCard key={currency.id} data={currency} />
                      ))} */}
                      {cardData.map((currency) => (
                        <CurrencyCard key={currency.id} data={currency} />
                      ))}
                      
                  </div>
                  <div className="xl:flex mt-[27px] gap-[25px]">
                    <div className="flex-auto bg-[#f8f6f6] dark:bg-[#373741] rounded-[15px]"> 
                      <ChartBar/>
                    </div>
                    <div className="bg-[#f8f6f6] dark:bg-[#373741] rounded-[15px] p-5 xl:w-[478px] relative mt-[25px] xl:mt-0">
                      <p className=' text-[#2c2c2c] text-[20px] font-semibold leading-[28px] dark:text-white'>Markets</p>
                        <Tab/>
                    </div>
                  </div>
          
                  <div className="flex-wrap min-[1728px]:flex-nowrap flex mt-[27px] gap-[25px]">
                    <div className="flex-auto bg-[#dfdfdf] dark:bg-[#23232c] rounded-[15px] py-[21px] px-[29px] w-[315px]"> 
                      <div className="flex justify-between items-center">
                        <p className="text-[#000000] dark:text-[#FFF] text-[20px] font-semibold leading-[28px]">
                          Assets
                        </p>
                        <div>
                          {/* <CustomDropdown buttonContent={buttonContent} menuItems={menuItems} /> */}
                        </div>
                      </div>
                      {/* <DonutChart /> */}
                    </div>
                    <div className="bg-[#dfdfdf] dark:bg-[#2c2c2c] rounded-[15px] py-[21px] px-[30px] w-full min-[1120px]:w-auto"> 
                        {/* <ConverterCard /> */}
                    </div>
                    <div className="bg-[#dfdfdf] dark:bg-[#2c2c2c] rounded-[15px] pt-5 pl-[39px] pr-[20px] pb-5 w-full min-[1601px]:w-auto">
                      <div className='flex justify-between items-center'>
                        <p className='text-[#2c2c2c] text-[20px] font-semibold leading-7 dark:text-white'>History</p>
                        <div className='mr-[24px]'>
                          {/* <Button /> */}
                        </div>
                      </div>
                      <div className='w-full min-[1601px]:w-[563px] h-[223px] overflow-auto custom-scrollbar mt-[18px] pr-[19px]'>
                        {/* <Table data={rateHistoryData} /> */}
                      </div>
                    </div>
                  </div>
              </div>
            </div>
        </div>
        </div>
        
     );
}

export default dashboard;