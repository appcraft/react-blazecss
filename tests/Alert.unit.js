import React from 'react'
import {createRenderer} from 'react-addons-test-utils';
import expect from 'expect'

import {Alert, Alerts} from '../src/Alert'

function expectJSX(element){
  let renderer = createRenderer();
  renderer.render(element);
  return expect(renderer.getRenderOutput());
}

describe('Alert', () => {

  it("renders", () => {
    expectJSX(<Alert>Text</Alert>).toEqualJSX(
      <div className="c-alerts__alert">
        <button className="c-button c-button--close" onClick={undefined}>×</button>
        Text
      </div>
    )
  })

  it("works with bStyle", () => {
    expectJSX(<Alert bStyle="success">Text</Alert>).toEqualJSX(
      <div className="c-alerts__alert c-alerts__alert--success">
        <button className="c-button c-button--close" onClick={undefined}>×</button>
        Text
      </div>
    )
  })
})

describe('Alerts', () => {

  it("renders", () => {
    expectJSX(<Alerts><Alert>Text</Alert></Alerts>).toEqualJSX(
      <div className="c-alerts">
        <Alert>Text</Alert>
      </div>
    )
  })
})
