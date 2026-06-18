"use client"

import { createContext, useContext, useEffect, useMemo, useState } from "react"

type Language = "zh" | "en"

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("zh")

  useEffect(() => {
    const saved = window.localStorage.getItem("site-language")
    if (saved === "zh" || saved === "en") {
      setLanguageState(saved)
      document.documentElement.lang = saved === "zh" ? "zh-CN" : "en"
    }
  }, [])

  const value = useMemo<LanguageContextValue>(() => {
    const setLanguage = (nextLanguage: Language) => {
      setLanguageState(nextLanguage)
      window.localStorage.setItem("site-language", nextLanguage)
      document.documentElement.lang = nextLanguage === "zh" ? "zh-CN" : "en"
    }

    return {
      language,
      setLanguage,
      toggleLanguage: () => setLanguage(language === "zh" ? "en" : "zh"),
    }
  }, [language])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider")
  }

  return context
}

