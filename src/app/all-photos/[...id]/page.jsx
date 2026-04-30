import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@heroui/react';

const PhotoDetailsPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch('https://pixgen-wheat.vercel.app/data.json');
    const photos = await res.json();

    const photo = photos.find(p => p.id == id);

    if (!photo) {
        notFound();
    }

    const formattedDate = new Date(photo.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div className="max-w-5xl mx-auto px-4 py-8">
            {/* Back button */}
            <Link 
                href="/" 
                className="inline-flex items-center gap-1 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
            >
                ← Back to Home
            </Link>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Image section */}
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

                    {/* Details section */}
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

                        {/* Stats row */}
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
                            // onClick={() => window.open(photo.imageUrl, '_blank')}
                            variant='secondary'
                            className="w-full mt-4  py-2.5 rounded-lg font-medium flex items-center justify-center gap-2"
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