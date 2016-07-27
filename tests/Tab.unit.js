import React from 'react'
import {createRenderer} from 'react-addons-test-utils';
import expect from 'expect'

import {Tabs, Tab, TabHeading, TabPane} from '../src/Tab'

function expectJSX(element){
  let renderer = createRenderer();
  renderer.render(element);
  return expect(renderer.getRenderOutput());
}

describe('Tabs', () => {

  it("renders", () => {
    expectJSX(  
      <Tabs defaultActiveKey={1}>
        <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
        <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
        <Tab eventKey={3} title="Tab 3" disabled></Tab>
      </Tabs>
    ).toEqualJSX(
      <div className="c-tabs">
        <div className="c-tabs__headings">
          <TabHeading disabled={undefined} eventKey={1} active={true} onSelect={() => {}}>Tab 1</TabHeading>
          <TabHeading disabled={undefined} eventKey={2} active={false} onSelect={() => {}}>Tab 2</TabHeading>
          <TabHeading disabled eventKey={3} active={false} onSelect={() => {}}>Tab 3</TabHeading>
        </div>
        <TabPane active={true}>Tab 1 content</TabPane>
        <TabPane active={false}>Tab 2 content</TabPane>
        <TabPane active={false}></TabPane>
      </div>
    )
  })

  it("words with bStyle and animate", () => {
    expectJSX(  
      <Tabs defaultActiveKey={1} bStyle="primary" animate>
        <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
      </Tabs>
    ).toEqualJSX(
      <div className="c-tabs c-tabs--primary a-tabs">
        <div className="c-tabs__headings">
          <TabHeading disabled={undefined} eventKey={1} active={true} onSelect={() => {}}>Tab 1</TabHeading>
        </div>
        <TabPane active={true}>Tab 1 content</TabPane>
      </div>
    )
  })

  it("can be controlled", () => {
    expectJSX(  
      <Tabs activeKey={1}>
        <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
      </Tabs>
    ).toEqualJSX(
      <div className="c-tabs">
        <div className="c-tabs__headings">
          <TabHeading disabled={undefined} eventKey={1} active={true} onSelect={() => {}}>Tab 1</TabHeading>
        </div>
        <TabPane active={true}>Tab 1 content</TabPane>
      </div>
    )
  })
})

describe('TabHeading', () => {

  it("renders", () => {
    expectJSX(  
      <TabHeading>Tab 1</TabHeading>
    ).toEqualJSX(
      <div onClick={() => {}} className="c-tab-heading">Tab 1</div>
    )
  })

  it("can be active", () => {
    expectJSX(  
      <TabHeading active>Tab 1</TabHeading>
    ).toEqualJSX(
      <div onClick={() => {}} className="c-tab-heading c-tab-heading--active">Tab 1</div>
    )
  })

  it("can be disabled", () => {
    expectJSX(  
      <TabHeading disabled>Tab 1</TabHeading>
    ).toEqualJSX(
      <div onClick={() => {}} className="c-tab-heading c-tab-heading--disabled">Tab 1</div>
    )
  })
})

describe('Tab', () => {

  it("renders", () => {
    expectJSX(  
      <Tab>Tab 1</Tab>
    ).toEqualJSX(
      <TabPane>Tab 1</TabPane>
    )
  })
})

describe('TabPane', () => {

  it("renders", () => {
    expectJSX(  
      <TabPane>Tab 1</TabPane>
    ).toEqualJSX(
      <div className="c-tabs__tab">Tab 1</div>
    )
  })

  it("can be active", () => {
    expectJSX(  
      <TabPane active>Tab 1</TabPane>
    ).toEqualJSX(
      <div className="c-tabs__tab c-tabs__tab--active">Tab 1</div>
    )
  })
})

