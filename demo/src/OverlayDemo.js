import React from 'react'
import {H2, H3, P} from '../../src'

import ReactPlayground from './components/LiveEditor'
import { PropsTable, Props } from './components/PropsTable'

export class OverlayDemo extends React.Component {
  render(){
    return (
      <div>
        <H2 size="large">Overlays</H2>
        <P>
          Overlays are used in a lot of other components to blackout the background context of the page.
        </P>
        <P>
          To contain an overlay within an element set the parent element CSS to position: relative;
        </P>
        <H3 size="medium">Basic Overlay</H3>
        <ReactPlayground codeText={`\
export default (
  <div className="modal-demo">
    <Overlay />
  </div>
)\
`} />
        <H3 size="medium">Overlay Contents</H3>
        <P>
          Anything you put inside the overlay will be displayed with the overlay behind it.
        </P>
        <ReactPlayground codeText={`\
export default (
  <div className="modal-demo">
    <Overlay style={{color: 'white'}}>Text over the overlay</Overlay>
  </div>
)\
`} />
        <H3 size="medium">Dismissable</H3>
        <P>
          The <code>dismissable</code> prop gives the sens that you can click on overlay. The following code hides the Overlay when it is clicked.
        </P>
        <ReactPlayground codeText={`\
class DismissableOverlay extends React.Component {
  constructor(props){
    super(props)
    this.state = { show: true }
  }

  render(){
    if (!this.state.show) return null
    return( 
      <Overlay dismissable 
               onClick={() => this.setState({show: false})} />
    )
  }
}
export default (
  <div className="modal-demo" dismissable>
    <DismissableOverlay />
  </div>
)\
`} />
        <H3 size="medium">Transparent</H3>
        <P>
          Overlays can also be transparent and used to capture clicks
        </P>
        <ReactPlayground codeText={`\
function handleClick(){
  alert("You clicked on the Overlay")
}
export default (
  <div className="modal-demo" dismissable>
    <Overlay transparent dismissable onClick={handleClick} />
  </div>
)\
`} />
        <H3 size="medium">Fullpage</H3>
        <P>
          Using <code>fullpage</code>, the overlay will take up... the whole page...
        </P>
        <ReactPlayground codeText={`\
class FullpageOverlay extends React.Component {
  constructor(props){
    super(props)
    this.state = { fullpage: false }
  }

  render(){
    const { fullpage } = this.state
    return( 
      <Overlay fullpage={fullpage} dismissable
               style={{color: 'white'}}
               onClick={() => this.setState({fullpage: !fullpage})}>
          Click on the overlay to toggle fullpage...
      </Overlay>
    )
  }
}
export default (
  <div className="modal-demo" dismissable>
    <FullpageOverlay />
  </div>
)\
`} />
{/*
        <H3 size="medium">Animation</H3>
        <P>
          The <code>animate</code> prop can be used to add animations.
        </P>
        <ReactPlayground codeText={`\
class ToggleDrawer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      transparent: false
    }
    this.handleToggle = (e) => {
      this.setState({transparent: !this.state.transparent})
    }
  }

  render(){
    const { transparent } = this.state
    return (
      <div>
        <Toggle animate bStyle="primary"
                checked={!transparent} 
                onChange={this.handleToggle}>
          show/hide the overlay
        </Toggle>
        <div className="modal-demo">
          <Overlay animate 
                   transparent={transparent}/>
        </div>
      </div>
    )
  }  
}
export default (
  <ToggleDrawer />
)\
`} />
*/}
      </div>
    )
  }
}