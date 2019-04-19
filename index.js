function takeANumber(array, name){
  array.push(name)
  return `Welcome ${name}, you are number ${array.length + 1} in line`
}

function nowServing(array){
  if (array.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    var name = array[0]
    array.shift()
    return `Currently serving ${name}`
  }
}
