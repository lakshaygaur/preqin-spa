'use client'
import React from "react";
import { usePathname, useRouter } from 'next/navigation'
import {Select, SelectItem} from "@nextui-org/react";

const assetClasses = [
  {label: 'PE(Private Equity)', value: 'pe'},
  {label: 'PD(Private Debt)', value: 'pd'},
  {label: 'RE(Real Estate)', value: 're'},
  {label: 'INF(Infrastructure)', value: 'inf'},
  {label: 'NR(Natural Resources)', value: 'nr'},
  {label: 'HF(Hedge Funds)', value: 'hf'},
]

export default function App() {
  const router = useRouter()
  const pathname = usePathname().split('/')
  const investorId = pathname[2]
  return (
    <main className="min-h-screen flex-col items-center justify-between p-24">
    <div className="flex flex-col gap-3">
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Select
        label="Favorite Animal"
        placeholder="Select an animal"
        className="max-w-xs"
        onChange={(e)=> router.push(`/investor/${investorId}/${e.target.value}`)}
      >
        {assetClasses.map((assetClass) => (
          <SelectItem key={assetClass.value} value={assetClass.value}>
            {assetClass.label}
          </SelectItem>
        ))}
      </Select>
    </div>
    </div>
    </main>
  );
}

