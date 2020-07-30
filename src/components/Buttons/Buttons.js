import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './Buttons.module.scss'

export default function Buttons({
  align,
  axis,
  buttonProps,
  children,
  className,
  element,
  size,
  split,
  ...props
}) {
  const Component = element

  const wrappedChildren = React.Children.map(children, (child, index) => {
    if (child === undefined) {
      return null
    }

    const childWithProps = React.cloneElement(child, { ...buttonProps, ...props })

    return (
      <div
        // eslint-disable-next-line react/no-array-index-key
        key={index}
        className={styles.item}>
        {childWithProps}
      </div>
    )
  })

  return (
    <Component
      className={classNames(
        'Buttons',
        styles.this,
        align && styles[`this---${align}`],
        axis === 'y' && styles['this---y'],
        size && styles[`this---${size}`],
        split && children.length > 1 && styles['this---split'],
        className,
      )}>
      {wrappedChildren}
    </Component>
  )
}

Buttons.propTypes = {
  align: PropTypes.oneOf(['left', 'center', 'right']),
  axis: PropTypes.oneOf(['x', 'y']),
  buttonProps: PropTypes.object,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  element: PropTypes.oneOf(['div', 'nav']),
  size: PropTypes.oneOf(['medium']),
  split: PropTypes.bool,
}

Buttons.defaultProps = {
  axis: 'x',
  element: 'div',
}