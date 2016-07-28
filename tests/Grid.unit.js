import React from 'react'
import {createRenderer} from 'react-addons-test-utils';
import expect from 'expect'

import {Grid, Cell} from '../src/Grid'

function expectJSX(element){
  let renderer = createRenderer();
  renderer.render(element);
  return expect(renderer.getRenderOutput());
}

describe('Grid', () => {

  it("renders", () => {
    expectJSX(
      <Grid>
        <Cell />
      </Grid>
    ).toEqualJSX(
      <div className="o-grid o-grid--wrap">
        <Cell />
      </div>
    )
  })

  it("works without wrap", () => {
    expectJSX(
      <Grid wrap={false} />
    ).toEqualJSX(
      <div className="o-grid" />
    )
  })

  it("works with a custom componentClass and className", () => {
    expectJSX(
      <Grid componentClass="nav" className="menu"/>
    ).toEqualJSX(
      <nav className="o-grid o-grid--wrap menu" />
    )
  })

  it("works with verticalAlign and noGutter", () => {
    expectJSX(
      <Grid verticalAlign="bottom" noGutter={true} />
    ).toEqualJSX(
      <div className="o-grid o-grid--wrap o-grid--bottom o-grid--no-gutter" />
    )
  })
})


describe('Cell', () => {

  it("renders", () => {
    expectJSX(
      <Cell>Text</Cell>
    ).toEqualJSX(
      <div className="o-grid__cell" style={{}}>
        Text
      </div>
    )
  })

  it("works with a custom componentClass and className", () => {
    expectJSX(
      <Cell componentClass="nav" className="menu">Text</Cell>
    ).toEqualJSX(
      <nav className="o-grid__cell menu" style={{}}>
        Text
      </nav>
    )
  })

  it("works with fixedWidth", () => {
    expectJSX(
      <Cell fixedWidth={50}>Text</Cell>
    ).toEqualJSX(
      <div className="o-grid__cell o-grid__cell--width-fixed" 
           style={{width: 50}}>
        Text
      </div>
    )
    // Fixed width with existing styles
    expectJSX(
      <Cell fixedWidth={50} style={{padding: 4}}>Text</Cell>
    ).toEqualJSX(
      <div className="o-grid__cell o-grid__cell--width-fixed" 
           style={{padding: 4, width: 50}}>
        Text
      </div>
    )
  })

  it("is responsive", () => {
    const widthClassName = `\
o-grid__cell \
o-grid__cell--width-50 \
o-grid__cell--width-100@xsmall \
o-grid__cell--width-75@small \
o-grid__cell--width-50@medium \
o-grid__cell--width-25@large \
o-grid__cell--width-10@xlarge \
o-grid__cell--width-10@super`    
  const offsetClassName = `\
o-grid__cell \
o-grid__cell--offset-50 \
o-grid__cell--offset-100@xsmall \
o-grid__cell--offset-75@small \
o-grid__cell--offset-50@medium \
o-grid__cell--offset-25@large \
o-grid__cell--offset-10@xlarge \
o-grid__cell--offset-10@super`
    expectJSX(
      <Cell width="50" sp="10" xl="10" lg="25" md="50" sm="75" xs="100"/>
    ).toEqualJSX(
      <div className={widthClassName} style={{}} />
    )
    expectJSX(
      <Cell offset="50" spOffset="10" xlOffset="10" lgOffset="25" mdOffset="50" smOffset="75" xsOffset="100"/>
    ).toEqualJSX(
      <div className={offsetClassName} style={{}} />
    )
    expectJSX(
      <Cell width="50" 
            superWidth="10" 
            xlargeWidth="10"
            largeWidth="25" 
            mediumWidth="50" 
            smallWidth="75" 
            xsmallWidth="100"/>
    ).toEqualJSX(
      <div className={widthClassName} style={{}} />
    )
    expectJSX(
      <Cell offset="50" 
            superOffset="10" 
            xlargeOffset="10"
            largeOffset="25" 
            mediumOffset="50" 
            smallOffset="75" 
            xsmallOffset="100"/>
    ).toEqualJSX(
      <div className={offsetClassName} style={{}} />
    )
  })
})