import SC from 'soundcloud'

export default new class API {
  constructor() {

  }

  search(options){
    // https://developers.soundcloud.com/docs/api/reference#tracks
    return SC.get('/tracks', options)
  }
}
