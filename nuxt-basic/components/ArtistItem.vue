<template>
    <div class="container-item">
      <div class="front-item">
          <h3>{{ index+1 }}</h3>
      </div>
      <div>
          <div v-bind:style="{'background-image':'url('+image+')'}" class="artist-image"/>
      </div>
      <div class="artist-name">
          <h3>{{ name }}</h3>       
      </div>
      <div class="behind-item">
          <div class="artist-country-box">
              <h2>{{ country }}</h2>
          </div>
          <div class="button-box">
              <button>Add to list</button>
          </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
      name: "ArtistItem",
      props:{
          name:{
              type:String,
              require:true
          },
          country:{
              type:String,
              require:true
          },
          image:{
              type:String,
              require:true
          },
          index:{
              type:Number,
          }
      }
  }
  </script>
  
  <style scoped>
      .container-item{
          height:11rem;
          min-width: 300px;
          display: flex;
          background-color: #272727;
          margin-bottom: 8px;
          position: relative;
      }
      .front-item{
          display: flex;
          flex-direction: column-reverse;
          padding: 0px 30px 10px 30px;
          border-right-style: solid;
          border-width: 1px;
      }
      .front-item h3{
          color: #F37832;
      }
      .behind-item{
          display: flex;
          right: 0;
          position: absolute;
          height: 100%;
      }
      .button-box{
          width: 120px;
          height: 100%;
          display: flex;
          align-items: center;
          margin-right: 1rem;
      }
      .button-box button{
          padding: 10px 30px 10px 30px;
          background-color: #F37832;
          border: 0;
          border-radius: 8px;
      }
      .artist-image{
          height: 9rem;
          width:9rem;
          background-repeat: no-repeat, no-repeat;
          background-position: center; 
          background-size: cover;
          margin: 1rem;
      }
      .artist-name h3{
          color: azure;
      }
      .artist-country-box{
          width: 120px;
          height: 100%;
          display: flex;
          align-items: center;
      }
  </style>