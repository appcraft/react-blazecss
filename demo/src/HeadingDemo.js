import React from 'react'
import {H2, H3, P} from '../../src'

import ReactPlayground from './components/LiveEditor'
import { PropsTable, Props } from './components/PropsTable'

export class HeadingDemo extends React.Component {
  render(){
    return (
      <div>
        <H2 size="large">Headings</H2>
        <H3 size="medium">Normal Headings</H3>
        <P>
          Blaze doesn't style native elements such as <code>&lt;h1&gt;</code>, <code>&lt;h2&gt;</code> etc. ReactBlazeCSS provides the uppercase alternatives that are pre-styled :
        </P>
        <ReactPlayground codeText={`\
export default (
  <div>
    <H1>H1</H1>
    <H2>H2</H2>
    <H3>H3</H3>
    <H4>H4</H4>
    <H5>H5</H5>
    <H6>H6</H6>
  </div>
)\
`} />
        <H3 size="medium">Sizes</H3>
        <P>
          All heading sizes from <code>super</code> to <code>xsmall</code> are available.
        </P>
        <ReactPlayground codeText={`\
export default (
  <div>
    <H1 size="large">H1 large</H1>
    <H2 size="small">H2 small</H2>
    <H3 size="medium">H3 medium</H3>
  </div>
)\
`} />
      </div>
    )
  }
}