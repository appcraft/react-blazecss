import React from 'react'
import {H2, H3} from '../../src'

import ReactPlayground from './components/LiveEditor'
import { PropsTable, Props } from './components/PropsTable'

export class AlertDemo extends React.Component {
  render(){
    return (
      <div>
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
        <H3 size="medium">Props</H3>
        <PropsTable caption="Alert props" data={[
          Props.bStyle, 
          Props.onClose
        ]} />
      </div>
    )
  }
}