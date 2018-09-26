import firebase  from 'firebase'

let config = {
    apiKey: "AIzaSyAHJLAeTRG2xI2do7JgaW04utw0Bh-6QfU",
    authDomain: "weloveajsunthon.firebaseapp.com",
    databaseURL: "https://weloveajsunthon.firebaseio.com",
    projectId: "weloveajsunthon",
    storageBucket: "weloveajsunthon.appspot.com",
    messagingSenderId: "8227352474"
}

let fireBase = firebase.initializeApp(config)

export default fireBase;