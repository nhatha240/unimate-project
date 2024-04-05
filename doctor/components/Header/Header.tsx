"use client"
import React from 'react';
import useMediaQuery from "@/lib/hooks/use-media-query";
import MobileHeader from "@/components/Header/MobileHeader";
import './_Header.scss';

export type HeaderProps = {}

export default function Header({}: HeaderProps) {
    const {isTablet, isDesktop} = useMediaQuery();
    return ((isTablet ||isDesktop)  ?
        <header className="w-dvw lg:inline-flex py-[30px] bg-white flex-col justify-start items-center gap-5 ">
            <div className="min-w-screen-lg min-w-md justify-between items-center inline-flex">
                <div className="w-[156px] justify-start items-center gap-2.5 flex">
                    <div className=" text-blue-800 text-2xl font-extrabold font-['Montserrat']">MEDSTORE</div>
                </div>
                <div
                    className="w-[600px] h-12 pr-5 bg-white rounded border border-neutral-200 justify-start items-center gap-6 flex">
                    <div
                        className=" h-12 px-5 py-2.5 bg-blue-500 flex-col justify-center items-start gap-2.5 inline-flex">
                        <div className="justify-center items-center gap-2 inline-flex">
                            <div className=" relative"></div>
                            <div className="text-white text-base font-normal font-['Josefin Sans'] leading-normal">Our
                                Thermomter
                            </div>
                        </div>
                    </div>
                    <div className="justify-start items-center gap-3 flex">
                        <div className=" relative"></div>
                        <div
                            className="text-neutral-400 text-base font-normal font-['Josefin Sans'] leading-normal">Search
                            your thermomter
                        </div>
                    </div>
                </div>
                <div className="justify-center items-center gap-5 flex">
                    <div className="justify-start items-center gap-2.5 flex">
                        <div className=" relative">
                            <div
                                className=" left-[1.50px] top-[1.50px] absolute rounded-full border border-neutral-900"></div>
                            <div
                                className=" left-[6.75px] top-[4.50px] absolute rounded-full border border-neutral-900"></div>
                        </div>
                        <div
                            className="text-neutral-900 text-base font-normal leading-normal">Signup / SignIn
                        </div>
                    </div>
                    <div className="justify-start items-center gap-2.5 flex">
                        <div className="relative rounded-[5px]"></div>
                        <div
                            className="text-neutral-900 text-base font-normal font-['Josefin Sans'] leading-normal">Wishlist</div>
                    </div>
                    <div className="justify-start items-center gap-2.5 flex">
                        <div className=" relative"></div>
                        <div className=" justify-start items-start gap-2.5 flex">
                            <div className="bg-amber-500 rounded-full"></div>
                            <div
                                className=" text-center text-white text-[9px] font-semibold font-['Montserrat'] leading-[13.50px]">10</div>
                        </div>
                        <div
                            className="text-center text-neutral-900 text-base font-normal font-['Josefin Sans'] leading-normal">Cart</div>
                    </div>
                </div>
            </div>
        </header> : <MobileHeader/>);
}
