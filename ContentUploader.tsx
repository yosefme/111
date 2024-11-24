import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload } from 'lucide-react';
import { useSummaryStore } from '../store/summaryStore';
import { toast } from 'react-hot-toast';

export function ContentUploader() {
  const createSummary = useSummaryStore((state) => state.createSummary);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const text = e.target?.result as string;
        try {
          await createSummary(text, 'file');
          toast.success('Content uploaded successfully!');
        } catch (error) {
          toast.error('Failed to process content');
        }
      };
      reader.readAsText(file);
    }
  }, [createSummary]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'text/*': ['.txt', '.md'],
    },
    maxFiles: 1,
  });

  return (
    <div
      {...getRootProps()}
      className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-indigo-500 transition-colors cursor-pointer"
    >
      <input {...getInputProps()} />
      <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
      {isDragActive ? (
        <p className="text-lg text-gray-600">Drop your content here...</p>
      ) : (
        <div>
          <p className="text-lg text-gray-600 mb-2">
            Drag & drop your content here, or click to select
          </p>
          <p className="text-sm text-gray-500">
            Supported formats: .txt, .md
          </p>
        </div>
      )}
    </div>
  );
}