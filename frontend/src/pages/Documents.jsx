import {
    FileText,
    FileCode2,
    File,
    Search,
    Sparkles,
    Clock3,
} from "lucide-react";

import Card from "../components/Card.jsx";
import FileUpload from "../components/FileUpload.jsx";

const documents = [
    {
        name: "Krishna_Resume.pdf",
        type: "PDF",
        size: "1.2 MB",
        date: "Today",
        icon: FileText,
    },
    {
        name: "DSA_Notes.pdf",
        type: "PDF",
        size: "2.8 MB",
        date: "Yesterday",
        icon: FileText,
    },
    {
        name: "React_Revision.txt",
        type: "TXT",
        size: "18 KB",
        date: "2 days ago",
        icon: FileCode2,
    },
];

function Documents() {
    return (
        <div className="min-h-full bg-[#09090f] p-4 sm:p-6 lg:p-8">
            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center gap-2">
                    <Sparkles
                        size={18}
                        className="text-purple-400"
                    />

                    <p className="text-xs font-medium uppercase tracking-widest text-purple-400 sm:text-sm">
                        Knowledge Base
                    </p>
                </div>

                <h1 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    Your <span className="sakura-gradient-text">Documents</span>
                </h1>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
                    Upload your notes, resume, and study material. Sakura can
                    use these documents to give you context-aware answers.
                </p>
            </div>

            {/* Upload Section */}
            <Card className="mb-6">
                <div className="mb-5">
                    <h2 className="font-semibold text-white">
                        Upload Document
                    </h2>

                    <p className="mt-1 text-xs text-gray-500">
                        Add documents to your Sakura AI knowledge base.
                    </p>
                </div>

                <FileUpload />
            </Card>

            {/* Search + Documents */}
            <Card>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h2 className="font-semibold text-white">
                            Your Knowledge Base
                        </h2>

                        <p className="mt-1 text-xs text-gray-500">
                            {documents.length} documents available
                        </p>
                    </div>

                    <div className="relative w-full sm:w-64">
                        <Search
                            size={16}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"
                        />

                        <input
                            type="text"
                            placeholder="Search documents..."
                            className="
                w-full rounded-xl border border-white/10
                bg-white/[0.03] py-2.5 pl-9 pr-3
                text-sm text-white
                placeholder:text-gray-600
                outline-none
                transition-all
                focus:border-purple-500/40
                focus:ring-2
                focus:ring-purple-500/10
              "
                        />
                    </div>
                </div>

                {/* Document List */}
                <div className="mt-6 space-y-3">
                    {documents.map((document) => {
                        const Icon = document.icon;

                        return (
                            <div
                                key={document.name}
                                className="
                  group flex flex-col gap-4 rounded-xl
                  border border-white/5
                  bg-white/[0.02]
                  p-4
                  transition-all duration-200
                  hover:border-purple-500/20
                  hover:bg-white/[0.04]
                  sm:flex-row sm:items-center
                "
                            >
                                {/* Icon */}
                                <div
                                    className="
                    flex h-11 w-11 shrink-0 items-center
                    justify-center rounded-xl
                    bg-purple-500/10
                    text-purple-400
                    transition-all duration-200
                    group-hover:scale-105
                    group-hover:bg-purple-500/20
                  "
                                >
                                    <Icon size={21} />
                                </div>

                                {/* Information */}
                                <div className="min-w-0 flex-1">
                                    <p className="truncate text-sm font-medium text-white">
                                        {document.name}
                                    </p>

                                    <div className="mt-1 flex flex-wrap items-center gap-3">
                    <span className="text-xs text-gray-600">
                      {document.type}
                    </span>

                                        <span className="text-xs text-gray-600">
                      {document.size}
                    </span>

                                        <span className="flex items-center gap-1 text-xs text-gray-600">
                      <Clock3 size={12} />
                                            {document.date}
                    </span>
                                    </div>
                                </div>

                                {/* Status */}
                                <div
                                    className="
                    flex w-fit items-center gap-2
                    rounded-full border
                    border-green-500/10
                    bg-green-500/5
                    px-3 py-1.5
                  "
                                >
                                    <span className="h-1.5 w-1.5 rounded-full bg-green-400" />

                                    <span className="text-xs text-green-400">
                    Ready
                  </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Card>

            {/* RAG Info */}
            <div
                className="
          mt-6 rounded-2xl border border-purple-500/10
          bg-gradient-to-r from-purple-500/[0.06]
          to-pink-500/[0.04]
          p-5
        "
            >
                <div className="flex gap-4">
                    <div
                        className="
              flex h-10 w-10 shrink-0 items-center
              justify-center rounded-xl
              bg-purple-500/10 text-purple-400
            "
                    >
                        <Sparkles size={19} />
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-white">
                            Sakura Knowledge Engine
                        </h3>

                        <p className="mt-1 text-xs leading-5 text-gray-500">
                            Your documents will eventually be processed into
                            searchable knowledge so Sakura can answer questions
                            using your own uploaded content.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Documents;