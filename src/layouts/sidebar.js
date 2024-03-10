import React from "react";
import { NavLink } from "react-router-dom";
import CompanyLogo from "../images/artifism-1 - Copy.svg";
import LogoutIcon from "../images/logout.svg";
import { dashboardToSettingsData, helpData } from "../fakeData/dashboardData";


export default function Sidebar() {

  return (
    <>
      <div className="">
        <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
          <div className="flex flex-col">
            <ul className="flex-col min-w-full flex gap-4 list-none mt-5">
              {dashboardToSettingsData.map(({ id, icon, inactiveIcon, link, text, exact }) => (
                  <li key={id} className="rounded-lg">
                    <NavLink
                      to={link}
                      exact={`${exact}`}
                      className={({ isActive }) => `
                      flex items-center gap-[14px] text-[18px] leading-[21px] font-medium px-[29px] py-[14px] rounded-lg
                      ${isActive ? "bg-[#D5E6FB] dark:bg-[#062141] text-[#0060FF] dark:text-white" : "text-[#000000] dark:text-white"}
                    `}
                    >
                      {({ isActive }) => (
                        <>
                          <img
                            src={isActive ? icon : inactiveIcon}
                            alt={isActive ? "Active" : "Inactive"}
                          />
                          <span>{text}</span>
                        </>
                      )}
                    </NavLink>
                  </li>
                )
              )}

              <div className="my-[32px] flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="175"
                  height="2"
                  viewBox="0 0 175 2"
                  fill="none"
                >
                  <path
                    d="M0 1H175"
                    stroke="#E8EAEC"
                    strokeOpacity="0.78"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>

              {helpData.map(({ id, icon, inactiveIcon, link, text, exact }) => (
                <li key={id} className="rounded-lg mb-4">
                  <NavLink
                    to={link}
                    exact={`${exact}`}
                    className={({ isActive }) => `
                    flex items-center gap-[14px] text-[18px] leading-[21px] font-medium px-[29px] py-[14px] rounded-lg
                    ${isActive ? "bg-[#D5E6FB] dark:bg-[#062141] text-[#0060FF] dark:text-white" : "text-[#000000] dark:text-white"}
                  `}
                  >
                    {({ isActive }) => (
                      <>
                        <img
                          src={isActive ? icon : inactiveIcon}
                          alt={isActive ? "Active" : "Inactive"}
                        />
                        <span>{text}</span>
                      </>
                    )}
                  </NavLink>
                </li>
              ))}

              <li className="rounded-lg mb-4 hover:text-[#0060FF]">
                <button className="flex items-center gap-[14px] text-[18px] leading-[21px] font-medium px-[29px] py-[14px] rounded-lg">
                  <>
                    <img src={LogoutIcon} alt="img" />
                    <span className=" dark:text-white">Log Out</span>
                  </>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
