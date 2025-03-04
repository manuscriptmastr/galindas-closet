"use client";

import { Item } from "@/app/models/item";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ItemList() {
  const [items, setItems] = useState<Item[]>([]);
  useEffect(() => {
    fetch("/api/items")
      .then((res) => res.json())
      .then(setItems);
  }, []);

  return (
    <>
      <h1>Welcome to Galinda's Closet!</h1>
      <h2>For sale:</h2>
      <ul>
        {items.map(({ id, title, description }) => (
          <li key={id}>
            <Link href={`/items/${id}`}>{title}</Link>. {description}
          </li>
        ))}
      </ul>
    </>
  );
}
