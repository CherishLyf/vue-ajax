const state = {
  products: [
    { id: 1, foodImg: './static/logo.png', name: '黑暗料理', monthSale: 666, foodPrice: 10, foodCount: 0 },
    { id: 2, foodImg: './static/logo.png', name: '黑暗料理-2', monthSale: 666, foodPrice: 1, foodCount: 0 }
  ],
  cart: []
}

const getters = {
  getProducts: state => state.products,
  getCart: state => state.cart
}

const mutations = {
  ADD_TO_CART (state, item) {
    const product = state.products.find(function (p) {
      return p.id === item.id
    });
    product.foodCount ++;
    // console.log(state.cart[0])
    const record = state.cart.find( p => p.id === item.id);  // 标识

    if (!record) {
      state.cart.push({
        id: item.id,
        name: item.name,
        foodPrice: item.foodPrice,
        foodCount: 1
      })
      // console.log(state.products[0])
    } else {
      // console.log(state.cart[0])
      // console.log(state.products[0])
      record.foodCount ++
    }
  },
  MINUS_TO_COUNT (state, item) {

    const product = state.products.find(function (p) {
      return p.id === item.id
    })
    if (product.foodCount == 0) return
    product.foodCount --;

    const record = state.cart.find( p => p.id === item.id);  // 标识
    if (!record) {
      return
    } else {
      record.foodCount --
    }
  }
}


export default {
  state,
  getters,
  mutations
}
