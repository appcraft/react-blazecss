import React from 'react'
import {H2, H3, P} from '../../src'

import ReactPlayground from './components/LiveEditor'
import { PropsTable, Props } from './components/PropsTable'

export class MenuDemo extends React.Component {
  render(){
    return (
      <div>
        <H2 size="large">Menus</H2>
        <H3 size="medium">Basic Menu</H3>
        <ReactPlayground codeText={`\
export default (
  <Menu shadow="higher">
    <MenuItem>Menu 1</MenuItem>
    <MenuItem divider>Divider</MenuItem>
    <MenuItem>Menu 2</MenuItem>
    <MenuItem disabled>Menu 3 (disabled)</MenuItem>
    <MenuItem active>Menu 4 (active)</MenuItem>
    <MenuItem>Menu 5</MenuItem>
  </Menu>
)\
`} />
        <H3 size="medium">Grouped Menu</H3>
        <ReactPlayground codeText={`\
export default (
  <Menu grouped shadow="higher">
    <MenuItem divider>Header 1</MenuItem>
    <MenuItem>Menu 1</MenuItem>
    <MenuItem>Menu 2</MenuItem>
    <MenuGroupDivider />
    <MenuItem divider>Header 2</MenuItem>
    <MenuItem>Menu 3</MenuItem>
    <MenuItem>Menu 4</MenuItem>
  </Menu>
)\
`} />
      </div>
    )
  }
}