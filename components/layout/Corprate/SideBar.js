import React from "react";
import MenuItem from "../../input/MenuItem";
import { useRouter } from "next/router";

export default function SideBar() {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col px-4 w-[290px] h-screen sticky bg-white left-0 top-0 z-20 drop-shadow-md justify-between items-center pt-20 pb-4">
        <img className="mb-20" src="/img/logo.jpg" width={86.75} height={93} />
        <div className="h-full w-full ">
          <MenuItem
            active={router.pathname == "/corprate"}
            href="/corprate"
            gal={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 m-2 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
                />
              </svg>
            }
          >
            Хянах самбар
          </MenuItem>
          <MenuItem
            active={
              router.pathname == "/corprate/coupon" ||
              router.pathname == "/corprate/couponD"
            }
            href={
              router.pathname == "/corprate/coupon" ? "" : "/corprate/coupon"
            }
            gal={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 m-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                />
              </svg>
            }
          >
            Купонууд
          </MenuItem>
        </div>
        <MenuItem
          href="/login"
          gal={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 m-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
              />
            </svg>
          }
        >
          Logout
        </MenuItem>
      </div>
    </>
  );
}
