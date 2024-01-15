<template>
  <div class="app">
    <div id="appContainer">
      <AppHeader></AppHeader>
      <Speech
        :addNote="addNote"
        :deleteNote="deleteNote"
        :removeNotes="removeNotes"
      ></Speech>
      <NoteItem
        v-for="note in notes"
        :key="note.id"
        :noteItem="note"
      ></NoteItem>
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import Speech from "./components/Speech.vue";
import NoteItem from "./components/NoteItem.vue";

export default {
  components: {
    AppHeader,
    Speech,
    NoteItem,
  },
  data() {
    return {
      notes: [],
    };
  },
  methods: {
    addNote(note) {
      this.notes.push({
        id: this.notes.length + 1,
        note: note,
      });
      this.note = "";
    },
    deleteNote(id) {
      this.notes.slice(
        this.notes.findIndex((note) => note.id === id),
        1
      );
    },
    removeNotes() {
      this.notes = [];
    },
  },
};
</script>
