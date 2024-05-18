import React, { createContext, useContext } from "react"

import { ILocale } from "@/types/_localization.types"
import { ELang } from "@/types/_localization.types"

export interface ILocalizationContextValue {
  l: ILocale
  setLocale: React.Dispatch<React.SetStateAction<ELang>>
}

export const LocalizationContext = createContext({} as ILocalizationContextValue)

export const useLocalizationContext = (): ILocalizationContextValue =>
  useContext(LocalizationContext)
