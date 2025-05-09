
const Home = () => {
  return (
    <>
      <div className='h-screen min-h-full bg relative flex justify-center'>
        <div className='absolute top-20 bottom-8 flex flex-col w-5/6 items-center lg:items-start justify-center gap-10 text-center lg:text-start'>
          <p className='text-white text-5xl lg:text-7xl uppercase leading-15 lg:leading-20 tracking-wide w-full md:w-1/2'>Let us brighten <br />your <span className='text-accent'>smile</span></p>
          <p className='text-center lg:text-justify w-full md:w-1/2 lg:w-2/5 text-base lg:text-xl text-white lg:leading-8 tracking-wide'>Exceptional dental care with a gentle touch. From checkups to cosmetic dentistry, we help you smile with confidence.</p>
          <div className='flex flex-wrap justify-center sm:justify-start items-center gap-5 '>
            <button className='btn btn-accent w-40 sm:mx-0'>Learn more</button>
            <button className='btn btn-accent px-5 w-40 leading-4 lg:hidden'> Make appointment </button>
          </div>
        </div>
      </div>
    </>
  )
}
// gap-5 mx-auto md:mx-0 lg:mx-auto w-3/4 mt-3
export default Home