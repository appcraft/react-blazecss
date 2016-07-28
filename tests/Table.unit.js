import React from 'react'
import {createRenderer} from 'react-addons-test-utils';
import expect from 'expect'

import {Table, TR} from '../src/Table'

function expectJSX(element){
  let renderer = createRenderer();
  renderer.render(element);
  return expect(renderer.getRenderOutput());
}

describe('Table', () => {

  it("renders", () => {
    expectJSX(<Table>Text</Table>).toEqualJSX(
      <table className="c-table">Text</table>
    )
  })

  it("works with striped, clickable, condensed", () => {
    expectJSX(<Table striped>Text</Table>).toEqualJSX(
      <table className="c-table c-table--striped">Text</table>
    )
    expectJSX(<Table clickable>Text</Table>).toEqualJSX(
      <table className="c-table c-table--clickable">Text</table>
    )
    expectJSX(<Table condensed>Text</Table>).toEqualJSX(
      <table className="c-table c-table--condensed">Text</table>
    )
  })

  it("works with custom className", () => {
    expectJSX(<Table className="custom">Text</Table>).toEqualJSX(
      <table className="c-table custom">Text</table>
    )
  })
})

describe('TR', () => {

  it("renders", () => {
    expectJSX(<TR>Text</TR>).toEqualJSX(
      <tr className="c-table__row">Text</tr>
    )
  })

  it("works with inactive, clickable, heading", () => {
    expectJSX(<TR inactive>Text</TR>).toEqualJSX(
      <tr className="c-table__row c-table__row--inactive">Text</tr>
    )
    expectJSX(<TR clickable>Text</TR>).toEqualJSX(
      <tr className="c-table__row c-table__row--clickable">Text</tr>
    )
    expectJSX(<TR heading>Text</TR>).toEqualJSX(
      <tr className="c-table__row c-table__row--heading">Text</tr>
    )
  })

  it("works with custom className", () => {
    expectJSX(<TR className="custom">Text</TR>).toEqualJSX(
      <tr className="c-table__row custom">Text</tr>
    )
  })
})
