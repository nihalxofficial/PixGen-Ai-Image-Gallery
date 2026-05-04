import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found | AI Gallery',
  description: 'The requested page could not be found.',
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-8xl sm:text-9xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
          404
        </h1>
        
        <div className="space-y-3 mb-8">
          <p className="text-xl font-medium text-gray-800 dark:text-gray-200">
            Page not found
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Sorry, we couldn&apos;t find the AI image or page you&apos;re looking for.
          </p>
        </div>

        <Link
          href="/all-photos"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium text-sm hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to gallery
        </Link>
      </div>
    </div>
  );
}