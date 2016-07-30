import React from 'react'
import {createRenderer} from 'react-addons-test-utils';
import expect from 'expect'

import {Overlay} from '../src/Overlay'

function expectJSX(element){
  let renderer = createRenderer();
  renderer.render(element);
  return expect(renderer.getRenderOutput());
}

describe('Overlay', () => {

  it("renders", () => {
    expectJSX(<Overlay>Text</Overlay>).toEqualJSX(
      <span className="c-overlay">Text</span>
    )
  })

  it("works with dismissable, transparent, and fullpage", () => {
    expectJSX(<Overlay dismissable>Text</Overlay>).toEqualJSX(
      <span className="c-overlay c-overlay--dismissable">Text</span>
    )
    expectJSX(<Overlay transparent>Text</Overlay>).toEqualJSX(
      <span className="c-overlay c-overlay--transparent">Text</span>
    )
    expectJSX(<Overlay fullpage>Text</Overlay>).toEqualJSX(
      <span className="c-overlay c-overlay--fullpage">Text</span>
    )
  })

  it("works with animate", () => {
    expectJSX(<Overlay animate="slow">Text</Overlay>).toEqualJSX(
      <span className="c-overlay a-overlay a-overlay--slow">Text</span>
    )
  })
})
