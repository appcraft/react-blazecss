import React from 'react'
import {createRenderer} from 'react-addons-test-utils';
import expect from 'expect'

import {Toggle} from '../src/Toggle'

function expectJSX(element){
  let renderer = createRenderer();
  renderer.render(element);
  return expect(renderer.getRenderOutput());
}

describe('Toggle', () => {

  it("renders", () => {
    expectJSX(<Toggle>Text</Toggle>).toEqualJSX(
      <label className="c-toggle">
        <input type="checkbox"
               checked={undefined}
               id={undefined} 
               defaultChecked={undefined}
               onChange={undefined} />
        <div className="c-toggle__track">
          <div className="c-toggle__handle"></div>
        </div>
        Text
      </label>
    )
  })

  it("works with bStyle", () => {
    expectJSX(<Toggle bStyle="primary">Text</Toggle>).toEqualJSX(
      <label className="c-toggle c-toggle--primary">
        <input type="checkbox"
               checked={undefined} 
               id={undefined}
               defaultChecked={undefined}
               onChange={undefined} />
        <div className="c-toggle__track">
          <div className="c-toggle__handle"></div>
        </div>
        Text
      </label>
    )
  })

  it("animates", () => {
    expectJSX(<Toggle animate="slow">Text</Toggle>).toEqualJSX(
      <label className="c-toggle a-toggle a-toggle--slow">
        <input type="checkbox"
               checked={undefined}
               id={undefined} 
               defaultChecked={undefined}
               onChange={undefined} />
        <div className="c-toggle__track">
          <div className="c-toggle__handle"></div>
        </div>
        Text
      </label>
    )
  })

  it("works with right", () => {
    expectJSX(<Toggle right>Text</Toggle>).toEqualJSX(
      <label className="c-toggle">
        <input type="checkbox"
               checked={undefined}
               id={undefined} 
               defaultChecked={undefined}
               onChange={undefined} />
        Text
        <div className="c-toggle__track">
          <div className="c-toggle__handle"></div>
        </div>
      </label>
    )
  })

  it("works with checked and defaultChecked", () => {
    expectJSX(<Toggle checked={false}>Text</Toggle>).toIncludeJSX(
        <input type="checkbox"
               checked={false} 
               id={undefined}
               defaultChecked={undefined}
               onChange={undefined} />
    )
    expectJSX(<Toggle checked={true}>Text</Toggle>).toIncludeJSX(
        <input type="checkbox"
               checked={true} 
               id={undefined}
               defaultChecked={undefined}
               onChange={undefined} />
    )
    expectJSX(<Toggle defaultChecked={false}>Text</Toggle>).toIncludeJSX(
        <input type="checkbox"
               checked={undefined} 
               id={undefined}
               defaultChecked={false}
               onChange={undefined} />
    )
    expectJSX(<Toggle defaultChecked={true}>Text</Toggle>).toIncludeJSX(
        <input type="checkbox"
               checked={undefined} 
               id={undefined}
               defaultChecked={true}
               onChange={undefined} />
    )
  })

  it("passes id to input", () => {
    expectJSX(<Toggle id="123">Text</Toggle>).toEqualJSX(
      <label className="c-toggle">
        <input type="checkbox"
               checked={undefined}
               id="123" 
               defaultChecked={undefined}
               onChange={undefined} />
        <div className="c-toggle__track">
          <div className="c-toggle__handle"></div>
        </div>
        Text
      </label>
    )
  })
})
