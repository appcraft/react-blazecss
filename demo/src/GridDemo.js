import React from 'react'
import {H2, H3, P} from '../../src'

import ReactPlayground from './components/LiveEditor'
import { PropsTable, Props } from './components/PropsTable'

export class GridDemo extends React.Component {
  render(){
    return (
      <div className="o-grid--demo">
        <H2 size="large">Grids</H2>
        <P>
          The grid is the easiest way to produce a fluid responsive layout. Its easy to use and very flexible.
        </P>
        <H3 size="medium">Basic Grid</H3>
        <P>
          By default cells take an equal amount of space. Try adding more cells in the following preview.
        </P>
        <ReactPlayground codeText={`\
export default (
  <Grid>
  	<Cell>1</Cell>
  	<Cell>2</Cell>
  	<Cell>3</Cell>
  </Grid>
)\
`} />
        <H3 size="medium">Width</H3>
        <P>
          Set the width (percentage) to a cell and the other cells will take up the remaning space
        </P>
        <ReactPlayground codeText={`\
export default (
  <Grid>
  	<Cell width="50">1</Cell>
  	<Cell>2</Cell>
  	<Cell>3</Cell>
  </Grid>
)\
`} />
        <H3 size="medium">Offset</H3>
        <P>
          Offsets work the same as width, but to push cells towards the right
        </P>
        <ReactPlayground codeText={`\
export default (
  <Grid>
  	<Cell>1</Cell>
  	<Cell offset="50">2</Cell>
  </Grid>
)\
`} />
        <H3 size="medium">Wrapping</H3>
        <P>
          In ReactBlazeCSS, cells wrap by default.
        </P>
        <ReactPlayground codeText={`\
export default (
  <Grid>
  	<Cell width="50">1</Cell>
  	<Cell width="50">2</Cell>
  	<Cell width="50">3</Cell>
  	<Cell width="50">4</Cell>
  	<Cell width="50">5</Cell>
  	<Cell width="50">6</Cell>
  </Grid>
)\
`} />
        <P>
          Wrapping can be turned off if needed, and cells will overflow.
        </P>
        <ReactPlayground codeText={`\
export default (
  <Grid wrap={false}>
  	<Cell width="50">1</Cell>
  	<Cell width="33">2</Cell>
  	<Cell width="33">3</Cell>
  </Grid>
)\
`} />
        <H3 size="medium">Nesting</H3>
        <P>
          Grids can be nested inside Cells without limit
        </P>
        <ReactPlayground codeText={`\
export default (
  <Grid>
  	<Cell>
      <Grid>
        <Cell>1.1</Cell>
        <Cell>1.2</Cell>
      </Grid>
      <Grid>
        <Cell>1.3</Cell>
        <Cell>1.4</Cell>
      </Grid>
    </Cell>
  	<Cell>2</Cell>
  </Grid>
)\
`} />
        <H3 size="medium">Vertical Alignement</H3>
        <P>
          The <code>verticalAlign</code> prop can be used on either grids or cells.
        </P>
        <ReactPlayground codeText={`\
export default (
  <Grid verticalAlign="bottom" style={{height: 90}}>
    <Cell verticalAlign="top">top</Cell>
    <Cell verticalAlign="center">center</Cell>
  	<Cell>grid's bottom</Cell>
  </Grid>
)\
`} />
        <H3 size="medium">Responsive Grid</H3>
        <P>
          The width can also be set per break point. Resize the window to see how the grid changes. The available sizes are 
          <code>xsmall</code>, <code>small</code>, <code>medium</code>, <code>large</code>, <code>xlarge</code>, <code>super</code>.
        </P>
        <ReactPlayground codeText={`\
export default (
  <Grid>
  	<Cell largeWidth="25" mediumWidth="50" smallWidth="100">1</Cell>
  	<Cell largeWidth="25" mediumWidth="50" smallWidth="100">2</Cell>
  	<Cell largeWidth="25" mediumWidth="50" smallWidth="100">3</Cell>
  	<Cell largeWidth="25" mediumWidth="50" smallWidth="100">4</Cell>
  </Grid>
)\
`} />
        <P>
          That's a bit verbose, so shorter names can also be used : <code>xs</code>, <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>, <code>sp</code>.
        </P>
        <ReactPlayground codeText={`\
export default (
  <Grid>
  	<Cell lg="25" md="50" sm="100">1</Cell>
  	<Cell lg="25" md="50" sm="100">1</Cell>
  	<Cell lg="25" md="50" sm="100">1</Cell>
  	<Cell lg="25" md="50" sm="100">1</Cell>
  </Grid>
)\
`} />
        <P>
          Offsets can also be responsive, with for example <code>mediumOffset</code> or <code>mdOffset</code>
        </P>
        <ReactPlayground codeText={`\
export default (
  <Grid>
  	<Cell lg="33" md="50" sm="100">1</Cell>
  	<Cell lg="33" lgOffset="33" md="50" sm="100">1</Cell>
  </Grid>
)\
`} />
        <H3 size="medium">Gutters</H3>
        <P>
          You may have noticed that cells have a default padding. This can be removed using the <code>noGutter</code> prop on the Grid or Cells.
        </P>
        <ReactPlayground codeText={`\
const White = ({children}) => (
  <div style={{background: 'white'}}>{children}</div>
)
export default (
  <div>
    <P>Grid - noGutter</P>
    <Grid noGutter>
      <Cell><White>1</White></Cell>
      <Cell><White>2</White></Cell>
    </Grid>
    <P>Cell - noGutter</P>
    <Grid>
      <Cell><White>3</White></Cell>
      <Cell noGutter><White>4</White></Cell>
    </Grid>
  </div>
)\
`} />
        <H3 size="medium">Fixed widths</H3>
        <P>
          Use the <code>fixedWidth</code> prop to set a fixed width. Be aware that these use default React sizes, si <code>fixedWidth={100}</code> is for <em>100px</em>.
        </P>
        <ReactPlayground codeText={`\
export default (
  <Grid>
    <Cell>1</Cell>
    <Cell fixedWidth={100}>2 - fixed</Cell>
    <Cell>3</Cell>
  </Grid>
)\
`} />
        <H3 size="medium">Specific components</H3>
        <P>
          Grids and cells output divs by default, but you might want to change that. The <code>componentClass</code> prop was designed for those rare cases. 
        </P>
        <ReactPlayground codeText={`\
export default (
  <Grid>
    <Cell componentClass="main">main content</Cell>
    <Cell componentClass="nav" fixedWidth={100}>menu</Cell>
  </Grid>
)\
`} />
        <P>(check the generated DOM to see what changed)</P>
      </div>
    )
  }
}