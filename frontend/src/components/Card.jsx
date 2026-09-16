function Card({ children, className = "" }) {
    return (
        <div
            className={`
        group
        rounded-2xl
        border
        border-white/10
        bg-[#11111a]
        p-6
        transition-all
        duration-300
        ease-out
        hover:-translate-y-1
        hover:border-purple-500/20
        hover:bg-[#151520]
        hover:shadow-xl
        hover:shadow-purple-500/5
        ${className}
      `}
        >
            {children}
        </div>
    );
}

export default Card;