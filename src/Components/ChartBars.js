import {useEffect, useRef} from 'react'
import { Chart } from 'chart.js/auto';

export default function ChartBars() {
    const chartRef = useRef(null);
    useEffect(() => {
        let config = {
            type: 'bar',
            data: {
                labels: [
                    '$23,000',
                    '$13,000',
                    '$25,000',
                    '$63,000',
                    '$23,000',
                    '$44,000',
                    '$21,000',
                ],
                datasets: [
                    {
                        label: new Date().getFullYear(),
                        backgroundColor: '#032658',
                        borderColor: '#032658',
                        data: [30, 78, 56, 34, 100, 45, 13],
                        fill: false,
                        barThickness: 8,
                    },
                    {
                        label: new Date().getFullYear() - 1,
                        fill: false,
                        backgroundColor: '#4D91FF',
                        borderColor: '#4D91FF',
                        data: [27, 68, 86, 74, 10, 4, 87],
                        barThickness: 8,
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                title: {
                    display: false,
                    text: 'Orders Chart',
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true,
                },
                legend: {
                   
                    align: 'end',
                    position: 'bottom',
                },
                scales: {
                    xAxes: [
                        {
                            display: false,
                            scaleLabel: {
                                display: true,
                                labelString: 'Month',
                            },
                            gridLines: {
                                borderDash: [2],
                                borderDashOffset: [2],
                                color: '#4D91FF',
                                zeroLineColor: '#4D91FF',
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
                        },
                    ],
                    yAxes: [
                        {
                            display: true,
                            scaleLabel: {
                                display: false,
                                labelString: 'Value',
                            },
                            gridLines: {
                                borderDash: [2],
                                drawBorder: false,
                                borderDashOffset: [2],
                                color: 'rgba(33, 37, 41, 0.2)',
                                zeroLineColor: 'rgba(33, 37, 41, 0.15)',
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
                        },
                    ],
                },
            },
        };
        const ctx = document.getElementById('bar-chart').getContext('2d');
    
        // Check if there's an existing chart instance, destroy it before creating a new one
        if (chartRef.current !== null) {
          chartRef.current.destroy();
        }
    
        // Create a new chart instance
        chartRef.current = new Chart(ctx, config);
    
        // Clean up function to destroy the chart when the component unmounts
        return () => {
          if (chartRef.current !== null) {
            chartRef.current.destroy();
          }
        };
      }, []);
    
   
  return (
    <div className='py-[35px] px-[43px]'>
            <div className='flex flex-col min-[1601px]:flex-row justify-between items-center'>
                <div className='flex justify-between items-center w-full sm:w-[334px] bg-[#626d7d0c] p-5 rounded-[12px]'>
                    <div>
                        <p className="uppercase text-black dark:text-white text-[20px] font-semibold leading-[28px]">
                            BTCUSDT
                        </p>
                        <p className="text-[#626D7D] text-[20px] font-semibold leading-[28px]">Bitcoin</p>
                    </div>
                    <div className='flex justify-between items-center gap-[15px]'>
                        <div>
                            <p className="uppercase text-black dark:text-white text-[13px] font-medium leading-[22px]">
                                $23,738
                            </p>
                            <span className="rounded-[60px] px-2 text-[11px] leading-[22px] font-semibold word-break text-[#219653] bg-[#2196543c]">+14.67%</span>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
                <div className='flex gap-[7px] mt-3 3xl:mt-0'>
                    <span className='text-[#0060FF] dark:bg-[#131313] bg-[#b2daf8bb] text-[10px] font-semibold leading-[22px] px-3 py-1 rounded'>
                        1H
                    </span>
                    <span className='text-black dark:text-white bg-[#f8f8f8] dark:bg-[#13131367] text-[10px] font-semibold leading-[22px] px-3 py-1 rounded'>
                        3H
                    </span>
                    <span className='text-black dark:text-white bg-[#f8f8f8] dark:bg-[#13131367] text-[10px] font-semibold leading-[22px] px-3 py-1 rounded'>
                        5H
                    </span>
                    <span className='text-black dark:text-white bg-[#f8f8f8] dark:bg-[#13131367] text-[10px] font-semibold leading-[22px] px-3 py-1 rounded'>
                        1D
                    </span>
                    <span className='text-black dark:text-white bg-[#f8f8f8] dark:bg-[#13131367] text-[10px] font-semibold leading-[22px] px-3 py-1 rounded'>
                        1W
                    </span>
                    <span className='text-black dark:text-white bg-[#f8f8f8] dark:bg-[#13131367] text-[10px] font-semibold leading-[22px] px-3 py-1 rounded'>
                        1M
                    </span>
                </div>
            </div>
            <div>
                <div className="relative mt-5">
                    <canvas id="bar-chart"></canvas>
                </div>
            </div>
        </div>
  )
}
