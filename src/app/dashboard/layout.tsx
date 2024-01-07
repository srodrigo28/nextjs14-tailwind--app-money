import { BadgeDollarSign } from "lucide-react";
import Link from "next/link";

export default function DashboardLayout({children} : {children: React.ReactNode}){
    return(
        <>
            <div className="container flex items-center justify-between gap-4 shadow-xl h-20 rounded-xl bg-zinc-900">
                <div className=" conatainer flex items-center">
                    <BadgeDollarSign className="text-emerald-400 mr-3" size={48} />
                    <h1 className="uppercase  font-bold text-3xl text-slate-100" >Money Manager</h1>
                </div>
                <button className="text-red-600 font-bold text-2xl">
                    <Link href="/">Sair</Link>
                </button>
            </div>
            
            <div className=" container 
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