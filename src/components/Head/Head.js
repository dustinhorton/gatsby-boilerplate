import PropTypes from 'prop-types'
import React from 'react'
import Helmet from 'react-helmet'

export default function Head({ children, description, title, ...props }) {
  return (
    <Helmet {...props} titleTemplate={title ? `%s | metaTitle` : null}>
      {title && (
        <title>
          {title}
        </title>
      )}
      {title && (<meta name="twitter:title" property="og:title" content={title} />)}
      {description && (<meta name="description" property="og:description" content={description} />)}
      {description && (<meta name="twitter:description" content={description} />)}
      {children}
    </Helmet>
  )
}

Head.propTypes = {
  children: PropTypes.node,
  description: PropTypes.string,
  title: PropTypes.string,
}