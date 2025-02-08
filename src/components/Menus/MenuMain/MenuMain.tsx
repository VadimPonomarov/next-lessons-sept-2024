import Menu from "@/components/All/MenuTemplate/Menu";

export const MenuMain = () => {
  const menuItems = [
    { path: "/", label: "Home", disabled: false },
    { path: "/cars", label: "Cars" },
  ];

  return <Menu items={menuItems} className={"fixed top-0 left-0"}></Menu>;
};
