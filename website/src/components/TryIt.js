import Link from '@docusaurus/Link'
import clsx from 'clsx'
import React from 'react'

import {GETTING_STARTED_ID, GETTING_STARTED_URL} from '../sandbox.js'
import Sandbox from './Sandbox.js'
import styles from './TryIt.module.css'

export default function TryIt () {
  const typescriptUrl = 'https://www.typescriptlang.org/'

  return <section className={styles.tryIt}>
    <div className={clsx('container', styles.smallOnly)}>
      <h2>Try it!</h2>

      <p>
        No time to read the docs? No worries. {' '}
      </p>

      <Link className='button button--outline button--primary' to={GETTING_STARTED_URL}>
        Try Snout Router Path on CodeSandbox
      </Link>
    </div>

    <div className={clsx('container', styles.largeOnly)}>
      <div className='row'>
        <div className='col col--2'>
          <h2>Try it!</h2>

          <p>
            No time to read the docs? No worries. Try <strong>Snout Router Path</strong> right here.
          </p>
          <p>
            If you want <Link to={typescriptUrl}>TypeScript</Link> support, you'll need to {' '}
            <Link to={GETTING_STARTED_URL}>open the full sandbox</Link>.
          </p>
        </div>

        <div className='col col--10'>
          <Sandbox id={GETTING_STARTED_ID} height='300px' />
        </div>
      </div>
    </div>
  </section>
}
