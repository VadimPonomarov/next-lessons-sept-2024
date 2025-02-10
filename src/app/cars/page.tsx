import React, {FC} from "react";
import {Metadata} from "next";
import CarsClient from "@/app/cars/CarsClient";
import {apiCarsService} from "@/api/apiCars";

import css from "./index.module.css";
import AddBtnClient from "@/app/cars/AddBtnClient.tsx";
import {MagicBackButton} from "@/components/ui/magicBackButton.tsx";

const Cars: FC = async () => {
    const initialData = await apiCarsService.cars();
    return (
        <div className={css.main}>
            <span className={"fixed top-[50px] left-2 z-50"}><MagicBackButton variant={"link"}
                                                                              backLink="/"/></span>
            <span className={"fixed top-[50px] left-[50%] m-0 p-0 translate-x-[-50%]"}>
                <AddBtnClient className={"z-40"} variant={"ghost"} pathname={"/cars/create"}
                              query={{car: {}.toString()}}/>
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
