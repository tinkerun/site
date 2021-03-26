import Layout from '../components/layout'
import DownloadButton from '../components/DownloadButton'
import GithubButton from '../components/GithubButton'

export default function IndexPage() {
  return (
    <Layout>
      <div className='w-full max-w-screen-lg mx-auto p-4'>
        <section className='lg:mt-32 mt-0 flex justify-between lg:flex-row flex-col'>
          <div className='lg:w-1/4 w-auto flex flex-col lg:items-start items-center mt-12 text-white'>
            <div className='w-16 h-16'>
              <img
                alt='logo'
                src='/logo.png?nf_resize=fit&w=180'
              />
            </div>

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
            <GithubButton/>
          </div>

          <div className='lg:flex-1 lg:mt-0 mt-16 mx-auto'>
            <img
              alt='screenshot'
              src='/screenshot.png?nf_resize=fit&w=1600'
            />
          </div>
        </section>
      </div>
    </Layout>
  )
}
