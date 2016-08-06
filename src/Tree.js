import React from 'react'
import { bem }  from './utils'

export class Tree extends React.Component {
  render(){
    const { animate, children, className, ...props } = this.props
    const classNames = bem("c-tree", {}, {
      "a-tree": animate,
      "a-tree--slow": animate === "slow",
      "a-tree--fast": animate === "fast",
    }, className)
    return (
      <ul {...props} className={classNames}>
        {children}
      </ul>
    )
  }
}

export class TreeItem extends React.Component {
  render(){
    const { expandable, expanded, label, quiet, className, children, onClick, ...props } = this.props

    const classNames = bem("c-tree__item", {
      expandable: expandable && !expanded,
      expanded
    }, {
      "c-text--quiet": quiet
    }, className)
    if (expandable || expanded){
      return (
        <li {...props} className={classNames}><span className="c-link" onClick={onClick}>{label}</span>
          {children}
        </li>
      )
    } else {
      return (
        <li {...props} className={classNames} onClick={onClick}>{label}</li>
      )
    }
  }
}

export class DataTree extends React.Component {
  render(){
    const { data=[], ...treeProps } = this.props
    return (
      <Tree {...treeProps}>
        {data.map((el, idx) => <DataTreeItem key={idx} data={el} treeProps={treeProps} />)}
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
    const { data, treeProps } = this.props
    const { expanded } = this.state
    const children = data.children || []
    return (
      <TreeItem expanded={expanded} 
                expandable={children.length > 0}
                onClick={this.onToggle}
                label={data.label}>
        {children.length > 0 && <DataTree {...treeProps} data={expanded ? children : []} />}
      </TreeItem>
    )
  }
}