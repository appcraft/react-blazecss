import React from 'react'
import {createRenderer} from 'react-addons-test-utils';
import expect from 'expect'

import {Menu, MenuItem, MenuGroupDivider} from '../src/Menu'

function expectJSX(element){
  let renderer = createRenderer();
  renderer.render(element);
  return expect(renderer.getRenderOutput());
}

describe('Menu', () => {

  it("renders", () => {
    expectJSX(<Menu>Text</Menu>).toEqualJSX(
      <ul className="c-menu">Text</ul>
    )
  })

  it("works with shadow and grouped", () => {
    expectJSX(<Menu shadow="high" grouped>Text</Menu>).toEqualJSX(
      <ul className="c-menu c-menu--high c-menu--grouped">Text</ul>
    )
  })
})

describe('MenuItem', () => {

  it("renders", () => {
    expectJSX(<MenuItem>Text</MenuItem>).toEqualJSX(
      <li className="c-menu__item">Text</li>
    )
  })

  it("works with divider, disabled, active", () => {
    expectJSX(<MenuItem divider disabled active>Text</MenuItem>).toEqualJSX(
      <li className="c-menu__item c-menu__item--divider c-menu__item--disabled c-menu__item--active">Text</li>
    )
  })
})

describe('MenuGroupDivider', () => {

  it("renders", () => {
    expectJSX(<MenuGroupDivider />).toEqualJSX(
      <li className="c-menu__group-divider" />
    )
  })
})
