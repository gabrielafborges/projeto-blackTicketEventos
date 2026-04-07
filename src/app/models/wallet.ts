export interface userWallet {
    id: number,
    nome: string,
    dataInicio: string,
    dataTermino: string,
    diaEvento: string,
    mesEvento: string,
    estado: string,
    cidade: string,
    categoria: string,
    imgFlyer: string,
    imgFlyerMobile: string,
    imgFlyerIngresso: string,
    url: string,
    eventoVigente: boolean,
    eventoFuturo: boolean,
    possuiSubEventos: boolean
}