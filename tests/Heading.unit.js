import React from 'react'
import {createRenderer} from 'react-addons-test-utils';
import expect from 'expect'

import {H1, H2, H3, SubHeading} from '../src/Heading'

function expectJSX(element){
  let renderer = createRenderer();
  renderer.render(element);
  return expect(renderer.getRenderOutput());
}

describe('Heading', () => {

  it("renders", () => {
    expectJSX(<H1>Header1</H1>).toEqualJSX(
      <h1 className="c-heading c-heading--super">Header1</h1>
    )
    expectJSX(<H2>Header2</H2>).toEqualJSX(
      <h2 className="c-heading c-heading--xlarge">Header2</h2>
    )
    expectJSX(<H3>Header3</H3>).toEqualJSX(
      <h3 className="c-heading c-heading--large">Header3</h3>
    )
  })

  it("works with extra className", () => {
    expectJSX(<H1 className="custom">Text</H1>).toEqualJSX(
      <h1 className="c-heading c-heading--super custom">Text</h1>
    )
  })
})

describe('SubHeading', () => {

  it("renders", () => {
    expectJSX(<SubHeading>sub</SubHeading>).toEqualJSX(
      <span className="c-heading c-heading__sub">sub</span>
    )
    expectJSX(<SubHeading className="custom">sub</SubHeading>).toEqualJSX(
      <span className="c-heading c-heading__sub custom">sub</span>
    )
  })
})
