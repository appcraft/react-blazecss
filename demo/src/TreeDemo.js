import React from 'react'
import {H2, H3, P} from '../../src'

import ReactPlayground from './components/LiveEditor'

export class TreeDemo extends React.Component {
  render(){
    return (
      <div>
        <H2 size="large">Trees</H2>
        <P>
          Expandable tree structure
        </P>
        <H3 size="medium">Expandable and Expanded</H3>
        <P>
          By default a Tree is a controlled UI component, so the following components won't change on click. 
        </P>
        <ReactPlayground codeText={`
export default (
  <Tree>
    <TreeItem label="Directory 1" expandable/>
    <TreeItem label="Directory 2" expandable />
    <TreeItem label="Directory 3" expandable expanded>
      <Tree>
        <TreeItem label="File 3.1" />
        <TreeItem label="Directory 3.2" expanded>
          <Tree>
            <TreeItem label="File 3.2.1" />
            <TreeItem label="File 3.2.2" />
            <TreeItem label="File 3.2.3" />
          </Tree>
        </TreeItem>
        <TreeItem label="File 3.3" />
      </Tree>
    </TreeItem>
    <TreeItem label="Directory 4" expandable expanded>
      <Tree>
        <TreeItem label="File 4.1" />
      </Tree>
    </TreeItem>
    <TreeItem label="Directory 5" expandable expanded>
      <Tree>
        <TreeItem label="(empty)" quiet />
      </Tree>
    </TreeItem>
  </Tree>
)
`} />
        <H3 size="medium">DataTree</H3>
        <P>
          Automatic tree management is possible using the DataTree and by passing it data.
        </P>
        <P>
          The API is subject to change and this will probably be extracted into a separate and more feature-packed package.
        </P>
        <ReactPlayground codeText={`
const data = [
  {label: "Directory 1", children: [
    {label: "File 1.1"}
  ]},
  {label: "Directory 2 (with a few nested children)", children: [
    {label: "File 2.1"},
    {label: "File 2.2"},
      {label: "Directory 2.3", children: [
        {label: "Directory 2.3.1", children: [
          {label: "File 2.3.1.1"},
          {label: "File 2.3.1.2"},
        ]},
        {label: "File 2.3.2"},
        {label: "File 2.3.3"},
      ]},
  ]},
  {label: "Directory 3", children: [
    {label: "File 3.1"}
  ]},
  {label: "Directory 4", children: [
    {label: "File 4.1"}
  ]},
]
export default (
  <DataTree data={data} />
)`} />
      </div>
    )
  }
}