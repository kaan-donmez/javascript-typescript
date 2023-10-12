<script>
  import Todo from "./ToDo.svelte";

  let lastId = 0;
  const createTodo = (text, done = false) => ({ id: ++lastId, text, done });

  let todoText = "";
  let todos = [
    createTodo("Cooking"),
    createTodo("Shopping"),
    createTodo("Meeting"),
    createTodo("Sport", true),
  ];

  $: uncompletedCount = todos.filter((value) => !value.done).length;
  $: status = `${uncompletedCount} of ${todos.length} remaining`;

  function addTodo() {
    todos = todos.concat(createTodo(todoText));
    todoText = "";
  }

  function deleteCompletedTask() {
    todos = todos.filter((value) => !value.done);
  }

  function deleteTask(todoId) {
    todos = todos.filter((value) => value.id !== todoId);
  }

  function toggleDone(todo) {
    const { id } = todo;
    todos = todos.map((value) =>
      value.id === id ? { ...value, done: !value.done } : value
    );
  }
</script>

<div id="container">
  <div id="context">
    <h2>ToDo App</h2>
    <div>
      {status}
      <button on:click={deleteCompletedTask}>Delete completed tasks</button>
    </div>
    <br />
    <form on:submit|preventDefault>
      <input
        data-testid="todo-input"
        type="text"
        size="30"
        placeholder="Enter a new todo"
        bind:value={todoText}
      />
      <button disabled={!todoText} on:click={addTodo}>Add</button>
    </form>
    <ul>
      {#each todos as todo}
        <Todo
          {todo}
          on:delete={() => deleteTask(todo.id)}
          on:toggleDone={() => toggleDone(todo)}
        />
      {/each}
    </ul>
  </div>
</div>

<style>
  #container {
    margin: 0 auto;
    width: 400px;
    background: #f0f0f0;
  }

  #context {
    padding: 20px;
  }

  h2 {
    font-size: 50px;
    text-align: center;
  }

  button {
    margin-left: 10px;
  }

  ul {
    list-style: none;
    margin-left: 0;
    padding-left: 0;
  }
</style>
