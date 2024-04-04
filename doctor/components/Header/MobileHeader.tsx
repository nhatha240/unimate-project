import Image from "next/image";
import menu from "@/public/icon/menu-white.svg"
import user from "@/public/icon/user-white.svg"
import HeartLine from "@/public/icon/heart-line-white.svg"
import cartLine from "@/public/icon/cart-bag-line-white.svg"
import homeLine from "@/public/icon/home-line-white.svg"
import 'swiper/css/pagination';
export default function MobileHeader() {

    return (
        <>
            <div className="mobile-header">
                <div className={`mobile-banner`}>

                </div>
                <div className={`mobile-header`}></div>
            </div>

            <div
                className={`w-lvw h-20 px-5 py-6 bg-[#223680] justify-between items-center inline-flex fixed bottom-0 mobile-fixed`}>
                <a href="#">
                    <Image alt={`asdasdasd`} src={menu} width={32} height={32}></Image>
                </a>
                <a href="#"><Image alt={`menu`} src={user} width={32} height={32}></Image></a>
                <a href="#"><Image alt={`user`} src={HeartLine} width={32} height={32}></Image></a>
                <a href="#"><Image alt={`like`} src={cartLine} width={32} height={32}></Image></a>
                <a href="#"><Image src={homeLine} alt={`home`} width={32} height={32}></Image></a>
            </div>
        </>
    );
}