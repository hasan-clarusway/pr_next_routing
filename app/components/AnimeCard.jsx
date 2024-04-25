
import Image from 'next/image';

export default function AnimeCard ({photo}) {
    return (
        <div className='w-[90%]'>
          <Image 
            alt={photo.name}
            src={photo.imageSrc}
            height={600}
            width={600}
            className=' w-full object-cover aspect-square'
          />  
          <div className="bg-cyan-50 bg-opacity-15 px-2">
            <div className="flex ">
              <h2 className="font-bold text-blue-100 text-xl w-full">
                {photo.name}  
              </h2>
              <div className="py-1 px-2 bg-[#FFAD49] rounded-sm ">
                <p className=" text-blue-100 text-sm font-bold">
                  {photo.kind}                      
                </p>  
              </div>  
            </div>
            <div className="flex gap-6 items-center">
              <div className="flex flex-row gap-4 items-center">
                <Image 
                  src="../episodes.svg"
                  alt="episodes"
                  width={20}
                  height={20}
                  className='object-contain'
                />  
                <p className="text-base  text-blue-100 font-bold">
                  {photo.episodes || photo.episodes_aired}
                </p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <Image 
                  src="../star.svg"
                  alt="star"
                  width={18}
                  height={18}
                  className='object-contain'
                />  
                <p className="text-base font-bold text-[#FFAD49]">{photo.score}</p>
              </div>  
            </div>
          </div>
        </div>
    )
}