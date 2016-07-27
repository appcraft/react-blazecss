import React from 'react'
import {createRenderer} from 'react-addons-test-utils';
import expect from 'expect'

import {UL, OL, LI} from '../src/List'

function expectJSX(element){
  let renderer = createRenderer();
  renderer.render(element);
  return expect(renderer.getRenderOutput());
}

describe('UL', () => {

  it("renders", () => {
    expectJSX(<UL><LI>Text</LI></UL>).toEqualJSX(
      <ul className="c-list">
        <LI>Text</LI>
      </ul>
    )
  })

  it("works with unstyled and inline", () => {
    expectJSX(<UL unstyled><LI>Text</LI></UL>).toEqualJSX(
      <ul className="c-list c-list--unstyled">
        <LI>Text</LI>
      </ul>
    )
    expectJSX(<UL inline><LI>Text</LI></UL>).toEqualJSX(
      <ul className="c-list c-list--inline">
        <LI>Text</LI>
      </ul>
    )
  })

  it("works with a custom className", () => {
    expectJSX(<UL className="custom"><LI>Text</LI></UL>).toEqualJSX(
      <ul className="c-list custom">
        <LI>Text</LI>
      </ul>
    )
  })
})

describe('OL', () => {

  it("renders", () => {
    expectJSX(<OL><LI>Text</LI></OL>).toEqualJSX(
      <ol className="c-list c-list--ordered">
        <LI>Text</LI>
      </ol>
    )
  })
})

describe('LI', () => {

  it("renders", () => {
    expectJSX(<LI>Text</LI>).toEqualJSX(
      <li className="c-list__item">Text</li>
    )
  })

  it("works with unstyled", () => {
    expectJSX(<LI unstyled>Text</LI>).toEqualJSX(
      <li className="c-list__item c-list__item--unstyled">Text</li>
    )
  })
})
