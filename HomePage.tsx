import React from 'react';
import { Brain, BookOpen, Trophy, Rocket, Youtube, FileText, Target, ChevronRight } from 'lucide-react';
import { Button } from '../components/Button';
import { FeatureCard } from '../components/FeatureCard';

export function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 pt-20 pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Brain className="h-16 w-16 text-indigo-600" />
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Transform Your Learning Journey with AI
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Supercharge your studies with AI-powered summaries, interactive quizzes, and personalized learning paths.
          </p>
          <div className="flex gap-4 justify-center">
            <Button to="/register" variant="primary" icon>
              Get Started Free
            </Button>
            <Button variant="secondary">
              Watch Demo
            </Button>
          </div>
        </div>
      </header>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Powerful Learning Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <FeatureCard
            icon={Youtube}
            title="Smart Content Summaries"
            description="Transform videos and documents into concise, actionable summaries powered by AI."
          />
          <FeatureCard
            icon={Target}
            title="Adaptive Quizzes"
            description="Test your knowledge with AI-generated quizzes that adapt to your learning style."
          />
          <FeatureCard
            icon={Trophy}
            title="Gamified Learning"
            description="Stay motivated with achievements, streaks, and friendly competition."
          />
          <FeatureCard
            icon={FileText}
            title="Practice Tools"
            description="Master concepts with flashcards and interactive exercises tailored to you."
          />
          <FeatureCard
            icon={Rocket}
            title="Learning Paths"
            description="Follow personalized learning tracks designed for your educational goals."
          />
          <FeatureCard
            icon={BookOpen}
            title="Progress Tracking"
            description="Monitor your improvement with detailed analytics and insights."
          />
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-indigo-900 text-white py-16 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Trusted by Students Worldwide</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-indigo-800/50 p-6 rounded-lg">
              <p className="text-4xl font-bold mb-2">50K+</p>
              <p className="text-indigo-200">Active Students</p>
            </div>
            <div className="bg-indigo-800/50 p-6 rounded-lg">
              <p className="text-4xl font-bold mb-2">1M+</p>
              <p className="text-indigo-200">Quizzes Completed</p>
            </div>
            <div className="bg-indigo-800/50 p-6 rounded-lg">
              <p className="text-4xl font-bold mb-2">4.9/5</p>
              <p className="text-indigo-200">Student Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Ready to Transform Your Learning?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of students who are already learning smarter, not harder.
          </p>
          <Button to="/register" variant="primary" icon>
            Start Learning Now
          </Button>
        </div>
      </section>
    </div>
  );
}