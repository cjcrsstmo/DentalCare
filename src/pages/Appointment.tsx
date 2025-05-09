
const Appointment = () => {
  return (
    <>
        <div className='min-h-screen p-5'>
            <h1 className='text-4xl text-center'>Make Appointment</h1>

            <form action="" className='bg-gray-100 h-1/2 flex flex-col w-full sm:w-2/5 xl:w-1/4 p-6 rounded-lg gap-5 mx-auto m-5'>

                <div className='flex flex-col'>
                    <label htmlFor="firstname">Firstname:</label>
                    <input type="text" name='firstname' placeholder='Enter your firstname' className='input mt-2'/>
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="lastname">Lastname:</label>
                    <input type="text" name='lastname' placeholder='Enter your lastname' className='input mt-2'/>
                </div>

                <div className='flex flex-col'>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name='email' placeholder='Enter your email' className='input mt-2'/>
                </div>

                <div className='flex flex-col'>
                        <label htmlFor="phonenum">Phone Number:</label>
                        <input type="number" name='phonenum' placeholder='Enter your phone number' className='input mt-2'/>
                </div>

                <div className='flex flex-col'>
                        <label htmlFor="datetime">Appointment Date:</label>
                        <input type="datetime-local" name='datetime' className='input mt-2'/>
                </div>

                <button type='submit' className='btn btn-accent mt-3'>Make Appointment</button>

            </form>
        </div>
    </>
  )
}

export default Appointment