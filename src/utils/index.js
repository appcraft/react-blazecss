
export function bem(name, options){
  
  var className = name
  
  if (options) {
    for(var key in options){
      if (key && (key !== "undefined") && (key !== "false") && options.hasOwnProperty(key)){
        if (options[key] === true){
          className += " " + name + "--" + key
        }
      }
    }
  }
  
  return className
}


