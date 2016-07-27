import React from 'react'
import {createRenderer} from 'react-addons-test-utils';
import expect from 'expect'

import {Blockquote} from '../src/Blockquote'

function expectJSX(element){
  let renderer = createRenderer();
  renderer.render(element);
  return expect(renderer.getRenderOutput());
}

describe('Blockquote', () => {

  it("renders", () => {
    expectJSX(<Blockquote>Text</Blockquote>).toEqualJSX(
      <blockquote className="c-blockquote">
        <p className="c-blockquote__body">
          Text
        </p>
      </blockquote>
    )
  })

  it("cites", () => {
    expectJSX(<Blockquote cite="Me">Text</Blockquote>).toEqualJSX(
      <blockquote className="c-blockquote">
        <p className="c-blockquote__body">
          Text
        </p>
        <footer className="c-blockquote__footer">- Me</footer>
      </blockquote>
    )
  })

  it("works with a custom className", () => {
    expectJSX(<Blockquote className="custom">Text</Blockquote>).toEqualJSX(
      <blockquote className="c-blockquote custom">
        <p className="c-blockquote__body">
          Text
        </p>
      </blockquote>
    )
  })
})
