import React from 'react'
import {H2, H3, P} from '../../src'

import ReactPlayground from './components/LiveEditor'
import { PropsTable, Props } from './components/PropsTable'

export class DropdownButtonDemo extends React.Component {
  render(){
    return (
      <div>
        <H2 size="large">DropdownButtons</H2>
        <H3 size="medium">Basic Example</H3>
        <P>
          WIP, subject to change...
        </P>
        <ReactPlayground codeText={`\
function handleClick(v){
  return () => alert("click on " + v)
}
export default (
  <DropdownButton label="dropdown" bStyle="primary">
    <MenuItem divider>Header 1</MenuItem>
    <MenuItem onClick={handleClick(1)}>Item 1</MenuItem>
    <MenuItem onClick={handleClick(2)}>Item 2</MenuItem>
    <MenuGroupDivider />
    <MenuItem divider>Header 1</MenuItem>
    <MenuItem onClick={handleClick(3)}>Item 3</MenuItem>
    <MenuItem onClick={handleClick(4)}>Item 4</MenuItem>
  </DropdownButton>
)\
`} />
      </div>
    )
  }
}