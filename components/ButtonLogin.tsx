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
        <Button 
        type={type}
        disabled={disabled}
        ref={ref}
        {...props}
        className='
        bg-opacity-30 bg-neutral-300 hover:bg-neutral-800 transition'>
            Anmelden
        </Button>
    )
})

Button.displayName = "Button"

export default ButtonLogin