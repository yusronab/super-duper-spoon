import { BsFacebook, BsInstagram, BsTelegram, BsTwitter, BsWhatsapp, BsYoutube } from "react-icons/bs";

const Footer = () => {
    return (
        <footer className=" px-[8%] py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-color-ternary gap-8">
            <div className="md:col-span-2">
                <h1 className="text-2xl">Risol</h1>
                <p>Mudahnya reservasi tanpa perlu pergi mengantri</p>
            </div>
            <div className="lg:text-right">
                <ul>
                    <li>Restaurant</li>
                    <li>Menu</li>
                </ul>
            </div>
            <div className="lg:text-right">
                <ul>
                    <li>Tentang Kami</li>
                    <li>Q & A</li>
                    <li>Ketentuan Privasi</li>
                </ul>
            </div>
            <p className="lg:col-span-2">&copy; 2023 Risol</p>
            <div className="lg:col-span-2 flex justify-between gap-x-4 text-xl">
                <BsInstagram />
                <BsFacebook />
                <BsTwitter />
                <BsYoutube />
                <BsTelegram />
                <BsWhatsapp />
            </div>
        </footer>
    );
};

export default Footer;