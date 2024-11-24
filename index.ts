export interface User {
  id: string;
  email: string;
  name: string;
  isPremium: boolean;
}

export interface Summary {
  id: string;
  userId: string;
  title: string;
  originalContent: string;
  summary: string;
  createdAt: string;
  contentType: 'text' | 'url' | 'file';
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
}

export interface SummaryState {
  summaries: Summary[];
  isLoading: boolean;
  error: string | null;
  createSummary: (content: string, type: 'text' | 'url' | 'file') => Promise<void>;
  getSummaries: () => Promise<void>;
}