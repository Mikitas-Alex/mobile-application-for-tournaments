<template>
  <Menu />
  <div class="all-container">
    <div class="container">
      <Background />
    <div class="title-wrap">
 <h1>Название</h1>
 <button class="edit">Edit</button>
</div>
 <ul class="wrapp">
  <li class="item">
    <span class="table">Дата начала:</span><span class="table">22/12/24</span><span class="table">18:00</span>
  </li>
  <li class="item">
    <span class="table">Статус:</span>
        <span class="points">. . . . . . . . . . . . . </span>
        <span class="table">Ожидание</span>
  </li>
  <li class="item">
    <span class="table">Баллы за победу:</span>
        <span class="points">. . . . . . . . . . . . . </span>
        <span class="table">100</span>
  </li>
  <li class="item">
    <span class="table">Участники:</span>
        <span class="points">. . . . . . . . . . . . . </span>
        <span class="table">5/20</span>
  </li>
 </ul>
<div class="password">
 <h2 class="password-text">Пароль</h2>
 <div class="pass-wrap">
  <svg class="close-open" width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5.89749 4.28651C5.82065 4.1999 5.72738 4.12939 5.62309 4.07908C5.5188 4.02878 5.40556 3.99967 5.28994 3.99345C5.17432 3.98723 5.05861 4.00402 4.94952 4.04285C4.84044 4.08167 4.74014 4.14177 4.65445 4.21964C4.56876 4.29751 4.49938 4.39162 4.45033 4.49651C4.40128 4.60139 4.37353 4.71497 4.3687 4.83066C4.36386 4.94635 4.38204 5.06185 4.42217 5.17046C4.4623 5.27907 4.52359 5.37864 4.60249 5.46339L6.70686 7.77886C2.73436 10.2168 1.02593 13.975 0.950458 14.1456C0.900707 14.2575 0.875 14.3786 0.875 14.501C0.875 14.6235 0.900707 14.7446 0.950458 14.8565C0.98874 14.9429 1.91515 16.997 3.97468 19.0565C6.7189 21.7996 10.185 23.25 14 23.25C15.9607 23.2611 17.9015 22.8574 19.6951 22.0654L22.1014 24.7134C22.1782 24.8 22.2715 24.8705 22.3758 24.9208C22.4801 24.9711 22.5933 25.0002 22.7089 25.0065C22.8246 25.0127 22.9403 24.9959 23.0494 24.9571C23.1584 24.9182 23.2587 24.8581 23.3444 24.7803C23.4301 24.7024 23.4995 24.6083 23.5486 24.5034C23.5976 24.3985 23.6254 24.2849 23.6302 24.1692C23.635 24.0536 23.6168 23.9381 23.5767 23.8294C23.5366 23.7208 23.4753 23.6213 23.3964 23.5365L5.89749 4.28651ZM11.0742 12.5815L15.6319 17.5964C14.9455 17.9574 14.1587 18.0803 13.395 17.9457C12.6312 17.8112 11.9338 17.4267 11.4122 16.8528C10.8906 16.2789 10.5744 15.548 10.5132 14.7749C10.4521 14.0018 10.6494 13.2303 11.0742 12.5815ZM14 21.5C10.6334 21.5 7.69233 20.276 5.25765 17.8632C4.2583 16.8701 3.40835 15.7372 2.73436 14.5C3.24733 13.5385 4.88468 10.8479 7.91327 9.09901L9.88202 11.2592C9.11983 12.2353 8.72728 13.4496 8.77376 14.6872C8.82024 15.9248 9.30276 17.1061 10.136 18.0224C10.9693 18.9386 12.0997 19.5308 13.3273 19.6942C14.555 19.8576 15.8009 19.5818 16.8448 18.9154L18.4559 20.6873C17.034 21.2328 15.5229 21.5084 14 21.5ZM14.6562 11.0623C14.4282 11.0188 14.2269 10.8865 14.0964 10.6945C13.9659 10.5025 13.9171 10.2665 13.9606 10.0385C14.0041 9.81054 14.1364 9.60916 14.3284 9.47871C14.5204 9.34825 14.7564 9.29941 14.9844 9.34292C16.0996 9.55912 17.115 10.13 17.8792 10.9705C18.6434 11.811 19.1154 12.876 19.2248 14.0067C19.2464 14.2377 19.1754 14.4679 19.0273 14.6465C18.8792 14.8252 18.6662 14.9377 18.4351 14.9593C18.4078 14.9609 18.3804 14.9609 18.3531 14.9593C18.1344 14.9603 17.9233 14.8793 17.7613 14.7323C17.5994 14.5853 17.4983 14.383 17.4781 14.1653C17.4045 13.4132 17.0901 12.705 16.5816 12.1459C16.0732 11.5869 15.398 11.2068 14.6562 11.0623ZM27.0462 14.8565C27.0003 14.9593 25.8923 17.4126 23.3975 19.6471C23.3122 19.7259 23.2122 19.787 23.1031 19.8267C22.994 19.8664 22.8782 19.8841 22.7622 19.8786C22.6463 19.8731 22.5326 19.8446 22.4277 19.7947C22.3229 19.7448 22.2291 19.6746 22.1516 19.5881C22.0742 19.5016 22.0148 19.4006 21.9768 19.2909C21.9388 19.1812 21.923 19.0651 21.9304 18.9493C21.9377 18.8334 21.968 18.7202 22.0195 18.6162C22.071 18.5121 22.1427 18.4194 22.2305 18.3434C23.4544 17.2438 24.4826 15.9441 25.2711 14.5C24.5956 13.2616 23.7438 12.1279 22.7423 11.1345C20.3076 8.72386 17.3666 7.49995 14 7.49995C13.2906 7.49909 12.5824 7.55652 11.8825 7.67167C11.7687 7.6918 11.652 7.68918 11.5392 7.66395C11.4264 7.63873 11.3197 7.59141 11.2253 7.52472C11.1309 7.45803 11.0506 7.37329 10.9891 7.27541C10.9277 7.17752 10.8862 7.06843 10.8671 6.95442C10.848 6.84042 10.8517 6.72376 10.878 6.6112C10.9043 6.49863 10.9526 6.39239 11.0201 6.2986C11.0877 6.20481 11.1732 6.12534 11.2716 6.06477C11.3701 6.00421 11.4796 5.96375 11.5937 5.94573C12.3891 5.81441 13.1939 5.74893 14 5.74995C17.815 5.74995 21.2811 7.20026 24.0253 9.94448C26.0848 12.004 27.0112 14.0592 27.0495 14.1456C27.0993 14.2575 27.125 14.3786 27.125 14.501C27.125 14.6235 27.0993 14.7446 27.0495 14.8565H27.0462Z" fill="white" />
</svg>
<input class="inp" type="password">
<svg class="copy" width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M20.625 0H6.625C6.39294 0 6.17038 0.0921874 6.00628 0.256282C5.84219 0.420376 5.75 0.642936 5.75 0.875V5.25H1.375C1.14294 5.25 0.920376 5.34219 0.756282 5.50628C0.592187 5.67038 0.5 5.89294 0.5 6.125V20.125C0.5 20.3571 0.592187 20.5796 0.756282 20.7437C0.920376 20.9078 1.14294 21 1.375 21H15.375C15.6071 21 15.8296 20.9078 15.9937 20.7437C16.1578 20.5796 16.25 20.3571 16.25 20.125V15.75H20.625C20.8571 15.75 21.0796 15.6578 21.2437 15.4937C21.4078 15.3296 21.5 15.1071 21.5 14.875V0.875C21.5 0.642936 21.4078 0.420376 21.2437 0.256282C21.0796 0.0921874 20.8571 0 20.625 0ZM14.5 19.25H2.25V7H14.5V19.25ZM19.75 14H16.25V6.125C16.25 5.89294 16.1578 5.67038 15.9937 5.50628C15.8296 5.34219 15.6071 5.25 15.375 5.25H7.5V1.75H19.75V14Z" fill="white" />
</svg>
 </div>

 <button class="delete">Удалить</button>
</div>

<div class="title-wraper">

<h3>Список участников:</h3>
</div>


  </div>
  <ul class="scrol">
    <li><Participants /></li>
    <li><Participants /></li>
    <li><Participants /></li>
    <li><Participants /></li>
    <li><Participants /></li>
    <li><Participants /></li>
    <li><Participants /></li>
    <li><Participants /></li>
    <li><Participants /></li>
    <li><Participants /></li>
    <li><Participants /></li>
    <li><Participants /></li>
    <li><Participants /></li>
    <li><Participants /></li>
    <li><Participants /></li>
    <li><Participants /></li>
    <li><Participants /></li>
    <li><Participants /></li>
    <li><Participants /></li>
    <li><Participants /></li>
    <li><Participants /></li>
    <li><Participants /></li>
    <li><Participants /></li>
    <li><Participants /></li>
    <li><Participants /></li>
    <li><Participants /></li>
    <li><Participants /></li>
    <li><Participants /></li>
    <li><Participants /></li>
    <li><Participants /></li>
  </ul>
</div>
</template>

<script>
import Menu from '@/components/Menu.vue'
import Participants from '@/components/Participants.vue'
import Background from '@/components/Background.vue'


export default {
  components: { Menu, Participants, Background }
}
</script>

<style scoped>

.all-container {
  background: linear-gradient(315deg, #131737 0%, #0e1448 100%);
  position: relative;
  z-index: 1;

}
.container {
  position: relative;
  z-index: 1;
  display: flex;
  padding: 0 56px;
  flex-direction: column;
  min-width: 370px;
  max-width: 500px;
  height: 100%;
  color: #fff;
}

.title-wrap {
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
  align-items: center;
  margin-bottom: 20px;
}

h1 {
  font-weight: 600;
font-size: 32px;
}

.edit {
  display: flex;
  align-items: center;
  border: 1px solid #848697;
border-radius: 36px;
padding: 2px 13px;
  font-weight: 400;
font-size: 14px;
width: 52px;
height: 23px;
}

.wrapp {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 15px;
}

.item {
  display: flex;
  justify-content: space-between;
}

.table {
  font-weight: 200;
font-size: 15px;
}

.points {
  padding-right: 5px;
  text-wrap: nowrap;
  color: #848697;
  font-size: 15px;
}

.password {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.password-text {
  font-weight: 500;
font-size: 15px;
margin-bottom: 10px;
}

.pass-wrap {
  display: flex;
  gap: 20px;
  align-items: center;
  margin-bottom: 14px;
}

.delete {
  border: 1px solid #fff;
border-radius: 36px;
padding: 11px 27px;
box-shadow: 0 6px 26px 0 rgba(111, 134, 255, 0.21);
background: #252982;
font-weight: 600;
font-size: 18px;
}

.inp {

  border: 1px solid #878181;
border-radius: 14px;
padding: 11px 27px;
width: 185px;
height: 47px;
    background: #3a3a3e;
}

.title-wraper {
  display: flex;
  justify-content: center;
}

h3 {
  font-weight: 600;
font-size: 20px;
}

.scrol {
  overflow-y: auto;
  height: 100vh;
  padding-bottom: 700px;
}

</style>
