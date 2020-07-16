const data = require('./oldProducts.json')

const newData = data.map((product) => {
  const nameLowerCase = product.name.toLowerCase()
  const nameAlphanumeric = nameLowerCase.replace(/[^a-zA-Z\d\s-]/g, '')
  const slug = nameAlphanumeric.replace(/\s+/g, '-')
  return { ...product, slug }
})

console.log(newData)
