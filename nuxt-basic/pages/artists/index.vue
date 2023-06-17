<template>
      <div class="container">
        <div class="content-container">
          <h1>ศิลปินทั้งหมด</h1>
          <button>Add Artist</button>
          <table>
          <thead>
            <th>No.</th>
            <th>Name</th>
            <th>Country</th>
            <th>Detail</th>
          </thead>
          <tbody>
            <tr v-for="(artist,index) in artists" :key="index">
              <td>{{ index+1 }}</td>
              <td>{{ artist.name }}</td>
              <td>{{ artist.country }}</td>
              <td>
                <button>Detail</button>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
        
</div>
</template>

<script setup>
  const { data: artists } = await useFetch('http://localhost:3000/artists')
</script>

<style scoped>
  table{
    width: 100%;
  }
  th{
    height: 40px;
    text-align: left;
  }
  th, td {
    padding: 15px;
    text-align: left;
    font-size: 18px;
    color: white;
  }
  button{
    padding: 10px 12px;
    border: none;
    border-radius: 12px;
    cursor: pointer;
  }

</style>