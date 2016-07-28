import React from 'react'
import {createRenderer} from 'react-addons-test-utils';
import expect from 'expect'

import {PaginationEllipsis, PaginationControls, PaginationPage} from '../src/Pagination'

function expectJSX(element){
  let renderer = createRenderer();
  renderer.render(element);
  return expect(renderer.getRenderOutput());
}

describe('PaginationControls', () => {

  it("renders", () => {
    expectJSX(<PaginationControls>Text</PaginationControls>).toEqualJSX(
      <div className="c-pagination__controls">Text</div>
    )
  })

  it("can have background/forward", () => {
    expectJSX(<PaginationControls backward>Text</PaginationControls>).toEqualJSX(
      <div className="c-pagination__controls c-pagination__controls--backward">Text</div>
    )
    expectJSX(<PaginationControls forward>Text</PaginationControls>).toEqualJSX(
      <div className="c-pagination__controls c-pagination__controls--forward">Text</div>
    )
  })
})

describe('PaginationPage', () => {

  it("renders", () => {
    expectJSX(<PaginationPage>Text</PaginationPage>).toEqualJSX(
      <button className="c-pagination__page">Text</button>
    )
  })

  it("handles current", () => {
    expectJSX(<PaginationPage current>Text</PaginationPage>).toEqualJSX(
      <button className="c-pagination__page c-pagination__page--current">Text</button>
    )
  })
})

describe('PaginationEllipsis', () => {

  it("renders", () => {
    expectJSX(<PaginationEllipsis />).toEqualJSX(
      <span className="c-pagination__ellipsis">…</span>
    )
  })

  it("can have custom text", () => {
    expectJSX(<PaginationEllipsis>Text</PaginationEllipsis>).toEqualJSX(
      <span className="c-pagination__ellipsis">Text</span>
    )
  })
})
