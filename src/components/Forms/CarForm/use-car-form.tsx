"use client";

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  DefaultValues,
  KeepStateOptions,
  SubmitHandler,
} from "react-hook-form";
import { ICar, ICarCreate } from "@/common/interfaces/cars.interfaces";
import { useRouter } from "next/navigation";
import { apiCarsService } from "@/api/apiCars";

type IProps = {
  reset: (
    values?: DefaultValues<ICar> | ICar,
    keepStateOptions?: KeepStateOptions,
  ) => void;
  item: ICar;
};

export const useCarForm = ({ reset, item }: IProps) => {
  const [formData, setFormData] = useState<ICar | null>(null);
  const router = useRouter();
  const client = useQueryClient();

  const { mutate: create } = useMutation({
    mutationFn: (data: ICarCreate) => apiCarsService.create(data),
    onSuccess: (newCar) => {
      client.setQueryData<ICar[]>(["cars"], (oldCars = []) => [
        ...oldCars,
        newCar,
      ]);
    },
  });

  const { mutate: update } = useMutation({
    mutationFn: (data: ICar) =>
      apiCarsService.updateById(data.id.toString(), data),
    onSuccess: (newCar) => {
      client.setQueryData<ICar[]>(["cars"], (oldCars = []) =>
        oldCars.map((car) => (car.id === newCar.id ? newCar : car)),
      );
    },
  });

  const { mutate: del } = useMutation({
    mutationFn: (id: string) => apiCarsService.deleteById(id),
    onSuccess: () => {
      client.setQueryData<ICar[]>(["cars"], (oldCars = []) =>
        oldCars.filter((car) => car.id !== item.id),
      );
    },
  });

  const onCreate = (data: ICar) => {
    const newData = { ...data, id: Math.floor(Math.random() * 10000) };
    setFormData(newData);
    create(newData);
    reset(newData);
    router.back();
  };

  const onUpdate = (data: ICar) => {
    setFormData(data);
    update(data);
    reset(data);
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
    reset({
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
