<template>
  <div>
    <header>
        <nav>
            <h2 class="logo">M&M</h2>
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/artists">Artists</NuxtLink>
            <NuxtLink to="/addartist">Add Artist</NuxtLink>
        </nav>
    </header>
    <div>
        <slot/>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    nav{
        margin:auto;
        padding: 10px 0;
        display:flex;
        justify-content: left;
        align-items: center;
        background: #0F0F0F;
    }
    nav a{
        color: white;
        text-decoration: none;
        font-size: 18px;
        padding: 10px;
    }
    .logo{
        margin-right: auto;
        padding: 5px;
        color: white;
    }
</style>