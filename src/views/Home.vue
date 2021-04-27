<template>
  <div>
    <div class="flex justify-center">
       <bounce-loader :loading="isLoading" :color="'#68d391'" :size="100" />
      <px-table v-if="!isLoading" :assets="assets" />
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>

    <footer class="text-blue-700 text-2xl text-left">Desarrollado por @JennyBarrientos</footer>
  </div>
</template>

<script>
import PxTable from "@/components/PxTable";
import api from "@/api";

export default {
    name: "Home",
    components: {
        PxTable
    },

    data(){
        return{
            assets:[],
            isLoading:true
        }
    },
    
    created(){
        api.getAssets()
        .then(assets => (this.assets = assets))
        .finally(() => (this.isLoading = false))
    },

     methods:{
        getData(){
            api.getAssets().then(assets => 
            {
                this.assets = assets
                })
        }
    },

    mounted(){
        setInterval(()=>{
            this.getData()
        },
        3000);
    },
}
</script>