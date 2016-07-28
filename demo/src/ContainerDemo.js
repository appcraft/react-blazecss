import React from 'react'
import {H2, H3, P} from '../../src'

import ReactPlayground from './components/LiveEditor'

export class ContainerDemo extends React.Component {
  render(){
    return (
      <div id="containers">
        <H2 size="large">Containers</H2>
        <H3 size="medium">Sizes</H3>
        <P>The available sizes are 
          <code>xsmall</code>, <code>small</code>, <code>medium</code>, <code>large</code>, <code>xlarge</code>, <code>super</code>.</P>
        <ReactPlayground showSideCode={false} codeText={`\
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

export default (
  <div>
    <H4>large</H4>
    <Container size="large">{text}</Container>
    <H4>medium</H4>
    <Container size="medium">{text}</Container>
    <H4>small</H4>
    <Container size="small">{text}</Container>
    <H4>xsmall</H4>
    <Container size="xsmall">{text}</Container>
  </div>
)\
`} />
        <H3 size="medium">ComponentClass</H3>
        <P>By default the Container uses a <code>div</code>, but the <code>componentClass</code> ca be used to change the underlying component.</P>
        <ReactPlayground codeText={`\
export default (
  <div>
    <Container size="xsmall" componentClass="section">
      This container is a <code>section</code>
     </Container>
  </div>
)\
`} />
      </div>
    )
  }
}