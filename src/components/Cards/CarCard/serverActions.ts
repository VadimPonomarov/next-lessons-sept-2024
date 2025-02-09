"use server";

import {apiCarsService} from "@/api/apiCars";
import {ICar} from "@/common/interfaces/cars.interfaces.ts";

export const fetchDelete = async (id: string) => {
    await apiCarsService.deleteById(id);
};

export const fetchCreate = async (car: ICar) => {
    await apiCarsService.create(car);
};
