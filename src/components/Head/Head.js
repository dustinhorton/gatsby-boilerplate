import PropTypes from 'prop-types'
import React from 'react'
import Helmet from 'react-helmet'

export default function Head({ children, description, preconnect, title, ...props }) {
  const siteTitle = 'Dustin Horton'

  return (
    <Helmet
      {...props}
      defaultTitle={siteTitle}
      titleTemplate={(title && title !== siteTitle) ? `%s – ${siteTitle}` : undefined}>
      {title && (
        <title>
          {title}
        </title>
      )}
      {title && (<meta name="twitter:title" property="og:title" content={title} />)}
      {description && (<meta name="description" property="og:description" content={description} />)}
      {description && (<meta name="twitter:description" content={description} />)}
      {preconnect && preconnect.map((item) => (
        <link rel="preconnect" href={item} crossOrigin key={item} />
      ))}
      {children}
    </Helmet>
  )
}

Head.propTypes = {
  children: PropTypes.node,
  description: PropTypes.string,
  preconnect: PropTypes.array,
  title: PropTypes.string,
}