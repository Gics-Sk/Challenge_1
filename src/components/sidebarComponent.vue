<template>
  <div class="sidebar">
    <div class="card-header">
      <h1 class="title">CRUD OPERATION</h1>
    </div>
    <div class="profil">
      <img src="../../public/pexels-photo-2379004 1.png" alt="Profil" />
      <p>Giovanni SOKENOU</p>
      <span class="orange">Admin</span>
    </div>
    <div class="nav">
      <nav class="navbar">
        <ul class="nav-links">
          <li class="nav-link active">
            <a href=""
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#000"
              >
                <path
                  d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"
                /></svg>Home</a
            >
          </li>
          <li class="nav-link"><a href="">Course</a></li>
          <li class="nav-link"><a href="">Students</a></li>
          <li class="nav-link"><a href="">Payment</a></li>
          <li class="nav-link"><a href="">Report</a></li>
          <li class="nav-link"><a href="">Settings</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<style scoped>
.sidebar {
  background-color: #f2eae1;
  width: 270px;
  height: 100vh;
}
.card-header {
  display: flex;
  justify-content: center;
}
.title {
  border-left: 4px solid #f8d442;
  padding: 0.5rem;
  font-size: 1.4rem;
}
.profil {
  text-align: center;
  margin-bottom: 80px;
}
.profil,
img {
  border-radius: 50%;
  margin-top: 27px;
}
.profil,
p {
  font-weight: bold;
}
.orange {
  color: #feaf00;
}
/* nav{
     text-align: center;
} */
.nav-links {
  background-color: transparent;
  width: 10rem;
  padding: 1rem;
  text-align: center;
}
a{
     display: flex;
     justify-content: center;
     align-items: center;
}
.nav-link,
a {
  margin-bottom: 42px;
  list-style: none;
  text-decoration: none;
  color: #000;
  text-align: center;
}
.active {
  background-color: #feaf00;
  padding: 1rem;
  width: 10rem;
  height: 1.5rem;
  text-align: center;
}
</style>