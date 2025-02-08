import React, {FC} from "react";
import {Metadata} from "next";
import CarsClient from "@/app/cars/CarsClient";
import {apiCarsService} from "@/api/apiCars";
import Link from "next/link";
import {Button} from "@/components/ui/button";

import css from "./index.module.css";

const Cars: FC = async () => {
    const initialData = await apiCarsService.cars();
    return (
        <div className={css.main}>
            <span className={"fixed top-[60px] ml-[50%] translate-x-[-50%]"}>
                <Link
                    href={{pathname: "/cars/create", query: {car: {}.toString()}}}>
                    <Button className={"z-50"} variant={"outline"}>+</Button>
                </Link>
            </span>
            <CarsClient initialData={initialData}/>
        </div>
    );
};

export default Cars;

export const metadata: Metadata = {
    title: "Cars",
    description: "...",
};
