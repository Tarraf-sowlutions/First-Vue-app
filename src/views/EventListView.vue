<script setup>
import { ref, onMounted } from 'vue'
import EventService from '../services/EventService'
import EventCard from '@/components/EventCard.vue'

const events = ref(null)

onMounted(() => {
  EventService.getEvents()
    .then((res) => {
      events.value = res.data.events
    })
    .catch((error) => {
      console.log({ error })
    })
})
</script>

<template>
  <h1>Events For Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<style scope>
.events,
h1 {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
