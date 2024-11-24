import React from 'react';
import { Check } from 'lucide-react';
import { Button } from './Button';
import { useAuthStore } from '../store/authStore';

export function PricingSection() {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="bg-gradient-to-b from-indigo-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-600">Choose the plan that works best for you</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Tier */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Free</h3>
            <p className="text-4xl font-bold mb-6">$0<span className="text-lg text-gray-500">/mo</span></p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-500" />
                <span>Basic content summarization</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-500" />
                <span>Up to 5 summaries per month</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-500" />
                <span>Text file support</span>
              </li>
            </ul>
            <Button variant="secondary" to={user ? '/dashboard' : '/register'} icon>
              {user ? 'Go to Dashboard' : 'Get Started'}
            </Button>
          </div>

          {/* Premium Tier */}
          <div className="bg-indigo-600 rounded-xl shadow-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Premium</h3>
            <p className="text-4xl font-bold mb-6">$9<span className="text-lg opacity-75">/mo</span></p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5" />
                <span>Advanced AI summarization</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5" />
                <span>Unlimited summaries</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5" />
                <span>PDF & URL support</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5" />
                <span>Custom learning paths</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5" />
                <span>Priority support</span>
              </li>
            </ul>
            <Button
              variant="secondary"
              className="bg-white text-indigo-600 hover:bg-indigo-50"
              to={user ? '/upgrade' : '/register'}
              icon
            >
              {user ? 'Upgrade Now' : 'Start Free Trial'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}