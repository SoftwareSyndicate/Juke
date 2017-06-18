import SC from 'soundcloud'

export function search(options){
  // https://developers.soundcloud.com/docs/api/reference#tracks
  return SC.get('/tracks', options)
}
