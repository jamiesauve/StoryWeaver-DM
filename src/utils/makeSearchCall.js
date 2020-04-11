import axios from 'axios'
import _ from 'lodash'

import searchCategories from '../data/searchCategories'

const baseURL = `http://www.dnd5eapi.co/api`


const makeSearchCall = async(searchQuery) => {
  const [categoryChar, searchTerm] = searchQuery.split(" ")

  const category = _.filter(searchCategories, (searchCategory, categoryKey) => categoryKey === categoryChar)[0]

  const result = category 
    ? await axios.get(`${baseURL}/${category.url}/${searchTerm}`)
    : null

  return result 
  ? {
    data: result.data,
    category: category.name,
  }
  : null
}

export default makeSearchCall