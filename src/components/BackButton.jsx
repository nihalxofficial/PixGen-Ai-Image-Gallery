'use client'
import { useRouter } from 'next/navigation'

export default function BackButton() {
    const router = useRouter()
    return (
        <h2 
            onClick={() => router.back()} 
            className="inline-flex items-center gap-1 text-gray-600 hover:text-gray-900 mb-6 transition-colors cursor-pointer"
        >
            ←  Back to Gallery
        </h2>
    )
}