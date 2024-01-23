import { Button, button } from '@nextui-org/react'
import React, { forwardRef } from 'react'


interface ButtonLoginProps 
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {}


const ButtonLogin = forwardRef<HTMLButtonElement, ButtonLoginProps>(({
    className,
    children,
    disabled,
    type = "button",
    ...props
}, ref) => {
    return (
        <button 
        type={type}
        disabled={disabled}
        ref={ref}
        {...props}
        color='primary'
        className='rounded-full' >
            Anmelden
        </button>
    )
})

Button.displayName = "Button"

export default ButtonLogin