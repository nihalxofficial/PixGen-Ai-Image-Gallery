import Category from '@/components/Category';
import PhotoCard from '@/components/PhotoCard';

const AllPhotosPage = async ({ searchParams }) => {
    const res = await fetch('https://pixgen-wheat.vercel.app/data.json');
    const photos = await res.json();

    const { category } = await searchParams;
    const filteredPhotos = category ? photos.filter(photo=> photo.category.toLowerCase() === category?.toLowerCase()) : photos;
    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold my-5">All Photos</h1>
            <Category/>

            <div className="grid grid-cols-4 gap-5">
                {filteredPhotos.map(photo => <PhotoCard key={photo.id} photo={photo} />)}
            </div>
        </div>
    );
};

export default AllPhotosPage; 