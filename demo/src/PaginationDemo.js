import React from 'react'
import {H2, H3, P} from '../../src'

import ReactPlayground from './components/LiveEditor'
import { PropsTable, Props } from './components/PropsTable'

export class PaginationDemo extends React.Component {
  render(){
    return (
      <div>
        <H2 size="large">Pagination</H2>
        <P>Current page : 4, later buttons are disabled</P>
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
    	<PaginationPage disabled>5</PaginationPage>
    	<PaginationEllipsis />
    </PaginationControls>
  	<PaginationControls forward>
    	<PaginationControl disabled>›</PaginationControl>
    	<PaginationControl disabled>»</PaginationControl>
    </PaginationControls>
  </Pagination>
)\
`} />
      </div>
    )
  }
}