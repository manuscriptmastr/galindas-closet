"use client";

import styles from "./page.module.css";
import { Item } from '@/app/models/item'
import { useEffect, useState } from "react";

export default function ItemList() {
  const [items, setItems] = useState<Item[]>([]);
  useEffect(() => {
    fetch('/api/items').then(res => res.json()).then(setItems)
  }, []);

  return (
    <>
      <h1>Welcome to Galinda's Closet!</h1>
      <h2>For sale:</h2>
      <ul>
        {items.map(({ id, title, description }) => <li key={id}>{title}. {description}</li>)}
      </ul>
    </>
  );
}
