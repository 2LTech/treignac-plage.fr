import './index.css'

// Props
export interface Props {
  children: React.ReactElement | React.ReactElement[] | string
  className?: string
  type?: 'primary' | 'secondary'
  href: string
  noAnimate?: boolean
  dark?: boolean
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
  href,
  noAnimate,
  dark,
  external,
  ...props
}: Props) => (
  <a
    className={`button ${className ?? ''} ${type ?? ''} ${noAnimate ? 'noanimate' : ''} ${dark ? 'dark' : ''}`}
    href={href}
    target={external ? '_blank' : undefined}
    rel={external ? 'noreferrer' : undefined}
    {...props}
  >
    {children}
  </a>
)

export default Button
