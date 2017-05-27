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

// Left Nav
export const leftNav = state => state.leftNav;


// Boxes
export const currentBox = state => {
  if(state.route.params && state.route.params.id != 'new'){
    let box = state.boxes.find((box)=>{
      return box.id === state.route.params.id
    })

    if(box){
      return box
    } else {
      return {}
    }
  } else {
    return {}
  }
}

export const boxes = state => state.boxes
export const boxFilters = state => state.boxFilters

export const filteredBoxes = state => {
  // TODO actually filter
  return state.boxes;
}

