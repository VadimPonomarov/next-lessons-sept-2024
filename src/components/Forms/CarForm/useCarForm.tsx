"use client";

import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {DefaultValues, KeepStateOptions, SubmitHandler} from "react-hook-form";
import {ICar, ICarCreate} from "@/common/interfaces/cars.interfaces";
import {useRouter, useSearchParams} from "next/navigation";
import {apiCarsService} from "@/api/apiCars";

type IProps = {
    resetAction: (
        values?: DefaultValues<ICar> | ICar,
        keepStateOptions?: KeepStateOptions,
    ) => void;
    item: ICar;
    setCarAction: Dispatch<SetStateAction<ICar>>;
};

export const useCarForm = ({resetAction, item, setCarAction}: IProps) => {
    const [formData, setFormData] = useState<ICar | null>(null);
    const router = useRouter();
    const client = useQueryClient();
    const queryParams = useSearchParams();

    useEffect(() => {
        const carData = queryParams.get("car");
        if (carData) {
            try {
                setCarAction(JSON.parse(carData));
            } catch (error) {
                console.error("Failed to parse car data:", error);
            }
        }
    }, [queryParams, setCarAction]);

    const {mutate: create} = useMutation({
        mutationFn: (data: ICarCreate) => apiCarsService.create(data),
        onSuccess: (newCar) => {
            client.setQueryData<ICar[]>(["cars"], (oldCars = []) => [
                ...oldCars,
                newCar,
            ]);
        },
    });

    const {mutate: update} = useMutation({
        mutationFn: (data: ICar) => apiCarsService.updateById(data.id.toString(), data),
        onSuccess: (newCar) => {
            client.setQueryData<ICar[]>(["cars"], (oldCars = []) =>
                oldCars.map((car) => (car.id === newCar.id ? newCar : car)),
            );
        },
    });

    const {mutate: del} = useMutation({
        mutationFn: (id: string) => apiCarsService.deleteById(id),
        onSuccess: () => {
            client.setQueryData<ICar[]>(["cars"], (oldCars = []) =>
                oldCars.filter((car) => car.id !== item.id),
            );
        },
    });

    const onCreate = (data: ICar) => {
        const newData = {...data, id: Math.floor(Math.random() * 10000)};
        setFormData(newData);
        create(newData);
        resetAction(newData);
        router.back();
    };

    const onUpdate = (data: ICar) => {
        setFormData(data);
        update(data);
        resetAction(data);
        router.back();
    };

    const onDelete = () => {
        if (item?.id) {
            del(item.id.toString());
            router.back();
        }
    };

    const onSubmit: SubmitHandler<ICar> = (data) => {
        if (data.id) {
            onUpdate(data);
        } else {
            onCreate(data);
        }
    };

    const handleReset = () => {
        setFormData(null);
        resetAction({
            id: undefined,
            brand: "",
            price: "",
            year: "",
        } as unknown as ICar);
    };

    return {
        formData,
        setFormData,
        onCreate,
        onUpdate,
        onDelete,
        onSubmit,
        handleReset,
    };
};
