<template>
  <v-container>
    <v-layout row wrap class="mb-2">
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn large router to="/meetups" class="info">Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn large router to="/meetups/new" class="info">Organize Meetup</v-btn>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12>
        <v-carousel style="cursor: pointer;" interval="10000">
          <v-carousel-item v-for="meetup in meetups" v-bind:src="meetup.imageUrl" :key="meetup.id" @click="onLoadMeetup(meetup.id)">
            <div class="title">
              {{ meetup.title }}
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mb-2">
      <v-flex xs12 class="text-xs-center">
        <p>Join our awesome meetups!</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      meetups: [
        { imageUrl: 'https://static.pexels.com/photos/374710/pexels-photo-374710.jpeg', id: 'ksdcvdsbnc2', title: 'Meetup in NY' },
        { imageUrl: 'http://maxpixel.freegreatpicture.com/static/photo/1x/Urban-Japan-Architecture-Tokyo-Capital-Building-1424672.jpg', id: 'ksdcvdsbnc3', title: 'Meetup in Tokyo' },
        { imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Programmer_writing_code_with_Unit_Tests.jpg', id: 'ksdcvdsbnc4', title: 'Programmers Meetup' }
      ]
    }
  },
  methods: {
    onLoadMeetup (id) {
      this.$router.push('/meetups/' + id)
    }
  }
}
</script>

<style scoped>
  .title {
    position: absolute;
    bottom: 50px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size: 2em;
    padding: 20px;
  }
</style>
