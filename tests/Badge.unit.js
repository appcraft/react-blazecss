import React from 'react'
import {createRenderer} from 'react-addons-test-utils';
import expect from 'expect'

import {Badge} from '../src/Badge'

function expectJSX(element){
  let renderer = createRenderer();
  renderer.render(element);
  return expect(renderer.getRenderOutput());
}

describe('Badge', () => {

  it("renders", () => {
    expectJSX(<Badge>Text</Badge>).toEqualJSX(
      <span className="c-badge">Text</span>
    )
  })

  it("works with bStyle and rounded", () => {
    expectJSX(<Badge bStyle="primary" rounded>Text</Badge>).toEqualJSX(
      <span className="c-badge c-badge--primary c-badge--rounded">Text</span>
    )
  })
})
