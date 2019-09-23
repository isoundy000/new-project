<template>
  <div>
    <div>下载应用</div>
    <input type="text">
    <button @click="previousStep">上一步</button>
    <button @click="nextStep">下一步</button>
  </div>
</template>

<script>
    export default {
        name: "ordinaryDownApp",
      data(){
        return{

        }
      },
      methods:{
        // nextStep(){
        //   this.$router.push({
        //     name:'ordinaryChoose',
        //     params:{
        //       active:3
        //     }
        //   })
        // },
        previousStep(){
          this.$router.push({
            name:'ordinaryChoose',
            params:{
              active:3
            }
          })
        }
      }
    }
</script>

<style scoped>

</style>
