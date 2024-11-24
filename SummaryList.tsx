import React from 'react';
import { FileText, Clock } from 'lucide-react';
import { useSummaryStore } from '../store/summaryStore';

export function SummaryList() {
  const { summaries, isLoading } = useSummaryStore();

  if (isLoading) {
    return <div className="text-center py-8">Loading summaries...</div>;
  }

  if (summaries.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No summaries yet. Upload some content to get started!
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {summaries.map((summary) => (
        <div
          key={summary.id}
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-indigo-600" />
              <h3 className="font-semibold text-lg">{summary.title}</h3>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="h-4 w-4 mr-1" />
              {new Date(summary.createdAt).toLocaleDateString()}
            </div>
          </div>
          <p className="mt-4 text-gray-600">{summary.summary}</p>
        </div>
      ))}
    </div>
  );
}