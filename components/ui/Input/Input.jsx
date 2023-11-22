import cn from 'clsx'
import s from './Input.module.css'
import React from 'react'



const Input = (props) => {
  const { className, children, onChange, ...rest } = props

  const rootClassName = cn(s.root, {}, className)

  const handleOnChange = (e) => {
    if (onChange) {
      onChange(e.target.value)
    }
    return null
  }

  return (
    <label>
      <input
        className={rootClassName}
        onChange={handleOnChange}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        {...rest}
      />
    </label>
  )
}

export default Input

/*
KT: To use this input, import it into your code and provide the onChange. To provide an onChange, you can set the value like this:<Input onChange={setName} />. Also, you can add additional style to it or pre-define it in Input.module.css
*/
