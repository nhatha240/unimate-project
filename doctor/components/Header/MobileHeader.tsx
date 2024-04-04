import Image from "next/image";
import menu from "@/public/icon/menu-white.svg"
import user from "@/public/icon/user-white.svg"
import HeartLine from "@/public/icon/heart-line-white.svg"
import cartLine from "@/public/icon/cart-bag-line-white.svg"
import homeLine from "@/public/icon/home-line-white.svg"
import Shield from "@/public/icon/Shield-Star.svg"
import shopLineBlack from "@/public/icon/shop-line-black.svg"
import search from "@/public/icon/tiem-kiem.svg"
import React from 'react';
import {black} from "next/dist/lib/picocolors";

export default function MobileHeader() {

    return (
        <>
            <div className="mobile-header">
                    <div className="w-dvw h-[30px] px-5 py-2.5 bg-blue-900 justify-start items-center gap-2.5 inline-flex mobile-banner">
                        <div className="justify-center items-center gap-1.5 flex">
                            <div className="w-3.5 h-3.5 relative"><Image alt={`menu`} src={Shield} width={32} height={32}/></div>
                            <div className="text-center">
                                <span className="ratio-banner">100% </span>
                                <span className="guaranteed">guaranteed</span>
                                <span className="certificates"> medical certificates</span>
                            </div>
                        </div>
                </div>
                <div className={`mobile-header`}>
                    <div className="w-[430px] h-32 py-6 flex-col justify-start items-center gap-3 inline-flex">
                        <div className="w-[430px] px-5 justify-between items-center inline-flex">
                            <div className="text-blue-500 text-base font-extrabold font-['Montserrat']">MEDSTORE</div>
                            <div className="justify-start items-center gap-6 flex">
                                <div className="justify-end items-center gap-6 flex">
                                    <Image src={shopLineBlack} alt={'shop'} width={24} height={24} className="relative"></Image>
                                </div>
                            </div>
                        </div>
                        <div
                            className="w-[390px] pl-2.5 pr-2.5 h-11 bg-white rounded border border-neutral-200 justify-between items-center inline-flex">
                            <input type="text"  className="w-full h-full text-neutral-400 text-sm font-normal font-['Josefin Sans'] leading-[14px] focus:outline-none " placeholder={'Search for products, brands and more'}>
                            </input>
                            <div><Image src={search} alt={'shop'} width={16} height={16} className="relative" /></div>
                        </div>
                    </div>
                </div>
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