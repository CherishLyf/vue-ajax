export const addToCart = ({commit}, products) => {
  commit('ADD_TO_CART', products)
}

export const minusToCart = ({commit}, products) => {
  commit('MINUS_TO_COUNT', products)
}
