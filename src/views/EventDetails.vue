<script setup>
import { ref, onMounted } from 'vue'
import EventService from '../services/EventService'

const props = defineProps({
  id: { required: true }
})

const event = ref(null)

onMounted(() => {
  EventService.getEvent()
    .then((res) => {
      event.value = res.data.events.filter((event) => event.id === +props.id)[0]
    })
    .catch((error) => {
      console.log({ error })
    })
})
</script>

<template>
  <div class="event" v-if="event">
    <div class="event-card">
      <h2>{{ event.title }}</h2>
      <span>@{{ event.time }} on {{ event.date }} @ {{ event.location }}</span>
      <p>{{ event.description }}</p>
    </div>
  </div>
</template>

<style scope>
.event {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.event-card {
  padding: 20px;
  width: 300px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
  text-align: center;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
