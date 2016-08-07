import React from 'react'
import {H2, H3, P} from '../../src'

import ReactPlayground from './components/LiveEditor'
import { PropsTable, Props } from './components/PropsTable'

export class CardDemo extends React.Component {
  render(){
    return (
      <div>
        <H2 size="large">Cards</H2>
        <H3 size="medium">Basic Card</H3>
        <ReactPlayground codeText={`\
export default (
  <Card shadow="higher">
    <CardContent>
      <H2 size="medium">Heading</H2>
      <P>Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint eloquentiam sea et.</P>
    </CardContent>
  </Card>
)\
`} />
        <H3 size="medium">Dividers, headers, and footers</H3>
        <P>The <code>divider</code> prop turns CardContent into a header, a divider, or a fotter depending on its position.</P>
        <ReactPlayground codeText={`\
export default (
  <Card shadow="higher">
    <CardContent divider>Header</CardContent>
    <CardContent>
      <P>Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint eloquentiam sea et.</P>
    </CardContent>
    <CardContent divider>Divider</CardContent>
    <CardContent>
      <P>Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint eloquentiam sea et.</P>
    </CardContent>
    <CardContent divider>Footer</CardContent>
  </Card>
)\
`} />
        <H3 size="medium">Colors</H3>
        <P>Using <code>bStyle</code> on the <code>Card</code> changes the divider colors.</P>
        <ReactPlayground codeText={`\
export default (
  <Card bStyle="primary" shadow="higher">
    <CardContent divider>Header</CardContent>
    <CardContent>
      <P>Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint eloquentiam sea et.</P>
    </CardContent>
    <CardContent divider>Divider</CardContent>
    <CardContent>
      <P>Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint eloquentiam sea et.</P>
    </CardContent>
    <CardContent divider>Footer</CardContent>
  </Card>
)\
`} />    
        <H3 size="medium">Example</H3>
        <P>Here's a classic example with a title, image, and contents</P>
        <ReactPlayground codeText={`\
export default (
  <Card bStyle="primary" shadow="higher">
    <CardContent divider>Title</CardContent>
    <Image src="https://unsplash.it/1024/500?random" />
    <CardContent>
      <P>Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint eloquentiam sea et.</P>
    </CardContent>
  </Card>
)\
`} />       
        <H3 size="medium">Card Items</H3>
        <P>Cards can contains CardItems (menu style)</P>
        <ReactPlayground codeText={`\
export default (
  <Card bStyle="secondary" shadow="higher">
    <CardItem>Item 1</CardItem>
    <CardItem divider>Divider</CardItem>
    <CardItem>Item 2</CardItem>
    <CardItem disabled>Item 3 (disabled)</CardItem>
    <CardItem active>Item 4 (active)</CardItem>
    <CardItem>Item 5</CardItem>
  </Card>
)\
`} />
        <H3 size="medium">Grouped Card</H3>
        <ReactPlayground codeText={`\
export default (
  <Card grouped shadow="higher">
    <CardItem divider>Header 1</CardItem>
    <CardItem>Item 1</CardItem>
    <CardItem>Item 2</CardItem>
    <CardGroupDivider />
    <CardItem divider>Header 2</CardItem>
    <CardItem>Item 3</CardItem>
    <CardItem>Item 4</CardItem>
  </Card>
)\
`} />
      </div>
    )
  }
}