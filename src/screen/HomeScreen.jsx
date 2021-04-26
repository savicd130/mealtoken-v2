import React from "react";
import Info from "../components/Info";
import SlickSlider from "../components/SlickSlider";

export default function HomeScreen() {
  return (
    <>
      <SlickSlider />
      <div className="home">
        <Info />
      </div>
    </>
  );
}
