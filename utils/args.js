const makeArgs = (argObj, isRootLevel) => {
  let argStr

  if (typeof argObj !== 'object' || argObj === null) {
    return JSON.stringify(argObj)
  }

  argStr = Object.keys(argObj)
    .map((argKey) => {
      let arg = argObj[argKey]

      arg =
        Array.isArray(arg) === false
          ? makeArgs(arg)
          : ['[', arg.map(makeArgs).join(','), ']'].join('')

      return [argKey, ':', arg].join('')
    })
    .join(',')

  if (isRootLevel !== true) {
    argStr = '{' + argStr + '}'
  }

  return argStr
}

module.exports = makeArgs
