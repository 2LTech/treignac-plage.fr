import './index.css'

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
}

const Section = ({
  children,
  className,
  classNames,
  background = 'white',
  noPadding,
  invert,
  id,
  title
}: Props) => (
  <section
    className={`section ${background} ${className ?? ''} ${title ? '' : 'notitle'} ${noPadding ? 'nopadding' : ''} ${invert ? 'invert' : ''}`}
    id={id}
    aria-label="Galerie photo"
  >
    {title ? (
      <div className="sectionTitle">
        <p className="sectionKicker">{title.kicker}</p>
        {title.label ? <h2>{title.label}</h2> : null}
        {title.subLabel ? (
          <p className="sectionSubTitle">{title.subLabel}</p>
        ) : null}
        {title.extra ?? null}
      </div>
    ) : null}

    <div className={`sectionChildren ${classNames?.children ?? ''}`}>
      {children}
    </div>
  </section>
)

export default Section
