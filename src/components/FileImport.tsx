import React, { useCallback } from 'react';
import { Upload } from 'lucide-react';

interface FileImportProps {
  onFileImport: (files: File[]) => void;
}

export function FileImport({ onFileImport }: FileImportProps) {
  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const files = Array.from(e.dataTransfer.files);
    onFileImport(files);
  }, [onFileImport]);

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    onFileImport(files);
  }, [onFileImport]);

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center"
    >
      <Upload className="mx-auto h-12 w-12 text-gray-400" />
      <p className="mt-2 text-sm text-gray-600">
        Drag and drop your files here, or
        <label className="ml-1 text-blue-500 hover:text-blue-600 cursor-pointer">
          browse
          <input
            type="file"
            className="hidden"
            accept=".xlsx,.xls,.csv"
            onChange={handleFileChange}
            multiple
          />
        </label>
      </p>
      <p className="mt-1 text-xs text-gray-500">
        Supports Excel and CSV files
      </p>
    </div>
  );
}