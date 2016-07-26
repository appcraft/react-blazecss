

function bemOptions(prefix, options){
  if (!options) return ""
  
  var className = ""
  for(var key in options){
    if (key && (key !== "undefined") && (key !== "false") && options.hasOwnProperty(key)){
      if (options[key] === true){
        className += " " + prefix + key
      }
    }
  }
  return className
}

export function bem(name, options, genericOptions){
  
  var className = name
  
  className += bemOptions(name + "--", options)
  className += bemOptions("", genericOptions)
  
  return className
}
