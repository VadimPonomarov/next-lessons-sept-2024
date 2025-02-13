"use client";

import React, { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import css from "./index.module.css";
import { CarCard } from "@/components/Cards/CarCard/CarCard";
import { ICar } from "@/common/interfaces/cars.interfaces";
import { apiCarsService } from "@/api/apiCars";

interface CarsClientProps {
  initialData: ICar[];
}

const CarsClient: FC<CarsClientProps> = ({ initialData }) => {
  const { data } = useQuery<ICar[], Error>({
    queryKey: ["cars"],
    queryFn: apiCarsService.cars,
    initialData,
  });

  const sortedData = data?.sort((a, b) => a.id - b.id) || [];

  return (
    <div className={css.main}>
      <div className={"relative mt-[40px] flex flex-wrap justify-evenly gap-2"}>
        {sortedData.map((item: ICar) => (
          <CarCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CarsClient;
