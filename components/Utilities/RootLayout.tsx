import Footer from "./Footer";
import Navbar from "./Navbar";

const RootLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <div>
            <Navbar />
            <div className="px-[8%]">{children}</div>
            <Footer />
        </div>
    );
};

export default RootLayout;