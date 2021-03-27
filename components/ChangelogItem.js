import PropTypes from 'prop-types'

const ChangelogItem = ({version, date, children}) => (
  <div className='flex pb-10 lg:flex-row flex-col'>
    <div className='lg:w-1/4 lg:mb-0 mb-4'>
      <h3 className='text-lg font-bold'>{date}</h3>
      <p className='text-gray-600'>{version}</p>
    </div>
    <div>
      {children}
    </div>
  </div>
)

ChangelogItem.propTypes = {
  version: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
}

export default ChangelogItem