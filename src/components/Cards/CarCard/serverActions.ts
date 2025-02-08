"use server";

import {apiCarsService} from "@/api/apiCars";
import {revalidatePath} from "next/cache";
import {baseCarsUrl} from "@/common/constants/constants.ts";

export const fetchDelete = async (id: string) => {
    await apiCarsService.deleteById(id);
    revalidatePath(baseCarsUrl, "page");
};
