import React from 'react'

const NotFound = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
        <h1 className="text-9xl font-extrabold text-gray-300 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-700 mb-2">Oops! Page not found</h2>
        <p className="text-gray-500 mb-6">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <a
            href="/"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
            Go Home
        </a>
        </div>
    </div>
  )
}

export default NotFound
