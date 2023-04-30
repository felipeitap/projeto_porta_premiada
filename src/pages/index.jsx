import { useState } from "react";
import Dor from "../../components/dor";
import Gift from "../../components/gift";
import DorModel from "../../model/dor";

export default function Home() {
  const [p1, setP1] = useState(new DorModel(1));

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <Dor dor={p1} />
    </div>
  );
}
