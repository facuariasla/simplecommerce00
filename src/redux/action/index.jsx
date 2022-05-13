// for Add item to Card
export const addCart = (product) => {
  return {
    type:'ADDITEM',
    payload: product

  }
}

// for Delete item from cart
export const delCart = (product) => {
  return {
    type:'DELITEM',
    payload: product

  }
}