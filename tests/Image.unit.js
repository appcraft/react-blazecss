import React from 'react'
import {createRenderer} from 'react-addons-test-utils';
import expect from 'expect'

import {Image} from '../src/Image'

function expectJSX(element){
  let renderer = createRenderer();
  renderer.render(element);
  return expect(renderer.getRenderOutput());
}

describe('Image', () => {

  it("renders", () => {
    expectJSX(<Image src="url"/>).toEqualJSX(
      <img className="o-image" src="url" />
    )
  })

})
