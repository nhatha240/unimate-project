import Image from "next/image";
import menu from "@/public/icon/menu-white.svg"
import user from "@/public/icon/user-white.svg"
import HeartLine from "@/public/icon/heart-line-white.svg"
import cartLine from "@/public/icon/cart-bag-line-white.svg"
import homeLine from "@/public/icon/home-line-white.svg"
import Shield from "@/public/icon/Shield-Star.svg"
import React from 'react';

export default function MobileHeader() {

    return (
        <>
            <div className="mobile-header">
                <div className={`mobile-banner`}>
                    <div
                        className="w-[430px] h-[30px] px-5 py-2.5 bg-blue-900 justify-start items-center gap-2.5 inline-flex">
                        <div className="justify-center items-center gap-1.5 flex">
                            <div className="w-3.5 h-3.5 relative"><Image alt={`menu`} src={Shield} width={32} height={32}/></div>
                            <div className="text-center">
                                <span className="text-orange-400 text-xs font-semibold font-['Josefin Sans']">100% </span>
                                <span className="text-orange-400 text-xs font-normal font-['Josefin Sans']">guaranteed</span>
                                <span className="text-white text-xs font-normal font-['Josefin Sans']"> medical certificates</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`mobile-header`}></div>
            </div>

            <div
                className={`w-dvw h-20 px-5 py-6 bg-[#223680] justify-between items-center inline-flex fixed bottom-0`}>
                <a href="#"><Image alt={`menu`} src={menu} width={32} height={32}></Image></a>
                <a href="#"><Image alt={`user`} src={user} width={32} height={32}></Image></a>
                <a href="#"><Image alt={`like`} src={HeartLine} width={32} height={32}></Image></a>
                <a href="#"><Image alt={`cart`} src={cartLine} width={32} height={32}></Image></a>
                <a href="#"><Image src={homeLine} alt={`home`} width={32} height={32}></Image></a>
            </div>
        </>
    );
}