import React from 'react'
import {H2, H3, P} from '../../src'

import ReactPlayground from './components/LiveEditor'
import { PropsTable, Props } from './components/PropsTable'

export class ImageDemo extends React.Component {
  render(){
    return (
      <div>
        <H2 size="large">Images</H2>
        <P>
          Images are simply display block, 100% wide with height of auto.
        </P>
        <ReactPlayground codeText={`\
export default (
    <Image src="https://unsplash.it/1024/963?random" />
)\
`} />
      </div>
    )
  }
}