"use client";

import { Item } from "@/app/models/item";
import { useEffect, useState } from "react";
import { ItemList } from "../components/item-list";

export default function ItemListPage() {
  const [items, setItems] = useState<Item[]>([]);
  useEffect(() => {
    fetch("/api/items")
      .then((res) => res.json())
      .then(setItems);
  }, []);

  return (
    <>
      <h1>Welcome to Ga-linda's Closet!</h1>
      <h2>For sale:</h2>
      <ItemList items={items} />
    </>
  );
}
