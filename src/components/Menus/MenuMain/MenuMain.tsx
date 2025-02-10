import MenuComponent from "@/components/All/MenuComponent/MenuComponent.tsx";

export const MenuMain = () => {
    const menuItems = [
        {path: "/", label: "Home", disabled: false},
        {path: "/cars", label: "Cars"},
    ];

    return <MenuComponent items={menuItems} className={"fixed top-0 left-0"}></MenuComponent>;
};
