import { useEffect } from "react";
import { X } from "lucide-react";

function Modal({
                   isOpen,
                   onClose,
                   title,
                   description,
                   children,
                   size = "medium",
               }) {
    useEffect(() => {
        if (!isOpen) return;

        const handleEscape = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleEscape);

        // Prevent background scrolling
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "";
        };
    }, [isOpen, onClose]);

    if (!isOpen) {
        return null;
    }

    const sizes = {
        small: "max-w-md",
        medium: "max-w-xl",
        large: "max-w-3xl",
        xlarge: "max-w-5xl",
    };

    const handleBackdropClick = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            onClick={handleBackdropClick}
            className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/70
        p-4
        backdrop-blur-sm
        animate-in
        fade-in
        duration-200
      "
        >
            {/* Modal */}
            <div
                className={`
          relative w-full ${sizes[size]}
          max-h-[90vh]
          overflow-hidden
          rounded-2xl
          border border-white/10
          bg-[#11111a]/95
          shadow-2xl
          shadow-purple-500/10
          backdrop-blur-xl
          animate-in
          zoom-in-95
          duration-200
        `}
            >
                {/* Background Glow */}
                <div
                    className="
            pointer-events-none
            absolute
            -right-20
            -top-20
            h-40
            w-40
            rounded-full
            bg-purple-500/10
            blur-3xl
          "
                />

                <div className="relative">
                    {/* Header */}
                    <div
                        className="
              flex items-start
              justify-between
              border-b border-white/10
              px-5 py-4
              sm:px-6
            "
                    >
                        <div className="pr-8">
                            {title && (
                                <h2 className="text-lg font-semibold text-white">
                                    {title}
                                </h2>
                            )}

                            {description && (
                                <p className="mt-1 text-sm leading-5 text-gray-500">
                                    {description}
                                </p>
                            )}
                        </div>

                        {/* Close Button */}
                        <button
                            type="button"
                            onClick={onClose}
                            className="
                flex h-9 w-9
                shrink-0
                items-center
                justify-center
                rounded-lg
                text-gray-500
                transition-all
                duration-200
                hover:bg-white/5
                hover:text-white
                active:scale-95
              "
                            title="Close"
                        >
                            <X size={19} />
                        </button>
                    </div>

                    {/* Content */}
                    <div
                        className="
              max-h-[calc(90vh-80px)]
              overflow-y-auto
              p-5
              sm:p-6
            "
                    >
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;