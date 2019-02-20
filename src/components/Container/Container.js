import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './Container.module.scss'

export default function Container({ align, children, className, flush, size }) {
  return (
    <div
      className={classNames(
        'Container',
        styles.this,
        align && styles[`this---${align}`],
        flush && styles['this---flush'],
        size && styles[`this---${size}`],
        className,
      )}>
      {children}
    </div>
  )
}

Container.propTypes = {
  align: PropTypes.oneOf(['left', 'center', 'right']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  flush: PropTypes.bool,
  size: PropTypes.oneOf(['medium']),
}

Container.defaultProps = {
  align: 'center',
  size: 'medium',
}