import React from 'react'
import {H2, H3, P} from '../../src'

import ReactPlayground from './components/LiveEditor'

export class ListDemo extends React.Component {
  render(){
    return (
      <div id="lists">
        <H2 size="large">Lists</H2>
        <P>
          Ordered, un-ordered, indented
        </P>
        <H3 size="medium">Un-ordered</H3>
        <ReactPlayground codeText={`\
export default (
  <UL>
    <LI>Lorem ipsum dolor sit amet</LI>
    <LI>Nulla volutpat aliquam velit
      <UL>
        <LI>Phasellus iaculis neque</LI>
        <LI>Purus sodales ultricies</LI>
        <LI>Ac tristique libero volutpat at</LI>
      </UL>
    </LI>
    <LI>Faucibus porta lacus fringilla vel</LI>
  </UL>
)\
`} />
        <H3 size="medium">Ordered</H3>
        <ReactPlayground codeText={`\
export default (
  <OL>
    <LI>Lorem ipsum dolor sit amet</LI>
    <LI>Nulla volutpat aliquam velit
      <OL>
        <LI>Phasellus iaculis neque</LI>
        <LI>Purus sodales ultricies</LI>
      </OL>
    </LI>
    <LI>Faucibus porta lacus fringilla vel</LI>
  </OL>
)\
`} />
        <H3 size="medium">Un-styled</H3>
        <p className="c-paragraph">
          Both UL and LI can be unstyled using the <code>unstyle</code> prop.
        </p>
        <ReactPlayground codeText={`\
export default (
  <UL unstyled>
    <LI>Lorem ipsum dolor sit amet</LI>
    <LI>Nulla volutpat aliquam velit
      <UL>
        <LI>Phasellus iaculis neque</LI>
        <LI unstyled>Vestibulum laoreet porttitor sem</LI>
        <LI>Ac tristique libero volutpat at</LI>
      </UL>
    </LI>
    <LI>Faucibus porta lacus fringilla vel</LI>
  </UL>
)\
`} />
        <H3 size="medium">Inline</H3>
        <ReactPlayground codeText={`\
export default (
  <UL inline>
    <LI>Lorem ipsum</LI>
    <LI>Consectetur</LI>
    <LI>Nulla</LI>
  </UL>
)\
`} />
      </div>
    )
  }
}