import React, { useEffect, useMemo, useRef, useState } from "react"

import { EN, RU } from "../utils/dictionaries"
import { ELang, ILocale } from "../types/_localization.types.ts"
import { LocalizationContext, ILocalizationContextValue } from "./_useLocalizationContext.ts"

interface ILocalizationContextProvider {
  children: React.ReactNode
}

const languages = {
  [ELang.RU]: RU,
  [ELang.EN]: EN,
}

export const LocalizationContextProvider: React.FC<ILocalizationContextProvider> = ({
  children,
}) => {
  const isFirstRender = useRef(true)

  const storedLocale = localStorage.getItem("language")

  const [locale, setLocale] = useState((storedLocale as ELang) ?? ELang.EN)

  const l = useMemo((): ILocale => languages[locale] as ILocale, [locale])

  const lContextValue = useMemo((): ILocalizationContextValue => ({ l, setLocale }), [l])

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    localStorage.setItem("language", locale)
  }, [locale])

  return (
    <LocalizationContext.Provider value={lContextValue}>{children}</LocalizationContext.Provider>
  )
}
