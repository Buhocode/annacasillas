<script>
  import Navbar from "./components/Navbar.svelte";

  import Home from "./pages/Home.svelte";

  // para cambiar la navegacion a la pagina que quieres
  let route = "home";
  const changeNav = event => {
    route = event.detail.text;
  };
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }
</style>

<main>
  <Navbar on:message={changeNav} />
  <!-- Dependiendo de la ruta, la pagina cambia -->
  {#if route == 'home'}
    <Home />
  {:else if route == 'productos'}
    <h1>Productos</h1>
  {:else if route == 'retratos'}
    <h1>Retratos</h1>
  {:else if route == 'proyectos'}
    <h1>Proyectos</h1>
  {:else if route == 'naturaleza'}
    <h1>Naturaleza</h1>
  {:else if route == 'contacto'}
    <h1>Contacto</h1>
  {:else}
    <h1>ni idea</h1>
  {/if}

</main>
<!-- home producto, retratos, proyectos, naturaleza, contacto -->
