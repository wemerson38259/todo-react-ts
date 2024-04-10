import { ComponentProps } from 'react'
import style from './Button.module.css'

interface ButtonProps extends ComponentProps<'button'>{}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button className={style.container} {...rest}>
      {children}
    </button>
  )
}