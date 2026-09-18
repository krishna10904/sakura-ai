import { useRef, useState } from "react";
import {
    Upload,
    FileText,
    X,
    CheckCircle2,
    CloudUpload,
} from "lucide-react";

function FileUpload() {
    const fileInputRef = useRef(null);

    const [file, setFile] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [uploaded, setUploaded] = useState(false);

    const handleFile = (selectedFile) => {
        if (!selectedFile) return;

        const allowedTypes = [
            "application/pdf",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            "text/plain",
        ];

        if (!allowedTypes.includes(selectedFile.type)) {
            alert("Please upload a PDF, DOCX, or TXT file.");
            return;
        }

        setFile(selectedFile);
        setUploaded(false);
    };

    const handleInputChange = (event) => {
        const selectedFile = event.target.files?.[0];
        handleFile(selectedFile);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (event) => {
        event.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        setIsDragging(false);

        const droppedFile = event.dataTransfer.files?.[0];
        handleFile(droppedFile);
    };

    const handleUpload = () => {
        if (!file) return;

        setUploading(true);

        setTimeout(() => {
            setUploading(false);
            setUploaded(true);
        }, 1500);
    };

    const removeFile = () => {
        setFile(null);
        setUploaded(false);

        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const formatFileSize = (bytes) => {
        if (bytes < 1024) {
            return `${bytes} B`;
        }

        if (bytes < 1024 * 1024) {
            return `${(bytes / 1024).toFixed(1)} KB`;
        }

        return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    };

    return (
        <div className="w-full">
            {/* Upload Area */}
            {!file && (
                <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className={`
            group relative cursor-pointer overflow-hidden rounded-2xl
            border border-dashed p-8 text-center
            transition-all duration-300
            ${
                        isDragging
                            ? "border-purple-400 bg-purple-500/10 shadow-lg shadow-purple-500/10"
                            : "border-white/10 bg-white/[0.02] hover:border-purple-500/40 hover:bg-purple-500/[0.04]"
                    }
          `}
                >
                    {/* Glow */}
                    <div
                        className="
              pointer-events-none absolute left-1/2 top-1/2
              h-32 w-32 -translate-x-1/2 -translate-y-1/2
              rounded-full bg-purple-500/10 blur-3xl
              transition-opacity duration-300
              group-hover:opacity-100
            "
                    />

                    <div className="relative">
                        <div
                            className="
                mx-auto flex h-14 w-14 items-center justify-center
                rounded-2xl bg-purple-500/10 text-purple-400
                transition-all duration-300
                group-hover:scale-110 group-hover:bg-purple-500/20
              "
                        >
                            {isDragging ? (
                                <CloudUpload size={26} />
                            ) : (
                                <Upload size={26} />
                            )}
                        </div>

                        <h3 className="mt-5 text-sm font-semibold text-white">
                            {isDragging
                                ? "Drop your file here"
                                : "Upload a document"}
                        </h3>

                        <p className="mt-2 text-sm text-gray-500">
                            Drag & drop or click to browse
                        </p>

                        <p className="mt-3 text-xs text-gray-600">
                            Supported: PDF, DOCX, TXT
                        </p>
                    </div>
                </div>
            )}

            {/* Hidden File Input */}
            <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.docx,.txt"
                onChange={handleInputChange}
                className="hidden"
            />

            {/* Selected File */}
            {file && (
                <div
                    className="
            rounded-2xl border border-white/10
            bg-[#11111a] p-4
            transition-all duration-300
          "
                >
                    <div className="flex items-center gap-4">
                        {/* File Icon */}
                        <div
                            className="
                flex h-12 w-12 shrink-0 items-center
                justify-center rounded-xl
                bg-pink-500/10 text-pink-400
              "
                        >
                            <FileText size={22} />
                        </div>

                        {/* File Information */}
                        <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium text-white">
                                {file.name}
                            </p>

                            <p className="mt-1 text-xs text-gray-500">
                                {formatFileSize(file.size)}
                            </p>
                        </div>

                        {/* Status */}
                        {uploaded ? (
                            <div className="flex items-center gap-2 text-green-400">
                                <CheckCircle2 size={20} />
                                <span className="hidden text-xs sm:block">
                  Uploaded
                </span>
                            </div>
                        ) : (
                            <button
                                type="button"
                                onClick={removeFile}
                                className="
                  flex h-8 w-8 items-center justify-center
                  rounded-lg text-gray-500
                  transition-all duration-200
                  hover:bg-red-500/10
                  hover:text-red-400
                "
                                title="Remove file"
                            >
                                <X size={18} />
                            </button>
                        )}
                    </div>

                    {/* Upload Progress */}
                    {uploading && (
                        <div className="mt-4">
                            <div className="mb-2 flex items-center justify-between">
                <span className="text-xs text-gray-500">
                  Uploading...
                </span>

                                <span className="text-xs text-purple-400">
                  Processing
                </span>
                            </div>

                            <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                                <div
                                    className="
                    h-full w-full origin-left
                    animate-pulse rounded-full
                    bg-gradient-to-r from-purple-500 to-pink-500
                  "
                                />
                            </div>
                        </div>
                    )}

                    {/* Upload Button */}
                    {!uploaded && (
                        <button
                            type="button"
                            onClick={handleUpload}
                            disabled={uploading}
                            className="
                mt-4 flex w-full items-center justify-center
                gap-2 rounded-xl
                bg-purple-600 px-4 py-3
                text-sm font-medium text-white
                shadow-lg shadow-purple-500/10
                transition-all duration-200
                hover:bg-purple-500
                active:scale-[0.98]
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
                        >
                            <Upload size={16} />

                            {uploading
                                ? "Uploading..."
                                : "Upload Document"}
                        </button>
                    )}

                    {/* Success Message */}
                    {uploaded && (
                        <div
                            className="
                mt-4 rounded-xl border border-green-500/10
                bg-green-500/5 px-4 py-3
              "
                        >
                            <p className="text-xs leading-5 text-green-400">
                                ✓ Document uploaded successfully. Sakura can now
                                use this document for AI-powered answers.
                            </p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default FileUpload;