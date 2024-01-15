<template>
  <div class="speechContainer">
    <i
      class="fa fa-microphone fa-3x"
      :class="{ isListening }"
      @click="listen"
    ></i>
    <p v-if="speechToText != null" class="speechToText">
      {{ speechToText }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    addNote: {
      type: Function,
      required: true,
    },
    deleteNote: {
      type: Function,
      required: true,
    },
    removeNotes: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      speechToText: null,
      isListening: false,
      recognition: null,
    };
  },
  methods: {
    listen() {
      this.isListening = true;
      this.recognition.start();
    },
    record(event) {
      this.isListening = false;
      this.speechToText = event.results[0][0].transcript;
      setTimeout(() => {
        this.addNote(event.results[0][0].transcript);
        this.speechToText = null;
      }, 1000);
    },
  },
  mounted() {
    this.recognition = new webkitSpeechRecognition();
    this.recognition.lang = "en-US";
    this.recognition.onresult = this.record;
  },
};
</script>

<style scoped>
i {
  cursor: pointer;
}
.speechToText {
  margin-top: 10px;
}
.isListening {
  color: #2c9631;
  transition: all 0.5s;
}
</style>
