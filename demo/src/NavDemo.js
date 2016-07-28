import React from 'react'
import {H2, H3, P} from '../../src'

import ReactPlayground from './components/LiveEditor'

export class NavDemo extends React.Component {
  render(){
    return (
      <div>
        <H2 size="large">Navs</H2>
        <H3 size="medium">Normal</H3>
        <ReactPlayground codeText={`\
export default (
  <Nav style={{width: 200}}>
    <NavContent centered>My APP</NavContent>
    <NavItem bStyle="success" active>Home</NavItem>
    <NavItem>Menu</NavItem>
    <NavItem bStyle="primary">Settings</NavItem>
  </Nav>
)\
`} />
        <H3 size="medium">Light</H3>
        <ReactPlayground codeText={`\
export default (
  <Nav style={{width: 200}} light>
    <NavContent centered>My APP</NavContent>
    <NavItem bStyle="success" active>Home</NavItem>
    <NavItem>Menu</NavItem>
    <NavItem bStyle="primary">Settings</NavItem>
  </Nav>
)\
`} />
        <H3 size="medium">Nav inline</H3>
        <ReactPlayground codeText={`\
export default (
  <Nav inline shadow="higher" animate>
  {/*<Nav inline shadow="higher" animate position="top" fixed>*/}
    <NavContent>My APP</NavContent>
    <NavItem bStyle="success" active>Home</NavItem>
    <NavItem>Menu</NavItem>
    <NavItem right bStyle="primary">Settings</NavItem>
  </Nav>
)\
`} />
        <P>Use <code>position="top" fixed</code> to stick the Nav at the top of the screen.</P>
      </div>
    )
  }
}