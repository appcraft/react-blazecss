import React from 'react'
import {H2, H3} from '../../src'

import ReactPlayground from './LiveEditor'

export class BadgeDemo extends React.Component {
  render(){
    return (
      <div id="badges">
        <H2 size="large">Badges</H2>
        <p className="p-class">
          Badges are useful when you want to add additional info. Like a version number of a project or for status messages for individual items.
        </p>
        <H3 size="medium">Styling</H3>
        <p className="p-class">
          Use any of the available blaze styles to quickly create a styled badge. Just modify the <code>bStyle</code> prop.
        </p>
        <ReactPlayground codeText={`\
export default (\n\
  <div>\n\
    <Badge>Default</Badge>{" "}\n\
    <Badge bStyle="primary">Primary</Badge>{" "}\n\
    <Badge bStyle="secondary">Secondary</Badge>{" "}\n\
    <Badge bStyle="success">Success</Badge>{" "}\n\
    <Badge bStyle="error">Error</Badge>\n\
  </div>\n\
)\
`} />
        <H3 size="medium">Rounded</H3>
        <ReactPlayground codeText={`\
export default (\n\
  <div>\n\
    <Badge rounded>Default</Badge>{" "}\n\
    <Badge bStyle="primary" rounded>Primary</Badge>{" "}\n\
    <Badge bStyle="secondary" rounded>Secondary</Badge>{" "}\n\
    <Badge bStyle="success" rounded>Success</Badge>{" "}\n\
    <Badge bStyle="error" rounded>Error</Badge>\n\
  </div>\n\
)\
`} />
        <table className="c-table c-table--striped c-table--condensed">
          <caption className="c-table__caption">Badge props</caption>
          <thead className="c-table__head">
          <tr className="c-table__row c-table__row--heading">
            <th className="c-table__cell" style={{maxWidth: 90}}>Name</th>
            <th className="c-table__cell">Type</th>
            <th className="c-table__cell" style={{maxWidth: 90}}>Default</th>
            <th className="c-table__cell">Description</th>
          </tr>
          </thead>
          <tbody className="c-table__body">
            <tr className="c-table__row">
              <td className="c-table__cell" style={{maxWidth: 90}}>bStyle</td>
              <td className="c-table__cell"><span>empty or one of <code>"primary"</code>, <code>"secondary"</code>, <code>"success"</code>, <code>"error"</code></span></td>
              <td className="c-table__cell" style={{maxWidth: 90}}></td>
              <td className="c-table__cell">BlazeCSS style</td>
            </tr>
            <tr className="c-table__row">
              <td className="c-table__cell" style={{maxWidth: 90}}>rounded</td>
              <td className="c-table__cell">boolean</td>
              <td className="c-table__cell" style={{maxWidth: 90}}>false</td>
              <td className="c-table__cell">Set to true to draw with rounded corners</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}