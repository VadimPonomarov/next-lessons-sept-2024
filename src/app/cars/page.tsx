import React, {FC} from "react";
import {Metadata} from "next";
import CarsClient from "@/app/cars/CarsClient";
import {apiCarsService} from "@/api/apiCars";

import css from "./index.module.css";
import AddBtnClient from "@/app/cars/AddBtnClient.tsx";

const Cars: FC = async () => {
    const initialData = await apiCarsService.cars();
    return (
        <div className={css.main}>
            <span className={"fixed top-[60px] ml-[50%] translate-x-[-50%]"}>
                <AddBtnClient pathname={"/cars/create"} query={{car: {}.toString()}}/>
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
