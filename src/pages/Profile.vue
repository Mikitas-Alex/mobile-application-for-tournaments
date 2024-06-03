<template>
  <Menu />
  <div class="container">
    <Background />
  <h1>Профиль</h1>

    <img src="@/image/profile.png" alt="">
    <p></p>
    <ul>
    <li>
        <p>Баллы:</p>
        <span class="points">. . . . . . . . . . . . . </span>
        <span>20</span>
      </li>
      <li>
        <p>Побед:</p>
        <span class="points">. . . . . . . . . . . . . </span>
        <span>50</span>
      </li>
      <li>
        <p>Поражений:</p>
        <span class="points">. . . . . . . . . . . . . </span>
        <span>50</span>
      </li>
      <li>
        <p>Всего игр:</p>
        <span class="points">. . . . . . . . . . . . . </span>
        <span>100</span>
      </li>
      

    </ul>

    <button @click="isLoggedIn =!isLoggedIn" :style="{ borderColor: isLoggedIn ? 'red' : '' }"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_2001_1962)">
    <rect width="28" height="28" rx="14" fill="white" />
    <path d="M13.9841 0C6.5957 0 0.570781 5.66328 0 12.8768L7.51529 15.9774C8.14949 15.5345 8.91053 15.2814 9.73499 15.2814C9.79842 15.2814 9.89354 15.2814 9.95696 15.2814L13.3182 10.4723C13.3182 10.4407 13.3182 10.4407 13.3182 10.409C13.3182 7.49831 15.6965 5.12542 18.6138 5.12542C21.5311 5.12542 23.9094 7.49831 23.9094 10.409C23.9094 13.3198 21.5311 15.6927 18.6138 15.6927C18.5821 15.6927 18.5187 15.6927 18.487 15.6927L13.7305 19.078C13.7305 19.1412 13.7305 19.2045 13.7305 19.2678C13.7305 21.4508 11.9547 23.2226 9.7667 23.2226C7.83239 23.2226 6.24689 21.8621 5.86636 20.0271L0.475651 17.8124C2.12458 23.6972 7.547 28 13.9841 28C21.7214 28 28 21.7356 28 14.0158C28 6.26441 21.7214 0 13.9841 0Z" fill="url(#paint0_linear_2001_1962)" />
    <path d="M8.78363 21.2294L7.07129 20.5334C7.38839 21.1661 7.89575 21.704 8.59337 21.9887C10.1155 22.6215 11.8595 21.8938 12.4937 20.3752C12.8108 19.6475 12.8108 18.8249 12.4937 18.0972C12.1766 17.3695 11.6058 16.8 10.8765 16.4837C10.1472 16.1673 9.35441 16.1989 8.6885 16.452L10.4643 17.1797C11.5741 17.6543 12.1132 18.9198 11.6375 20.0272C11.1936 21.1661 9.89349 21.704 8.78363 21.2294Z" fill="url(#paint1_linear_2001_1962)" />
    <path d="M22.1336 10.3773C22.1336 8.4474 20.5481 6.86548 18.6138 6.86548C16.6795 6.86548 15.094 8.4474 15.094 10.3773C15.094 12.3073 16.6795 13.8892 18.6138 13.8892C20.5481 13.8892 22.1336 12.3389 22.1336 10.3773ZM15.9502 10.3773C15.9502 8.92198 17.1234 7.75135 18.6138 7.75135C20.1042 7.75135 21.2775 8.92198 21.2775 10.3773C21.2775 11.8327 20.1042 13.0033 18.6138 13.0033C17.1234 13.0033 15.9502 11.8327 15.9502 10.3773Z" fill="url(#paint2_linear_2001_1962)" />
  </g>
  <defs>
    <linearGradient id="paint0_linear_2001_1962" x1="14" y1="0" x2="14" y2="28" gradientUnits="userSpaceOnUse">
      <stop stop-color="#161E31" />
      <stop offset="1" stop-color="#1F75A4" />
    </linearGradient>
    <linearGradient id="paint1_linear_2001_1962" x1="9.90141" y1="16.2543" x2="9.90141" y2="22.2172" gradientUnits="userSpaceOnUse">
      <stop stop-color="#161E31" />
      <stop offset="1" stop-color="#1F75A4" />
    </linearGradient>
    <linearGradient id="paint2_linear_2001_1962" x1="18.6138" y1="6.86548" x2="18.6138" y2="13.8892" gradientUnits="userSpaceOnUse">
      <stop stop-color="#161E31" />
      <stop offset="1" stop-color="#1F75A4" />
    </linearGradient>
    <clipPath id="clip0_2001_1962">
      <rect width="28" height="28" rx="14" fill="white" />
    </clipPath>
  </defs>
</svg>{{ loginText }}</button>

  </div>

</template>
<script>
import Background from '@/components/Background.vue';
import Menu from '@/components/Menu.vue'



export default {
  components: { Menu, Background },
data() {
    return {
      isLoggedIn: false
    }
  },
  computed: {
    loginText() {
      return this.isLoggedIn? 'Log out' : 'Log in'
    }
  },
  methods: {
    toggleLogin() {
      this.isLoggedIn =!this.isLoggedIn
    }
  }
}
</script>

<style scoped>



.container {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  padding: 0 30px 300px 30px;
  flex-direction: column;
  min-width: 370px;
  max-width: 500px;
  height: 100%;
  color: #fff;
  background: linear-gradient(315deg, #131737 0%, #0e1448 100%);
}

h1 {
  padding-top: 50px;
  margin-bottom: 100px;
  font-weight: 600;
font-size: 32px;
}

p {
  margin: 0;
  padding: 0;
  margin-bottom: 40px;

}

ul {
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
}

li {
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}


img {
  border-radius: 100%;
}

button {
  display: flex;
justify-content: space-between;
  border: 1px solid #fff;
border-radius: 36px;
padding: 11px 27px;
box-shadow: 0 6px 26px 0 rgba(111, 134, 255, 0.21);
background: #252982;
font-weight: 600;
font-size: 18px;
width: 160px;
}



</style>
