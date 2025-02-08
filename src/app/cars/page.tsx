import React, {FC} from "react";
import css from "./index.module.css";
import CarForm from "@/components/Forms/CarForm/CarForm";
import {Metadata} from "next";


const Cars: FC = async () => {
    return (
        <div className={css.main}>
            <CarForm/>
        </div>
    );
};

export default Cars;

export const metadata: Metadata = {
    title: '...',
    description: '...',
}



