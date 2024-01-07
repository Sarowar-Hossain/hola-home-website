import cn from 'clsx'
import React, { forwardRef, useRef } from 'react'
import { mergeRefs } from 'react-merge-refs'
import s from './Button.module.css'
import { LoadingDots } from '@components/ui'
import { Loader2 } from 'lucide-react'

// eslint-disable-next-line react/display-name
const Button = forwardRef((props, buttonRef) => {
  const {
    className,
    variant = 'flat',
    children,
    active,
    width,
    loading = false,
    disabled = false,
    style = {},
    Component = 'button',
    ...rest
  } = props
  const ref = useRef(null)

  const rootClassName = cn(
    s.root,
    {
      [s.light]: variant === 'light',
      [s.slim]: variant === 'slim',
      [s.naked]: variant === 'naked',
      [s.text]: variant === 'text',
      [s.bordered]: variant === 'bordered',
      [s.fullWidth]: variant === 'fullWidth',
      [s.loading]: loading,
      [s.disabled]: disabled,
    },
    className
  )

  return (
    <Component
      aria-pressed={active}
      data-variant={variant}
      ref={mergeRefs([ref, buttonRef])}
      className={rootClassName}
      disabled={disabled}
      style={{
        width,
        ...style,
      }}
      {...rest}
    >
      {loading && (
        <i className="mr-2 flex text-accent-0 animate-spin">
          <Loader2 className='text-[#484C52]' />
        </i>
      )}
      {children}
    </Component>
  )
})

export default Button

/*
KT: To use this Button, import it to your desired place. After importing it, you can provide an additional style or you can have a pre-defined style by calling variant. Also, you can create a new variant. To create a variant, define it first in this component, then style it through that Button.module.css. There are two more props you can have in this Button, 1. loading and 2. disable.
*/
