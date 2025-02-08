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
            <div className={"fixed top-[60px] w-full flex justify-center"}>
                <Link
                    href={{pathname: "/cars/create", query: {car: {}.toString()}}}>
                    <Button variant={"outline"}>+</Button>
                </Link>
            </div>
            <CarsClient initialData={initialData}/>
        </div>
    );
};

export default Cars;

export const metadata: Metadata = {
    title: "Cars",
    description: "...",
};
