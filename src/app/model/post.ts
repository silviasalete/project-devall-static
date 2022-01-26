import { Blog } from "./blog";

export interface Post {
    id: number;
    titulo: string;
    resumo: string;
    cliques: number;
    dataInclusao: string;
    dataPublicacao: string;
    votosNegativos: number;
    votosPositivos: number;
    favoritos: number;
    comentarios: number;
    url: string;
    blog: Blog;
}
