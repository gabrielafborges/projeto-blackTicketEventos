export interface UserPersonalData {
  id: number;
  nome: string;
  sobrenome: string;
  cpf: string;
  dataNascimento: string;
  telefone: {
  ddd: string;
  numero: string;
  };
  endereco: {
    idEstado: string;
    idCidade: string;
    endereco: string;
    numero: string;
    complemento: string;
    bairro: string;
    cep: string;
  };
  email: string;  
  receberNotificacoes: boolean;  
}