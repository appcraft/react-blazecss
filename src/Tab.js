import React from 'react'
import { bem }  from './utils'



export class TabPane extends React.Component {
  render(){
    const { children, active, ...props } = this.props
    
    var className = bem("c-tabs__tab", {
      active
    })
    
    return <div {...props} className={className}>{children}</div>
  }
}

export class Tab extends React.Component {
  render() {
    const props = { ...this.props };

    // These props are for the parent `<Tabs>` rather than the `<TabPane>`.
    delete props.title;
    delete props.disabled;
    delete props.tabClassName;

    return <TabPane {...props} />;
  }
}



export class TabHeading extends React.Component {

  constructor(props){
    super(props)
    this.onClick = (evt) => {
      evt.stopPropagation()
      evt.preventDefault()

      const { onSelect, eventKey, disabled } = this.props
      if (onSelect && !disabled) onSelect(eventKey)
    }
  }

  render(){
    const { children, active, disabled, eventKey, ...props } = this.props
    
    var className = bem("c-tab-heading", {
      active, disabled
    })
    
    return <div onClick={this.onClick} {...props} className={className}>{children}</div>
  }
}



export class Tabs extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      activeKey: props.defaultActiveKey
    }

    this.onSelect = (eventKey) => {
      this.setState({
        activeKey: eventKey
      })
    }
  }

  render(){
    const { children, animate, bStyle, activeKey, defaultActiveKey, ...props } = this.props
    
    var className = bem("c-tabs", {
      [bStyle]: true,
    }, {
      "a-tabs": animate
    })
    
    return (
      <div {...props} className={className}>
        <div className="c-tabs__headings">
          {this.renderTabHeadings()}
        </div>
        {this.renderTabPanes()}
      </div>
    )
  }
  
  renderTabHeadings(){
    const { activeKey=this.state.activeKey, children } = this.props
    console.log("activeKey", activeKey)
    
    return React.Children.map(children, el => {
      const { title, disabled, eventKey, onSelect=this.onSelect } = el.props
      return <TabHeading disabled={disabled} 
                         eventKey={eventKey} 
                         onSelect={onSelect}
                         active={eventKey === activeKey}>{title}</TabHeading>
    })
  }
  
  renderTabPanes(){
    const { activeKey=this.state.activeKey, children } = this.props
    
    return React.Children.map(children, el => {
      const { title, disabled, children, eventKey, ...props } = el.props
      return <TabPane {...props} active={eventKey === activeKey}>{children}</TabPane>
    })
  }
}
