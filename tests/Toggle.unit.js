import React from 'react'
import {createRenderer} from 'react-addons-test-utils';
import expect from 'expect'

import {Toggle} from '../src/Toggle'

let renderer = createRenderer();

function quickRender(element){
    renderer.render(element);
    return renderer.getRenderOutput();
}

describe('Toggle', () => {

  it("renders", () => {
    expect(quickRender(<Toggle>Text</Toggle>)).toEqualJSX(
      <label className="c-toggle">
        <input type="checkbox"
                checked={undefined} 
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
    expect(quickRender(<Toggle bStyle="primary">Text</Toggle>)).toEqualJSX(
      <label className="c-toggle c-toggle--primary">
        <input type="checkbox"
                checked={undefined} 
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
    expect(quickRender(<Toggle animate="slow">Text</Toggle>)).toEqualJSX(
      <label className="c-toggle a-toggle a-toggle--slow">
        <input type="checkbox"
                checked={undefined} 
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
    expect(quickRender(<Toggle right>Text</Toggle>)).toEqualJSX(
      <label className="c-toggle">
        <input type="checkbox"
                checked={undefined} 
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
    expect(quickRender(<Toggle checked={false}>Text</Toggle>)).toIncludeJSX(
        <input type="checkbox"
               checked={false} 
               defaultChecked={undefined}
               onChange={undefined} />
    )
    expect(quickRender(<Toggle checked={true}>Text</Toggle>)).toIncludeJSX(
        <input type="checkbox"
               checked={true} 
               defaultChecked={undefined}
               onChange={undefined} />
    )
    expect(quickRender(<Toggle defaultChecked={false}>Text</Toggle>)).toIncludeJSX(
        <input type="checkbox"
               checked={undefined} 
               defaultChecked={false}
               onChange={undefined} />
    )
    expect(quickRender(<Toggle defaultChecked={true}>Text</Toggle>)).toIncludeJSX(
        <input type="checkbox"
               checked={undefined} 
               defaultChecked={true}
               onChange={undefined} />
    )
  })
})
