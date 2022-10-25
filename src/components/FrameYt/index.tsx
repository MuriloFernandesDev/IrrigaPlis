const FrameYt = ({ video }: { video: string }) => {
   return (
      <div className="flex justify-center md:w-full">
         <div className="w-full flex justify-center">
            <div className="w-full h-auto relative flex">
               <div className="relative w-full h-full pb-[56.25%]">
                  <iframe
                     className="absolute w-full h-full flex border-none shadow-black/40 shadow-md m-0"
                     placeholder="blur"
                     loading="lazy"
                     src={video}
                     title="YouTube video player"
                     frameBorder="0"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     allowFullScreen
                  ></iframe>
               </div>
            </div>
         </div>
      </div>
   )
}

export default FrameYt
