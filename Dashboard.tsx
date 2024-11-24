import React from 'react';
import { Upload, BookOpen, Trophy } from 'lucide-react';
import { Button } from './Button';

export function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back!</h1>
        <p className="text-gray-600">Continue your learning journey</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <Upload className="h-8 w-8 text-indigo-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Upload Content</h3>
          <p className="text-gray-600 mb-4">Import videos or documents to start learning</p>
          <Button variant="primary" icon>
            Upload Now
          </Button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <BookOpen className="h-8 w-8 text-indigo-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Recent Summaries</h3>
          <p className="text-gray-600 mb-4">Continue where you left off</p>
          <Button variant="secondary">View All</Button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <Trophy className="h-8 w-8 text-indigo-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Your Progress</h3>
          <p className="text-gray-600 mb-4">Track your learning achievements</p>
          <Button variant="secondary">View Stats</Button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
        <div className="space-y-4">
          {/* Placeholder for recent activity items */}
          <p className="text-gray-600">No recent activity yet. Start learning to see your progress!</p>
        </div>
      </div>
    </div>
  );
}