import React from 'react'
import {H2, H3} from '../../src'

import ReactPlayground from './LiveEditor'

export class TagDemo extends React.Component {
  render(){
    return (
      <div id="tags">
        <H2 size="large">Tags</H2>
        <p className="c-paragraph">
          WIP, will add tag input soon
        </p>
        <H3 size="medium">Styling</H3>
        <p className="c-paragraph">
          Tags are built using standard Buttons, any prop passed will be passed down to the button.
        </p>
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
        <p className="c-paragraph">
          An additional "onClose" prop is added for the close button. The following TagManager automatically removes tags. It will probably be released as an external component later on.
        </p>
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
      </div>
    )
  }
}