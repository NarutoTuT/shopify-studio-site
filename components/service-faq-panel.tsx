"use client"

import { HelpCircle, ShieldCheck } from "lucide-react"

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

export function ServiceFaqPanel({ entries, activeIndex, onActiveIndexChange, panelId, accordionPrefix, statusLabel, directoryLabel, answerLabel }: ServiceFaqPanelProps) {
  const questionCount = String(entries.length).padStart(2, "0")

  if (!entries.length) return null

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

      <div role="group" aria-label={directoryLabel} className="relative z-10 mt-6 space-y-2 lg:min-h-[448px] lg:grid lg:grid-cols-[0.38fr_0.62fr] lg:gap-x-7 lg:space-y-0">
        <div aria-hidden="true" className="absolute inset-y-0 left-0 hidden w-[calc(38%_-_0.45rem)] rounded-[1.7rem] bg-black/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.065)] lg:block" />
        {entries.map((entry, index) => {
          const isActive = activeIndex === index
          const triggerId = `${accordionPrefix}-trigger-${index}`
          const answerId = `${panelId}-${index}`

          return (
            <article key={entry.question} className="relative lg:contents">
              <button
                id={triggerId}
                type="button"
                aria-expanded={isActive}
                aria-controls={answerId}
                onClick={() => onActiveIndexChange(index)}
                className={"group relative z-10 flex min-h-[72px] w-full items-center gap-3 overflow-hidden rounded-[1.25rem] bg-black/18 px-4 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary motion-reduce:transition-none lg:col-start-1 lg:mx-2 lg:w-[calc(100%_-_1rem)] lg:bg-transparent " + (isActive ? "bg-white/[0.09] text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_0_30px_rgba(119,252,117,0.07)] lg:bg-white/[0.09]" : "hover:bg-white/[0.035]")}
              >
                <span className={"flex size-11 shrink-0 items-center justify-center rounded-full font-mono text-base transition-colors " + (isActive ? "bg-primary text-black" : "bg-white/[0.045] text-cyan-300/55 group-hover:text-primary")}>{String(index + 1).padStart(2, "0")}</span>
                <span className="min-w-0">
                  <span className={"hidden font-mono text-base uppercase lg:block " + (isActive ? "text-primary" : "text-cyan-300/45")}>{entry.category}</span>
                  <strong className={"block text-base leading-snug lg:mt-1 " + (isActive ? "text-primary lg:text-white" : "text-white/72 group-hover:text-white")}>{entry.question}</strong>
                </span>
                <span aria-hidden="true" className={"ml-auto text-xl transition-transform duration-300 lg:hidden " + (isActive ? "rotate-45 text-primary" : "text-white/45")}>+</span>
              </button>

              <div
                id={answerId}
                role="region"
                aria-labelledby={triggerId}
                aria-hidden={!isActive}
                className={"grid transition-[grid-template-rows,opacity] duration-300 motion-reduce:transition-none lg:absolute lg:inset-y-0 lg:right-0 lg:left-[calc(38%_+_0.85rem)] lg:block lg:overflow-hidden lg:rounded-[1.7rem] lg:bg-black/18 lg:px-7 lg:py-8 lg:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] xl:px-12 " + (isActive ? "grid-rows-[1fr] opacity-100" : "pointer-events-none grid-rows-[0fr] opacity-0")}
              >
                <div className="min-h-0 overflow-hidden">
                  <div className="px-4 pb-6 pt-4 sm:px-5 lg:flex lg:h-full lg:items-center lg:p-0">
                    <div className="relative z-10 max-w-3xl">
                      <div className="hidden items-center gap-4 lg:flex">
                        <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/12 text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"><HelpCircle className="size-6" /></span>
                        <div>
                          <span className="font-mono text-base uppercase text-primary">{answerLabel} / {String(index + 1).padStart(2, "0")} of {questionCount}</span>
                          <span className="mt-1 block font-mono text-base uppercase text-white/32">{entry.knowledgeCategory ?? entry.category} knowledge</span>
                        </div>
                      </div>
                      <h3 className="hidden text-3xl font-bold leading-tight text-white lg:mt-7 lg:block">{entry.question}</h3>
                      {entry.conclusion && <p className="font-semibold leading-[1.65] text-white/86 lg:mt-6 lg:text-lg">{entry.conclusion}</p>}
                      <p className={entry.conclusion ? "mt-3 text-base leading-[1.8] text-white/60 lg:mt-4 lg:leading-[1.9]" : "text-base leading-[1.8] text-white/62 lg:mt-6 lg:leading-[1.9]"}>{entry.answer}</p>
                      <div className="mt-5 flex flex-wrap gap-2 lg:mt-8">{entry.tags.map((tag) => <span key={tag} className="rounded-full bg-black/20 px-3 py-2 text-base text-white/55 lg:bg-white/[0.05] lg:px-4">{tag}</span>)}</div>
                      <div className="mt-5 flex items-center gap-2 font-mono text-base uppercase text-primary lg:mt-9 lg:gap-3"><ShieldCheck className="size-5" />Answer verified</div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}
