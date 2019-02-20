import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './MediaObject.module.scss'

export default function MediaObject({
  center,
  children,
  className,
  figure,
  figurePosition,
  inline,
  reset,
  size,
}) {
  const figurePositionLeft = figurePosition === 'left'

  const childrenWrapped = (
    <div className={classNames(styles.body)}>
      {children}
    </div>
  )

  const figureWrapped = (
    <div className={styles.figure}>
      {figure}
    </div>
  )

  return (
    <div
      className={classNames(
        'MediaObject',
        styles.this,
        center && styles['this---center'],
        inline && styles['this---inline'],
        reset && styles[`this---reset---${reset}`],
        size && styles[`this---${size}`],
        className,
      )}>
      {figurePositionLeft ? figureWrapped : childrenWrapped}
      {figurePositionLeft ? childrenWrapped : figureWrapped}
    </div>
  )
}

MediaObject.propTypes = {
  center: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  figure: PropTypes.node,
  figurePosition: PropTypes.oneOf(['left', 'right']),
  inline: PropTypes.bool,
  reset: PropTypes.oneOf(['tablet']),
  size: PropTypes.oneOf(['medium']),
}

MediaObject.defaultProps = {
  figurePosition: 'left',
  size: 'medium',
}