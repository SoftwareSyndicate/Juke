import Firebase from 'firebase'
import 'firebase/database'

const config = {
  apiKey: "AIzaSyDSdshXu8tQGDlcUD3IGwKO7pH8mYn7KYI",
  authDomain: "juke-13562.firebaseapp.com",
  databaseURL: 'https://juke-13562.firebaseio.com/',
  storageBucket: "gs://juke-13562.appspot.com/"
}
// const version = '/v0'

Firebase.initializeApp(config)

export const REF = Firebase.database().ref()
export const STORAGE = Firebase.storage().ref()

export function addItem(type, data){
  return new Promise((resolve, reject) => {
    let key = REF.child(type).push().key

    let now = new Date()
    data.created_at = now
    data.updated_at = now
    data.id = key

    var updates = {}
    updates[`${type}/${key}`] = data
    REF.update(updates).then(results => {
      resolve(data)
    }, error => {
      reject(error)
    })
  })
}

export function push(path){
  return REF.child(path).push()
}

export function set(ref, data){
  return ref.set(data)
}

export function updateItem(key, type, data){
  // console.log("data: ", data)
  // console.log("args: ", arguments)
  data.updated_at = new Date()

  var updates = {}
  updates[`${type}/${key}`] = data
  return REF.update(updates)
}

export function updatePath(path, data){
  var updates = {}
  updates[`${path}`] = data
  return update(updates)
}

export function update(updates){
  return REF.update(updates)
}

export function watch(type, handler) {
  let first = true
  let child = REF.child(type)
  let cb = child.on('value', handler)
  return () => {
    child.off('value', cb)
  }
}

export function uploadFile(file){
  return STORAGE.child('images/' + file.name).put(file).then(results => {
    return results
  }, error => {
    return error
  })
}
