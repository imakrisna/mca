import 'babel-polyfill'

import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import 'firebase/firestore'

import users from './users'
import conversations from './conversations'

const config = {
    apiKey: "AIzaSyBbBA3iqghgtpFhu4EkS3kR7YxWwSj4i4I",
    authDomain: "mca-chat-903b4.firebaseapp.com",
    databaseURL: "https://mca-chat-903b4.firebaseio.com",
    projectId: "mca-chat-903b4",
    storageBucket: "mca-chat-903b4.appspot.com",
    messagingSenderId: "701614747245"
  };

firebase.initializeApp(config)

Vue.use(Vuex)

const state = {
	db: firebase.firestore()
}

export default new Vuex.Store({
	state,
	modules: {
		users,
		conversations
	}
})
