const DownloadButton = (props) => (
  <a
    className='text-white py-2 px-8 inline-block leading-loose rounded shadow hover:shadow-lg'
    style={{
      backgroundImage: 'linear-gradient(to left, #F08346, #E96969)',
    }}
    href='//github.com/tinkerun/tinkerun/releases/latest'
    {...props}
  >
    Download the latest
  </a>
)

export default DownloadButton