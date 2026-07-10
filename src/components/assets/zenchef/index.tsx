'use client'

import { useCallback, useEffect } from 'react'

const ZenChef = () => {
  const zenChef = useCallback((d: Document, s: string, id: string) => {
    const el = d.getElementsByTagName(s)[0]
    if (d.getElementById(id) || el.parentNode == null) return
    const js = d.createElement(s) as HTMLElement & { src: string }
    js.id = id
    js.src = 'https://sdk.zenchef.com/v1/sdk.min.js'
    el.parentNode.insertBefore(js, el)
  }, [])

  useEffect(() => {
    zenChef(document, 'script', 'zenchef-sdk')
  }, [zenChef])

  return (
    <div
      className="zc-widget-config"
      data-restaurant="386486"
      data-open=""
      data-lang="fr"
      data-primary-color="ffffff"
      data-pax="2"
      data-send-page-views="false"
      data-disable-gtm="true"
      data-disable-ga4="true"
    ></div>
  )
}

export default ZenChef
