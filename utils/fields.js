const makeFields = (fieldArr) => {
  if (Array.isArray(fieldArr)) {
    return fieldArr
    .map((field) => {
      return Array.isArray(field) === true
        ? [field[0], '{', makeFields(field[1]), '}'].join('')
        : field
    })
    .join(',')
  }
}

module.exports = makeFields
