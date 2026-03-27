"use client"

import { type Dispatch, type SetStateAction } from "react"

interface LetterData {
  from: string
  to: string
  writtenDate: string
  deliveryDate: string
  content: string
}

interface LetterPaperProps {
  letterData: LetterData
  setLetterData: Dispatch<SetStateAction<LetterData>>
  isSealed: boolean
}

export function LetterPaper({ letterData, setLetterData, isSealed }: LetterPaperProps) {
  const updateField = (field: keyof LetterData, value: string) => {
    setLetterData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="relative">
      {/* Paper texture overlay */}
      <div className="absolute inset-0 bg-[url('/paper-texture.png')] opacity-5 pointer-events-none rounded-lg" />
      
      <div className="relative bg-card border border-border rounded-lg shadow-lg p-8 sm:p-12">
        {/* Decorative top border */}
        <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
        
        {/* Header fields */}
        <div className="grid sm:grid-cols-2 gap-6 mb-8 pb-8 border-b border-border/50">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-muted-foreground">
              De:
            </label>
            <input
              type="text"
              value={letterData.from}
              onChange={(e) => updateField("from", e.target.value)}
              disabled={isSealed}
              placeholder="Seu nome"
              className="w-full bg-transparent border-b border-border/50 focus:border-accent outline-none py-2 text-foreground placeholder:text-muted-foreground/50 transition-colors disabled:opacity-50"
            />
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-muted-foreground">
              Para:
            </label>
            <input
              type="text"
              value={letterData.to}
              onChange={(e) => updateField("to", e.target.value)}
              disabled={isSealed}
              placeholder="Eu do futuro"
              className="w-full bg-transparent border-b border-border/50 focus:border-accent outline-none py-2 text-foreground placeholder:text-muted-foreground/50 transition-colors disabled:opacity-50"
            />
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-muted-foreground">
              Data de escrita:
            </label>
            <input
              type="date"
              value={letterData.writtenDate}
              onChange={(e) => updateField("writtenDate", e.target.value)}
              disabled={isSealed}
              className="w-full bg-transparent border-b border-border/50 focus:border-accent outline-none py-2 text-foreground transition-colors disabled:opacity-50"
            />
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-muted-foreground">
              Entregar em:
            </label>
            <input
              type="date"
              value={letterData.deliveryDate}
              onChange={(e) => updateField("deliveryDate", e.target.value)}
              disabled={isSealed}
              min={new Date().toISOString().split("T")[0]}
              className="w-full bg-transparent border-b border-border/50 focus:border-accent outline-none py-2 text-foreground transition-colors disabled:opacity-50"
            />
          </div>
        </div>

        {/* Letter content */}
        <div className="space-y-4">
          <textarea
            value={letterData.content}
            onChange={(e) => updateField("content", e.target.value)}
            disabled={isSealed}
            placeholder="Querido eu do futuro..."
            rows={12}
            className="w-full bg-transparent resize-none outline-none text-foreground placeholder:text-muted-foreground/50 leading-relaxed disabled:opacity-50"
            style={{
              backgroundImage: "repeating-linear-gradient(transparent, transparent 31px, var(--border) 31px, var(--border) 32px)",
              lineHeight: "32px",
            }}
          />
        </div>

        {/* Decorative bottom border */}
        <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
        
        {/* Sealed stamp overlay */}
        {isSealed && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-accent/90 text-accent-foreground px-8 py-4 rounded-full font-serif text-2xl font-bold transform -rotate-12 shadow-lg">
              LACRADA
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
