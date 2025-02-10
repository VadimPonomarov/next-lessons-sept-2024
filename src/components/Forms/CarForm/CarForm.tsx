"use client";
import {FC, useEffect, useState} from "react";
import {joiResolver} from "@hookform/resolvers/joi";
import {useForm} from "react-hook-form";
import {ResizableWrapper} from "@/components/All/ResizableWrapper/ResizableWrapper";
import {Input} from "@/components/ui/input";
import {useCarForm} from "@/components/Forms/CarForm/useCarForm";
import {Button} from "@/components/ui/button";
import {schema} from "@/components/Forms/CarForm/schemas.joi";
import {ICar} from "@/common/interfaces/cars.interfaces";

import css from "./carForm.module.css";

const CarForm: FC = () => {
    const [car, setCarAction] = useState<ICar | null>(null);

    const {
        register,
        handleSubmit,
        formState: {errors, isValid},
        reset: resetAction,
    } = useForm<ICar>({
        resolver: joiResolver(schema),
        defaultValues: car || {},
        mode: "all",
    });

    const {onSubmit, handleReset} = useCarForm({resetAction, item: car, setCarAction});

    useEffect(() => {
        resetAction(car);
    }, [car, resetAction]);

    return (
        <div className={css.container}>
            <ResizableWrapper>
                <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
                    {car?.id && (
                        <div className={css.formGroup}>
                            <label htmlFor="id">ID</label>
                            <Input {...register("id")} id="id" type="number" disabled/>
                            {errors.id && <p className={css.error}>{errors.id.message}</p>}
                        </div>
                    )}
                    <div className={css.formGroup}>
                        <label htmlFor="brand">Brand</label>
                        <Input {...register("brand")} id="brand"/>
                        {errors.brand && (
                            <p className={css.error}>{errors.brand.message}</p>
                        )}
                    </div>
                    <div className={css.formGroup}>
                        <label htmlFor="price">Price</label>
                        <Input {...register("price")} id="price" type="number"/>
                        {errors.price && (
                            <p className={css.error}>{errors.price.message}</p>
                        )}
                    </div>
                    <div className={css.formGroup}>
                        <label htmlFor="year">Year</label>
                        <Input {...register("year")} id="year" type="number"/>
                        {errors.year && <p className={css.error}>{errors.year.message}</p>}
                    </div>
                    <div className={css.buttonGroup}>
                        <Button size={"sm"} type="submit" disabled={!isValid}>
                            {car?.id ? "Edit" : "Create"}
                        </Button>
                        <Button size={"sm"} type="button" onClick={handleReset}>
                            Reset
                        </Button>
                    </div>
                </form>
            </ResizableWrapper>
        </div>
    );
};

export default CarForm;
