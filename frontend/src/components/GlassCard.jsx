function GlassCard({
                       children,
                       className = "",
                       glow = false,
                       hover = true,
                   }) {
    return (
        <div
            className={`
        relative overflow-hidden
        rounded-2xl
        border border-white/10
        bg-white/[0.04]
        backdrop-blur-xl
        shadow-2xl shadow-black/20

        ${
                hover
                    ? "transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/20 hover:bg-white/[0.06] hover:shadow-purple-500/5"
                    : ""
            }

        ${glow ? "sakura-glow-animation" : ""}

        ${className}
      `}
        >
            {/* Top Gradient Line */}
            <div
                className="
          pointer-events-none
          absolute left-0 right-0 top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-purple-400/40
          to-transparent
        "
            />

            {/* Background Glow */}
            <div
                className="
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-32
          w-32
          rounded-full
          bg-purple-500/10
          blur-3xl
        "
            />

            {/* Content */}
            <div className="relative">
                {children}
            </div>
        </div>
    );
}

export default GlassCard;