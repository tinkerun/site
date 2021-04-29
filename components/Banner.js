import Link from 'next/link'

const Banner = () => (
  <div className='fixed bg-white top-0 left-0 w-full text-center text-gray-800 h-12 z-50'>
    <div className='text-sm h-full flex items-center justify-center'>
      <span className='bg-red-500 text-white p-1 rounded text-sm uppercase mr-2'>NEW</span>
      <Link href='/vscode'>
        <a className='mr-1 font-bold hover:underline'>Tinkerun for Visual Studio Code</a>
      </Link>
      <p className='hidden lg:inline-block'>- The missing way of running tinker in Visual Studio Code.</p>
    </div>
  </div>
)

export default Banner