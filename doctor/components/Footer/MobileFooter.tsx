export function MobileFooter() {
    return (
        <footer className="footer">
            <div className="footer-info">
                <p className="footer-info-name-shop">MEDSTORE</p>
                <div className="w-[390px] h-[72px] flex-col justify-start items-start gap-3 inline-flex">
                    <div className="justify-start items-center gap-2 inline-flex">
                        <div className="w-4 h-4 relative">
                            <div
                                className="w-1 h-1 left-[6px] top-[4.67px] absolute rounded-full border border-blue-500"></div>
                        </div>
                        <div className="text-neutral-700 text-sm font-normal font-['Josefin Sans']">2001 St.Susan ,
                            America
                        </div>
                    </div>
                    <div className="justify-start items-center gap-2 inline-flex">
                        <div className="w-4 h-4 relative"></div>
                        <div
                            className="text-neutral-700 text-sm font-normal font-['Josefin Sans']">Medicator@gmail.com</div>
                    </div>
                    <div className="justify-start items-center gap-2 inline-flex">
                        <div className="w-4 h-4 relative"></div>
                        <div className="text-neutral-700 text-sm font-normal font-['Josefin Sans']">(800) 236 - 2125
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}