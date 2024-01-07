import { Activity, columns } from "./columns"
import { DataTable } from "./data-table"

const data: Activity[] = [
  {
    id: "1",
    date: new Date("10-10-2024"),
    description: "pagamento conta de luz",
    value: 210,
    type: "expense"
  },
  {
    id: "2",
    date: new Date("10-02-2024"),
    description: "pagamento carro 2900.23",
    value: 220.50,
    type: "expense"
  },
  {
    id: "3",
    date: new Date("10-28-2024"),
    description: "pagamento internet 348.20",
    value: 320,
    type: "expense"
  },
  {
    id: "4",
    date: new Date("10-25-2024"),
    description: "pagamento conta de luz",
    value: 1000.00,
    type: "revenue"
  }
]

function getData(): Activity[] {
  return data;
}

export default function ActivityTable() {
  const data = getData()

  return (
    <div className="container mx-auto">
      <DataTable columns={columns} data={data} />
    </div>
  )
}