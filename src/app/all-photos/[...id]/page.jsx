import React from 'react';
import Image from 'next/image';
import { Button } from '@heroui/react';
import BackButton from '@/components/BackButton';
import Link from 'next/link';

const PhotoDetailsPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch('https://pixgen-wheat.vercel.app/data.json');
    const photos = await res.json();

    const photo = photos.find(p => p.id == id);

    if (!photo) {
        return (
            <div className="max-w-5xl mx-auto px-4 py-8">
                <BackButton />

                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-100 p-4 flex items-center justify-center min-h-100">
                            <div className="text-center space-y-3">
                                <div className="text-7xl mb-2">🖼️</div>
                                <div className="text-5xl opacity-30">❌</div>
                                <p className="text-gray-400 text-sm mt-2">Image not found</p>
                            </div>
                        </div>

                        <div className="p-6 space-y-5 flex flex-col justify-center">
                            <div>
                                <div className="text-8xl font-bold text-gray-200 mb-2">404</div>
                                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                                    Photo Not Found
                                </h1>
                                <p className="text-gray-500">
                                    Sorry, we couldn't find the AI-generated image you're looking for.
                                    It may have been removed or the link might be broken.
                                </p>
                            </div>

                            <div className="pt-4">
                                <Link href="/all-photos">
                                    <Button 
                                        variant="solid"
                                        className="w-full bg-gray-900 text-white py-2.5 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gray-800"
                                    >
                                        ← Back to Gallery
                                    </Button>
                                </Link>
                            </div>

                            <div className="pt-4 border-t border-gray-100">
                                <p className="text-xs text-gray-400 text-center">
                                    Try searching for another image or return to the homepage.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const formattedDate = new Date(photo.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div className="max-w-5xl mx-auto px-4 py-8">
           <BackButton/>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-4 flex items-center justify-center">
                        <div className="relative w-full aspect-square max-w-md mx-auto">
                            <Image
                                src={photo.imageUrl}
                                alt={photo.title}
                                fill
                                className="object-cover rounded-lg"
                                unoptimized
                            />
                        </div>
                    </div>

                    <div className="p-6 space-y-5">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900 mb-2">{photo.title}</h1>
                            <div className="flex flex-wrap gap-2">
                                {photo.tags?.map((tag, idx) => (
                                    <span 
                                        key={idx}
                                        className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex gap-6 py-3 border-y border-gray-100">
                            <div className="flex items-center gap-2">
                                <span className="text-xl">❤️</span>
                                <span className="font-medium text-gray-800">{photo.likes}</span>
                                <span className="text-gray-500 text-sm">likes</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-xl">⬇️</span>
                                <span className="font-medium text-gray-800">{photo.downloads}</span>
                                <span className="text-gray-500 text-sm">downloads</span>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
                                Prompt
                            </h3>
                            <p className="text-gray-700 bg-gray-50 p-3 rounded-md text-sm leading-relaxed">
                                {photo.prompt}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 pt-2">
                            <div>
                                <span className="text-xs text-gray-400 block">Model</span>
                                <p className="font-medium text-gray-800">{photo.model}</p>
                            </div>
                            <div>
                                <span className="text-xs text-gray-400 block">Resolution</span>
                                <p className="font-medium text-gray-800">{photo.resolution}</p>
                            </div>
                            <div>
                                <span className="text-xs text-gray-400 block">Category</span>
                                <p className="font-medium text-gray-800">{photo.category}</p>
                            </div>
                            <div>
                                <span className="text-xs text-gray-400 block">Created</span>
                                <p className="font-medium text-gray-800">{formattedDate}</p>
                            </div>
                        </div>

                        <Button 
                            variant='secondary'
                            className="w-full mt-4 py-2.5 rounded-lg font-medium flex items-center justify-center gap-2"
                        >
                            ⬇️  Download Image
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhotoDetailsPage;