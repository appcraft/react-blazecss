import React from 'react'
import {createRenderer} from 'react-addons-test-utils';
import expect from 'expect'

import {Tag, Tags} from '../src/Tag'
import {Button} from '../src/Button'

function expectJSX(element){
  let renderer = createRenderer();
  renderer.render(element);
  return expect(renderer.getRenderOutput());
}

describe('Tag', () => {

  it("renders", () => {
    expectJSX(<Tag>Text</Tag>).toEqualJSX(
      <Button className="c-tag">
        Text
        <span className="c-tag__close" onClick={undefined}>×</span>
      </Button>
    )
  })

  it("works with bStyle", () => {
    expectJSX(<Tag bStyle="error">Text</Tag>).toEqualJSX(
      <Button bStyle="error" className="c-tag">
        Text
        <span className="c-tag__close" onClick={undefined}>×</span>
      </Button>
    )
  })
})

describe('Tags', () => {

  it("renders", () => {
    expectJSX(<Tags><Tag>Text</Tag></Tags>).toEqualJSX(
      <div className="c-tags">
        <Tag>Text</Tag>
      </div>
    )
  })
})
