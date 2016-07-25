import React from 'react'
import {H2, H3} from '../../src'

import ReactPlayground from './LiveEditor'

export class ToggleDemo extends React.Component {
  render(){
    return (
      <div id="toggles">
        <H2 size="large">Toggle</H2>
        <p className="p-class">
          Prettier checkboxes...
        </p>
        <H3 size="medium">Styling</H3>
        <p className="p-class">
          Use any of the available blaze styles to quickly create a styled toggle. Just modify the <code>bStyle</code> prop.
        </p>
        <ReactPlayground codeText={`\
export default (\n\
  <div>\n\
    <Toggle defaultChecked={true}>Default</Toggle>\n\
    <Toggle bStyle="primary" defaultChecked={true}>Primary</Toggle>\n\
    <Toggle bStyle="secondary" defaultChecked={true}>Secondary</Toggle>\n\
    <Toggle bStyle="success" defaultChecked={true}>Success</Toggle>\n\
    <Toggle bStyle="error" defaultChecked={true}>Error</Toggle>\n\
  </div>\n\
)\
`} />
        <H3 size="medium">Controlled</H3>
        <p className="p-class">
          Controlled components don't update automatically
        </p>
        <ReactPlayground codeText={`\
class ControlledToggle extends React.Component {\n\
\n\
  constructor(props){\n\
    super(props)\n\
\n\
    this.state = {\n\
      checked: true\n\
    }\n\
    this.onChange = (e) => {\n\
      this.setState({checked: !this.state.checked})\n\
    }\n\
  }\n\
\n\
  render(){\n\
    const { checked } = this.state\n\
    return (\n\
      <div>\n\
        <Toggle checked={checked} onChange={this.onChange}>Normal value</Toggle>\n\
        <Toggle checked={!checked} onChange={this.onChange}>Inverted value</Toggle>\n\
        <Toggle checked={true}>Always on</Toggle>\n\
        <Toggle checked={false}>Always off</Toggle>\n\
      </div>\n\
    )\n\
  }\n\
}\n\
\n\
export default <ControlledToggle />\
`} />
        <H3 size="medium">Animate</H3>
        <p className="p-class">
          The <code>animate</code> prop can be used to turn on animations
        </p>
        <ReactPlayground codeText={`\
export default (\n\
  <div>\n\
    <Toggle bStyle="primary" animate>Animated toggle</Toggle>\n\
    <Toggle bStyle="primary" animate="slow">slow...</Toggle>\n\
    <Toggle bStyle="primary" animate="fast">...and fast !</Toggle>\n\
  </div>\n\
)\
`} />
        <table className="c-table c-table--striped c-table--condensed">
          <caption className="c-table__caption">Toggle props</caption>
          <thead className="c-table__head">
          <tr className="c-table__row c-table__row--heading">
            <th className="c-table__cell" style={{maxWidth: 110}}>Name</th>
            <th className="c-table__cell">Type</th>
            <th className="c-table__cell" style={{maxWidth: 90}}>Default</th>
            <th className="c-table__cell">Description</th>
          </tr>
          </thead>
          <tbody className="c-table__body">
            <tr className="c-table__row">
              <td className="c-table__cell" style={{maxWidth: 110}}>animate</td>
              <td className="c-table__cell"><span><code>true</code>, <code>false</code>, <code>"slow"</code>, or <code>"fast"</code></span></td>
              <td className="c-table__cell" style={{maxWidth: 90}}>false</td>
              <td className="c-table__cell">Turn on animations and set the speed</td>
            </tr>
            <tr className="c-table__row">
              <td className="c-table__cell" style={{maxWidth: 110}}>bStyle</td>
              <td className="c-table__cell"><span>empty or one of <code>"primary"</code>, <code>"secondary"</code>, <code>"success"</code>, <code>"error"</code></span></td>
              <td className="c-table__cell" style={{maxWidth: 90}}></td>
              <td className="c-table__cell">BlazeCSS style</td>
            </tr>
            <tr className="c-table__row">
              <td className="c-table__cell" style={{maxWidth: 110}}>checked</td>
              <td className="c-table__cell">boolean</td>
              <td className="c-table__cell" style={{maxWidth: 90}}></td>
              <td className="c-table__cell">Use <code>checked</code> to turn the component into a controlled component</td>
            </tr>
            <tr className="c-table__row">
              <td className="c-table__cell" style={{maxWidth: 110}}>defaultChecked</td>
              <td className="c-table__cell">boolean</td>
              <td className="c-table__cell" style={{maxWidth: 90}}>false</td>
              <td className="c-table__cell">Default checked value for uncontrolled components</td>
            </tr>
            <tr className="c-table__row">
              <td className="c-table__cell" style={{maxWidth: 110}}>onChange</td>
              <td className="c-table__cell">function</td>
              <td className="c-table__cell" style={{maxWidth: 90}}></td>
              <td className="c-table__cell">onChange callback for the internal input component</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}