"use server";

import {apiCarsService} from "@/api/apiCars";
import {revalidatePath} from "next/cache";

export const fetchDelete = async (id: string) => {
    await apiCarsService.deleteById(id);
    revalidatePath("/cars", "page");
};
