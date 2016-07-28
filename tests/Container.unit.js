import React from 'react'
import {createRenderer} from 'react-addons-test-utils';
import expect from 'expect'

import { Container } from '../src/Container'

function expectJSX(element){
  let renderer = createRenderer();
  renderer.render(element);
  return expect(renderer.getRenderOutput());
}

describe('Container', () => {

  it("renders", () => {
    expectJSX(<Container>text</Container>).toEqualJSX(
      <div className="o-container o-container--medium">text</div>
    )
  })

  it("works with sizes", () => {
    expectJSX(<Container size="large">text</Container>).toEqualJSX(
      <div className="o-container o-container--large">text</div>
    )
  })

  it("works with className and custom componentClass", () => {
    expectJSX(<Container className="custom" componentClass="section">text</Container>).toEqualJSX(
      <section className="o-container o-container--medium custom">text</section>
    )
  })
})
