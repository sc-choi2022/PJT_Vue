<template>
  <div>
    <h1>점심메뉴</h1>
    <button @click="getLunchMenu">Pick Lunch</button>
    <p>{{ menuPick }}</p>
    <hr>
    <h1>로또를 뽑아보자</h1>
    <button @click="moveToLotto">Pick Lotto</button>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  name: 'TheLunch',
  data: function(){
    return{
      menuPick: ''
    }
  },
  methods: {
    getLunchMenu() {
      const Menu = ['국밥', '정식', '초밥', '짜장면', '제육']
      this.menuPick = _.sample(Menu)
    },
    moveToLotto(){
      this.$router.push({ name: 'lotto', params: {lottoNum: 6} })
    }
  }
}
</script>