import React from 'react'
import {createRenderer} from 'react-addons-test-utils';
import expect from 'expect'

import { Drawer } from '../src/Drawer'

function expectJSX(element){
  let renderer = createRenderer();
  renderer.render(element);
  return expect(renderer.getRenderOutput());
}

describe('Drawer', () => {

  it("renders", () => {
    expectJSX(<Drawer>text</Drawer>).toEqualJSX(
      <div className="c-drawer c-drawer--bottom">text</div>
    )
    expectJSX(<Drawer visible>text</Drawer>).toEqualJSX(
      <div className="c-drawer c-drawer--bottom c-drawer--visible">text</div>
    )
  })

  it("works with position", () => {
    expectJSX(<Drawer position="left">text</Drawer>).toEqualJSX(
      <div className="c-drawer c-drawer--left">text</div>
    )
  })

  it("works with className and shadow", () => {
    expectJSX(<Drawer className="custom" shadow="high">text</Drawer>).toEqualJSX(
      <div className="c-drawer c-drawer--bottom c-drawer--high custom">text</div>
    )
  })

  it("works with animate", () => {
    expectJSX(<Drawer animate="slow">text</Drawer>).toEqualJSX(
      <div className="c-drawer c-drawer--bottom a-drawer a-drawer--slow">text</div>
    )
  })
})
