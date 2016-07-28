import React from 'react'
import { bem, sizes, sizeAlias }  from './utils'


export class Grid extends React.Component {
  render(){
    const { children, componentClass, wrap=true, verticalAlign, noGutter, className, ...props } = this.props
    
    let classNames = bem("o-grid", {
      wrap,
      [verticalAlign]: true,
      "no-gutter": noGutter
    })
    if (className) classNames += " " + className

    const Component = componentClass || 'div'

    return (
      <Component {...props} className={classNames}>
        {children}
      </Component>
    )
  }
}

export class Cell extends React.Component {
  render(){
    const { children, componentClass, width, fixedWidth, offset, verticalAlign, noGutter, className, style={}, ...props } = this.props

    let classNames = bem("o-grid__cell", {
      [verticalAlign]: true,
      [width && ("width-" + width)]: true,
      [offset && ("offset-" + offset)]: true,
      "no-gutter": noGutter,
      "width-fixed": fixedWidth
    })
    // Check sizes
    sizes.forEach(size => { 
      const w = props[size + "Width"]
      if (w) {
        classNames += ` o-grid__cell--width-${w}@${size}`
        delete props[size + "Width"]
      }
      const o = props[size + "Offset"]
      if (o) {
        classNames += ` o-grid__cell--offset-${o}@${size}`
        delete props[size + "Offset"]
      }
    })
    sizeAlias.forEach((size, idx) => { 
      const w = props[size]
      if (w) {
        classNames += ` o-grid__cell--width-${w}@${sizes[idx]}`
        delete props[size]
      }
      const o = props[size + "Offset"]
      if (o) {
        classNames += ` o-grid__cell--offset-${o}@${sizes[idx]}`
        delete props[size + "Offset"]
      }
    })
    if (className) classNames += " " + className

    let finalStyle = style
    if (fixedWidth){
      finalStyle = {
        ...style, 
        width: fixedWidth
      }
    }


    const Component = componentClass || 'div'

    return (
      <Component {...props} style={finalStyle} className={classNames}>
        {children}
      </Component>
    )
  }
}