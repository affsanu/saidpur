"use client";

import { CSSProperties, useState } from "react";
import HashLoader from "react-spinners/HashLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export function SkeletonOne() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");
  return (
    <div className="flex items-center space-x-4">
      <HashLoader color="#36d7b7" />
      </div>
  )
}
