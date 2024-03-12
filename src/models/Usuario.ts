import Produto from "./Produto";

export default interface Usuario {
  id: number;
  nome: string;
  email: string;
  foto: string;
  tipo: string;
  senha: string;
  produto?: Produto | null;

}