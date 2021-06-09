const { makeArgs, makeFields } = require('./utils')

const gql = (method, args = {}, fields) => {
  args = makeArgs(args, true)
  args = args.length === 0 ? '' : ['(', args, ')'].join('')

  if (fields === null || typeof fields === 'undefined') {
    fields = ''
  } else {
    fields = makeFields([['', fields]])
  }

  return ['{', method, args, fields, '}'].join('')
}

// expose for outside usage, like new gql.EnumType(value)
gql.EnumType = (value) => {
  this.value = value
}

module.exports = gql
