<script setup>
import Basket from "./navbar/basket.vue";
import Dropdown from "./navbar/dropdown.vue";
import Logo from "./navbar/logo.vue";
import SearchBar from "./navbar/search-bar.vue";
</script>

<template>
  <div>
    <nav
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <Logo />
      <SearchBar />
      <Dropdown />
      <Basket />
    </nav>
  </div>
</template>
