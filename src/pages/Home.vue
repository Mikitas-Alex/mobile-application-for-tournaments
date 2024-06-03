//Home
<template>
  <Menu />
  
  <div class="container">
    <Background />
<HeaderMain />
<ul class="tour">
  <li @click="showModalMini = true"><Tournament /></li>
  <li @click="showModalMini = true"><Tournament /></li>
  <li @click="showModalMini = true"><Tournament /></li>
  <li @click="showModalMini = true"><Tournament /></li>
  <li @click="showModalMini = true"><Tournament /></li>
  <li @click="showModalMini = true"><Tournament /></li>
  <li @click="showModalMini = true"><Tournament /></li>
  <li @click="showModalMini = true"><Tournament /></li>
  <li @click="showModalMini = true"><Tournament /></li>
  <li @click="showModalMini = true"><Tournament /></li>
  <li @click="showModalMini = true"><Tournament /></li>
  <li @click="showModalMini = true"><Tournament /></li>
  <li @click="showModalMini = true"><Tournament /></li>
  <li @click="showModalMini = true"><Tournament /></li>
  <li @click="showModalMini = true"><Tournament /></li>
  <li @click="showModalMini = true"><Tournament /></li>
  <li @click="showModalMini = true"><Tournament /></li>
  <li @click="showModalMini = true"><Tournament /></li>
  <li @click="showModalMini = true"><Tournament /></li>

  
</ul>
<div v-if="showModalMini" class="modal-mini show">
  <div class="modal-mini-content">
    <div class="modal-wrap">
      <h4 class="modal-title">Название</h4>
      <span class="modal-edit"  @click="showModalMini = false">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.23438 11.9736C0.838972 11.5781 0.838972 10.9371 1.23438 10.5417L4.0554 7.72064C4.4508 7.32524 4.4508 6.68416 4.05539 6.28875L1.22967 3.46303C0.834263 3.06762 0.834263 2.42654 1.22967 2.03113L2.04303 1.21778C2.43843 0.82237 3.07951 0.82237 3.47492 1.21778L6.30064 4.0435C6.69605 4.43891 7.33713 4.43891 7.73254 4.0435L10.5417 1.23437C10.9371 0.838961 11.5782 0.83896 11.9736 1.23437L12.7894 2.05021C13.1848 2.44562 13.1848 3.0867 12.7894 3.4821L9.98027 6.29124C9.58487 6.68664 9.58487 7.32772 9.98027 7.72313L12.7822 10.5251C13.1776 10.9205 13.1776 11.5616 12.7822 11.957L11.9689 12.7703C11.5734 13.1657 10.9324 13.1657 10.537 12.7703L7.73502 9.96838C7.33962 9.57297 6.69854 9.57297 6.30313 9.96838L3.48211 12.7894C3.08671 13.1848 2.44563 13.1848 2.05022 12.7894L1.23438 11.9736Z" fill="white" />
</svg>
      </span>
    </div>
<div class="modal-mini-wrap">
    <p class="modal-pass">Пароль</p>
    <input class="modal-inp" placeholder="_ _ _ _ _ _ _ _ _ _ _ _ _ " type="text">
    <button class="modal-btn">Войти</button> 
  </div>
  </div>
</div>

<div v-if="showModalMini" class="modal-mini show">
    <div class="modal-mini-content">
      <div class="modal-wrap">
      <h4 class="modal-title">Название</h4>
      <span class="modal-edit"  @click="showModalMini = false">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.23438 11.9736C0.838972 11.5781 0.838972 10.9371 1.23438 10.5417L4.0554 7.72064C4.4508 7.32524 4.4508 6.68416 4.05539 6.28875L1.22967 3.46303C0.834263 3.06762 0.834263 2.42654 1.22967 2.03113L2.04303 1.21778C2.43843 0.82237 3.07951 0.82237 3.47492 1.21778L6.30064 4.0435C6.69605 4.43891 7.33713 4.43891 7.73254 4.0435L10.5417 1.23437C10.9371 0.838961 11.5782 0.83896 11.9736 1.23437L12.7894 2.05021C13.1848 2.44562 13.1848 3.0867 12.7894 3.4821L9.98027 6.29124C9.58487 6.68664 9.58487 7.32772 9.98027 7.72313L12.7822 10.5251C13.1776 10.9205 13.1776 11.5616 12.7822 11.957L11.9689 12.7703C11.5734 13.1657 10.9324 13.1657 10.537 12.7703L7.73502 9.96838C7.33962 9.57297 6.69854 9.57297 6.30313 9.96838L3.48211 12.7894C3.08671 13.1848 2.44563 13.1848 2.05022 12.7894L1.23438 11.9736Z" fill="white" />
</svg>
      </span>
    </div>
    <div class="modal-mini-wrap">
    <p class="modal-pass">Пароль</p>  
    <div class="password-wrapper">
      <input :class="{'modal-inp': true, 'error-inp': invalidPassword}" placeholder="_ _ _ _ _ _ _ _ _ _ _ _ _ " type="text" v-model="password">
      <span class="error" v-if="invalidPassword">*Введен неверный пароль</span>
    </div>
      <button class="modal-btn" @click="checkPassword">Войти</button>
    </div>
  </div>
  </div>

  <div v-else-if="showModalSuccess" class="modal-mini show">
    <div class="success">
    <div class="modal-success-mini">
    <span class="modal-edit"  @click="showModalSuccess = false">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.23438 11.9736C0.838972 11.5781 0.838972 10.9371 1.23438 10.5417L4.0554 7.72064C4.4508 7.32524 4.4508 6.68416 4.05539 6.28875L1.22967 3.46303C0.834263 3.06762 0.834263 2.42654 1.22967 2.03113L2.04303 1.21778C2.43843 0.82237 3.07951 0.82237 3.47492 1.21778L6.30064 4.0435C6.69605 4.43891 7.33713 4.43891 7.73254 4.0435L10.5417 1.23437C10.9371 0.838961 11.5782 0.83896 11.9736 1.23437L12.7894 2.05021C13.1848 2.44562 13.1848 3.0867 12.7894 3.4821L9.98027 6.29124C9.58487 6.68664 9.58487 7.32772 9.98027 7.72313L12.7822 10.5251C13.1776 10.9205 13.1776 11.5616 12.7822 11.957L11.9689 12.7703C11.5734 13.1657 10.9324 13.1657 10.537 12.7703L7.73502 9.96838C7.33962 9.57297 6.69854 9.57297 6.30313 9.96838L3.48211 12.7894C3.08671 13.1848 2.44563 13.1848 2.05022 12.7894L1.23438 11.9736Z" fill="white" />
</svg>
      </span>
    </div>
    <div class="modal-success-content">
      Вы уже зарегестрированы на турнире
    </div>
  </div>
</div>

  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
import HeaderMain from '@/components/HeaderMain.vue'
import Tournament from '@/components/Tournament.vue'
import Background from '@/components/Background.vue'



export default {
  components: { Menu, HeaderMain, Tournament, Background },
  data() {
    return {
      showModalMini: false,
      showModalSuccess: false,
      password: '',
      invalidPassword: false
    }
  },
  methods: {
    checkPassword() {
      if (this.password === '111222') {
        this.showModalMini = false
        this.showModalSuccess = true
      } else {
        this.invalidPassword = true
      }
    }
  }
}


</script>

<style>
.container {
  position: relative;
  z-index: 1;
  min-width: 370px;
  max-width: 500px;
  height: 100%;
  background: linear-gradient(315deg, #131737 0%, #0e1448 100%), url("@/image/back.svg");
}

.tour {
  overflow-y: auto;
  height: 100vh;
  padding-bottom: 400px;
}



.modal-mini {
    display: none;
    position: fixed;
    z-index: 100;
    padding: 140px 25px 0 25px;
    color: #fff;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
  }

  .modal-mini-content {
    background-color: #0c1031;
    border: 1px solid #888;
    border-radius: 20px;
  }

.modal-mini.show {
  display: flex;
  flex-direction: column;
}

.modal-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 20px;
  border-bottom: 1px solid #6f86ff;
}

.modal-title {
  font-weight: 600;
font-size: 20px;
}

.modal-edit {
  display: flex;
  align-items: center;
    justify-content: center;
  border: 1.01px solid #fff;
border-radius: 26px;
padding: 5px 13px;
width: 40px;
height: 40px;
}

.modal-mini-wrap {
  padding: 30px 20px;
display: flex;
flex-direction: column;
align-items: center;
gap: 30px;
}

.modal-pass {
  font-weight: 600;
font-size: 20px;
}

.modal-inp {
  border: 1px solid #878181;
border-radius: 14px;
padding: 11px 27px;
width: 230px;
height: 39px;
background: #3a3a3e;
}

.modal-btn {
  padding: 11px 27px;
  border-radius: 36px;
  box-shadow: 0 6px 26px 0 rgba(111, 134, 255, 0.21);
background: #252982;
border: 0.50px solid #fff;
}


.success {
  background-color: #0c1031;
    border: 1px solid #888;
    border-radius: 20px;
}

.modal-success-mini {
  display: flex;
  justify-content: center;
  padding: 30px 20px;

  border-bottom: 1px solid #6f86ff;
}

.modal-success-content {
  display: flex;
  justify-content: center;
  padding: 30px 20px;

}

.password-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.error {
  color: #ff2323;
  font-weight: 400;
font-size: 10px;
}

.error-inp {
  border: 1px solid #ff2323;
}


</style>

