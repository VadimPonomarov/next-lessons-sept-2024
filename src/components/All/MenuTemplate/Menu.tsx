"use client";

import { MenubarTrigger } from "@radix-ui/react-menubar";
import { clsx } from "clsx";
import { FC } from "react";
import { Menubar, MenubarMenu } from "@/components/ui/menubar";
import Link from "next/link";
import { IProps } from "./menu.interfaces";
import { usePathname } from "next/navigation";
import css from "@/components/All/MenuTemplate/menu.module.css";

const Menu: FC<IProps> = ({ children, items, className }) => {
  const pathName = usePathname();

  return (
    <Menubar className={clsx(css.menu, className || "false")}>
      {items.map((item) => (
        <span key={item.path} className="border-b-2">
          <MenubarMenu>
            <Link
              href={item.path}
              className={(item.path === pathName && css.active) || "false"}
            >
              <MenubarTrigger>{item.label}</MenubarTrigger>
            </Link>
          </MenubarMenu>
        </span>
      ))}
      {children}
    </Menubar>
  );
};

export default Menu;
