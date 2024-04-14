import { EN } from "@/utils/dictionaries"

export enum ELang {
  RU = "RU",
  EN = "EN",
}

type TDictionaryObject = typeof EN

export interface ILocale extends TDictionaryObject {}
