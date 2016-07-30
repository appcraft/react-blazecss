import React from 'react'
import {createRenderer} from 'react-addons-test-utils';
import expect from 'expect'

import {List, ListItem} from '../src/List'

function expectJSX(element){
  let renderer = createRenderer();
  renderer.render(element);
  return expect(renderer.getRenderOutput());
}

describe('List', () => {

  it("renders", () => {
    expectJSX(
      <List>
        <ListItem>Text</ListItem>
      </List>
    ).toEqualJSX(
      <ul className="c-list">
        <ListItem>Text</ListItem>
      </ul>
    )
  })

  it("works with unstyled and inline", () => {
    expectJSX(
      <List unstyled>
        <ListItem>Text</ListItem>
      </List>
    ).toEqualJSX(
      <ul className="c-list c-list--unstyled">
        <ListItem>Text</ListItem>
      </ul>
    )
    expectJSX(
      <List inline>
        <ListItem>Text</ListItem>
      </List>
    ).toEqualJSX(
      <ul className="c-list c-list--inline">
        <ListItem>Text</ListItem>
      </ul>
    )
  })

  it("can be ordered", () => {
    expectJSX(
      <List ordered>
        <ListItem>Text</ListItem>
      </List>
    ).toEqualJSX(
      <ol className="c-list c-list--ordered">
        <ListItem>Text</ListItem>
      </ol>
    )
  })

  it("works with a custom className", () => {
    expectJSX(
      <List className="custom">
        <ListItem>Text</ListItem>
      </List>
    ).toEqualJSX(
      <ul className="c-list custom">
        <ListItem>Text</ListItem>
      </ul>
    )
  })
})

describe('ListItem', () => {

  it("renders", () => {
    expectJSX(<ListItem>Text</ListItem>).toEqualJSX(
      <li className="c-list__item">Text</li>
    )
  })

  it("works with unstyled", () => {
    expectJSX(<ListItem unstyled>Text</ListItem>).toEqualJSX(
      <li className="c-list__item c-list__item--unstyled">Text</li>
    )
  })
})
