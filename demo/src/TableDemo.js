import React from 'react'
import {H2, H3} from '../../src'

import ReactPlayground from './components/LiveEditor'

export class TableDemo extends React.Component {
  render(){
    return (
      <div>
        <H2 size="large">Tables</H2>
        <H3 size="medium">Basic Table</H3>
        <ReactPlayground codeText={`\
export default (
  <Table>
    <TCaption>Basic table</TCaption>
    <THead>
      <TR heading>
        <TH>First name</TH><TH>Last Name</TH><TH>Username</TH>
      </TR>
    </THead>
    <TBody>
      <TR><TD>Jim</TD><TD>Krik</TD><TD>@captaink</TD></TR>
      <TR><TD>Mr.</TD><TD>Spock</TD><TD>@science101</TD></TR>
      <TR><TD>Nyota</TD><TD>Uhura</TD><TD>@comms</TD></TR>
    </TBody>
  </Table>
)\
`} />
        <H3 size="medium">Striped Table</H3>
        <ReactPlayground codeText={`\
export default (
  <Table striped>
    <TCaption>Striped rows</TCaption>
    <THead>
      <TR heading>
        <TH>First name</TH><TH>Last Name</TH><TH>Username</TH>
      </TR>
    </THead>
    <TBody>
      <TR><TD>Jim</TD><TD>Krik</TD><TD>@captaink</TD></TR>
      <TR><TD>Mr.</TD><TD>Spock</TD><TD>@science101</TD></TR>
      <TR><TD>Nyota</TD><TD>Uhura</TD><TD>@comms</TD></TR>
    </TBody>
  </Table>
)\
`} />
        <H3 size="medium">Clickable Table</H3>
        <ReactPlayground codeText={`\
export default (
  <Table clickable>
    <TCaption>Clickable table with inactive row</TCaption>
    <THead>
      <TR heading>
        <TH>First name</TH><TH>Last Name</TH><TH>Username</TH>
      </TR>
    </THead>
    <TBody>
      <TR inactive><TD>Jim</TD><TD>Krik</TD><TD>@captaink</TD></TR>
      <TR><TD>Mr.</TD><TD>Spock</TD><TD>@science101</TD></TR>
      <TR><TD>Nyota</TD><TD>Uhura</TD><TD>@comms</TD></TR>
    </TBody>
  </Table>
)\
`} />
        <H3 size="medium">Condensed</H3>
        <ReactPlayground codeText={`\
export default (
  <Table condensed>
    <TCaption>Small table and text</TCaption>
    <THead>
      <TR heading>
        <TH>First name</TH><TH>Last Name</TH><TH>Username</TH>
      </TR>
    </THead>
    <TBody>
      <TR><TD>Jim</TD><TD>Krik</TD><TD>@captaink</TD></TR>
      <TR><TD>Mr.</TD><TD>Spock</TD><TD>@science101</TD></TR>
      <TR><TD>Nyota</TD><TD>Uhura</TD><TD>@comms</TD></TR>
    </TBody>
  </Table>
)\
`} />
      </div>
    )
  }
}