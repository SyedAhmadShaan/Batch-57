"use client";
import Image from "next/image";
import Button from "@/components/Button";
import colors from "tailwindcss/colors";
import Alert from "@/components/Alert";
import { useState } from "react";
import LikeButton from "./LikeButton/page";

export default function Home() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button
        onClick={() => {
          setAlertVisibility(true);
        }}
      >
        My Button
      </Button>
      <LikeButton
        onClick={() => {
          console.log("Liked");
        }}
      />
    </div>
  );
}
