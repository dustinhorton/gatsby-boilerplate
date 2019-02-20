import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './Text.module.scss'

export default function Text({
  align,
  children,
  className,
  color,
  copy,
  element,
  flush,
  size,
  textStyle,
  truncate,
  underline,
  weight,
  wrap,
}) {
  const Component = element

  return (
    <Component
      className={classNames(
        'Text',
        styles.this,
        align && styles[`this---${align}`],
        color && styles[`this---${color}`],
        copy && styles['this---copy'],
        flush && styles['this---flush'],
        size && styles[`this---${size}`],
        textStyle && styles[`this---style---${textStyle}`],
        truncate && styles['this---truncate'],
        underline && styles['this---underline'],
        weight && styles[`this---weight---${weight}`],
        !wrap && styles['this---no-wrap'],
        className,
      )}>
      {children}
    </Component>
  )
}

Text.propTypes = {
  align: PropTypes.oneOf(['left', 'center', 'right']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(['inherit']),
  copy: PropTypes.bool,
  element: PropTypes.oneOf([
    'div',
    'header',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'nav',
    'p',
    'section',
    'span',
  ]),
  flush: PropTypes.bool,
  size: PropTypes.oneOf(['inherit', 'medium']),
  textStyle: PropTypes.oneOf(['normal', 'italic']),
  truncate: PropTypes.bool,
  underline: PropTypes.bool,
  weight: PropTypes.oneOf(['inherit', 'bold', 'normal']),
  wrap: PropTypes.bool,
}

Text.defaultProps = {
  element: 'span',
}