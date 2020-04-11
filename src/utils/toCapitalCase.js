import _ from 'lodash'

export default (str = '') => {
  const words = str.split(" ")
  const capitalizedWords = _.map(words, word => {
    return `${word.charAt(0).toUpperCase()}${word.slice(1)}`
  })
  return capitalizedWords.join(" ")
}