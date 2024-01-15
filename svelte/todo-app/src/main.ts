import ToDoApp from './ToDo/ToDoApp.svelte'

const app = new ToDoApp({
  target: document.getElementById('app')!,
})

export default app
