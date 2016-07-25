import React from 'react'
import {H2, H3} from '../../src'

import ReactPlayground from './LiveEditor'

export class AlertDemo extends React.Component {
  render(){
    return (
      <div id="alerts">
        <H2 size="large">Alerts</H2>
        <H3 size="medium">Styling</H3>
        <ReactPlayground codeText={`\
export default (
  <Alerts>
    <Alert>Default</Alert>
    <Alert bStyle="primary">Primary</Alert>
    <Alert bStyle="secondary">Secondary</Alert>
    <Alert bStyle="success">Success</Alert>
    <Alert bStyle="error">Error</Alert>
  </Alerts>
)\
`} />
      </div>
    )
  }
}