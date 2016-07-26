import React from 'react'
import {H2, H3, P} from '../../src'

import ReactPlayground from './components/LiveEditor'
import { PropsTable, Props } from './components/PropsTable'

export class ToggleDemo extends React.Component {
  render(){
    return (
      <div>
        <H2 size="large">Toggles</H2>
        <P>
          Prettier checkboxes...
        </P>
        <H3 size="medium">Styling</H3>
        <P>
          Use any of the available blaze styles to quickly create a styled toggle. Just modify the <code>bStyle</code> prop.
        </P>
        <ReactPlayground codeText={`\
export default (
  <div>
    <Toggle defaultChecked={true}>Default</Toggle>
    <Toggle bStyle="primary" defaultChecked={true}>Primary</Toggle>
    <Toggle bStyle="secondary" defaultChecked={true}>Secondary</Toggle>
    <Toggle bStyle="success" defaultChecked={true}>Success</Toggle>
    <Toggle bStyle="error" defaultChecked={true}>Error</Toggle>
  </div>
)\
`} />
        <H3 size="medium">Controlled</H3>
        <P>
          Controlled components don't update automatically
        </P>
        <ReactPlayground codeText={`\
class ControlledToggle extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      checked: true
    }
    this.onChange = (e) => {
      this.setState({checked: !this.state.checked})
    }
  }

  render(){
    const { checked } = this.state
    return (
      <div>
        <Toggle checked={checked} onChange={this.onChange}>Normal value</Toggle>
        <Toggle checked={!checked} onChange={this.onChange}>Inverted value</Toggle>
        <Toggle checked={true}>Always on</Toggle>
        <Toggle checked={false}>Always off</Toggle>
      </div>
    )
  }
}

export default <ControlledToggle />\
`} />
        <H3 size="medium">Animate</H3>
        <P>
          The <code>animate</code> prop can be used to turn on animations
        </P>
        <ReactPlayground codeText={`\
export default (
  <div>
    <Toggle bStyle="primary" animate>Animated toggle</Toggle>
    <Toggle bStyle="primary" animate="slow">slow...</Toggle>
    <Toggle bStyle="primary" animate="fast">...and fast !</Toggle>
  </div>
)\
`} />
        <H3 size="medium">Props</H3>
        <PropsTable caption="Toggle props" data={[
          Props.animate,
          Props.bStyle,
          Props.checked,
          Props.defaultChecked,
          Props.onChange,
        ]} />
      </div>
    )
  }
}