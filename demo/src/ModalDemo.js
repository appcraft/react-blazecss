import React from 'react'
import {H2, H3, P} from '../../src'

import ReactPlayground from './components/LiveEditor'
import { PropsTable, Props } from './components/PropsTable'

export class ModalDemo extends React.Component {
  render(){
    return (
      <div>
        <H2 size="large">Modals</H2>
        <H3 size="medium">Basic Modal</H3>
        <ReactPlayground codeText={`\
export default (
  <div className="modal-demo">
    <Overlay />
    <Modal shadow="higher">
      <ModalHeader>
        <H3 size="small">Modal heading</H3>
      </ModalHeader>
      <ModalBody>
        This is the modal body
      </ModalBody>
      <ModalFooter>
        <Button bStyle="primary">Close</Button>
      </ModalFooter>
    </Modal>
  </div>
)\
`} />
      </div>
    )
  }
}