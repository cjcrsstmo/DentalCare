import Pic1 from '../assets/pic-1.png'
// import Pic2 from '../assets/pic-2.png'
// import Pic3 from '../assets/pic-3.png'

// import { useState, useRef } from "react";

// const images = [
//   Pic1,Pic2,Pic3,Pic1,Pic2,Pic3
  
// ];

const Reviews = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const carouselRef = useRef<HTMLDivElement>(null);

//   const visibleItems = 3;
//   const maxIndex = images.length - visibleItems;

//   const moveSlide = (direction: number) => {
//     let newIndex = currentIndex + direction;
//     if (newIndex < 0) newIndex = 0;
//     if (newIndex > maxIndex) newIndex = maxIndex;
//     setCurrentIndex(newIndex);

//     if (carouselRef.current) {
//       const shift = -(100 / visibleItems) * newIndex;
//       carouselRef.current.style.transform = `translateX(${shift}%)`;
//     }
//   };

//   const goToSlide = (index: number) => {
//     setCurrentIndex(index);
//     if (carouselRef.current) {
//       const shift = -(100 / visibleItems) * index;
//       carouselRef.current.style.transform = `translateX(${shift}%)`;
//     }
//   };

  return (
    <>
       <div className='min-h-max bg-gray-50 p-5'>
       <h1 className='text-4xl text-center'>Satisfied Clients</h1>
            
            <main className='flex flex-wrap justify-center items-center gap-5 m-5'>

                <div className='flex flex-col justify-center items-center gap-5 shadow-md w-full sm:w-1/2 lg:w-1/4 bg-white rounded-md py-5 px-10'>
                    <div>
                        <img src={Pic1} alt="" className='rounded-full w-40'/>
                    </div>
            
                    <div>
                        <p className='text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo recusandae omnis, provident porro consectetur rem id explicabo cum enim numquam nam necessitatibus neque quidem molestias nisi error excepturi autem maiores.</p>

                        
                    </div>
                    <div className='flex justify-between w-full'>
                        <p>John Deo</p>
                        <div className="rating">
                            <div className="mask mask-star-2 bg-amber-500" aria-label="1 star"></div>
                            <div className="mask mask-star-2 bg-amber-500" aria-label="2 star"></div>
                            <div className="mask mask-star-2 bg-amber-500" aria-label="3 star"></div>
                            <div className="mask mask-star-2 bg-amber-500" aria-label="4 star" aria-current="true"></div>
                            <div className="mask mask-star-2 bg-amber-500" aria-label="5 star" ></div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center gap-5 shadow-md w-full sm:w-1/2 lg:w-1/4 bg-white rounded-md py-5 px-10'>
                    <div>
                        <img src={Pic1} alt="" className='rounded-full w-40'/>
                    </div>
            
                    <div>
                        <p className='text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo recusandae omnis, provident porro consectetur rem id explicabo cum enim numquam nam necessitatibus neque quidem molestias nisi error excepturi autem maiores.</p>

                        
                    </div>
                    <div className='flex justify-between w-full'>
                        <p>John Deo</p>
                        <div className="rating">
                            <div className="mask mask-star-2 bg-amber-500" aria-label="1 star"></div>
                            <div className="mask mask-star-2 bg-amber-500" aria-label="2 star"></div>
                            <div className="mask mask-star-2 bg-amber-500" aria-label="3 star"></div>
                            <div className="mask mask-star-2 bg-amber-500" aria-label="4 star" aria-current="true"></div>
                            <div className="mask mask-star-2 bg-amber-500" aria-label="5 star" ></div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center gap-5 shadow-md w-full sm:w-1/2 lg:w-1/4 bg-white rounded-md py-5 px-10'>
                    <div>
                        <img src={Pic1} alt="" className='rounded-full w-40'/>
                    </div>
            
                    <div>
                        <p className='text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo recusandae omnis, provident porro consectetur rem id explicabo cum enim numquam nam necessitatibus neque quidem molestias nisi error excepturi autem maiores.</p>

                        
                    </div>
                    <div className='flex justify-between w-full'>
                        <p>John Deo</p>
                        <div className="rating">
                            <div className="mask mask-star-2 bg-amber-500" aria-label="1 star"></div>
                            <div className="mask mask-star-2 bg-amber-500" aria-label="2 star"></div>
                            <div className="mask mask-star-2 bg-amber-500" aria-label="3 star"></div>
                            <div className="mask mask-star-2 bg-amber-500" aria-label="4 star" aria-current="true"></div>
                            <div className="mask mask-star-2 bg-amber-500" aria-label="5 star" ></div>
                        </div>
                    </div>
                </div>


            </main>

            
       </div>
    </>
  );
};

export default Reviews;


// <div className="relative w-full overflow-hidden max-w-5xl mx-auto">
//             {/* Carousel */}
//             <div
//                 ref={carouselRef}
//                 className="flex transition-transform duration-500 ease-in-out"
//             >
//                 {images.map((src, index) => (
//                 <div key={index} className="w-1/3 flex justify-center p-4">
//                     <div className="bg-white rounded-lg shadow-lg flex items-center justify-center w-32 h-32 overflow-hidden">
//                     <img
//                         src={src}
//                         alt={`Image ${index + 1}`}
//                         className="object-cover w-full h-full"
//                     />
//                     </div>
//                 </div>
//                 ))}
//             </div>

//             {/* Prev/Next Buttons */}
//             <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
//                 <button onClick={() => moveSlide(-1)} className="btn btn-circle">
//                 ❮
//                 </button>
//             </div>
//             <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
//                 <button onClick={() => moveSlide(1)} className="btn btn-circle">
//                 ❯
//                 </button>
//             </div>

//             {/* Dots/Indicators */}
//             <div className="flex justify-center mt-4 space-x-2">
//                 {Array.from({ length: maxIndex + 1 }).map((_, index) => (
//                 <button
//                     key={index}
//                     onClick={() => goToSlide(index)}
//                     className={`w-3 h-3 rounded-full ${
//                     index === currentIndex ? "bg-black" : "bg-gray-300"
//                     }`}
//                 />
//                 ))}
//             </div>
//             </div>