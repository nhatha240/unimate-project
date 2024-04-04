import React from 'react';
import './_Footer.scss';
import {MobileFooter} from "@/components/Footer/MobileFooter";
export type FooterProps = {}

export default function Footer({}: FooterProps) {
    return (<MobileFooter />);
}
