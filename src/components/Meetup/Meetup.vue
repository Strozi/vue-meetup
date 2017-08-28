<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h6 class="primary--text">{{ meetup.title }}</h6>
          </v-card-title>
          <v-card-media
            v-bind:src="meetup.imageUrl"
            height="400px"
          >
          </v-card-media>
          <v-card-text>
            <div class="info--text">
              {{ meetup.date }}
            </div>
            <div>
              Bacon ipsum dolor amet porchetta pastrami flank chuck andouille, turducken meatball chicken kevin corned beef pork chop sausage tri-tip prosciutto shoulder. Ground round ball tip flank bacon kielbasa. Meatloaf frankfurter filet mignon, bacon boudin cow kielbasa brisket flank venison doner short loin short ribs leberkas. Short ribs frankfurter salami biltong ball tip. Alcatra beef landjaeger biltong shank spare ribs ribeye. Chuck turducken meatball corned beef kielbasa picanha swine.
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="primary">Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    meetup () {
      return this.$store.getters.loadedMeetup(this.id)
    }
  }
}
</script>

<style>
</style>
