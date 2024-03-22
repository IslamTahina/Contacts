<template>
  <v-app>
    <v-main>
      <v-container>
        <contactList :items="contacts"/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import contactList from './components/contactList.vue'
export default {
  components:{
    contactList,
  },
  data: () => ({
    contacts: [],
  }),
  async mounted() {
    try {
      const req = await fetch("http://localhost:5050/api/contacts");
      const json = await req.json();
      this.contacts = json;
    } catch (err) {
      console.error(err);
    }
  },
};
</script>
