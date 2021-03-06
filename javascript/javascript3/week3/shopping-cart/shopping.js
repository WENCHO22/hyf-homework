class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  convertToCurrency(currency) {
    switch (currency) {
      case "USD": this.price *= 0.16
        break;
      case "EUR": this.price *= 0.13
        break;
      case "ARS": this.price *= 14.53
    }
    return this.price

  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product)
  }

  removeProduct(product) {
    this.products = this.products.filter(item => item.name !== product)
    this.renderProducts()
    let price = document.getElementById("total-price")
    let total = shoppingCart.getTotal()
    price.innerHTML = `<b>Total:</b> ${total}`
  }

  searchProduct(productName) {
    let matchedProducts = shoppingCart.products.filter(item => item.name.includes(productName))
    return matchedProducts
  }

  getTotal() {
    let total = 0
    for (let i = 0; i < shoppingCart.products.length; i++) {
      total += shoppingCart.products[i].price
    }
    return total
  }

  renderProducts() {
    var container = document.getElementById("div-container")
    const UL = document.getElementById("shopping-cart")
    UL.innerHTML = ""
    shoppingCart.products.forEach(element => {
      let item = document.createElement("li");
      item.innerHTML = `<b>${element.name}<br>price:</b>${element.price}<br><button class="delete" data-name="${element.name}">Delete</button>`
      UL.append(item)
      //Remove products/render cart when clicking remove button
      container.addEventListener("click",()=>{
      let deleteButton = document.getElementsByClassName("delete")
      for(let i = 0; i< deleteButton.length; i++){
        deleteButton[i].addEventListener("click", (e)=>{
          shoppingCart.removeProduct(e.target.dataset.name)  
        })
      }})

    });      
    } 
  async getUser() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
    const data = response.json()
    return data
  }
}

const shoppingCart = new ShoppingCart();
const flatscreen = new Product("flat-screen", 5000);
shoppingCart.addProduct(flatscreen);

//Add more products to the shopping cart
const otherProduct = new Product("Phone", 300);
const thirdProduct = new Product("Towel", 2)
const fourthProduct = new Product("flat shoelaces", 3)
shoppingCart.addProduct(otherProduct)
shoppingCart.addProduct(thirdProduct)

//remove one product from the cart
shoppingCart.removeProduct(otherProduct)

//Search products
let searchResult = shoppingCart.searchProduct("flat")
console.log(searchResult)


//get user data
shoppingCart.getUser().then(data => {
  console.log(data)
  const id = document.getElementById("user")
  id.innerHTML = `${data.username}'s shopping cart:`
}).then(shoppingCart.renderProducts()
).then(() => {
  let price = document.getElementById("total-price")
  let total = shoppingCart.getTotal()
  price.innerHTML = `<b>Total:</b> ${total}`
})

//Convert items to currency
let newItem = new Product("plant", 50)
console.log(otherProduct.convertToCurrency("ARS"))


//
let deleteButton = document.getElementsByClassName("delete")
for(let i = 0; i< deleteButton.length; i++){
  deleteButton[i].addEventListener("click", (e)=>{
    console.log(e.target.dataset.name)
    shoppingCart.removeProduct(e.target.dataset.name)
    console.log(shoppingCart)    
  })
}
