import React from 'react';
import Testing from '../components/testing';

// This is your new page component

function TestPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-8">This is the Test Page</h1>
      <p className="text-lg text-center mb-8">The component below is imported from testing.jsx</p>
      <Testing/>
    </div>
  );
}

export default TestPage;