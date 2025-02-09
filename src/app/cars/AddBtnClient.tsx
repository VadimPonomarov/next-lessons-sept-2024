"use client"
import React, {FC} from 'react';
import Link from "next/link";
import {Button} from "@/components/ui/button.tsx";

interface IProps {
    pathname: string,
    query: { [key: string]: string }
}

const AddBtnClient: FC<IProps> = ({pathname, query}) => {
    return (
        <Link
            href={{pathname, query}}>
            <Button className={"z-50"} variant={"outline"}>+</Button>
        </Link>
    );
};

export default AddBtnClient;