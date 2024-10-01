import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import { TipoProduto } from "@/types";

export async function GET(request:Request, {params}:{params:{id:number}}) {
    //Recuperando os dados do pseudo banco de dados JSON.
    const file = await fs.readFile(process.cwd() + "/src/data/base.json" , "utf-8");

    //PARSEAR O ARQUIVO
    const produtos:TipoProduto[] = JSON.parse(file);

    //Realizando uma busca na lista de dados com um metodo do array find() utilizando o id como parametro
    const produto = produtos.find( p => p.id == params.id);

    //Retornar um produto
    return NextResponse.json(produto);
}