"use client"
import MenuComponent from "@/components/All/MenuComponent/MenuComponent.tsx";
import {signOut, useSession} from "next-auth/react";
import {IMenuItem} from "@/components/All/MenuComponent/menu.interfaces.ts";

export const MenuMain = () => {
    const session = useSession()
    const handleSignOut = () => {
        signOut({callbackUrl: '/'});
    };
    const menuItems: IMenuItem[] = [
        {path: "/", label: "Home", disabled: false},
        {path: "/cars", label: "Cars"},
        {path: "/api/auth/signin", label: "Login", disabled: session.status === "authenticated"},
        {
            path: "/api/auth/signout",
            label: "Logout",
            disabled: session.status !== "authenticated",
            cb: handleSignOut
        },
    ];

    return <MenuComponent items={menuItems} className={"fixed top-0 left-0"}></MenuComponent>;
};
