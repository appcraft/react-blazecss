import React from 'react'
import {createRenderer} from 'react-addons-test-utils';
import expect from 'expect'

import {Button, ButtonGroup} from '../src/Button'


function expectJSX(element){
  let renderer = createRenderer();
  renderer.render(element);
  return expect(renderer.getRenderOutput());
}

describe('Button', () => {

  it("renders", () => {
    expectJSX(<Button>Text</Button>).toEqualJSX(
      <button type="button" className="c-button">
        Text
      </button>
    )
  })

  it("works with bStyle and ghost", () => {
    expectJSX(<Button bStyle="success">Text</Button>).toEqualJSX(
      <button type="button" className="c-button c-button--success">
        Text
      </button>
    )
    expectJSX(<Button ghost>Text</Button>).toEqualJSX(
      <button type="button" className="c-button c-button--ghost">
        Text
      </button>
    )
    expectJSX(<Button ghost bStyle="success">Text</Button>).toEqualJSX(
      <button type="button" className="c-button c-button--ghost-success">
        Text
      </button>
    )
  })

  it("works with rounded and block", () => {
    expectJSX(<Button rounded block>Text</Button>).toEqualJSX(
      <button type="button" className="c-button c-button--rounded c-button--block">
        Text
      </button>
    )
  })

  it("works with size", () => {
    expectJSX(<Button size="medium">Text</Button>).toEqualJSX(
      <button type="button" className="c-button c-button--medium">
        Text
      </button>
    )
  })

  it("changes to link when using href", () => {
    expectJSX(<Button href="#">Text</Button>).toEqualJSX(
      <a href="#" className="c-button">
        Text
      </a>
    )
  })
})

describe('ButtonGroup', () => {

  it("renders", () => {
    expectJSX(<ButtonGroup><Button>Text</Button></ButtonGroup>).toEqualJSX(
      <span className="c-button-group">
        <Button>Text</Button>
      </span>
    )
    expectJSX(<ButtonGroup rounded><Button>Text</Button></ButtonGroup>).toEqualJSX(
      <span className="c-button-group c-button-group--rounded">
        <Button>Text</Button>
      </span>
    )
  })

  it("works with size and ghost", () => {
    expectJSX(<ButtonGroup size="small" ghost><Button>Text</Button></ButtonGroup>).toEqualJSX(
      <span className="c-button-group">
        <Button size="small" ghost>Text</Button>
      </span>
    )
    // Empty test
    expectJSX(<ButtonGroup size="small" ghost></ButtonGroup>).toEqualJSX(
      <span className="c-button-group">
      </span>
    )
    // Empty test
    expectJSX(<ButtonGroup ghost>
      <Button>Text</Button>
      <Button bStyle="prirmary">Text</Button>
      <Button bStyle="error">Text</Button>
    </ButtonGroup>).toEqualJSX(
      <span className="c-button-group">
        <Button ghost size={undefined}>Text</Button>
        <Button ghost size={undefined} bStyle="prirmary">Text</Button>
        <Button ghost size={undefined} bStyle="error">Text</Button>
      </span>
    )
  })
})
