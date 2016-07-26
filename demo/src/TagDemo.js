import React from 'react'
import {H2, H3, P} from '../../src'

import ReactPlayground from './components/LiveEditor'
import { PropsTable, Props } from './components/PropsTable'

export class TagDemo extends React.Component {
  render(){
    return (
      <div id="tags">
        <H2 size="large">Tags</H2>
        <P>
          WIP, will add tag input soon
        </P>
        <H3 size="medium">Styling</H3>
        <P>
          Tags are built using standard Buttons, any prop passed will be passed down to the button.
        </P>
        <ReactPlayground codeText={`\
export default (
  <Tags>
    <Tag>Tag one</Tag>
    <Tag bStyle="primary">Tag two</Tag>
    <Tag rounded ghost>Tag three</Tag>
    <Tag bStyle="error">Tag four</Tag>
    <Tag href="#tags">Tag link</Tag>
  </Tags>
)\
`} />
        <H3 size="medium">onClose</H3>
        <P>
          An additional "onClose" prop is added for the close button. The following TagManager automatically removes tags. It will probably be released as an external component later on.
        </P>
        <ReactPlayground codeText={`\
class TagManager extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      tags: props.tags || []
    }

    this.onRemove = (idx) => {
      const tags = [...this.state.tags]
      tags.splice(idx, 1)
      this.setState({ tags })
    }
  }

  render(){
    const { tags } = this.state
    if (tags.length == 0) {
      return <div>No tags left...</div>
    }
    return (
      <Tags>
        {tags.map((tag, idx) => (
          <Tag key={idx} bStyle="primary"
               onClose={() => this.onRemove(idx)}>
            {tag}
          </Tag>
        ))}
      </Tags>
    )
  }
}
export default <TagManager tags={["tag one", "tag two", "tag three"]} />\
`} />
        <H3 size="medium">Props</H3>
        <PropsTable caption="Tag props (mostly inherited from Button)" data={[
          Props.block,
          Props.bStyle,
          Props.ghost,
          Props.href,
          Props.onClose,
          Props.rounded,
          Props.size
        ]} />
      </div>
    )
  }
}