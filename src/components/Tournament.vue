<template>

  <div class="t-container">
    <div class="mini-tcontainer">
    <div class="name">
      <h2>Название</h2>
      <span class="name-game">CS:GO</span>
    </div>
    <ul>
      <li>
        <p>Кол-во участников:</p>
        <span class="points">. . . . . . . . . . . . . </span>
        <span>20</span>
      </li>
      <li>
        <p>Баллы за победу:</p>
        <span class="points">. . . . . . . . . . . . . </span>
        <span>100</span>
      </li>
    </ul>

</div>
<span class="svg">
  <svg width="28" height="39" viewBox="0 0 28 39" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_d_2001_1479)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.43548 8.72087C8.82702 8.32425 9.46723 8.32425 9.85877 8.72087L19.8064 18.7975C20.1909 19.1869 20.1909 19.8131 19.8064 20.2025L9.85877 30.2791C9.46723 30.6757 8.82702 30.6757 8.43548 30.2791L8.19355 30.0341C7.80908 29.6446 7.80908 29.0184 8.19355 28.629L16.5122 20.2025C16.8967 19.8131 16.8967 19.1869 16.5122 18.7975L8.19355 10.371C7.80908 9.98155 7.80908 9.35538 8.19355 8.96593L8.43548 8.72087Z" fill="white" />
  </g>
  <defs>
    <filter id="filter0_d_2001_1479" x="0.205152" y="0.723409" width="27.5897" height="37.5532" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
      <feOffset />
      <feGaussianBlur stdDeviation="3.85" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix type="matrix" values="0 0 0 0 0.435294 0 0 0 0 0.52549 0 0 0 0 1 0 0 0 0.58 0" />
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2001_1479" />
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2001_1479" result="shape" />
    </filter>
  </defs>
</svg></span>
  </div>

  
</template>



<style scoped>

.t-container {
  display: flex;
  z-index: 1;
  border-bottom: 1px solid #6f86ff;
  padding: 20px 30px;

}

.mini-tcontainer {
  color: #fff;
}

.name {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

h2 {
  padding: 0;
  margin: 0;
  font-weight: 600;
font-size: 20px;
}

.name-game {
  font-weight: 400;
font-size: 13px;
}

ul {
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
}

li {
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  position: relative;
  z-index: 1;
}

p {
  padding: 0;
  margin: 0;
  width: 140px;
  font-weight: 400;
font-size: 15px;
}

.points {
  padding-right: 20px;
  text-wrap: nowrap;
  color: #848697;
}

.svg {
  padding-top: 40px;
  padding-left: 15px;
}





</style>






