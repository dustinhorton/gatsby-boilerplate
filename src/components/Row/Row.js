import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './Row.module.scss'

export default function Row({ children, className, flush, size }) {
  return (
    <div className={classNames(
      'Row',
      styles.this,
      flush && styles['this---flush'],
      size && styles[`this---${size}`],
      className,
    )}>
      {children}
    </div>
  )
}

Row.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  flush: PropTypes.bool,
  size: PropTypes.oneOf(['medium']),
}

Row.defaultProps = {
  size: 'medium',
}