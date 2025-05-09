import { HiPhone } from "react-icons/hi2";
import { HiMapPin } from "react-icons/hi2";
import { HiClock } from "react-icons/hi2";
import { HiEnvelope } from "react-icons/hi2";

const Footerr = () => {
  return (
    <>
        <section className="footer bg-gray-200 p-5">

            <div className="flex items-center md:items-start md:justify-around flex-col md:flex-row text-lg w-full gap-10">

                <div className="flex flex-col justify-center items-center">
                    <p className='bg-accent rounded-full p-5 mb-2'><HiPhone className='text-white'/></p>
                    <h3>phone number</h3>
                    <p>+123-456-7890</p>
                    <p>+111-222-3333</p>
                </div>
                
                <div className="flex flex-col justify-center items-center">
                    <p className='bg-accent rounded-full p-5 mb-2'><HiMapPin className='text-white'/></p>
                    <h3>our address</h3>
                    <p>mumbai, india - 400104</p>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <p className='bg-accent rounded-full p-5 mb-2'><HiClock className='text-white'/></p>
                    <h3>opening hours</h3>
                    <p>00:07am to 10:00pm</p>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <p className='bg-accent rounded-full p-5 mb-2'><HiEnvelope className='text-white'/></p>
                    <h3>email address</h3>
                    <p>shaikhanas@gmail.com</p>
                    <p>anasbhai@gmail.com</p>
                </div>
            </div>

            <hr className='p-0 m-0 w-full'/>
            <p className='mx-auto text-center text-lg md:text-3xl'>&copy; Copyright 2025.All rights reserved</p>

        </section>
    </>
  )
}

export default Footerr