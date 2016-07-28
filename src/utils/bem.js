

function bemOptions(prefix, options){
  if (!options) return ""
  
  var className = ""
  for(var key in options){
    if (key && (key !== "undefined") && (key !== "false") && options.hasOwnProperty(key)){
      if (options[key]){
        className += " " + prefix + key
      }
    }
  }
  return className
}

export function bem(name, options, genericOptions, extraClassNames){
  
  var className = name
  
  className += bemOptions(name + "--", options)
  if (genericOptions && (typeof genericOptions) === "string"){
    className += " " + genericOptions
  } else {
    className += bemOptions("", genericOptions)
  }
  if (extraClassNames) className += " " + extraClassNames
  
  return className
}
