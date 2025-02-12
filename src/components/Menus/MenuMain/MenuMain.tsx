"use client"
import MenuComponent from "@/components/All/MenuComponent/MenuComponent.tsx";
import {useSession} from "next-auth/react";

export const MenuMain = () => {
    const session = useSession()
    const menuItems = [
        {path: "/", label: "Home", disabled: false},
        {path: "/cars", label: "Cars"},
        {path: "/api/auth/signin", label: "Login", disabled: session.status === "authenticated"},
        {path: "/api/auth/signout", label: "Logout", disabled: session.status !== "authenticated"},
        {path: "/profile", label: "Profile", disabled: session.status !== "authenticated"},
    ];

    return <MenuComponent items={menuItems} className={"fixed top-0 left-0"}></MenuComponent>;
};
