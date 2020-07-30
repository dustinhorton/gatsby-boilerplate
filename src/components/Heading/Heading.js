import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './Heading.module.scss'

export default function Heading({ align, children, className, element, flush, level, levelStyle }) {
  let Component = 'h2'

  if (level === 1) {
    Component = 'h1'
  } else if (level === 3) {
    Component = 'h3'
  } else if (level === 4) {
    Component = 'h4'
  }

  if (element === 'legend') {
    Component = 'legend'
  }

  return (
    <Component
      className={classNames(
        'Heading',
        styles.this,
        align && styles[`this---${align}`],
        flush && styles['this---flush'],
        (!levelStyle && level) && styles[`this---${level}`],
        levelStyle && styles[`this---${levelStyle}`],
        className,
      )}>
      {children}
    </Component>
  )
}

const levels = [1, 2, 3, 4]

Heading.propTypes = {
  align: PropTypes.oneOf(['left', 'center']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  element: PropTypes.oneOf(['legend']),
  flush: PropTypes.bool,
  level: PropTypes.oneOf(levels),
  levelStyle: PropTypes.oneOf(levels),
}

Heading.defaultProps = {
  level: 2,
}