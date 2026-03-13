export interface UserPersonalData {
    id: number,
    nome: string,
    sobrenome: string,
    cpf: string,
    dataNascimento: string,
    telefone: {
        ddd: string,
        numero: string
    }
}

export interface Address {
    idCountry: number,
    idCity: number, 
    userAdress: string,
    number: string,
    complement: string,
    bairro: string,
    cep: string
}

export interface NotifyUser { 
    email: string,
    notify: boolean
}