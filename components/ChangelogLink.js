import Link from 'next/link'
import {useRouter} from 'next/router'
import cn from 'classnames'

const ChangelogLink = () => {
  const router = useRouter()

  return (
    <Link
      href='/changelog'
    >
      <a
        className={
          cn('text-sm underline', {
            'font-bold': router.pathname === '/changelog',
          })
        }
      >
        changelog
      </a>
    </Link>
  )
}

export default ChangelogLink