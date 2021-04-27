import React from "react";
import HotSales from "../components/HotSales";
import Info from "../components/Info";
import SlickSlider from "../components/SlickSlider";

export default function HomeScreen() {
  return (
    <>
      <SlickSlider />
      <Info />
      <HotSales />
    </>
  );
}
