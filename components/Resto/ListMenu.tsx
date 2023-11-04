import { listMenu } from "@/constants";
import CardMenu from "./CardMenu";

type MenuProps = typeof listMenu

const ListMenu = ({ menus }: { menus: MenuProps}) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[50px]">
            {menus.map((menu, i) => (
                <CardMenu item={menu} index={i} key={i} />
            ))}
        </div>
    );
};

export default ListMenu;