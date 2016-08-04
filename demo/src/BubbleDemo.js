import React from 'react'
import {H2, H3, P} from '../../src'

import ReactPlayground from './components/LiveEditor'
import { PropsTable, Props } from './components/PropsTable'

export class BubbleDemo extends React.Component {
  render(){
    return (
      <div>
        <H2 size="large">Bubbles</H2>
        <P>
          Bubbles are... tooltips with a different name.
        </P>
        <H3 size="medium">Basic Bubbles</H3>
        <ReactPlayground codeText={`\
export default (
  <Bubble>Bubble text...</Bubble>
)\
`} />
        <H3 size="medium">Bubble positions</H3>
        <P>
          Available positions : <code>top</code>, <code>left</code>, <code>bottom</code>, <code>right</code>.
        </P>
        <ReactPlayground codeText={`\
export default (
  <div>
    <div style={{padding: 8}}>
      <Bubble position="top">top</Bubble>
    </div>
    <div style={{padding: 8}}>
      <Bubble position="left">left</Bubble>
    </div>
    <div style={{padding: 8}}>
      <Bubble position="bottom">bottom</Bubble>
    </div>
    <div style={{padding: 8}}>
      <Bubble position="right">right</Bubble>
    </div>
  </div>
)\
`} />
      </div>
    )
  }
}