import React from 'react'
import { bem }  from './utils'

export class Tree extends React.Component {
  render(){
    const { animate, data, children } = this.props
    const className = bem("c-tree", {}, {
      "a-tree": animate,
      "a-tree--slow": animate === "slow",
      "a-tree--fast": animate === "fast",
    })
    return (
      <ul className={className}>
        {children}
      </ul>
    )
  }
}

export class TreeItem extends React.Component {
  render(){
    const { expandable, expanded, label, quiet, onClick, children } = this.props

    const classname = bem("c-tree__item", {
      expandable: expandable && !expanded,
      expanded
    }, {
      "c-text--quiet": quiet
    })
    if (expandable || expanded){
      return (
        <li className={classname}><span className="c-link" onClick={onClick}>{label}</span>
          {children}
        </li>
      )
    } else {
      return (
        <li className={classname} onClick={onClick}>{label}</li>
      )
    }
  }
}

export class DataTree extends React.Component {
  render(){
    const { animate, data=[] } = this.props
    return (
      <Tree>
        {data.map((el, idx) => <DataTreeItem key={idx} data={el} />)}
      </Tree>
    )
  }
}

export class DataTreeItem extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      expanded: false
    }

    this.onToggle = (e) => {
      const { data } = this.props
      if (data.children && data.children.length > 0){
        this.setState({
          expanded : !this.state.expanded
        })
      }
    }
  }

  render(){
    const { data } = this.props
    const { expanded } = this.state
    const children = data.children || []
    return (
      <TreeItem expanded={expanded} 
                expandable={children.length > 0}
                onClick={this.onToggle}
                label={data.label}>
        {children.length > 0 && <DataTree data={expanded ? children : []} />}
      </TreeItem>
    )
  }
}