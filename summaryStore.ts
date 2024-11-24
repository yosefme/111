import { create } from 'zustand';
import { SummaryState } from '../types';

export const useSummaryStore = create<SummaryState>((set, get) => ({
  summaries: [],
  isLoading: false,
  error: null,

  createSummary: async (content: string, type: 'text' | 'url' | 'file') => {
    set({ isLoading: true, error: null });
    try {
      // Mock API call - replace with actual OpenAI implementation
      const summary = {
        id: Date.now().toString(),
        userId: '1',
        title: 'Summary ' + new Date().toLocaleDateString(),
        originalContent: content,
        summary: 'This is a mock summary. Replace with actual OpenAI response.',
        createdAt: new Date().toISOString(),
        contentType: type,
      };
      
      set((state) => ({
        summaries: [summary, ...state.summaries],
      }));
    } catch (error) {
      set({ error: 'Failed to create summary' });
    } finally {
      set({ isLoading: false });
    }
  },

  getSummaries: async () => {
    set({ isLoading: true, error: null });
    try {
      // Mock API call - replace with actual implementation
      const mockSummaries = [];
      set({ summaries: mockSummaries });
    } catch (error) {
      set({ error: 'Failed to fetch summaries' });
    } finally {
      set({ isLoading: false });
    }
  },
}));