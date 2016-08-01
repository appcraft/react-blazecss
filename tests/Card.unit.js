import React from 'react'
import {createRenderer} from 'react-addons-test-utils';
import expect from 'expect'

import {Card, CardContent, CardItem, CardGroupDivider} from '../src/Card'

function expectJSX(element){
  let renderer = createRenderer();
  renderer.render(element);
  return expect(renderer.getRenderOutput());
}

describe('Card', () => {

  it("renders", () => {
    expectJSX(<Card>Text</Card>).toEqualJSX(
      <div className="c-card">Text</div>
    )
  })

  it("works with bStyle", () => {
    expectJSX(<Card bStyle="primary">Text</Card>).toEqualJSX(
      <div className="c-card c-card--primary">Text</div>
    )
  })

  it("works with shadow and grouped", () => {
    expectJSX(<Card shadow="high" grouped>Text</Card>).toEqualJSX(
      <div className="c-card c-card--high c-card--grouped">Text</div>
    )
  })
})

describe('CardContent', () => {

  it("renders", () => {
    expectJSX(<CardContent>Text</CardContent>).toEqualJSX(
      <div className="c-card__content">Text</div>
    )
  })

  it("works with divider", () => {
    expectJSX(<CardContent divider>Text</CardContent>).toEqualJSX(
      <div className="c-card__content c-card__content--divider">Text</div>
    )
  })
})

describe('CardItem', () => {

  it("renders", () => {
    expectJSX(<CardItem>Text</CardItem>).toEqualJSX(
      <div className="c-card__item">Text</div>
    )
  })

  it("works with divider, disabled, active", () => {
    expectJSX(<CardItem divider disabled active>Text</CardItem>).toEqualJSX(
      <div className="c-card__item c-card__item--divider c-card__item--disabled c-card__item--active">Text</div>
    )
  })
})

describe('CardGroupDivider', () => {

  it("renders", () => {
    expectJSX(<CardGroupDivider />).toEqualJSX(
      <div className="c-card__group-divider" />
    )
  })
})
