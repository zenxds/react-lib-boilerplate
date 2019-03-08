import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles.less'

class LibName extends Component {
  render() {
    return (
      <div className="lib-container">
        { this.props.message }
      </div>
    )
  }
}

LibName.propTypes = {
  message: PropTypes.string
}

export default LibName
