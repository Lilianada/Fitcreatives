import React from "react";
import { Card, CardHeader } from "../ui/card";
import trainers from "@data/trainers";

export default function TrainerCard() {
  return (
    <div className="">
      {trainers.map((trainer) => (
        <Card>
          <CardHeader></CardHeader>
        </Card>
      ))}
    </div>
  );
}
