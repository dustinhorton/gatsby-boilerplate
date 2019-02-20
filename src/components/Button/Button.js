import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import LinkBase from 'components/LinkBase'

import styles from './Button.module.scss'

export default function Button({ children, className, faux, full, level, to, type, ...props }) {
  const Component = faux ? 'span' : 'button'

  const componentClassNames = classNames(
    'Button',
    styles.this,
    full && styles['this---full'],
    level && styles[`this---${level}`],
    className,
  )

  if (to) {
    return (
      <LinkBase {...props} to={to} className={componentClassNames}>
        {children}
      </LinkBase>
    )
  }

  return (
    // eslint-disable-next-line react/button-has-type
    <Component {...props} type={faux ? null : type} className={componentClassNames}>
      {children}
    </Component>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  faux: PropTypes.bool,
  full: PropTypes.bool,
  level: PropTypes.oneOf(['primary', 'secondary', 'text']),
  to: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit']),
}

Button.defaultProps = {
  level: 'primary',
  type: 'button',
}