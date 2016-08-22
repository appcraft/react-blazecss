import React from 'react'
import {H2, H3, H4, P} from '../../src'

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
        <H3 size="medium">Examples</H3>
        <H4 size="small">Image Card</H4>
        <P>Classic example with a title, image, and contents</P>
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
        <H4 size="small">Media Element</H4>
        <ReactPlayground codeText={`\
export default (
  <Card bStyle="primary" shadow="higher">
    <CardContent>
      <Grid noGutter>
        <Cell fixedWidth={96}>
          <Image src="https://unsplash.it/128/128?random" />
          </Cell>
          <Cell style={{paddingLeft: 16}}>
            <H3 size="small" style={{paddingTop: 0}}>Title <SubHeading style={{paddingTop: 0}}>@author</SubHeading></H3>
          <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut.</P>
          </Cell>
      </Grid>
    </CardContent>
  </Card>
)\
`} />

        <H4 size="small">Card Content colors</H4>
        <P>This has not been integrated into BlazeCSS yet, but it's pretty simple to color just parts of the cards</P>
        <ReactPlayground codeText={`\
export default (
  <Card bStyle="primary" shadow="higher">
    <CardContent style={{backgroundColor: '#42a5f5', color: 'white'}}>
      <Grid noGutter>
        <Cell fixedWidth={64}>
          <Image src="https://unsplash.it/128/128?random" />
          </Cell>
          <Cell style={{paddingLeft: 16}}>
            <H3 size="small" style={{paddingTop: 0}}>Card Title<br /> <SubHeading style={{paddingTop: 0, color: 'rgba(255, 255, 255, 0.7)'}}>Subtitle :)</SubHeading></H3>
          </Cell>
      </Grid>
    </CardContent>
    <CardContent>
          <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut.</P>
    </CardContent>
  </Card>
)\
`} />  

        <H4 size="small">Complete card with image overlay</H4>
        <P>This has not been integrated into BlazeCSS either</P>
        <ReactPlayground codeText={`\
export default (
  <Card bStyle="primary" shadow="higher">
      <CardContent style={{backgroundColor: '#42a5f5', color: 'white'}}>
      <Grid noGutter>
        <Cell fixedWidth={64}>
          <Image src="https://unsplash.it/128/128?random"  style={{borderRadius: '50%'}}/>
          </Cell>
          <Cell style={{paddingLeft: 16}}>
            <H3 size="small" style={{paddingTop: 0, paddingBottom: 0}}>Card Title<br /> <SubHeading style={{paddingTop: 0, paddingBottom: 0, color: 'rgba(255, 255, 255, 0.7)'}}>Subtitle :)</SubHeading></H3>
          </Cell>
      </Grid>
    </CardContent>
    <div style={{position: 'relative'}}>
    	<Image src="https://unsplash.it/1024/1024?random" style={{display: 'block'}} />
        <CardContent style={{position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 8, color: 'white'}}>
        	            <H3 size="small" style={{paddingTop: 0}}>Title<br /><SubHeading style={{paddingTop: 0, color: 'rgba(255, 255, 255, 0.7)'}}>@author</SubHeading></H3>
        </CardContent>
    </div>
    <CardContent>
    	<P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut.</P>
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