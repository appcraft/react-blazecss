import React from 'react'
import {createRenderer} from 'react-addons-test-utils';
import expect from 'expect'

import {Tree, TreeItem, DataTree, DataTreeItem} from '../src/Tree'

function expectJSX(element){
  let renderer = createRenderer();
  renderer.render(element);
  return expect(renderer.getRenderOutput());
}

describe('Tree', () => {

  it("renders", () => {
    expectJSX(<Tree>Text</Tree>).toEqualJSX(
      <ul className="c-tree">Text</ul>
    )
  })
  
  it("works with className", () => {
    expectJSX(<Tree className="custom">Text</Tree>).toEqualJSX(
      <ul className="c-tree custom">Text</ul>
    )
  })

  it("animates", () => {
    expectJSX(<Tree animate>Text</Tree>).toEqualJSX(
      <ul className="c-tree a-tree">Text</ul>
    )
  })
})

describe('TreeItem', () => {

  it("renders", () => {
    expectJSX(<TreeItem label="Text" />).toEqualJSX(
      <li className="c-tree__item" onClick={undefined}>Text</li>
    )
    expectJSX(<TreeItem expandable label="Text" />).toEqualJSX(
      <li className="c-tree__item c-tree__item--expandable"><span className="c-link" onClick={undefined}>Text</span></li>
    )
  })
  
  it("works with className", () => {
    expectJSX(<TreeItem className="custom" onClick={undefined} label="Text" />).toEqualJSX(
      <li className="c-tree__item custom" onClick={undefined}>Text</li>
    )
  })
})

describe('DataTree', () => {
  const data = [
    {name: "Item1"},
    {name: "Item2", children: [
      {name: "Item2.1"},
      {name: "Item2.2"},
    ]},
  ]
  it("renders", () => {
    expectJSX(<DataTree data={data} />).toEqualJSX(
      <Tree>
        <DataTreeItem key={0} data={data[0]} treeProps={{}} />
        <DataTreeItem key={1} data={data[1]} treeProps={{}} />
      </Tree>
    )
  })
  
  it("passes other props", () => {
    expectJSX(<DataTree data={data} style={{padding: 0}}/>).toEqualJSX(
      <Tree style={{padding: 0}}>
        <DataTreeItem key={0} data={data[0]} treeProps={{style: {padding: 0}}} />
        <DataTreeItem key={1} data={data[1]} treeProps={{style: {padding: 0}}} />
      </Tree>
    )
  })
})
