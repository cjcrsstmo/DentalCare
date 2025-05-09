import icon1 from '../assets/icon-1.svg'
import icon2 from '../assets/icon-2.svg'
import icon3 from '../assets/icon-3.svg'
import icon4 from '../assets/icon-4.svg'
import icon5 from '../assets/icon-5.svg'
import icon6 from '../assets/icon-6.svg'

const Services = () => {
  return (
    <div className='min-h-screen bg-gray-100 pb-5'>
        <h1 className='text-center text-4xl pt-4'>Our Services</h1>
        <section className='flex flex-wrap justify-center items-start gap-4 md:gap-10 w-5/6 mx-auto pt-15'>
                <div className='flex flex-col gap-5 w-80 h-60 rounded-lg bg-white shadow-md px-10 py-7'>
                    <div className='flex justify-center items-center gap-3'>
                        <img src={icon1} alt="" className='w-6'/>
                        <h1 className='text-xl font-semibold'>Alignment Specialist</h1>
                    </div>

                    <p className='text-justify text-gray-600 flex-grow'>Our Alignment Specialist ensures your teeth are perfectly positioned for a healthier bite and a more confident smile.</p>
                </div>

                <div className='flex flex-col gap-5 w-80 h-60 rounded-lg bg-white shadow-md px-10 py-7'>
                    <div className='flex justify-center items-center gap-3'>
                        <img src={icon2} alt="" className='w-6'/>
                        <h1 className='text-xl font-semibold'>Cosmetics Dentistry</h1>
                    </div>

                    <p className='text-justify text-gray-600 flex-grow'>Enhance your smile with our cosmetic dentistry services, from teeth whitening to veneers, we help you achieve the smile you’ve always wanted.</p>
                </div>

                <div className='flex flex-col gap-5 w-80 h-60 rounded-lg bg-white shadow-md px-10 py-7'>
                    <div className='flex justify-center items-center gap-3'>
                        <img src={icon3} alt="" className='w-6'/>
                        <h1 className='text-xl font-semibold'>Oral Hygiene Experts</h1>
                    </div>

                    <p className='text-justify text-gray-600 flex-grow'>Our Oral Hygiene Experts provide professional cleaning, guidance, and personalized care to help you maintain a healthy, beautiful smile.</p>
                </div>

                <div className='flex flex-col gap-5 w-80 h-60 rounded-lg bg-white shadow-md px-10 py-7'>
                    <div className='flex justify-center items-center gap-3'>
                        <img src={icon4} alt="" className='w-6'/>
                        <h1 className='text-xl font-semibold'>Root Canal Specialist</h1>
                    </div>

                    <p className='text-justify text-gray-600 flex-grow'>Our Root Canal Specialists are dedicated to relieving pain and preserving your natural teeth with precise and gentle root canal treatments.</p>
                </div>

                <div className='flex flex-col gap-5 w-80 h-60 rounded-lg bg-white shadow-md px-10 py-7'>
                    <div className='flex justify-center items-center gap-3'>
                        <img src={icon5} alt="" className='w-11'/>
                        <h1 className='text-lg font-semibold'>Live Dental Advisory</h1>
                    </div>

                    <p className='text-justify text-gray-600 flex-grow'>Get expert advice in real-time with our Live Dental Advisory service, where you can consult with professionals from the comfort of your home.</p>
                </div>

                <div className='flex flex-col gap-5 w-80 h-60 rounded-lg bg-white shadow-md px-10 py-7'>
                    <div className='flex justify-center items-center gap-3'>
                        <img src={icon6} alt="" className='w-6'/>
                        <h1 className='text-xl font-semibold'>Cavity Inspection</h1>
                    </div>

                    <p className='text-justify text-gray-600 flex-grow'>Our Cavity Inspection service uses advanced tools to detect early signs of tooth decay, ensuring timely treatment and protecting your smile.</p>
                </div>
        </section>

    </div>
  )
}

export default Services