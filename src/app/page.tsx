"use client";
import * as React from "react";
import { useRouter } from 'next/navigation'

import {
  Table, 
  TableHeader, 
  TableColumn, 
  TableBody, 
  TableRow, 
  TableCell,
} from "@nextui-org/react";

export default function Home() {
  const [investors, setInvestors] = React.useState([]);
  React.useEffect(()=> {
    fetch('/api/investors').then(data => {
      console.log(' in use effect', data)
      data.json().then((res) => setInvestors(res))
    })
  }, [])
  const router = useRouter()

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
          <TableColumn>Firm ID</TableColumn>
          <TableColumn>Firm Name</TableColumn>
          <TableColumn>Date Added</TableColumn>
          <TableColumn>Address</TableColumn>
        </TableHeader>
        <TableBody>
          {
            investors.length && investors?.map((investor, i)=> {
              return (
                <TableRow key={i+1} onClick={()=>router.push(`/investor/${investor.firm_id}`)}>
            <TableCell>{investor.firm_id}</TableCell>
            <TableCell>{investor.firm_name}</TableCell>
            <TableCell>{investor.date_added}</TableCell>
            <TableCell>{investor.address}</TableCell>
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