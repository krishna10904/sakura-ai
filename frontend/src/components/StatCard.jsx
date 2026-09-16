import { ArrowUpRight } from "lucide-react";

function StatCard({
                      title,
                      value,
                      subtitle,
                      icon: Icon,
                      progress,
                  }) {
    return (
        <div
            className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-[#11111a]
        p-5
        transition-all
        duration-300
        ease-out
        hover:-translate-y-1
        hover:border-purple-500/30
        hover:bg-[#151520]
        hover:shadow-xl
        hover:shadow-purple-500/5
      "
        >
            {/* Background Glow */}

            <div
                className="
          pointer-events-none
          absolute
          -right-10
          -top-10
          h-24
          w-24
          rounded-full
          bg-purple-500/10
          blur-3xl
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
            />

            {/* Content */}

            <div className="relative">

                <div className="flex items-start justify-between">

                    {/* Text */}

                    <div>

                        <p className="text-sm text-gray-500">
                            {title}
                        </p>

                        <h3
                            className="
                mt-2
                text-3xl
                font-bold
                text-white
                transition-colors
                duration-300
                group-hover:text-purple-100
              "
                        >
                            {value}
                        </h3>

                    </div>

                    {/* Icon */}

                    {Icon && (
                        <div
                            className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-purple-500/10
                text-purple-400
                transition-all
                duration-300
                group-hover:scale-110
                group-hover:bg-purple-500/20
                group-hover:text-purple-300
              "
                        >
                            <Icon size={20} />
                        </div>
                    )}

                </div>

                {/* Subtitle */}

                {subtitle && (
                    <div className="mt-4 flex items-center gap-1">

                        <ArrowUpRight
                            size={14}
                            className="
                text-green-400
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
                        />

                        <span className="text-xs text-gray-500">
              {subtitle}
            </span>

                    </div>
                )}

                {/* Progress */}

                {progress !== undefined && (
                    <div className="mt-4">

                        <div className="h-1.5 overflow-hidden rounded-full bg-white/5">

                            <div
                                className="
                  h-full
                  rounded-full
                  bg-gradient-to-r
                  from-purple-500
                  to-pink-500
                  transition-all
                  duration-700
                  ease-out
                "
                                style={{
                                    width: `${progress}%`,
                                }}
                            />

                        </div>

                    </div>
                )}

            </div>
        </div>
    );
}

export default StatCard;