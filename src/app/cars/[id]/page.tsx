import React, {FC} from "react";
import css from "./index.module.css";
import CarForm from "@/components/Forms/CarForm/CarForm";
import {Metadata, ResolvingMetadata} from "next";

interface PageProps {
    params: Promise<{ id: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

const Cars: FC<PageProps> = async () => {
    return (
        <div className={css.main}>
            <CarForm/>
        </div>
    );
};

export default Cars;


export async function generateMetadata(
    {params, searchParams}: PageProps,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const id = (await params).id

    return {
        title: id,
    }
}

