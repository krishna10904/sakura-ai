import { useState } from "react";
import { Sparkles, FileText } from "lucide-react";

import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";
import Modal from "../components/Modal.jsx";

function ModalDemo() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="min-h-full bg-[#09090f] p-4 sm:p-6 lg:p-8">
            {/* Header */}
            <div className="mb-8">
                <p className="text-xs font-medium uppercase tracking-widest text-purple-400 sm:text-sm">
                    UI Components
                </p>

                <h1 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                    Glassmorphism <span className="sakura-gradient-text">Modal</span>
                </h1>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-400">
                    A reusable Sakura AI modal component for previews,
                    confirmations, AI results and document analysis.
                </p>
            </div>

            {/* Demo Card */}
            <Card className="max-w-2xl">
                <div className="flex items-start gap-4">
                    <div
                        className="
              flex h-12 w-12 shrink-0 items-center
              justify-center rounded-xl
              bg-purple-500/10 text-purple-400
            "
                    >
                        <FileText size={22} />
                    </div>

                    <div className="flex-1">
                        <h2 className="font-semibold text-white">
                            Document Preview
                        </h2>

                        <p className="mt-1 text-sm leading-6 text-gray-500">
                            Click the button below to preview how Sakura AI
                            will display document-related information.
                        </p>

                        <div className="mt-5">
                            <Button
                                icon={Sparkles}
                                onClick={() => setIsOpen(true)}
                            >
                                Open Preview
                            </Button>
                        </div>
                    </div>
                </div>
            </Card>

            {/* Modal */}
            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title="Document Analysis"
                description="Sakura AI has analyzed your document."
                size="medium"
            >
                <div className="space-y-5">
                    {/* Document */}
                    <div
                        className="
              rounded-xl border border-white/10
              bg-white/[0.03] p-4
            "
                    >
                        <div className="flex items-center gap-3">
                            <div
                                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-lg bg-pink-500/10 text-pink-400
                "
                            >
                                <FileText size={19} />
                            </div>

                            <div>
                                <p className="text-sm font-medium text-white">
                                    Krishna_Resume.pdf
                                </p>

                                <p className="mt-1 text-xs text-gray-600">
                                    PDF • 1.2 MB
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* AI Insight */}
                    <div
                        className="
              rounded-xl border border-purple-500/10
              bg-purple-500/[0.05] p-4
            "
                    >
                        <div className="flex items-center gap-2">
                            <Sparkles
                                size={16}
                                className="text-purple-400"
                            />

                            <h3 className="text-sm font-semibold text-white">
                                Sakura's Insight
                            </h3>
                        </div>

                        <p className="mt-3 text-sm leading-6 text-gray-400">
                            This document contains your resume information.
                            Sakura can use it later to compare your skills
                            against job descriptions and generate personalized
                            career recommendations.
                        </p>
                    </div>

                    {/* Skills */}
                    <div>
                        <h3 className="text-sm font-semibold text-white">
                            Detected Skills
                        </h3>

                        <div className="mt-3 flex flex-wrap gap-2">
                            {[
                                "React",
                                "JavaScript",
                                "Node.js",
                                "MongoDB",
                                "Java",
                                "DSA",
                            ].map((skill) => (
                                <span
                                    key={skill}
                                    className="
                    rounded-full border border-white/10
                    bg-white/[0.03]
                    px-3 py-1.5
                    text-xs text-gray-400
                  "
                                >
                  {skill}
                </span>
                            ))}
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="flex justify-end border-t border-white/10 pt-5">
                        <Button
                            variant="secondary"
                            onClick={() => setIsOpen(false)}
                        >
                            Close
                        </Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default ModalDemo;