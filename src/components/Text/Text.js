import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './Text.module.scss'

export default function Text({
  align,
  casing,
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
  ...props
}) {
  const Component = element

  return (
    <Component
      {...props}
      className={classNames(
        'Text',
        styles.this,
        align && styles[`this---${align}`],
        casing && styles[`this---${casing}`],
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
  casing: PropTypes.oneOf(['lower', 'upper']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(['inherit']),
  copy: PropTypes.bool,
  element: PropTypes.oneOf([
    'blockquote',
    'cite',
    'div',
    'figcaption',
    'figure',
    'footer',
    'header',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'label',
    'nav',
    'p',
    'section',
    'span',
    'td',
    'th',
    'time',
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
  wrap: true,
}