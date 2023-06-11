<template>
  <div>
    <header>
        <nav>
            <h2>M&M</h2>
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/artists">Artists</NuxtLink>
            <NuxtLink to="/addartist">Add Artist</NuxtLink>
        </nav>
    </header>
    <h1>หน้าแรกของเว็บไซต์</h1>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    nav{
        margin: 10px auto;
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
</style>