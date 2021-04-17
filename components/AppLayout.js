import BaseLayout from './BaseLayout'
import LeftSide from './LeftSide'
import Banner from './Banner'

const AppLayout = ({children, title = 'Tinkerun'}) => {
  return (
    <BaseLayout>
      <Banner/>
      <div className='w-full max-w-screen-lg mx-auto p-4'>
        <section className='lg:mt-20 mt-0 flex justify-between lg:flex-row flex-col'>
          <LeftSide/>
          <div className='lg:flex-1 lg:mt-0 mt-16 mx-auto'>
            {children}
          </div>
        </section>
      </div>
    </BaseLayout>
  )
}

export default AppLayout
