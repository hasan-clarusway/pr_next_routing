import AnimeCard from "@/app/components/AnimeCard";
import Modal from "@/app/components/Modal";
import photos from "@/public/photos/photos";

export default function PhotoModal({params: {id}}){
    const photo = photos.find((p) => p.id === id);
    
    return (
        <Modal>
          <AnimeCard photo={photo} />  
        </Modal>
    )
}