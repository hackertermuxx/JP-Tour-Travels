"use client";

import { useState, useRef } from "react";
import { Upload, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface MediaUploaderProps {
  onUpload?: (files: File[]) => void;
  multiple?: boolean;
  accept?: string;
  maxSize?: number;
}

export function MediaUploader({
  onUpload,
  multiple = true,
  accept = "image/*",
  maxSize = 5,
}: MediaUploaderProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [previews, setPreviews] = useState<string[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleFiles = (files: FileList) => {
    const validFiles = Array.from(files).filter(
      (f) => f.size <= maxSize * 1024 * 1024
    );
    const newPreviews = validFiles.map((f) => URL.createObjectURL(f));
    setPreviews((prev) => [...prev, ...newPreviews]);
    onUpload?.(validFiles);
  };

  return (
    <div className="space-y-4">
      <div
        onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
        onDragLeave={() => setIsDragOver(false)}
        onDrop={(e) => { e.preventDefault(); setIsDragOver(false); handleFiles(e.dataTransfer.files); }}
        onClick={() => inputRef.current?.click()}
        className={cn(
          "flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed p-8 transition-colors",
          isDragOver ? "border-primary bg-primary/5" : "border-muted-foreground/25 hover:border-muted-foreground/50"
        )}
      >
        <Upload className="mb-2 h-8 w-8 text-muted-foreground" />
        <p className="text-sm font-medium">Drop files here or click to upload</p>
        <p className="mt-1 text-xs text-muted-foreground">
          PNG, JPG, WebP up to {maxSize}MB
        </p>
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          className="hidden"
          onChange={(e) => e.target.files && handleFiles(e.target.files)}
        />
      </div>

      {previews.length > 0 && (
        <div className="grid grid-cols-4 gap-3 sm:grid-cols-6 md:grid-cols-8">
          {previews.map((src, i) => (
            <div key={i} className="group relative aspect-square overflow-hidden rounded-lg bg-muted">
              <img src={src} alt={`Preview ${i}`} className="h-full w-full object-cover" />
              <button
                onClick={() => setPreviews((prev) => prev.filter((_, j) => j !== i))}
                className="absolute right-1 top-1 rounded-full bg-black/50 p-1 text-white opacity-0 transition-opacity group-hover:opacity-100"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
