import {format} from 'date-fns'

import AppLayout from '../components/AppLayout'
import ChangelogItem from '../components/ChangelogItem'

export default function ChangelogPage() {
  return (
    <AppLayout>
      <div
        className='bg-white text-gray-800 p-8 opacity-80 rounded lg:m-10'
        style={{
          minHeight: 530,
        }}
      >
        <h2 className='text-5xl font-bold'>Changelog</h2>
        <p className='text-sm mt-2'>Latest changes and updates to Tinkerun</p>

        <div className='mt-12 border-t py-12'>

          <ChangelogItem
            date={format(new Date(2021, 4, 30), 'LLL, dd yyyy')}
            version='v0.1.5'
          >
            <p className='text-sm leading-loose'>
              Keep the newlines
            </p>
          </ChangelogItem>

          <ChangelogItem
            date={format(new Date(2021, 4, 7), 'LLL, dd yyyy')}
            version='v0.1.4'
          >
            <p className='text-sm leading-loose'>
              Fix issue <a className='text-blue-500 hover:underline' href='//github.com/tinkerun/tinkerun/issues/5'>#8</a>
            </p>
          </ChangelogItem>

          <ChangelogItem
            date={format(new Date(2021, 3, 5), 'LLL, dd yyyy')}
            version='v0.1.3'
          >
            <p className='text-sm leading-loose'>
              Support long query split into multiple lines
              <br/>
              See issue <a className='text-blue-500 hover:underline' href='//github.com/tinkerun/tinkerun/issues/5'>#5</a>
            </p>
          </ChangelogItem>

          <ChangelogItem
            date={format(new Date(2021, 3, 2), 'LLL, dd yyyy')}
            version='v0.1.2'
          >
            <ul className='list-disc text-sm pl-4'>
              <li>
                Fixes <a className='text-blue-500 hover:underline' href='//github.com/tinkerun/tinkerun/issues/3'>#3</a>
              </li>
              <li>
                Fixes <a className='text-blue-500 hover:underline' href='//github.com/tinkerun/tinkerun/issues/2'>#2</a>
              </li>
            </ul>
          </ChangelogItem>

          <ChangelogItem
            date={format(new Date(2021, 2, 28), 'LLL, dd yyyy')}
            version='v0.1.1'
          >
            <ul className='list-disc text-sm pl-4'>
              <li>Support Windows</li>
              <li>Support Linux</li>
            </ul>
          </ChangelogItem>

          <ChangelogItem
            date={format(new Date(2021, 2, 26), 'LLL, dd yyyy')}
            version='v0.1.0'
          >
            <p className='text-lg'>
              Born 🥳 🎉 🎈 🍾
            </p>
          </ChangelogItem>

        </div>
      </div>
    </AppLayout>
  )
}