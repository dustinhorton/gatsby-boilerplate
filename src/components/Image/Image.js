import classNames from 'classnames'
import GatsbyImage from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './Image.module.scss'

export default function Image({ align, className, full, src, src2x, ...props }) {
  if (src && typeof src === 'object') {
    return (
      <GatsbyImage fluid={src.childImageSharp.fluid} />
    )
  }

  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <img
      {...props}
      src={src}
      srcSet={src2x && `${src2x} 2x`}
      className={classNames(
        'Image',
        styles.this,
        align && styles[`this---${align}`],
        full && styles['this---full'],
        className,
      )}
    />
  )
}

Image.propTypes = {
  align: PropTypes.oneOf(['center']),
  alt: PropTypes.string,
  className: PropTypes.string,
  full: PropTypes.bool,
  src: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  src2x: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

Image.defaultProps = {
  alt: '',
}