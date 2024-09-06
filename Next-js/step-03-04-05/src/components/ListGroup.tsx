"use client";
import React from "react";
import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

const ListGroup = ({ items, heading, onSelectItem }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1 className="text-4xl">{heading}</h1>
      <ul role="list" className="p-6 divide-y divide-slate-200">
        {items.map((item, index) => (
          <li
            className="flex py-4 first:pt-0 last:pb-0 group/item hover:bg-slate-400 duration-75  "
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
