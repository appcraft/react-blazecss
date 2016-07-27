import React from 'react'
import {createRenderer} from 'react-addons-test-utils';
import expect from 'expect'

import {P} from '../src/P'

function expectJSX(element){
  let renderer = createRenderer();
  renderer.render(element);
  return expect(renderer.getRenderOutput());
}

describe('P', () => {

  it("renders", () => {
    expectJSX(<P>Text</P>).toEqualJSX(
      <p className="c-paragraph">Text</p>
    )
  })

  it("works with a custom className", () => {
    expectJSX(<P className="custom">Text</P>).toEqualJSX(
      <p className="c-paragraph custom">Text</p>
    )
  })
})
