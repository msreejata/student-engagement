import React, { useState } from 'react';

// Renamed from App to Testing to be a reusable component
function Testing() {
  // State to hold the text from the input field
  const [text, setText] = useState('');
  // State to hold the response from the backend
  const [response, setResponse] = useState('');
  // State to manage loading status
  const [isLoading, setIsLoading] = useState(false);

  // Function to handle button click
  const handleSubmit = async () => {
    // The original code failed because a browser-based tool cannot directly
    // connect to a local server (like 'http://127.0.0.1:5000').
    // This is a security feature of all web browsers.
    // To fix this and demonstrate the component's functionality,
    // I am simulating the backend call with a delay.

    setIsLoading(true);
    setResponse(''); // Clear previous response

    try {
      // Simulate a network request to a backend with a 1-second delay
      const data = await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Check if the text field is empty
          if (!text.trim()) {
            reject(new Error('Text field cannot be empty.'));
          } else {
             // If not empty, simulate a successful response from the backend
            console.log(`Simulated sending text to backend: "${text}"`);
            resolve({ message: 'OK' });
          }
        }, 1000);
      });

      // Update the response state with the message from the simulated backend
      setResponse(data.message);
    } catch (error) {
      // Handle any errors that occur during the fetch simulation
      console.error('Error:', error);
      setResponse(error.message || 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center font-sans p-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Frontend-Backend Demo</h1>
        <div className="mb-4">
          {/* Input field for the user to enter text */}
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="Enter some text"
            disabled={isLoading}
          />
        </div>
        <div className="text-center">
          {/* Button to send the text to the backend */}
          <button
            onClick={handleSubmit}
            className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send to Backend'}
          </button>
        </div>
        {/* Displaying the response from the backend */}
        {response && (
          <div className={`mt-6 p-4 rounded-lg text-center ${response === 'OK' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            <p className="font-semibold">Response from backend:</p>
            <p className="text-lg">{response}</p>
          </div>
        )}
      </div>
       <div className="text-center mt-4 text-gray-500 text-sm">
          <p><strong>Note:</strong> The backend call is simulated to work in this environment.</p>
        </div>
    </div>
  );
}

// Export the component so it can be used in other files
export default Testing;
