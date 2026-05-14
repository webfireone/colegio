interface TooltipProps {
  texto: string
  children: React.ReactNode
  visible: boolean
}

export function TooltipAyuda({ texto, children, visible }: TooltipProps) {
  if (!visible) return <>{children}</>

  return (
    <div className="relative group">
      {children}
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full bg-[var(--color-institucional)] text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg z-50 pointer-events-none">
        {texto}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[var(--color-institucional)] rotate-45" />
      </div>
    </div>
  )
}
