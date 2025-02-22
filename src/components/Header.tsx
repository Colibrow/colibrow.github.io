import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Home, MessageCircle } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Home className="w-6 h-6" />
          <span className="font-semibold text-xl">Colibrow Blog</span>
        </Link>
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/colibrow"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
          >
            <Github className="w-6 h-6" />
          </a>
          <Link to="/discussions" className="text-gray-600 hover:text-gray-900">
            <MessageCircle className="w-6 h-6" />
          </Link>
        </div>
      </nav>
    </header>
  );
}