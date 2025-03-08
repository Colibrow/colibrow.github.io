import React from 'react';

export function About() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h1 className="text-3xl font-bold mb-6">About Me</h1>
      <div className="prose max-w-none">
        <p className="mb-4 leading-relaxed">
          Hello! I'm a software engineer living in Shanghai, China. <br />
          I'm interested in Android, Data Compression, Performance Optimization, AI, and Compiler development. <br />
          If you have any ideas you'd like to discuss, please contact me via email{' '}
          <a href="mailto:xpy66swsry@gmail.com" className="text-blue-600 hover:text-blue-800">
            xpy66swsry@gmail.com
          </a>.<br />
          My reply will be very quick.
        </p>
      </div>
    </div>
  );
} 