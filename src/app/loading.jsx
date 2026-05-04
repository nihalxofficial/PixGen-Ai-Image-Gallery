export default function Loading() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center">
            <div className="text-center space-y-4">
                <div className="relative w-16 h-16 mx-auto">
                    <div className="absolute inset-0 border-4 border-gray-200 dark:border-gray-800 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-t-gray-900 dark:border-t-white rounded-full animate-spin"></div>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Loading gallery...</p>
            </div>
        </div>
    );
}