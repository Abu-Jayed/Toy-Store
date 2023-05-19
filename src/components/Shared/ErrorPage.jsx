import { Link, useRouteError } from 'react-router-dom'



const ErrorPage = () => {
  const { error, status } = useRouteError()
  return (
    <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
        {/* <FaRegMehBlank className='w-40 h-40 text-yellow-500'></FaRegMehBlank> */}
        {/* <img className='w-96' src="https://th.bing.com/th/id/R.16e5970f938011ce262701a9e2cc2dd1?rik=ffV0C3V0MCn45g&pid=ImgRaw&r=0" alt="" /> */}
        <img className='w-96' src="https://awellfedworld.org/wp-content/uploads/404error-pcbots700.png" alt="" />
        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-extrabold text-9xl text-yellow-500'>
            {/* <span className='sr-only'>Error</span>
            {status || 404} */}
          </h2>
          <p className='text-2xl font-semibold md:text-3xl text-red-800 mb-8'>
            {error?.message}
          </p>
          <Link to='/' className='btn btn-info'>
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage