import React, { FC } from 'react'
import { CambridgeResult } from './engine'
import { ViewPorps } from '@/components/dictionaries/helpers'

export const DictCambridge: FC<ViewPorps<CambridgeResult>> = props => {
  const { result } = props
  const entry = result[0] || {}
  return (
    <section
      key={entry.id}
      id={entry.id}
      className="dictCambridtry"
      onClick={handleEntryClick}
    >
      <iframe src={entry.url} width="100%" height="100%" />
    </section>
  )
}

export default DictCambridge

function handleEntryClick(e: React.MouseEvent<HTMLElement>) {
  const target = e.nativeEvent.target as HTMLDivElement
  if (target && target.classList) {
    if (target.classList.contains('js-accord')) {
      target.classList.toggle('open')
    }

    if (target.classList.contains('daccord_h')) {
      target.parentElement!.classList.toggle('open')
    }
  }
}
