import data from "../api/data.json";
import { Contato, Document, Header, Novidades, Portfolio, Saudacoes, Techs } from "./models";

export function getDataJson() {
  const header: Header = data.header
  const saudacoes: Saudacoes = data.page.saudações;
  const portfolio: Portfolio = data.page.portfolio
  const tecnologias: Techs = data.page.tecnologias;
  const novidades: Novidades = data.page.novidades;
  const contato: Contato = data.page.contact;
  const document: Document = data.document

  return {
   header,
   saudacoes,
   portfolio,
   tecnologias,
   novidades,
   contato,
   document
  };

}
