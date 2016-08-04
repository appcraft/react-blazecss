import React from 'react'
import {createRenderer} from 'react-addons-test-utils';
import expect from 'expect'

import {Bubble} from '../src/Bubble'

function expectJSX(element){
  let renderer = createRenderer();
  renderer.render(element);
  return expect(renderer.getRenderOutput());
}

describe('Bubble', () => {

  it("renders", () => {
    expectJSX(<Bubble>Text</Bubble>).toEqualJSX(
      <div className="c-bubble c-bubble--top">Text</div>
    )
    expectJSX(<Bubble position="left">Text</Bubble>).toEqualJSX(
      <div className="c-bubble c-bubble--left">Text</div>
    )
  })

  it("animates", () => {
    expectJSX(<Bubble animate="slow">Text</Bubble>).toEqualJSX(
      <div className="c-bubble c-bubble--top a-bubble a-bubble--slow">Text</div>
    )
  })
})
