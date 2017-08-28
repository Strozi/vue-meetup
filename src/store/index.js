import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      { imageUrl: 'https://static.pexels.com/photos/374710/pexels-photo-374710.jpeg',
        id: 'ksdcvdsbnc2',
        title: 'Meetup in NY',
        date: '2017-07-17'
      },
      { imageUrl: 'http://maxpixel.freegreatpicture.com/static/photo/1x/Urban-Japan-Architecture-Tokyo-Capital-Building-1424672.jpg',
        id: 'ksdcvdsbnc3',
        title: 'Meetup in Tokyo',
        date: '2017-07-19'
      },
      { imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Programmer_writing_code_with_Unit_Tests.jpg',
        id: 'ksdcvdsbnc4',
        title: 'Programmers Meetup',
        date: '2017-09-23'
      }
    ],
    user: {
      id: 'ascd2',
      registeredMeetups: ['sdsfreegf']
    }
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    }
  },
  actions: {
    createMeetup ({commit}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: 'dvjbfvgfkjld'
      }
      // Reach out to firebase nad store it
      commit('createMeetup', meetup)
    }
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
