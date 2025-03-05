"use client";

import { Item } from "@/app/models/item";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ItemDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<Item>();
  useEffect(() => {
    fetch(`/api/items/${id}`)
      .then((res) => res.json())
      .then(setItem);
  }, []);

  return (
    <>
      <h1>{item?.title}</h1>
      <p>{item?.description}</p>
    </>
  );
}
