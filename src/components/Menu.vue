<template>
  <div>
    <nav>
      <div v-if="$route.path === '/'">
      <div class="circle" @click="openModal" v-show="!isModalOpen">
        <svg class="circle-svg" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13.8937 30C12.7891 30 11.8937 29.1046 11.8937 28V20.1195C11.8937 19.0149 10.9983 18.1195 9.89369 18.1195H2C0.895432 18.1195 0 17.224 0 16.1195V13.8473C0 12.7428 0.895431 11.8473 2 11.8473H9.89369C10.9983 11.8473 11.8937 10.9519 11.8937 9.84734V2C11.8937 0.895429 12.7891 0 13.8937 0H16.1728C17.2773 0 18.1728 0.895431 18.1728 2V9.84734C18.1728 10.9519 19.0682 11.8473 20.1728 11.8473H28C29.1046 11.8473 30 12.7428 30 13.8473V16.1195C30 17.224 29.1046 18.1195 28 18.1195H20.1728C19.0682 18.1195 18.1728 19.0149 18.1728 20.1195V28C18.1728 29.1046 17.2773 30 16.1728 30H13.8937Z" fill="white" />
</svg>
      </div>
      </div>
      <ul>
      <li>
        <RouterLink to="/Feedback">
          <svg :class="{ active: $route.path === '/Feedback' }" width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M23.8574 9.49803C23.7597 9.19777 23.5754 8.93312 23.3276 8.73744C23.0798 8.54176 22.7796 8.4238 22.4648 8.39842L16.7031 7.93358L14.4785 2.5537C14.3582 2.26055 14.1534 2.0098 13.8903 1.83332C13.6271 1.65685 13.3174 1.56262 13.0005 1.56262C12.6836 1.56262 12.3739 1.65685 12.1107 1.83332C11.8475 2.0098 11.6428 2.26055 11.5225 2.5537L9.2998 7.9326L3.53516 8.39842C3.2199 8.42509 2.91952 8.54419 2.67165 8.74081C2.42379 8.93743 2.23946 9.20283 2.14176 9.50375C2.04406 9.80467 2.03733 10.1277 2.12243 10.4325C2.20752 10.7372 2.38065 11.01 2.62012 11.2168L7.01465 15.0088L5.67578 20.6787C5.6009 20.9867 5.61924 21.3101 5.72846 21.6077C5.83767 21.9053 6.03285 22.1637 6.28922 22.3502C6.54558 22.5366 6.85157 22.6427 7.16834 22.655C7.4851 22.6672 7.79837 22.5851 8.06836 22.4189L13 19.3838L17.9346 22.4189C18.2047 22.5831 18.5173 22.6636 18.8331 22.6505C19.1489 22.6373 19.4537 22.531 19.7092 22.345C19.9647 22.1589 20.1594 21.9014 20.2688 21.6049C20.3783 21.3084 20.3976 20.9861 20.3242 20.6787L18.9805 15.0078L23.375 11.2158C23.6164 11.0094 23.7911 10.736 23.877 10.4302C23.9629 10.1244 23.9561 9.79996 23.8574 9.49803ZM22.3594 10.0322L17.6035 14.1338C17.4951 14.2273 17.4144 14.3488 17.3703 14.485C17.3262 14.6212 17.3204 14.7669 17.3535 14.9062L18.8066 21.039C18.8104 21.0475 18.8108 21.0571 18.8077 21.0658C18.8046 21.0745 18.7983 21.0817 18.79 21.0859C18.7725 21.0996 18.7676 21.0967 18.7529 21.0859L13.4092 17.7998C13.2861 17.7241 13.1445 17.6841 13 17.6841C12.8555 17.6841 12.7139 17.7241 12.5908 17.7998L7.24707 21.0879C7.23242 21.0967 7.22852 21.0996 7.20996 21.0879C7.20172 21.0837 7.1954 21.0765 7.19231 21.0678C7.18922 21.059 7.1896 21.0495 7.19336 21.041L8.64648 14.9082C8.6796 14.7689 8.6738 14.6232 8.62971 14.4869C8.58562 14.3507 8.50494 14.2292 8.39648 14.1357L3.64063 10.0342C3.62891 10.0244 3.61816 10.0156 3.62793 9.98534C3.6377 9.95506 3.64551 9.95897 3.66016 9.95702L9.90234 9.45311C10.0455 9.44083 10.1825 9.3893 10.2983 9.30419C10.4141 9.21907 10.5042 9.10368 10.5586 8.97069L12.9629 3.1494C12.9707 3.1328 12.9736 3.12499 12.9971 3.12499C13.0205 3.12499 13.0234 3.1328 13.0313 3.1494L15.4414 8.97069C15.4964 9.10373 15.587 9.219 15.7033 9.30378C15.8196 9.38857 15.9571 9.43957 16.1006 9.45116L22.3428 9.95506C22.3574 9.95506 22.3662 9.95506 22.375 9.98339C22.3838 10.0117 22.375 10.0224 22.3594 10.0322Z" fill="none" />
</svg>
<span :class="{ activelink: $route.path === '/Feedback' }">Отзывы</span> 
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/">
          <svg :class="{ active: $route.path === '/' }" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M21.417 10.6133L13.6045 2.80079C13.3115 2.50799 12.9142 2.34351 12.5 2.34351C12.0858 2.34351 11.6885 2.50799 11.3955 2.80079L3.58301 10.6133C3.43721 10.758 3.32164 10.9303 3.24301 11.12C3.16438 11.3098 3.12427 11.5133 3.125 11.7188V21.0938C3.125 21.301 3.20731 21.4997 3.35382 21.6462C3.50033 21.7927 3.69905 21.875 3.90625 21.875H10.1562C10.3634 21.875 10.5622 21.7927 10.7087 21.6462C10.8552 21.4997 10.9375 21.301 10.9375 21.0938V15.625H14.0625V21.0938C14.0625 21.301 14.1448 21.4997 14.2913 21.6462C14.4378 21.7927 14.6365 21.875 14.8437 21.875H21.0937C21.3009 21.875 21.4997 21.7927 21.6462 21.6462C21.7927 21.4997 21.875 21.301 21.875 21.0938V11.7188C21.8757 11.5133 21.8356 11.3098 21.757 11.12C21.6784 10.9303 21.5628 10.758 21.417 10.6133ZM20.3125 20.3125H15.625V14.8438C15.625 14.6366 15.5427 14.4378 15.3962 14.2913C15.2497 14.1448 15.0509 14.0625 14.8437 14.0625H10.1562C9.94905 14.0625 9.75033 14.1448 9.60382 14.2913C9.45731 14.4378 9.375 14.6366 9.375 14.8438V20.3125H4.6875V11.7188L12.5 3.90626L20.3125 11.7188V20.3125Z" fill="none" />
</svg>
          <span :class="{ activelink: $route.path === '/' }">Главная</span>
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/Tour">
          <svg :class="{ active: $route.path === '/Tour' }" width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M21.5938 3.125H15.3438C15.2241 3.12499 15.1061 3.15245 14.9987 3.20528C14.8914 3.25811 14.7976 3.33488 14.7246 3.42969L8.47461 11.5557L7.53125 10.6143C7.38614 10.469 7.21381 10.3537 7.02413 10.2751C6.83444 10.1965 6.63112 10.156 6.42578 10.156C6.22045 10.156 6.01712 10.1965 5.82744 10.2751C5.63775 10.3537 5.46543 10.469 5.32031 10.6143L4.08106 11.8545C3.93593 11.9996 3.8208 12.1719 3.74226 12.3614C3.66371 12.551 3.62328 12.7543 3.62328 12.9595C3.62328 13.1647 3.66371 13.3679 3.74226 13.5575C3.8208 13.7471 3.93593 13.9194 4.08106 14.0645L6.03418 16.0176L3.29981 18.752C3.15468 18.8971 3.03955 19.0693 2.96101 19.2589C2.88246 19.4485 2.84203 19.6517 2.84203 19.8569C2.84203 20.0622 2.88246 20.2654 2.96101 20.455C3.03955 20.6446 3.15468 20.8168 3.29981 20.9619L4.53906 22.2002C4.83206 22.493 5.22933 22.6575 5.64356 22.6575C6.05778 22.6575 6.45505 22.493 6.74805 22.2002L9.48242 19.4658L11.4355 21.4189C11.5807 21.5642 11.753 21.6795 11.9427 21.7581C12.1324 21.8367 12.3357 21.8772 12.541 21.8772C12.7464 21.8772 12.9497 21.8367 13.1394 21.7581C13.329 21.6795 13.5014 21.5642 13.6465 21.4189L14.8857 20.1787C15.0309 20.0336 15.146 19.8614 15.2245 19.6718C15.3031 19.4822 15.3435 19.279 15.3435 19.0737C15.3435 18.8685 15.3031 18.6653 15.2245 18.4757C15.146 18.2861 15.0309 18.1138 14.8857 17.9688L13.9443 17.0273L22.0703 10.7773C22.1654 10.7042 22.2423 10.6101 22.2952 10.5024C22.348 10.3947 22.3753 10.2762 22.375 10.1563V3.90625C22.375 3.69905 22.2927 3.50034 22.1462 3.35382C21.9997 3.20731 21.801 3.125 21.5938 3.125ZM5.64551 21.0938L4.40625 19.8555L7.14063 17.1211L8.37891 18.3594L5.64551 21.0938ZM12.541 20.3125L5.1875 12.96L6.42774 11.7188L13.7813 19.0732L12.541 20.3125ZM20.8125 9.77148L12.8301 15.9121L11.7617 14.8438L16.6777 9.92774C16.8242 9.78114 16.9064 9.58237 16.9063 9.37514C16.9062 9.16792 16.8238 8.96922 16.6772 8.82275C16.5307 8.67629 16.3319 8.59406 16.1247 8.59415C15.9174 8.59424 15.7187 8.67665 15.5723 8.82324L10.6563 13.7383L9.58887 12.6699L15.7285 4.6875H20.8125V9.77148Z" fill="none" />
</svg>
<span :class="{ activelink: $route.path === '/Tour' }">Турниры</span>
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/Profile">
          <svg :class="{ active: $route.path === '/Profile' }" width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13 2.34375C10.9913 2.34375 9.02768 2.9394 7.35749 4.05539C5.68731 5.17137 4.38556 6.75756 3.61685 8.61337C2.84815 10.4692 2.64702 12.5113 3.0389 14.4814C3.43079 16.4515 4.39807 18.2612 5.81845 19.6816C7.23883 21.1019 9.0485 22.0692 11.0186 22.4611C12.9887 22.853 15.0308 22.6519 16.8866 21.8832C18.7424 21.1144 20.3286 19.8127 21.4446 18.1425C22.5606 16.4723 23.1563 14.5087 23.1563 12.5C23.1534 9.80727 22.0825 7.22564 20.1784 5.32159C18.2744 3.41754 15.6927 2.34659 13 2.34375ZM7.73438 19.2871C8.29955 18.4032 9.07813 17.6758 9.99837 17.1719C10.9186 16.6681 11.9509 16.404 13 16.404C14.0491 16.404 15.0814 16.6681 16.0016 17.1719C16.9219 17.6758 17.7005 18.4032 18.2656 19.2871C16.7601 20.458 14.9073 21.0937 13 21.0937C11.0928 21.0937 9.23991 20.458 7.73438 19.2871ZM9.875 11.7188C9.875 11.1007 10.0583 10.4965 10.4017 9.98259C10.745 9.46869 11.2331 9.06815 11.8041 8.83163C12.3751 8.5951 13.0035 8.53322 13.6097 8.6538C14.2159 8.77437 14.7727 9.072 15.2097 9.50904C15.6468 9.94608 15.9444 10.5029 16.065 11.1091C16.1855 11.7153 16.1237 12.3436 15.8871 12.9146C15.6506 13.4857 15.2501 13.9737 14.7362 14.3171C14.2223 14.6605 13.6181 14.8438 13 14.8438C12.1712 14.8438 11.3763 14.5145 10.7903 13.9285C10.2042 13.3424 9.875 12.5476 9.875 11.7188ZM19.4219 18.2041C18.5506 16.9415 17.3254 15.9647 15.9004 15.3965C16.6658 14.7936 17.2244 13.9672 17.4984 13.0321C17.7724 12.0971 17.7481 11.0999 17.4291 10.1792C17.1101 9.25859 16.5121 8.46024 15.7183 7.89521C14.9245 7.33017 13.9744 7.02654 13 7.02654C12.0256 7.02654 11.0755 7.33017 10.2817 7.89521C9.48791 8.46024 8.88992 9.25859 8.57089 10.1792C8.25186 11.0999 8.22766 12.0971 8.50164 13.0321C8.77562 13.9672 9.33417 14.7936 10.0996 15.3965C8.67463 15.9647 7.44945 16.9415 6.57813 18.2041C5.47712 16.966 4.7575 15.436 4.50591 13.7983C4.25432 12.1607 4.4815 10.4852 5.16008 8.97373C5.83866 7.46221 6.93972 6.17908 8.33067 5.27884C9.72162 4.37861 11.3432 3.89965 13 3.89965C14.6569 3.89965 16.2784 4.37861 17.6693 5.27884C19.0603 6.17908 20.1613 7.46221 20.8399 8.97373C21.5185 10.4852 21.7457 12.1607 21.4941 13.7983C21.2425 15.436 20.5229 16.966 19.4219 18.2041Z" fill="none" />
</svg>
<span :class="{ activelink: $route.path === '/Profile' }">Профиль</span>
        </RouterLink>
      </li>
    </ul>
    </nav>
  </div>
  <div class="modal" v-if="isModalOpen">
    <div class="container container-modal">
      <h4>Создание турнира</h4>
    <ul class="modal-list">
      <li class="modal-item"><span>Название:</span> 
        <input class="input-modal " placeholder="_  _  _  _  _  _  _  _  " type="text">
       </li>
      <li class="modal-item"><span>Игра:</span> 
        <div class="select-container">
          <div class="custom-select" :class="{ open: isOpen }">
  <div class="selected-option" @click="isOpen =!isOpen">
    {{ selectedOption }} <svg  v-if="!isOpen" width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M20.372 1.46813C20.7265 1.85139 20.7265 2.44285 20.372 2.82611L11.2341 12.7062C10.8383 13.1342 10.1617 13.1342 9.76585 12.7062L0.627983 2.82611C0.27351 2.44285 0.27351 1.85139 0.627983 1.46813L0.789238 1.29378C1.18509 0.865766 1.86167 0.865766 2.25753 1.29378L9.76585 9.41198C10.1617 9.83999 10.8383 9.83999 11.2341 9.41198L18.7425 1.29378C19.1383 0.865767 19.8149 0.865767 20.2108 1.29378L20.372 1.46813Z" fill="white" />
</svg>
<svg  v-if="isOpen" width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.627984 12.5319C0.27351 12.1486 0.27351 11.5572 0.627984 11.1739L9.76585 1.29378C10.1617 0.865767 10.8383 0.865767 11.2341 1.29378L20.372 11.1739C20.7265 11.5572 20.7265 12.1486 20.372 12.5319L20.2108 12.7062C19.8149 13.1342 19.1383 13.1342 18.7425 12.7062L11.2341 4.58802C10.8383 4.16001 10.1617 4.16001 9.76586 4.58802L2.25753 12.7062C1.86167 13.1342 1.18509 13.1342 0.789237 12.7062L0.627984 12.5319Z" fill="white" />
</svg>
  </div>
  <div class="option" v-if="isOpen" @click="selectOption('Dota 2')" v-show="selectedOption!== 'Dota 2'">Dota 2</div>
  <div class="option" v-if="isOpen" @click="selectOption('CS:GO')" v-show="selectedOption!== 'CS:GO'">CS:GO</div>
</div>
  </div>
       </li>
      <li class="modal-item"><span>Дата начала:</span> 
        <input class="input-modal " placeholder="_  _  / _  _  / _  _  " type="number">
       </li>
      <li class="modal-item"><span>Время:</span> 
        <input class="input-modal " placeholder="_  _  :  _  _" type="number">
       </li>
      <li class="modal-item"><span>Баллы за победу:</span> 
        <input class="input-modal " placeholder="_  _  _  _  _  _  _  _    " type="number">
       </li>
      <li class="modal-item"><span>Кол-во участников:</span> 
        <input class="input-modal " placeholder="_  _  _  _  _  _  _  _    " type="number">
       </li>
      <li class="modal-item"><span>Пароль:</span> 
        <input class="input-modal " placeholder="_  _  _  _  _  _  _  _  " type="text">
       </li>
    </ul>
    <div class="btn-wrap">
      <button class="btn" @click="isModalOpen = false">Отменить</button>
      <button class="btn btn-add">Создать</button>
    </div>
  </div>
  </div>
</template>


<script>
import { RouterLink } from 'vue-router';

export default {
  components: {
    RouterLink,
  },
  data() {
    return {
      isModalOpen: false,
      isOpen: false,
      selectedOption: '',
      options: ['Dota 2', 'CS:GO'],
      selectedOption: 'Dota 2'
    }
  },
  methods: {
    openModal() {
      this.isModalOpen = true
    },
    closeModal() {
      this.isModalOpen = false
    },
    selectOption(option) {
      this.selectedOption = option;
      this.isOpen = false;
    }
  }
}

</script>


<style scoped>


nav {
  border-radius: 20px 20px 0 0;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #0C1031;
  padding: 20px 30px 25px 30px;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  gap: 50px;
}


nav a {
  display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
  text-decoration: none;
  color: #fff;
}

nav svg {
  width: 24px; 
  height: 24px;
}

.circle {
  display: flex;
    align-items: center;
    justify-content: center;
  border: 0.50px solid #fff;
  border-radius: 45px;
  width: 80px;
  height: 80px;
  box-shadow: 0 6px 26px 0 rgba(111, 134, 255, 0.21);
  background: #252982;
  position: absolute;
  top: -90px;
  right: -15px;
  transform: translateX(-50%);
}

.circle-svg {
  border-radius: 2px;
fill: #fff;
width: 30px;
height: 30px;
}

svg path {
  fill: white;
}

.active path {
  fill: #90A2FF;

}

.activelink {

  text-shadow: 1px 1px 1px rgba(111, 134, 255, 0.83);

}


span {
  font-weight: 500;
font-size: 10px;
}




.modal {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  color: #fff;
}

.container-modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(315deg, #131737 0%, #0e1448 100%);
  border-radius: 10px;
  z-index: 999;
  min-width: 100vw;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  overflow-y: auto;
  height: 100vh;
  padding-bottom: 200px;
}

h4 {
  padding-top: 50px;
  padding-bottom: 22px;
  font-weight: 600;
font-size: 32px;
}

.modal-list {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 25px;
}

.modal-item {
  display: flex;
  justify-content: space-between;
  padding: 18px 0;
  border-bottom: 1px solid #6e86ff;
border-top: 1px solid #6e86ff;
}

.modal-item span {
  font-weight: 500;
font-size: 16px;
}

.input-modal {
  border: 1px solid #878181;
border-radius: 14px;
padding: 9px 12px;
background: #3a3a3e;
width: 150px;
}

.select-container {
  display: flex;
  align-items: center;
}




.custom-select {
  position: relative;
  cursor: pointer;
border-radius: 14px 14px 0 0 ;
background: #3a3a3e;
width: 150px;

height: 40px;
font-weight: 600;
font-size: 16px;
text-align: center;
color: #fff;
}

.custom-select.open .option {
  display: flex;
    align-items: center;
        justify-content: space-evenly;
}

.selected-option {
  width: 150px;
  height: 100%;
  border-radius: 14px 14px 0 0 ;
  display: flex;
    align-items: center;
    justify-content: space-evenly;
    border: 1px solid #878181;
}

.option {
  display: none;
  padding: 10px;
  cursor: pointer;
  background: #3a3a3e;
  color: #0C1031;
  border-radius: 0 0 14px 14px;
  font-weight: 600;
font-size: 16px;
text-align: center;
color: #fff;
border: 1px solid #878181;

}

.option:hover {
  background-color: #f0f0f0;
}

.btn-wrap {
  width: 100%;
  padding: 30px 30px 0 30px;
  display: flex;
  justify-content: space-between;
}

.btn {
  
  background: rgba(37, 41, 130, 0.33);
  border: 1px solid #ff2323;
border-radius: 36px;
padding: 11px 27px;
font-weight: 600;
font-size: 18px;
}

.btn-add {
  border: 1px solid #fff;
  box-shadow: 0 6px 26px 0 rgba(111, 134, 255, 0.21);
background: #252982;
}

</style>

