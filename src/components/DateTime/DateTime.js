import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import Text from 'components/Text'
import formatDate from 'libs/format-date'

export default function DateTime({ className, date, format, ...props }) {
  return (
    <Text
      {...props}
      dateTime={formatDate.timestamp(date)}
      element="time"
      className={classNames('DateTime', className)}>
      {formatDate[format](data)}
    </Text>
  )
}

DateTime.propTypes = {
  className: PropTypes.string,
  date: PropTypes.string.isRequired,
  format: PropTypes.oneOf(['display']),
}

DateTime.defaultProps = {
  format: 'display',
}