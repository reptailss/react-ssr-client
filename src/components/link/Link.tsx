import React, {MouseEventHandler} from 'react'
import {useNavigate} from '@appRouter/useNavigate'


export const Link = ({
                         href,
                         onClick,
                         children,
                         refreshGlobalData,
                         disableScrollTop,
                         ...rest
                     }: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> & {
    refreshGlobalData?: boolean
    disableScrollTop?: boolean
}) => {
    const navigate = useNavigate()
    
    const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
        event.preventDefault()
        if (onClick) {
            onClick(event)
        }
        if (href) {
            navigate(href, {
                refreshGlobalData,
                disableScrollTop,
            })
        }
    }
    return (
        <a
            {...rest}
            href={href}
            onClick={handleClick}
        >
            {children}
        </a>
    )
}
