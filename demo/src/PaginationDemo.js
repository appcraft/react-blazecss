import React from 'react'
import {H2, H3, P} from '../../src'

import ReactPlayground from './components/LiveEditor'
import { PropsTable, Props } from './components/PropsTable'

export class PaginationDemo extends React.Component {
  render(){
    return (
      <div>
        <H2 size="large">Pagination</H2>
        <ReactPlayground codeText={`\
export default (
  <Pagination>
  	<PaginationControls backward>
    	<PaginationControl>«</PaginationControl>
    	<PaginationControl>‹</PaginationControl>
    </PaginationControls>
  	<PaginationControls>
    	<PaginationEllipsis />
    	<PaginationPage>3</PaginationPage>
    	<PaginationPage current>4</PaginationPage>
    	<PaginationPage>5</PaginationPage>
    	<PaginationEllipsis />
    </PaginationControls>
  	<PaginationControls forward>
    	<PaginationControl>›</PaginationControl>
    	<PaginationControl>»</PaginationControl>
    </PaginationControls>
  </Pagination>
)\
`} />
      </div>
    )
  }
}