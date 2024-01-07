import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { BadgeDollarSign } from 'lucide-react'

export default function Home() {
  return (
    <main>
        <div className="flex pb-60 items-center h-screen">

          <div className="container items-center flex flex-col space-y-6 p-8 max-w-md rounded-xl bg-gray-300 shadow-xl">
            <div className="flex items-center gap-2 max-w-md">

              <BadgeDollarSign className='text-emerald-500' size={48} />
              <h1 className='uppercase text-slate-600 font-bold text-xl'>App Money</h1>

            </div>
            <Input type='email' placeholder='digite seu email' />
            <Input type='password' placeholder='digite sua senha' />
              <div className="flex max-w-md space-x-10">
                <Button className='w-32 bg-orange-600 font-bold'>Entrar</Button>
                <Button  className='w-32 bg-cyan-500 font-bold'>Cadastrar</Button> 
              </div>
          </div>

        </div>
    </main>
  )
}
