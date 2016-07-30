import React from 'react'
import {H2, H3, P} from '../../src'

import ReactPlayground from './components/LiveEditor'

export class ListDemo extends React.Component {
  render(){
    return (
      <div>
        <H2 size="large">Lists</H2>
        <P>
          Ordered, un-ordered, indented
        </P>
        <H3 size="medium">Un-ordered</H3>
        <ReactPlayground codeText={`\
export default (
  <List>
    <ListItem>Lorem ipsum dolor sit amet</ListItem>
    <ListItem>Nulla volutpat aliquam velit
      <List>
        <ListItem>Phasellus iaculis neque</ListItem>
        <ListItem>Purus sodales ultricies</ListItem>
        <ListItem>Ac tristique libero volutpat at</ListItem>
      </List>
    </ListItem>
    <ListItem>Faucibus porta lacus fringilla vel</ListItem>
  </List>
)\
`} />
        <H3 size="medium">Ordered</H3>
        <ReactPlayground codeText={`\
export default (
  <List ordered>
    <ListItem>Lorem ipsum dolor sit amet</ListItem>
    <ListItem>Nulla volutpat aliquam velit
      <List ordered>
        <ListItem>Phasellus iaculis neque</ListItem>
        <ListItem>Purus sodales ultricies</ListItem>
      </List>
    </ListItem>
    <ListItem>Faucibus porta lacus fringilla vel</ListItem>
  </List>
)\
`} />
        <H3 size="medium">Un-styled</H3>
        <p className="c-paragraph">
          Both UL and LI can be unstyled using the <code>unstyle</code> prop.
        </p>
        <ReactPlayground codeText={`\
export default (
  <List unstyled>
    <ListItem>Lorem ipsum dolor sit amet</ListItem>
    <ListItem>Nulla volutpat aliquam velit
      <List>
        <ListItem>Phasellus iaculis neque</ListItem>
        <ListItem unstyled>Vestibulum laoreet porttitor sem</ListItem>
        <ListItem>Ac tristique libero volutpat at</ListItem>
      </List>
    </ListItem>
    <ListItem>Faucibus porta lacus fringilla vel</ListItem>
  </List>
)\
`} />
        <H3 size="medium">Inline</H3>
        <ReactPlayground codeText={`\
export default (
  <List inline>
    <ListItem>Lorem ipsum</ListItem>
    <ListItem>Consectetur</ListItem>
    <ListItem>Nulla</ListItem>
  </List>
)\
`} />
      </div>
    )
  }
}