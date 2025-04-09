import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { spa: "PT", messages: 29, budget: 10500000 },
  { spa: "VT", messages: 34, budget: 12250000 },
  { spa: "BR", messages: 22, budget: 7250000 }
];

const performanceSplit = [
  { service: "Lip & Brow", PT: 6615000, VT: 7717500, BR: 4567500 },
  { service: "Skin & Surgery", PT: 2835000, VT: 3307500, BR: 1957500 }
];

export default function FacebookAdsDashboard() {
  return (
    <div className="p-4 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {data.map((spa) => (
        <Card key={spa.spa} className="rounded-2xl shadow-md">
          <CardContent className="p-4">
            <h2 className="text-xl font-bold mb-2">SPA {spa.spa}</h2>
            <p className="text-sm text-muted-foreground">Messages Target: {spa.messages}</p>
            <p className="text-sm text-muted-foreground">Daily Budget: {spa.budget.toLocaleString()} VND</p>
            <Progress value={(spa.messages / 40) * 100} className="mt-3" />
          </CardContent>
        </Card>
      ))}

      <Card className="col-span-full rounded-2xl shadow-md">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-4">Performance Budget Allocation</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={performanceSplit} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
              <XAxis dataKey="service" />
              <YAxis tickFormatter={(value) => `${(value / 1000000).toFixed(1)}M`} />
              <Tooltip formatter={(value) => `${value.toLocaleString()} VND`} />
              <Legend />
              <Bar dataKey="PT" fill="#34a853" />
              <Bar dataKey="VT" fill="#4285f4" />
              <Bar dataKey="BR" fill="#fbbc04" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}

