import Link from 'next/link'

import DownloadButton from './DownloadButton'
import GithubButton from './GithubButton'
import ChangelogLink from './ChangelogLink'

const LeftSide = () => (
  <div className='lg:w-1/4 w-auto flex flex-col lg:items-start items-center mt-12 text-white'>
    <Link href='/'>
      <a
        className='w-16 h-16 block'
      >
        <img
          alt='logo'
          src='/logo.png?nf_resize=fit&w=180'
        />
      </a>
    </Link>

    <div className='my-8 text-center lg:text-left'>
      <h1 className='text-4xl italic font-bold'>
        Tinkerun
      </h1>

      <p className='text-sm font-light mt-2'>
        A new way of running <a className='underline' href='//github.com/laravel/tinker'>Tinker</a>.
        <br/>
        Simplify the Web Artisan's workflow.
      </p>
    </div>

    <DownloadButton/>
    <p className='py-4 text-xs italic'>
      Support macOS, Windows and Linux
    </p>

    <div className='flex items-end'>
      <GithubButton/>
      <ChangelogLink/>
    </div>
  </div>
)

export default LeftSide