import React from 'react'
import classNames from 'classnames'

export const Button = ({outline, onClick, children, className}) => {
    return (
        <div>
            <button className={classNames(
                'button', className, {'button--outline': outline}
            )
            }> 
                {children}
            </button>
        </div>
    )
}
