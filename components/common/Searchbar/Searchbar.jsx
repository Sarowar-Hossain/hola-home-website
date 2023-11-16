import { memo, useEffect } from 'react'
import cn from 'clsx'
import s from './Searchbar.module.css'
import { useRouter } from 'next/router'

const Searchbar = ({ className, id = 'search' }) => {
  const router = useRouter()

  useEffect(() => {
    router.prefetch('/search')
  }, [router])

  const handleKeyUp = (e) => {
    e.preventDefault()

    if (e.key === 'Enter') {
      const q = e.currentTarget.value

      router.push(
        {
          pathname: `/search`,
          query: q ? { q } : {},
        },
        undefined,
        { shallow: true }
      )
    }
  }

  return (
    <div className={cn(s.root, className)}>
      <label className="hidden" htmlFor={id}>
        Search
      </label>
      <input
        id={id}
        className={s.input}
        placeholder="Start your search"
        defaultValue={router.query.q}
        onKeyUp={handleKeyUp}
      />
      <div className={`${s.iconContainer} my-2 me-2 py-[10px] px-[10px] bg-[#FCCF12] rounded-full`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          className="px-auto py-auto"
        >
          <path
            d="M8.875 8.875L12.25 12.25M5.875 10C6.4167 10 6.9531 9.8933 7.45357 9.686C7.95404 9.4787 8.40877 9.17486 8.79182 8.79182C9.17486 8.40877 9.4787 7.95404 9.686 7.45357C9.8933 6.9531 10 6.4167 10 5.875C10 5.3333 9.8933 4.7969 9.686 4.29643C9.4787 3.79596 9.17486 3.34123 8.79182 2.95818C8.40877 2.57514 7.95404 2.2713 7.45357 2.064C6.9531 1.8567 6.4167 1.75 5.875 1.75C4.78098 1.75 3.73177 2.1846 2.95818 2.95818C2.1846 3.73177 1.75 4.78098 1.75 5.875C1.75 6.96902 2.1846 8.01823 2.95818 8.79182C3.73177 9.5654 4.78098 10 5.875 10Z"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
        
      </div>
    </div>
  )
}

export default memo(Searchbar)
