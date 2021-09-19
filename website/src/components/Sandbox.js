import React from 'react'

import styles from './Sandbox.module.css'

const sandboxProp = 'allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts'

export default function Sandbox (props) {
  const {
    codeMirror,
    height,
    hideDevTools,
    id,
    previewWindow,
  } = props

  const src = new URL('https://codesandbox.io/')
  src.pathname = `/embed/${id}`

  if (codeMirror) src.searchParams.append('codemirror', '1')
  if (hideDevTools) src.searchParams.append('hidedevtools', '1')
  if (previewWindow) src.searchParams.append('previewwindow', previewWindow)

  return <iframe className={styles.sandbox} style={{height}} sandbox={sandboxProp} src={src.toString()}></iframe>
}
