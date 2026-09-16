function ProgressBar({
                         value = 0,
                         label,
                         showValue = true,
                     }) {
    const progress = Math.min(Math.max(value, 0), 100);

    return (
        <div className="w-full">
            {label && (
                <div className="mb-2 flex items-center justify-between">
          <span className="text-sm text-gray-400">
            {label}
          </span>

                    {showValue && (
                        <span className="text-xs font-medium text-gray-500">
              {progress}%
            </span>
                    )}
                </div>
            )}

            <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
                <div
                    className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"
                    style={{
                        width: `${progress}%`,
                    }}
                />
            </div>
        </div>
    );
}

export default ProgressBar;