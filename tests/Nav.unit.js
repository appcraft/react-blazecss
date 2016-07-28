import React from 'react'
import {createRenderer} from 'react-addons-test-utils';
import expect from 'expect'

import {Nav, NavContent, NavItem} from '../src/Nav'

function expectJSX(element){
  let renderer = createRenderer();
  renderer.render(element);
  return expect(renderer.getRenderOutput());
}

describe('Nav', () => {

  it("renders", () => {
    expectJSX(<Nav>Text</Nav>).toEqualJSX(
      <div className="c-nav">Text</div>
    )
  })

  it("works with light, inline, and shadow", () => {
    expectJSX(<Nav inline light>Text</Nav>).toEqualJSX(
      <div className="c-nav c-nav--inline c-nav--light">Text</div>
    )
    expectJSX(<Nav shadow="high">Text</Nav>).toEqualJSX(
      <div className="c-nav c-nav--high">Text</div>
    )
  })

  it("works with position and fixed", () => {
    expectJSX(<Nav position="top" fixed>Text</Nav>).toEqualJSX(
      <div className="c-nav c-nav--fixed c-nav--top">Text</div>
    )
  })

  it("works with className", () => {
    expectJSX(<Nav className="custom">Text</Nav>).toEqualJSX(
      <div className="c-nav custom">Text</div>
    )
  })

  it("animates", () => {
    expectJSX(<Nav animate="slow">Text</Nav>).toEqualJSX(
      <div className="c-nav a-nav a-nav--slow">Text</div>
    )
  })
})

describe('NavContent', () => {

  it("renders", () => {
    expectJSX(<NavContent>Text</NavContent>).toEqualJSX(
      <span className="c-nav__content">Text</span>
    )
  })

  it("works with right and centered", () => {
    expectJSX(<NavContent right centered>Text</NavContent>).toEqualJSX(
      <span className="c-nav__content c-nav__content--right u-centered">Text</span>
    )
  })

  it("works with className", () => {
    expectJSX(<NavContent className="custom">Text</NavContent>).toEqualJSX(
      <span className="c-nav__content custom">Text</span>
    )
  })
})

describe('NavItem', () => {

  it("renders", () => {
    expectJSX(<NavItem>Text</NavItem>).toEqualJSX(
      <span className="c-nav__item">Text</span>
    )
  })

  it("works with bStyle", () => {
    expectJSX(<NavItem bStyle="primary">Text</NavItem>).toEqualJSX(
      <span className="c-nav__item c-nav__item--primary">Text</span>
    )
  })

  it("works with active, right, and centered", () => {
    expectJSX(<NavItem active right centered>Text</NavItem>).toEqualJSX(
      <span className="c-nav__item c-nav__item--right c-nav__item--active u-centered">Text</span>
    )
  })

  it("works with className", () => {
    expectJSX(<NavItem className="custom">Text</NavItem>).toEqualJSX(
      <span className="c-nav__item custom">Text</span>
    )
  })

  it("uses a link if passed href", () => {
    expectJSX(<NavItem href="#">Text</NavItem>).toEqualJSX(
      <a className="c-nav__item" href="#">Text</a>
    )
  })
})
