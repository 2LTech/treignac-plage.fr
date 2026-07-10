import { useMemo } from 'react'
import Image from 'next/image'

import './index.css'

// Props
export interface Props {
  children: React.ReactElement | React.ReactElement[] | string
  className?: string
  type?: 'primary' | 'secondary'
  icon?: React.ReactElement | string
  href: string
  noAnimate?: boolean
  dark?: boolean
  pink?: boolean
  external?: boolean
  'aria-label'?: string
}

/**
 * Button
 * @param props Props
 * @returns Button
 */
const Button = ({
  children,
  className,
  type,
  icon,
  href,
  noAnimate,
  dark,
  pink,
  external,
  ...props
}: Props) => {
  const renderClassName = useMemo(() => {
    const classes = ['button']
    if (className) classes.push(className)
    if (type) classes.push(type)
    if (noAnimate) classes.push('noaminate')
    if (dark) classes.push('dark')
    if (pink) classes.push('pink')

    return classes.join(' ')
  }, [className, type, noAnimate, dark, pink])

  const iconRender = useMemo(() => {
    if (!icon) return null
    if (typeof icon === 'string')
      return (
        <>
          <Image src={icon} width={40} height={40} alt="" />{' '}
        </>
      )
    return <>{icon} </>
  }, [icon])

  return (
    <a
      className={renderClassName}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      {...props}
    >
      {iconRender}
      {children}
    </a>
  )
}

export default Button
