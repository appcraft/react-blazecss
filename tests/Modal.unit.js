import React from 'react'
import {createRenderer} from 'react-addons-test-utils';
import expect from 'expect'

import {Modal, ModalHeader, ModalBody, ModalFooter} from '../src/Modal'

function expectJSX(element){
  let renderer = createRenderer();
  renderer.render(element);
  return expect(renderer.getRenderOutput());
}

describe('Modal', () => {

  it("renders", () => {
    expectJSX(<Modal>Text</Modal>).toEqualJSX(
      <div className="c-modal">Text</div>
    )
  })

  it("works with shadow and styles", () => {
    expectJSX(<Modal shadow="high" style={{width: 100}}>Text</Modal>).toEqualJSX(
      <div style={{width: 100}} className="c-modal c-modal--high">Text</div>
    )
  })
})

describe('ModalHeader', () => {

  it("renders", () => {
    expectJSX(<ModalHeader>Text</ModalHeader>).toEqualJSX(
      <header className="c-modal__header">Text</header>
    )
  })
})

describe('ModalBody', () => {

  it("renders", () => {
    expectJSX(<ModalBody>Text</ModalBody>).toEqualJSX(
      <div className="c-modal__body">Text</div>
    )
  })
})

describe('ModalFooter', () => {

  it("renders", () => {
    expectJSX(<ModalFooter>Text</ModalFooter>).toEqualJSX(
      <footer className="c-modal__footer">Text</footer>
    )
  })
})
