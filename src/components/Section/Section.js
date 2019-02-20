import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import Container from 'components/Container'

import styles from './Section.module.scss'

export default function Section({
  children,
  className,
  color,
  container,
  divided,
  flush,
}) {
  const body = container ? <Container>{children}</Container> : children

  return (
    <div
      className={classNames(
        'Section',
        styles.this,
        color && styles[`this---${color}`],
        divided && styles['this---divided'],
        flush && styles['this---flush'],
        className,
      )}>
      {body}
    </div>
  )
}

Section.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(['white']),
  container: PropTypes.bool,
  divided: PropTypes.bool,
  flush: PropTypes.bool,
}

Section.defaultProps = {
  container: true,
}