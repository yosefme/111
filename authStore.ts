import { create } from 'zustand';
import { AuthState } from '../types';

// This is a mock implementation. Replace with actual API calls.
export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: false,

  login: async (email: string, password: string) => {
    set({ isLoading: true });
    try {
      // Mock API call - replace with actual implementation
      const mockUser = {
        id: '1',
        email,
        name: 'John Doe',
        isPremium: false,
      };
      set({ user: mockUser });
    } catch (error) {
      throw new Error('Login failed');
    } finally {
      set({ isLoading: false });
    }
  },

  register: async (email: string, password: string, name: string) => {
    set({ isLoading: true });
    try {
      // Mock API call - replace with actual implementation
      const mockUser = {
        id: '1',
        email,
        name,
        isPremium: false,
      };
      set({ user: mockUser });
    } catch (error) {
      throw new Error('Registration failed');
    } finally {
      set({ isLoading: false });
    }
  },

  logout: () => {
    set({ user: null });
  },
}));