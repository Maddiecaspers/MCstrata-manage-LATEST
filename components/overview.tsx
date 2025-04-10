"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Jan",
    maintenance: 4,
    meetings: 1,
  },
  {
    name: "Feb",
    maintenance: 3,
    meetings: 2,
  },
  {
    name: "Mar",
    maintenance: 5,
    meetings: 1,
  },
  {
    name: "Apr",
    maintenance: 2,
    meetings: 0,
  },
  {
    name: "May",
    maintenance: 6,
    meetings: 1,
  },
  {
    name: "Jun",
    maintenance: 4,
    meetings: 2,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
        <Bar dataKey="maintenance" fill="#adfa1d" radius={[4, 4, 0, 0]} className="fill-primary" />
        <Bar dataKey="meetings" fill="#82ca9d" radius={[4, 4, 0, 0]} className="fill-muted" />
      </BarChart>
    </ResponsiveContainer>
  )
}

