import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function InsertActivityForm(){
    return(
        <div className="flex space-x-2 p-8">
        <Input type="date" className="max-w-[11rem]" />
        <Input type="text" className="max-w-[36rem]" placeholder="Insira a descrição da atividade" />
        <Input type="number" className="max-w-[10rem]" placeholder="Insira o valor" />
        <Select>
            <SelectTrigger className="max-w-[16rem]">
                <SelectValue placeholder="Selecione um" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="entrada">Entrada</SelectItem>
                <SelectItem value="saida">Saída</SelectItem>
            </SelectContent>
        </Select>
        <Button>Inserir</Button>
    </div>
    )
}