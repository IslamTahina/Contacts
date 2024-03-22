<template>
  <v-list>
    <h1>Created By Islam Tahina</h1>
    <v-list-subheader>Contacts</v-list-subheader>
    <v-list-item
      v-for="(item, key) in items"
      :key="key"
      :title="`${item.first_name} ${item.last_name}`"
      :subtitle="item.email"
      :prepend-avatar="
        require(item.vip ? '../assets/vip.png' : '../assets/anxiety.png')
      "
    >
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      require: true,
    },
  },
};
</script>
