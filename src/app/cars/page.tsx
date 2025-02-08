import React, {FC} from "react";
import {Metadata} from "next";
import CarsClient from "@/app/cars/CarsClient";
import {apiCarsService} from "@/api/apiCars";

import css from "./index.module.css";

const Cars: FC = async () => {
    const initialData = await apiCarsService.cars();
    return (
        <div className={css.main}>
            <CarsClient initialData={initialData}/>
        </div>
    );
};

export default Cars;

export const metadata: Metadata = {
    title: "...",
    description: "...",
};
