import React from 'react'
import {createRenderer} from 'react-addons-test-utils';
import expect from 'expect'

import {Button, DropdownButton, Menu, MenuItem, Overlay} from '../src/'


function expectJSX(element){
  let renderer = createRenderer();
  renderer.render(element);
  return expect(renderer.getRenderOutput());
}

describe('DropdownButton', () => {

  it("renders", () => {
    expectJSX(
      <DropdownButton label="button">
        <MenuItem>Item 1</MenuItem>
      </DropdownButton>
    ).toEqualJSX(
      <div style={{position: 'relative'}}>
        <button type="button" className="c-button">
          button
        </button>
      </div>
    )
  })
})