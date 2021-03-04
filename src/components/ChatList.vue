<template>
  <div>
    <ul>
      <li :key="chat.id" v-for="chat of chats">
        <router-link :to="{ name: 'chat', params: { id: chat.id } }">{{
          chat.id
        }}</router-link>
      </li>
    </ul>

    <button @click="createChatRoom()">Create New Chat Room</button>
  </div>
</template>

<script>
import { db } from "../firebase";

export default {
  props: ["uid"],
  data() {
    return {
      chats: [],
    };
  },
  firestore() {
    return {
      chats: db.collection("chats").where("owner", "==", this.uid),
    };
  },
  methods: {
    async createChatRoom() {
      const newChat = await db.collection("chats").add({
        createdAt: Date.now(),
        owner: this.uid,
        members: [this.uid],
      });

      console.log(newChat);
    },
  },
};
</script>

<style>
</style>