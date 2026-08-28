"use client"

import { HelpCircle, ShieldCheck } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export interface ServiceFaqEntry {
  question: string
  answer: string
  category: string
  knowledgeCategory?: string
  tags: string[]
  conclusion?: string
}

interface ServiceFaqPanelProps {
  entries: ServiceFaqEntry[]
  activeIndex: number
  onActiveIndexChange: (index: number) => void
  panelId: string
  accordionPrefix: string
  statusLabel: string
  directoryLabel: string
  answerLabel: string
}

export function ServiceFaqPanel({
  entries,
  activeIndex,
  onActiveIndexChange,
  panelId,
  accordionPrefix,
  statusLabel,
  directoryLabel,
  answerLabel,
}: ServiceFaqPanelProps) {
  const activeEntry = entries[activeIndex]
  const questionCount = String(entries.length).padStart(2, "0")

  if (!activeEntry) return null

  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_78%_34%,rgba(34,211,238,0.075),transparent_29%),radial-gradient(circle_at_24%_68%,rgba(119,252,117,0.09),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.058),rgba(255,255,255,0.012))] px-4 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.13),0_40px_110px_rgba(0,0,0,0.34)] backdrop-blur-2xl sm:rounded-[2.6rem_1.5rem_3rem_1.8rem] sm:px-6 sm:py-7 lg:px-10 lg:py-9">
      <div aria-hidden="true" className="absolute inset-0 opacity-[0.055] [background-image:linear-gradient(rgba(34,211,238,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.3)_1px,transparent_1px)] [background-size:58px_58px] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />
      <div aria-hidden="true" className="absolute bottom-[16%] right-[2%] h-px w-[58%] -rotate-3 animate-shimmer bg-gradient-to-r from-transparent via-cyan-300/25 to-transparent bg-[length:200%_100%] motion-reduce:animate-none" />

      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 px-1">
        <div className="flex items-center gap-3">
          <span className="size-2 animate-pulse rounded-full bg-primary shadow-[0_0_16px_rgba(119,252,117,0.8)] motion-reduce:animate-none" />
          <span className="font-mono text-base uppercase text-primary">{statusLabel}</span>
        </div>
        <span className="font-mono text-base uppercase text-white/35">{questionCount} questions indexed</span>
      </div>

      <div className="relative z-10 mt-7 hidden min-w-0 grid-cols-[0.38fr_0.62fr] gap-7 lg:grid">
        <div role="group" aria-label={directoryLabel} className="space-y-1.5 rounded-[1.7rem] bg-black/20 p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.065)]">
          {entries.map((entry, index) => {
            const isActive = activeIndex === index
            return (
              <button
                type="button"
                key={entry.question}
                aria-pressed={isActive}
                aria-controls={panelId}
                onClick={() => onActiveIndexChange(index)}
                className={"group relative flex min-h-[70px] w-full items-center gap-3 overflow-hidden rounded-[1.25rem] px-3 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary motion-reduce:transition-none " + (isActive ? "bg-white/[0.09] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_0_30px_rgba(119,252,117,0.07)]" : "bg-transparent hover:bg-white/[0.035]")}
              >
                <span className={"flex size-11 shrink-0 items-center justify-center rounded-full font-mono text-base transition-colors " + (isActive ? "bg-primary text-black" : "bg-white/[0.045] text-cyan-300/42 group-hover:text-primary")}>{String(index + 1).padStart(2, "0")}</span>
                <span className="min-w-0">
                  <span className={"block font-mono text-base uppercase " + (isActive ? "text-primary" : "text-cyan-300/38")}>{entry.category}</span>
                  <strong className={"mt-1 block text-base leading-snug " + (isActive ? "text-white" : "text-white/52 group-hover:text-white/72")}>{entry.question}</strong>
                </span>
                {isActive && <span aria-hidden="true" className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/65 to-transparent" />}
              </button>
            )
          })}
        </div>

        <div id={panelId} role="region" aria-live="polite" aria-label={answerLabel} className="relative flex min-h-[400px] min-w-0 items-center overflow-hidden rounded-[1.7rem] bg-black/18 px-7 py-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] xl:px-12">
          <div aria-hidden="true" className="absolute right-[8%] top-[10%] size-52 rounded-full border border-dashed border-primary/10" />
          <div key={`${panelId}-${activeIndex}`} className="relative z-10 max-w-3xl animate-in fade-in slide-in-from-right-3 duration-300 motion-reduce:animate-none">
            <div className="flex items-center gap-4">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/12 text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"><HelpCircle className="size-6" /></span>
              <div>
                <span className="font-mono text-base uppercase text-primary">Answer / {String(activeIndex + 1).padStart(2, "0")} of {questionCount}</span>
                <span className="mt-1 block font-mono text-base uppercase text-white/32">{activeEntry.knowledgeCategory ?? activeEntry.category} knowledge</span>
              </div>
            </div>
            <h3 className="mt-7 max-w-2xl text-3xl font-bold leading-tight text-white">{activeEntry.question}</h3>
            {activeEntry.conclusion && <p className="mt-6 max-w-2xl text-lg font-semibold leading-[1.65] text-white/86">{activeEntry.conclusion}</p>}
            <p className={activeEntry.conclusion ? "mt-4 max-w-2xl text-base leading-[1.9] text-white/58" : "mt-6 max-w-2xl text-base leading-[1.9] text-white/62"}>{activeEntry.answer}</p>
            <div className="mt-8 flex flex-wrap gap-2">{activeEntry.tags.map((tag) => <span key={tag} className="rounded-full bg-white/[0.05] px-4 py-2 text-base text-white/55">{tag}</span>)}</div>
            <div className="mt-9 flex items-center gap-3 font-mono text-base uppercase text-primary"><ShieldCheck className="size-5" />Answer verified</div>
          </div>
        </div>
      </div>

      <Accordion
        type="single"
        value={`${accordionPrefix}-${activeIndex}`}
        onValueChange={(value) => {
          if (value) onActiveIndexChange(Number(value.replace(`${accordionPrefix}-`, "")))
        }}
        className="relative z-10 mt-6 space-y-2 lg:hidden [&_[data-slot=accordion-content]]:text-base"
      >
        {entries.map((entry, index) => (
          <AccordionItem key={entry.question} value={`${accordionPrefix}-${index}`} className="overflow-hidden rounded-[1.35rem] border-0 bg-black/18 px-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.055)] data-[state=open]:bg-white/[0.075] data-[state=open]:shadow-[inset_0_1px_0_rgba(255,255,255,0.11),0_0_28px_rgba(119,252,117,0.055)] sm:px-5">
            <AccordionTrigger className="min-h-[72px] gap-3 py-4 text-left text-base font-semibold leading-snug hover:no-underline data-[state=open]:text-primary [&>svg]:size-5 [&>svg]:shrink-0">
              <span className="flex min-w-0 items-center gap-3"><span className="font-mono text-base text-cyan-300/55">{String(index + 1).padStart(2, "0")}</span><span>{entry.question}</span></span>
            </AccordionTrigger>
            <AccordionContent className="pb-5 pl-0 text-base leading-[1.8] text-white/60 sm:pl-9">
              {entry.conclusion && <p className="font-semibold text-white/82">{entry.conclusion}</p>}
              <p className={entry.conclusion ? "mt-3" : undefined}>{entry.answer}</p>
              <div className="mt-5 flex flex-wrap gap-2">{entry.tags.map((tag) => <span key={tag} className="rounded-full bg-black/20 px-3 py-2 text-base text-white/50">{tag}</span>)}</div>
              <div className="mt-5 flex items-center gap-2 font-mono text-base uppercase text-primary"><ShieldCheck className="size-5" />Answer verified</div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
