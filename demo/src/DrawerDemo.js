import React from 'react'
import {H2, H3, P} from '../../src'

import ReactPlayground from './components/LiveEditor'
import { PropsTable, Props } from './components/PropsTable'

export class DrawerDemo extends React.Component {
  render(){
    return (
      <div>
        <H2 size="large">Drawers</H2>
        <H3 size="medium">Basic</H3>
        <P>
          Your basic drawer will appear from the bottom of the container. The container should have <code>overflow:hidden</code> or you'll see the drawer sliding around.
        </P>
        <P>
          Change the <code>visible</code> prop to make it appear/disappear
        </P>
        <ReactPlayground codeText={`\
export default (
  <div className="modal-demo">
    <Drawer shadow="high" visible>
      <H4>Drawer header</H4>
      <DrawerBody>Drawer body</DrawerBody>
    </Drawer>
  </div>
)\
`} />
        <H3 size="medium">Position</H3>
        <P>
          The default position is <code>bottom</code>, but this can be changed to <code>top</code>, <code>left</code>, or <code>right</code>.
        </P>
        <ReactPlayground codeText={`\
export default (
  <div className="modal-demo">
    <Drawer shadow="high" visible position="left">
      <H4>Drawer header</H4>
      <DrawerBody>Drawer body</DrawerBody>
    </Drawer>
  </div>
)\
`} />
        <H3 size="medium">Drawer Menu</H3>
        <P>
          Drawers and Menus play nicely together
        </P>
        <ReactPlayground codeText={`\
export default (
  <div className="modal-demo">
    <Drawer shadow="high" visible>
      <H4>Drawer header</H4>
      <Menu>
      	<MenuItem>Menu 1</MenuItem>
      	<MenuItem>Menu 2</MenuItem>
      </Menu>
      <DrawerBody>Drawer body</DrawerBody>
    </Drawer>
  </div>
)\
`} />
        <H3 size="medium">Animation</H3>
        <P>
          Animated drawers look even better.
        </P>
        <ReactPlayground codeText={`\
class ToggleDrawer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      visible: false
    }
    this.handleToggle = (e) => {
      this.setState({visible: !this.state.visible})
    }
  }

  render(){
    const { visible } = this.state
    return (
      <div>
        <Toggle animate bStyle="primary"
                checked={visible} 
                onChange={this.handleToggle}>
          show/hide drawer
        </Toggle>
        <div className="modal-demo">
          <Drawer animate shadow="high" visible={visible}>
            <H4>Drawer header</H4>
            <DrawerBody>Drawer body</DrawerBody>
          </Drawer>
        </div>
      </div>
    )
  }  
}
export default (
  <ToggleDrawer />
)\
`} />
      </div>
    )
  }
}