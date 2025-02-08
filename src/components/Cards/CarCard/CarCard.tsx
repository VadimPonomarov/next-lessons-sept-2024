"use client";
import { FC } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ICar } from "@/common/interfaces/cars.interfaces";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";

type IProps = { item: ICar };

export const CarCard: FC<IProps> = ({ item }) => {
  return (
    <Card className="relative h-[200px] w-[300px] overflow-auto">
      <CardHeader>
        <CardTitle>{item.brand}</CardTitle>
        <CardDescription>Year: {item.year}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Price: {item.price}</p>
      </CardContent>
      <CardFooter>
        <p className="text-small">Id: {item.id}</p>
      </CardFooter>
      <span className={"absolute right-4 top-2"}>
        <Link
          href={{
            pathname: `/cars/${item.id}`,
            query: { car: JSON.stringify(item) },
          }}
        >
          <FaEdit />
        </Link>
      </span>
    </Card>
  );
};
