import {useState} from "react";

import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const  handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (

    <>
   <nav className="">
   <div className="bg-gray-800 lg:bg-gray-800 w-full py-3 absolute top-0 z-10">
    <div className="flex justify-between items-center mx-10 2xl:mx-100 relative">

      <p className="text-white text-2xl">
        Dental<span className="text-accent">Care.</span>
      </p>

      {/* Hamburger button */}
      <label className="swap lg:hidden text-2xl"> 
        <input type="checkbox" />
        <IoMdMenu className="text-accent swap-off" onClick={handleClick} />
        <IoMdClose className="text-accent swap-on" onClick={handleClick} />
      </label>

      {/* Nav links */}
      <ul className={`flex flex-col items-center gap-5 absolute top-full right-0 w-full text-center bg-gray-800 py-5 transition-all duration-300 lg:bg-transparent lg:p-0 lg:flex-row lg:static lg:w-auto lg:gap-5 ${isOpen ? 'block' : 'hidden'} lg:flex`}>
        <li className="text-white hover:bg-accent hover:text-white p-1">Home</li>
        <li className="text-white hover:bg-accent hover:text-white p-1">About</li>
        <li className="text-white hover:bg-accent hover:text-white p-1">Services</li>
        <li className="text-white hover:bg-accent hover:text-white p-1">Reviews</li>
        <li className="text-white hover:bg-accent hover:text-white p-1">Contact</li>
      </ul>
      
      <button className='btn btn-accent px-5 text-lg hidden lg:block'> make appointment </button>

    </div>
  </div>
</nav>

      {/* <nav className='flex justify-center absolute top-0 w-full h-16 z-1'>
        <div className='flex justify-between items-center w-5/6 text-xl text-white'>
          <h1>DENTAL<span className='text-accent'>CARE</span>.</h1>
          <div>
            <ul className='flex gap-10'>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Reviews</li>
              <li>Contact</li>
            </ul>
          </div>
          <button className='btn btn-accent px-5 text-lg'> make appointment </button>
        </div>
      </nav> */}

    </>
  )
}

export default Navbar