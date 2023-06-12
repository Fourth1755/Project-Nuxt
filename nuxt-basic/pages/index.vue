<template>
    <div class="container">
        <div class="content-container">
            <h1>Find your artist</h1>
            <div v-for="(item,index) in listArtist" :key="index">
                <ArtistItem 
                :name="item.name" 
                :country="item.country"
                :image="item.image"
                :index="index"
                />
            </div>
        </div>
        
    </div>
</template>

<script>
    import ArtistItem from '../components/ArtistItem.vue';
    export default {
        components:{
            ArtistItem,
        },
        data(){
            return {
                listArtist:[
                    {name:"BTS",country:"korea",music:[],image:"https://upload.wikimedia.org/wikipedia/commons/f/ff/BTS_logo_%282017%29.png"},
                    {name:"Twice",country:"korea",music:[],image:"https://www.pngitem.com/pimgs/m/163-1635808_twice-logo-kpop-pink-purple-png-image-with.png"},
                    {name:"Official Hige Dandism",country:"japan",music:[],image:"https://note-store.com/upload/resize_cache/iblock/8af/325_380_2/Official-HIGE-DANdism.png"},
                    {name:"Yoasobi",country:"japan",music:[],image:"https://ih1.redbubble.net/image.2162055824.4185/pp,840x830-pad,1000x1000,f8f8f8.jpg"},
                    {name:"Yonezu Kenshi",country:"japan",music:[],image:"https://www.billboard.com/wp-content/uploads/media/Kenshi-Yonezu-2019-cr-Tomokazu-Yamada-billboard-1548.jpg"},
                    {name:"Blcak Pink",country:"korea",music:[],image:"https://i.pinimg.com/originals/00/5b/36/005b36c78f2ba0585416fccd55d58439.jpg"}
                ],
            }
    },
    };
    useHead({
        title:"Home page",
        meta:[
            {name:"description",content:"รายการศิลปินที่ชื่นชอบ"}
        ]
    })
</script>
<style>
    body{
        background-color: #3A3C3F;
    }
    *{
        margin: 0;
        padding: 0;
        font-family: Helvetica, Arial, sans-serif;
    }
    .container{
        width: 100%;
    }
    .content-container{
        width: 60%;
        min-width: 400px;
        margin: auto;
    }
</style>