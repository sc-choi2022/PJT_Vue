<template>
  <div>
    <input @keyup.enter="onInputKeyword" type="text" id="input">
    <button @click="onInputKeyword">검색</button>
  </div>
</template>

<script>
export default {
  name: 'TheSearchBar',
  methods:{
    onInputKeyword: function (){
      const input = document.querySelector('#input')
      this.$emit('input-change', input.value)
    }
  }
}
</script>

<style>

</style>