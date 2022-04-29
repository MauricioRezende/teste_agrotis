export type FormData = {
    nome: string
    dataInicial: string
    dataFinal: string
    infosPropriedade : {
      id: number
      nome: string
    }
    cnpj: string
    laboratorio : {
      id: number
      nome: string
    }
    observacoes: string
  };