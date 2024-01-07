import { BadgeDollarSign } from "lucide-react";

export default function DashboardLayout({children} : {children: React.ReactNode}){
    return(
        <>
            <div 
                className="
                    container flex items-center 
                    gap-4 shadow-xl h-20 rounded-xl bg-zinc-900">
                <BadgeDollarSign className="text-emerald-400" size={48} />
                <h1 className="uppercase  font-bold text-3xl text-slate-100" >Money Manger</h1>
            </div>
            
            <div className="
                            container 
                            items-center 
                            gap-4 
                            w-md m-auto 
                            mt-2 pt-10 
                            rounded-xl 
                            shadow-md 
                            bg-slate-50
                        ">
                {children}
            </div>
            
        </>
    )
}