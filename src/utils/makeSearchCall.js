import axios from 'axios'

const baseURL = `http://www.dnd5eapi.co/api`

const makeSearchCall = async(searchQuery) => {

  // parse searchQuery
  /**
   * first letter determines type of search: 
   * m = monster, 
   * s = spell, 
   * c = class, 
   * f = feature, 
   * e = equipment, 
   * l = language, 
   * u = subclass, 
   * p = use input as pathname, 
   * c = conditions, 
   * r = race, 
   * t = trait,
   * x = spellcasting,
   * m = magic school
   * a = armor (equipment)
   * w = weapons (equipment)
   * b = starting equipment
   */

  const [categoryChar, searchTerm] = searchQuery.split(" ")

  let category = ''

  switch(categoryChar) {
    case 'm':
      category = 'monsters'
      break
  }

  const result = await axios.get(`${baseURL}/${category}/${searchTerm}`)

  console.log('result', result.data)
  return result.data
}

export default makeSearchCall