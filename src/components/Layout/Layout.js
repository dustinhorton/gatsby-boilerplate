import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import Head from 'components/Head'

import 'styles/app.scss'
import styles from './Layout.module.scss'
import faviconImage from './images/favicon.png'

export default function Layout({ children, className }) {
  return (
    <>
      <Head>
        <html lang="en" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@dustinhorton" />
        <link rel="icon" href={faviconImage} />
      </Head>
      <div className={classNames('Layout', styles.this, className)}>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
}