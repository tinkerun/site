import {format} from 'date-fns'

import Layout from '../components/layout'
import ChangelogItem from '../components/ChangelogItem'

export default function ChangelogPage() {
  return (
    <Layout>
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
            date={format(new Date(2021, 3, 28), 'LLL, dd yyyy')}
            version='v0.1.1'
          >
            <ul className='list-disc text-sm pl-4'>
              <li>Support Windows</li>
              <li>Support Linux</li>
            </ul>
          </ChangelogItem>

          <ChangelogItem
            date={format(new Date(2021, 3, 26), 'LLL, dd yyyy')}
            version='v0.1.0'
          >
            <p className='text-lg'>
              Born 🥳 🎉 🎈 🍾
            </p>
          </ChangelogItem>

        </div>
      </div>
    </Layout>
  )
}