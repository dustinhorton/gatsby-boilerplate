import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import Text from 'components/Text'

import './Copy.scss'

export default function Copy({ children, className, columns, ...props }) {
  const style = columns ? { columnCount: columns } : {}

  return (
    <Text {...props} element="div" style={style} className={classNames('Copy', className)}>
      {children}
    </Text>
  )
}

Copy.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  columns: PropTypes.number,
}