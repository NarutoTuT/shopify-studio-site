"use client"

import { createContext, useContext, useEffect, useMemo, useState } from "react"

type Language = "zh" | "en"

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
  localizedPath: (path: string) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function localizePath(path: string, language: Language) {
  if (!path.startsWith("/") || path.startsWith("//")) return path
  const normalized = path === "/en" ? "/" : path.replace(/^\/en(?=\/|#|\?|$)/, "") || "/"
  return language === "en" ? `/en${normalized === "/" ? "" : normalized}` : normalized
}

export function LanguageProvider({ children, initialLanguage = "zh" }: { children: React.ReactNode; initialLanguage?: Language }) {
  const [language, setLanguageState] = useState<Language>(initialLanguage)

  useEffect(() => {
    window.localStorage.setItem("site-language", initialLanguage)
    document.documentElement.lang = initialLanguage === "zh" ? "zh-CN" : "en"
  }, [initialLanguage])

  const value = useMemo<LanguageContextValue>(() => {
    const setLanguage = (nextLanguage: Language) => {
      setLanguageState(nextLanguage)
      window.localStorage.setItem("site-language", nextLanguage)
      document.documentElement.lang = nextLanguage === "zh" ? "zh-CN" : "en"
      const nextPath = localizePath(`${window.location.pathname}${window.location.search}${window.location.hash}`, nextLanguage)
      window.location.assign(nextPath)
    }

    return {
      language,
      setLanguage,
      toggleLanguage: () => setLanguage(language === "zh" ? "en" : "zh"),
      localizedPath: (path: string) => localizePath(path, language),
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
