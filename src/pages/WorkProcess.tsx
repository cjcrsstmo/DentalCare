// import Process1 from '../assets/process-1.png'
import Process2 from '../assets/process-2.png'
import Process3 from '../assets/process-3.png'

const WorkProcess = () => {
  return (
    <>
        <div className='min-h-screen flex flex-col justify-center items-center gap-5 py-10'>
            <h1 className='text-4xl'>Work Process</h1>

            <section className='flex flex-wrap flex-col xl:flex-row justify-center items-center gap-5 md:gap-10'>
              
              <div className="card card-side bg-base-100 shadow-lg w-5/6 xl:w-2/5 p-3 flex-col sm:flex-row">
                <figure>
                  <img src={Process2} alt="Movie" className='w-50'/>
                </figure>
                <div className="card-body w-full md:w-1/6">
                  <h2 className="card-title">Cosmetics Dentistry</h2>
                  <p className='text-justify'>Our cosmetic dentistry process focuses on improving the aesthetics of your smile through personalized treatments such as teeth whitening, veneers, and smile makeovers for a more confident you.</p>
                </div>
              </div>


              <div className="card card-side bg-base-100 shadow-lg w-5/6 xl:w-2/5 p-3 flex flex-col sm:flex-row">
                <figure>
                  <img src={Process2} alt="Movie" className='w-50'/>
                </figure>
                <div className="card-body w-full md:w-1/6">
                  <h2 className="card-title">Pediatric Dentistry</h2>
                  <p className='text-justify'>Our Pediatric Dentistry services are designed to provide gentle, caring dental care for children, ensuring a positive experience and healthy smiles for the little ones.</p>
                </div>
              </div>

              <div className="card card-side bg-base-100 shadow-lg w-5/6 xl:w-2/5 p-3 flex-col sm:flex-row">
                <figure>
                  <img src={Process3} alt="Movie" className='w-50'/>
                </figure>
                <div className="card-body w-full md:w-1/6">
                  <h2 className="card-title">Dental Implants</h2>
                  <p className='text-justify'>Dental implants provide a permanent solution for missing teeth, restoring both functionality and appearance, so you can enjoy a natural, confident smile."</p>
                </div>
              </div>
            </section>

        </div>
    </>
  )
}

export default WorkProcess