import React from 'react'
import {H2, H3} from '../../src'

import ReactPlayground from './LiveEditor'

export class NavDemo extends React.Component {
  render(){
    return (
      <div id="navs">
        <H2 size="large">Navs</H2>
        <H3 size="medium">Normal</H3>
        <ReactPlayground codeText={`\
export default (\n\
  <Nav style={{width: 200}}>\n\
    <NavContent centered>My APP</NavContent>\n\
    <NavItem bStyle="success" active>Home</NavItem>\n\
    <NavItem>Menu</NavItem>\n\
    <NavItem bStyle="primary">Settings</NavItem>\n\
  </Nav>\n\
)\
`} />
        <H3 size="medium">Light</H3>
        <ReactPlayground codeText={`\
export default (\n\
  <Nav style={{width: 200}} light>\n\
    <NavContent centered>My APP</NavContent>\n\
    <NavItem bStyle="success" active>Home</NavItem>\n\
    <NavItem>Menu</NavItem>\n\
    <NavItem bStyle="primary">Settings</NavItem>\n\
  </Nav>\n\
)\
`} />
        <H3 size="medium">Nav inline</H3>
        <ReactPlayground codeText={`\
export default (\n\
  <Nav inline shadow="higher" animate>\n\
  {/*<Nav inline shadow="higher" animate position="top" fixed>*/}\n\
    <NavItem bStyle="success" active>Home</NavItem>\n\
    <NavItem>Menu</NavItem>\n\
    <NavItem right bStyle="primary">Settings</NavItem>\n\
  </Nav>\n\
)\
`} />
      </div>
    )
  }
}