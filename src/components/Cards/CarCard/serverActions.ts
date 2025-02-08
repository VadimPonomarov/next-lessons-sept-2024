"use server";

import {apiCarsService} from "@/api/apiCars";

export const fetchDelete = async (id: string) => {
    await apiCarsService.deleteById(id);
};
