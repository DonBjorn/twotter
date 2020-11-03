<template>

  <h1>Home</h1>

  <div>
    <router-link v-for="user in users" :to="{ name: 'UserProfile', params: { userId: user.id} }" :key="user.id">
      {{ user.username }}
      <br>
    </router-link>
  </div>

</template>
<script>

import {users} from '../assets/users';

export default {
  name: 'Home',
  setup(){
    return {
      users,
    }
  }
}
</script>
