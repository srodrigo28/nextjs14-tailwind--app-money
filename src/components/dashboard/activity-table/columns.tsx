"use client"

import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { PlusSquare, Trash2 } from "lucide-react"

export type Activity = {
  id: string,
  date: Date,
  description: string,
  value: number,
  type: "revenue" | "expense"
}

export const columns: ColumnDef<Activity>[] = [
  {
    accessorKey: "date",
    header: "Data",
    cell: ({ row }) => { 
      const aDate = row.getValue("date") as Date;
      const formattedDate = aDate.getDate() + "/" + (aDate.getMonth() + 1) + "/" +  aDate.getFullYear();
      return <>{formattedDate}</>
    }
  },
  {
    accessorKey: "description",
    header: "Descrição",
  },
  {
    accessorKey: "value",
    header: "Valor",
    cell: ({ row }) => {
      const type = row.getValue("type");

      const aValue = row.getValue("value") as number;

      const formatedValue = aValue.toLocaleString("pt-BR", 
      { minimumFractionDigits: 2, maximumFractionDigits: 2 });

      const valueCalss = (type === "revenue") ? "text-emerald-500" : "text-red-500";
      return <p  className={valueCalss}>R$ {formatedValue}</p>
    }
  },
  {
    accessorKey: "type",
    header: "Entrada / Saída",
  },
  {
    id: "actions",
    header: "Ações",
    cell: ({row}) => {
      return<div className="w-21">
        <Button variant="outline"><Trash2 className="text-red-400" /></Button>
        <Button variant="outline"><PlusSquare className="text-emerald-400" /></Button>
        </div>
    }
  },
]
