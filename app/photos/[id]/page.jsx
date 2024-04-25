import photos from "@/public/photos/photos";
import AnimeCard from "@/app/components/AnimeCard";

export default function PhotoPage({params: {id}}){
    const photo = photos.find((p) => p.id === id);

    return (
        <div className="container mx-auto my-10">
            <div className="w-1/2 mx-auto border border-gray-700">
                <AnimeCard photo={photo} />
            </div>
        </div>
    )
}