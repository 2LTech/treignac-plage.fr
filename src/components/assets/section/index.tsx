import { useMemo } from 'react'

import './index.css'

// Props
export interface Props {
  children: React.ReactElement | React.ReactElement[] | string
  className?: string
  classNames?: {
    children?: string
  }
  background?: 'white' | 'pink' | 'black'
  noPadding?: boolean
  invert?: boolean
  id?: string
  title?: {
    kicker: string
    label: React.ReactElement | string
    subLabel?: React.ReactElement | string
    extra?: React.ReactElement | string
  }
  'aria-label'?: string
}

/**
 * Section
 * @param props Props
 * @returns Section
 */
const Section = ({
  children,
  className,
  classNames,
  background = 'white',
  noPadding,
  invert,
  id,
  title,
  ...props
}: Props) => {
  const titleLabel = useMemo(() => {
    if (!title?.label) return null

    return typeof title.label === 'string' ? (
      <h2>{title.label}</h2>
    ) : (
      title.label
    )
  }, [title])

  const titleSubLabel = useMemo(() => {
    if (!title?.subLabel) return null

    return <p className="sectionSubTitle">{title.subLabel}</p>
  }, [title])

  return (
    <section
      className={`section ${background} ${className ?? ''} ${title ? '' : 'notitle'} ${noPadding ? 'nopadding' : ''} ${invert ? 'invert' : ''}`}
      id={id}
      {...props}
    >
      {title ? (
        <div className="sectionTitle">
          <p className="sectionKicker">{title.kicker}</p>
          {titleLabel}
          {titleSubLabel}
          {title.extra ?? null}
        </div>
      ) : null}

      <div className={`sectionChildren ${classNames?.children ?? ''}`}>
        {children}
      </div>
    </section>
  )
}

export default Section
