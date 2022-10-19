const data = require('../data/dataBooks')

const params = function() {
    return {
      "id": 3,
      "name": "",
      "author": " Andrew Hunt",
      "pages": 0,
      "year": "",
      "description": "",
      "versionPortuguese": true,
      "genre": " Design de software",
      "image": ""
    }
  }


const getIndex = ([data, key, value]) =>
  data.findIndex(item => item[key] === value);


const created = () => {
  const book = params()
  data.push(book);
}
created()

console.log("created", JSON.stringify(data, undefined, "  "))
console.log("---------------------------------------------------")

const updated =(data, key, value) => {
  const index = getIndex([data, key, value])
  const book = params()
  data.splice(index, 1, book )

}
updated(data, "id", 1)

console.log("updated", JSON.stringify(data, undefined, "  "))
console.log("---------------------------------------------------")


const deleted =(data, key, value) => {
  const index = getIndex([data, key, value])
  data.splice(index, 1)
}
deleted(data, "id", 1)
console.log("deleted", JSON.stringify(data, undefined, "  "))