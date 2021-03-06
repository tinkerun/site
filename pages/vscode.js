import Link from 'next/link'

import BaseLayout from '../components/BaseLayout'
import GithubButton from '../components/GithubButton'

export default function VSCodePage() {
  return (
    <BaseLayout
      title='Tinkerun for Visual Studio Code'
    >
      <section className='pt-10 lg:pt-20 text-center px-4'>

        <div className='flex justify-center items-center mb-8'>
          <div className='w-12 h-12 lg:w-16 lg:h-16'>
            <img
              alt='logo'
              src='/logo.png?nf_resize=fit&w=256'
            />
          </div>
          <h1 className='ml-4 text-4xl lg:text-5xl font-black italic'>
            Tinkerun
          </h1>
        </div>

        <h1 className='text-3xl lg:text-5xl font-black'>
          for Visual Studio Code
        </h1>
        <p className='font-light text-sm mt-4'>
          The missing way of running tinker in VSCode,
          <strong className='font-bold ml-1'>😉 allows you to stay with the VSCode's workflow.</strong>
          <br/>
          If you are creating an awesome <a href='//laravel.com' className='underline'>Laravel</a> project with VSCode,
          <strong className='font-bold ml-1'>you will never miss it.</strong>
        </p>

        <a
          href='//marketplace.visualstudio.com/items?itemName=tinkerun.tinkerun-vscode'
          className='mt-8 px-4 py-2 font-bold bg-gradient-to-r from-pink-600 to-gray-600 shadow rounded leading-loose inline-block hover:shadow-lg'
        >
          Install From VSCode Marketplace
        </a>

        <div className='flex justify-center items-center mt-4'>
          <GithubButton repo='tinkerun-vscode'/>

          <Link href='/'>
            <a className='text-sm underline'>checkout Tinkerun Desktop App</a>
          </Link>
        </div>

        <div className='mx-auto mt-8 max-w-screen-lg'>
          <img alt='screenshot' src='/screenshot-vscode.png?nf_resize=fit&w=1600'/>
        </div>
      </section>

    </BaseLayout>
  )
}