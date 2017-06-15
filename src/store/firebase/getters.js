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

// Right Nav
export const rightNav = state => state.rightNav;

// Modal
export const modal = state => state.modal;

// Stations
export const currentStation = (state, getters, rootState) => {
  if(rootState.route.params && rootState.route.params.id != 'new'){
    let station = state.stations.find((station)=>{
      return station.id === rootState.route.params.id
    })

    if(station){
      return station
    } else {
      return {}
    }
  } else {
    return {}
  }
}

export const stations = state => state.stations
export const stationFilters = state => state.stationilters

export const filteredStations = state => {
  return state.stations.filter(function (station) {
    return station.name.toLowerCase().indexOf(state.stationFilters.name.toLowerCase()) !== -1
  })

  // TODO actually filter
  //return state.boxes;
}
