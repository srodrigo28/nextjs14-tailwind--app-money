import ActivityBalance from "@/components/dashboard/activity-balance/page";
import ActivityTable from "@/components/dashboard/activity-table/page";
import InsertActivityForm from "@/components/dashboard/insert-activity-form/page";

export default function Dashboard(){
    return(
       <>
            <InsertActivityForm />
            <ActivityTable />
            <ActivityBalance />
       </>
    )
}