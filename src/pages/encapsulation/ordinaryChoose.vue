<template>
  <div>
    <div>选择套餐</div>
    <input type="text">
    <button @click="previousStep">上一步</button>
    <button @click="nextStep">下一步</button>
  </div>
</template>

<script>
    export default {
        name: "ordinaryChoose",
      data(){
        return{

        }
      },
      methods:{
        nextStep(){
          this.$router.push({
            name:'ordinaryDownApp',
            params:{
              active:4
            }
          })
        },
        previousStep(){
          this.$router.push({
            name:'ordinaryConfig',
            params:{
              active:2
            }
          })
        }
      }
    }
</script>

<style scoped>

</style>
