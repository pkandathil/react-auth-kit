
import React, { Component, PropTypes } from 'react'

import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './##Component##.scss'

const title = '##Component##'

class ##Component## extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.context.onSetTitle(title);
  }

  render() {
    return (
      <div>
        <h1>##Component##</h1>
      </div>
    );
  }

}

export default withStyles(##Component##, s);
