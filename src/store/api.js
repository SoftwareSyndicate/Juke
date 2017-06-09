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

const ref = Firebase.database().ref()
const storage = Firebase.storage().ref()

export default new class API {
  constructor() {

  }

  get ref(){
    return ref
  }
  get storage(){
    return storage
  }

  addItem(type, data){
    return new Promise((resolve, reject) => {
      let key = this.ref.child(type).push().key

      let now = new Date()
      data.created_at = now
      data.updated_at = now
      data.id = key

      var updates = {}
      updates[`${type}/${key}`] = data
      this.ref.update(updates).then(results => {
        resolve(data)
      }, error => {
        reject(error)
      })
    })
  }

  updateItem(key, type, data){
    // console.log("data: ", data)
    // console.log("args: ", arguments)
    data.updated_at = new Date()

    var updates = {}
    updates[`${type}/${key}`] = data
    return this.ref.update(updates)
  }

  updatePath(path, data){
    var updates = {}
    updates[`${path}`] = data
    return this.update(updates)
  }

  update(updates){
    return this.ref.update(updates)
  }

  watch(type, handler) {
    let first = true
    const ref = this.ref.child(type)
    // const handler = snapshot => {
    //   cb(snapshot.val())
    // }
    let cb = ref.on('value', handler)
    return () => {
      ref.off('value', cb)
    }
  }

  uploadFile(file){
    return storage.child('images/' + file.name).put(file).then(results => {
      return results
    }, error => {
      return error
    })
  }
}
