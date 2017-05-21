// Breadcrumbs
export const crumbs = state => {
  let crumbs = []
  switch (state.route.name){
  case "company":
    crumbs.push({name: 'Company', route: '/company'});
    break;
  case "products":
    crumbs.push({name: 'Products', route: '/products'});
    break;
  case "product":
    crumbs.push({name: 'Products', route: '/products'});

    // TODO remove this hack, this is getting called before the route.params is being set
    if(state.route.params.id){
      let product = state.products.find((product)=>{
        return product.id === state.route.params.id
      })
      if(product){
        crumbs.push({name: product.name, route: '/products/' + product.id})
      } else {
        crumbs.push({name: 'New', route: '/products/new'})
      }
    } else {
      crumbs.push({name: 'New', route: '/products/new'})
    }
    break;
  }
  return crumbs
}

// Nav
export const nav_items = state => state.nav_items;

// Products
export const product = state => {
  if(state.route.params && state.route.params.id != 'new'){
    let product = state.products.find((product)=>{
      return product.id === state.route.params.id
    })

    if(product){
      return product
    } else {
      return {}
    }
  } else {
    return {}
  }
}

export const productUpdates = state => state.productUpdates
export const productCopy = state => state.productCopy
export const products = state => state.products
export const productFilters = state => state.productFilters

export const filteredProducts = state => {
  // TODO actually filter
  return state.products;
}

// Org
export const org = state => state.org;
