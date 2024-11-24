import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, Crown } from 'lucide-react';
import { Button } from '../components/Button';
import { ContentUploader } from '../components/ContentUploader';
import { SummaryList } from '../components/SummaryList';
import { useAuthStore } from '../store/authStore';
import { useSummaryStore } from '../store/summaryStore';

export function DashboardPage() {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const getSummaries = useSummaryStore((state) => state.getSummaries);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    getSummaries();
  }, [user, navigate, getSummaries]);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Brain className="h-8 w-8 text-indigo-600" />
              <h1 className="text-xl font-bold">Academe</h1>
            </div>
            {!user.isPremium && (
              <Button to="/upgrade" variant="primary" icon>
                <Crown className="h-4 w-4 mr-1" />
                Upgrade to Premium
              </Button>
            )}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Upload Content</h2>
            <ContentUploader />
            {!user.isPremium && (
              <p className="text-sm text-gray-500 mt-4">
                Free users can create up to 5 summaries per month.
                <Button to="/upgrade" variant="secondary" className="ml-2">
                  Upgrade for unlimited access
                </Button>
              </p>
            )}
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-6">Your Summaries</h2>
            <SummaryList />
          </div>
        </div>
      </main>
    </div>
  );
}