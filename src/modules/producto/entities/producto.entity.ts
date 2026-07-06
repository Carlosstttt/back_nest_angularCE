import { Categoria } from "../../categoria/entities/categoria.entity";
import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('productos')

export class Producto {
    @PrimaryGeneratedColumn()
    id!: number;

    nombre!: string;

    precio!:number;

    stock!:number;

    image!:string;

    descripción!: string;

    estado!: boolean;

    categoria!: Categoria
}