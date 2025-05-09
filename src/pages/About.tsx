import AboutImg from "../assets/abtus.jpg"

const About = () => {
  return (
    <div className='min-h-full' >
        <h1 className='text-4xl text-center py-10'>About Us</h1>

        <div className='flex flex-col lg:flex-row gap-20 md:gap-30 justify-center items-center w-4/5 mx-auto py-15'>
            <section className='w-full lg:w-2/5 text-center'>
              <h2 className='text-3xl'>True DentalCare For Your Family</h2>

             <div className='flex flex-col gap-5 text-justify mt-8 w-full'>
                <p >At <span className=''>DentalCare</span>, we provide an unparalleled level of dental care in a tranquil, sophisticated environment. Our team of expert professionals combines cutting-edge technology with a refined, gentle touch to deliver treatments that elevate your smile.</p>
                <p>We take the time to listen to your needs and create a treatment plan that’s right for you. Whether you’re here for preventive care or a complete smile transformation, we’re dedicated to helping you feel confident, informed, and cared for every step of the way.</p>
                <p>Trust us to provide you with the highest standard of care, because you deserve a smile that reflects your best self.</p>
             </div>
            </section>
            <aside className='bg-accent w-full max-w-[30rem] h-auto not-odd:rounded-md'>
              <img src={AboutImg} alt="image of dentists" className="w-full max-w-[30rem] h-auto rounded-md rotate-10" />
            </aside>
        </div>
    </div>

  )
}

export default About