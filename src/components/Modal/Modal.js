import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import ReactModal from 'react-modal'

import Button from 'components/Button'

import './Modal.scss'

export default class Modal extends React.Component {
  handleRequestClose = () => {
    this.props.onRequestClose()
  }

  render() {
    const { children, className, size, ...props } = this.props

    return (
      <ReactModal
        {...props}
        ariaHideApp={false}
        closeTimeoutMS={225}
        onRequestClose={this.handleRequestClose}
        className={classNames('Modal', size && `Modal---${size}`, className)}>
        {children}
        <Button className="Modal--close-button" onClick={this.handleRequestClose}>Close</Button>
      </ReactModal>
    )
  }
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['medium']),
}

Modal.defaultProps = {
  size: 'medium',
}