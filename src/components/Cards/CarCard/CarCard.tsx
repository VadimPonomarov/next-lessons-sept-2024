"use client";

import React, {FC} from "react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {ICar} from "@/common/interfaces/cars.interfaces";
import Link from "next/link";
import {FaEdit} from "react-icons/fa";
import {fetchDelete} from "@/components/Cards/CarCard/serverActions.ts";

type IProps = { item: ICar };

export const CarCard: FC<IProps> = ({item}) => {
    const handleDelete = async () => {
        await fetchDelete(String(item.id));
    };

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
            <span className="absolute right-4 top-2">
        <Link
            href={{
                pathname: `/cars/${item.id}`,
                query: {car: JSON.stringify(item)},
            }}
        >
          <FaEdit/>
        </Link>
      </span>
            <span className="absolute right-4 bottom-2">
        <button onClick={handleDelete}>Delete</button>
      </span>
        </Card>
    );
};

