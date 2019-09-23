<template>
  <div v-html ='apply'>
    {{apply}}
  </div>
</template>

<script>
    export default {
        name: "pay",
        data(){
          return{
            apply:''
          }
        },
      mounted(){
        let form = this.$route.query.htmls
        this.apply = form;
        this.$nextTick(()=> {
          const div = document.createElement('div')
          div.innerHTML =form //此处form就是后台返回接收到的数据
          document.body.appendChild(div)
          document.forms[0].submit()
        })
      }
    }
</script>

<style scoped>

</style>
