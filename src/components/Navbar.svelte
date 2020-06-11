<script>
  // para poder mandar info de navegacion
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  let selectedNav = "home";

  // manda info de cual navegacion tiene
  const changeNav = path => {
    selectedNav = path;
    dispatch("message", {
      text: selectedNav
    });
  };

  let navs = [
    "home",
    "productos",
    "retratos",
    "proyectos",
    "naturaleza",
    "contacto"
  ];
</script>

<style>
  .navbar {
    display: flex;
  }
  .nav-item {
    padding: 0 1rem;
    cursor: pointer;
  }
  .nav-item:active {
    background-color: blue;
  }
</style>

<nav class="navbar">
  <!-- Por cada nombre en navs, crea una navegacion -->
  {#each navs as navItem}
    <div on:click={() => changeNav(navItem)} class="nav-item">
      {navItem.toUpperCase()}
    </div>
  {/each}

</nav>
