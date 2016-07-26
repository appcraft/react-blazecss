import React from 'react'
import {Table, TR, TH, TD, TBody, THead, TCaption } from '../../../src'

export class PropsTable extends React.Component {
  render(){
    const { caption, data=[] } = this.props
    return (
      <Table striped condensed>
        {caption && <TCaption>{caption}</TCaption>}
        <THead>
        <TR heading>
          <TH style={{maxWidth: 110}}>Name</TH>
          <TH>Type</TH>
          <TH style={{maxWidth: 90}}>Default</TH>
          <TH>Description</TH>
        </TR>
        </THead>
        <TBody>
          {data.map(({name, type, defaultValue, description}) => (
            <TR key={name}>
              <TD style={{maxWidth: 110}}>{name}</TD>
              <TD>{type}</TD>
              <TD style={{maxWidth: 90}}>{defaultValue}</TD>
              <TD>{description}</TD>
            </TR>
          ))}
        </TBody>
      </Table>
    )
  }
}
export const Props = {
  animate: {
    name: "animate",
    type: <span><code>true</code>, <code>false</code>, <code>"slow"</code>, or <code>"fast"</code></span>,
    defaultValue: "false",
    description: "Turn on animations and set the speed"
  },
  block: {
    name: "block", 
    type: "boolean", 
    defaultValue: "false", 
    description: "Set to true to draw a button at full width"
  },
  bStyle: {
    name: "bStyle", 
    type: <span>empty or one of <code>"primary"</code>, <code>"secondary"</code>, <code>"success"</code>, <code>"error"</code></span>, 
    defaultValue: "", 
    description: "BlazeCSS style"
  },
  checked: {
    name: "checked",
    type: "boolean",
    defaultValue: "",
    description: <span>Use <code>checked</code> to turn the component into a controlled component</span>
  },
  defaultChecked: {
    name: "defaultChecked",
    type: "boolean",
    defaultValue: "false",
    description: "Default checked value for uncontrolled components"
  },
  ghost: {
    name: "ghost", 
    type: "boolean", 
    defaultValue: "false", 
    description: "Set to true to draw a button with inverted colors (white background and colored border)"
  },
  href: {
    name: "href", 
    type: "string", 
    defaultValue: "", 
    description: <span>If present, changes the button into a link tag with the button style and sets <code>href</code></span>
  },
  size: {
    name: "size", 
    type: <span>empty or one of <code>"xsmall"</code>, <code>"small"</code>, <code>"medium"</code>, <code>"large"</code>, <code>"xlarge"</code>, <code>"super"</code></span>, 
    defaultValue: "medium", 
    description: "BlazeCSS size"
  },
  rounded: {
    name: "rounded", 
    type: "boolean", 
    defaultValue: "false", 
    description: <span>Set to true to draw with rounded corners</span>
  },
  onClose: {
    name: "onClose",
    type: "function",
    default: "",
    description: "onClose callback"
  },
  onChange: {
    name: "onChange",
    type: "function",
    defaultValue: "",
    description: "onChange callback for the internal input component"
  },
}

