import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './Display.module.scss'

export default function Display({ children, className, hide, inline, show }) {
  return (
    <div
      className={classNames(
        'Display',
        styles.this,
        hide && styles[`this---hide---${hide}`],
        inline && styles['this---inline'],
        show && styles['this---show'],
        show && styles[`this---show---${show}`],
        className,
      )}>
      {children}
    </div>
  )
}

const breakpoints = [
  'lt-full',
  'desktop',
  'tablet',
  'mobile',
  'mobile---medium',
  'mobile---small',
]

Display.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hide: PropTypes.oneOf(breakpoints),
  inline: PropTypes.bool,
  show: PropTypes.oneOf(breakpoints),
}