"use client"
import React from 'react';
import useMediaQuery from "@/lib/hooks/use-media-query";
import MobileHeader from "@/components/Header/MobileHeader";
import './_Header.scss';

export type HeaderProps = {}

export default function Header({}: HeaderProps) {
    const {isDesktop} = useMediaQuery();
    return (isDesktop ? <div className="desktop" />: <MobileHeader/> );
}
