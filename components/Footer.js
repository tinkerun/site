const Footer = () => (
  <footer className='py-8'>
    <h2 className='text-center color-gray-500 text-sm'>
      © {new Date().getFullYear()}
      <a
        href='//github.com/billyct'
        className='mx-1 hover:underline'
      >
        🐰 billyct
      </a>
    </h2>
  </footer>
)

export default Footer