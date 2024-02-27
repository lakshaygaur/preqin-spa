'use client'
import React from "react";
import {
    Table, 
    TableHeader, 
    TableColumn, 
    TableBody, 
    TableRow, 
    TableCell,
  } from "@nextui-org/react";
import { usePathname } from "next/navigation";

export default function App() {
const [assetData, setAssetData] = React.useState([]);
const pathnames = usePathname().split('/')
const investorId = pathnames[2]
const assetClass = pathnames[3]

  React.useEffect(()=> {
    fetch(`/api/investors/${investorId}/${assetClass}`).then(data => {
      data.json().then((res) => setAssetData(res))
    })
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="flex flex-col gap-3">
    <Table 
        color="default"
        selectionMode="single" 
        // defaultSelectedKeys={["2"]} 
        aria-label="Example static collection table"
      >
        <TableHeader>
          <TableColumn>ID</TableColumn>
          <TableColumn>Asset Class</TableColumn>
          <TableColumn>Firm ID</TableColumn>
          <TableColumn>Currency</TableColumn>
          <TableColumn>Amount</TableColumn>
        </TableHeader>
        <TableBody>
        {
            assetData.length && assetData.map((data, i)=> {
              return (
        <TableRow key={i+1}>
        <TableCell>{data.id}</TableCell>
        <TableCell>{data.asset_class}</TableCell>
        <TableCell>{data.firm_id}</TableCell>
        <TableCell>{data.currency}</TableCell>
        <TableCell>{data.amount}</TableCell>
        </TableRow>
              )
            })
        }
          
        </TableBody>
      </Table>
    </div>
    </main>
  );
}
