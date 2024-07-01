
import React, { forwardRef } from 'react';

interface ButtonLoginProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ButtonLogin = forwardRef<HTMLButtonElement, ButtonLoginProps>(
  ({ className, children, disabled, type = 'button', ...props }, ref) => {
    return (
      <button
        type={type}
        disabled={disabled}
        ref={ref}
        {...props}
        color='primary'
        className='rounded-full text-neutral-200'
      >
        {children}
      </button>
    );
  }
);

ButtonLogin.displayName = 'ButtonLogin';

export default ButtonLogin;
