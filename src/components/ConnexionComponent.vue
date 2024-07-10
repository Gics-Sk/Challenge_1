<template>
    <div class="container" v-if="isOpen">
        <div class="card">
            <div class="card-header">
                <h1 class="title">CRUD OPERATION</h1>
            </div>
            <div class="head">
                <h2>SIGN IN</h2>
                <p>Enter your credentials to access your account</p>
            </div>
            <div class="form">
                <form action="" method="get">
                    <div>
                        <label for="email">Email ou Username</label>
                        <input type="text" name="email" id="email" placeholder="Entrez votre Email">
                    </div>
                    <div>
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="Entrez votre mot de passe">
                    </div>
                    <div class="button"><button type="submit">SIGN IN</button></div>
                </form>
            </div>
            <p class="forget">Mot de passe oublié ? <a href="#">Restaurer mot de passe</a></p>
            <p class="signup">Vous n'avez pas un compte ? <a href="#" @click="toogle">Creer un compte</a></p>
        </div>
    </div>
    <div class="container" v-else >
        <div class="card">
            <div class="card-header">
                <h1 class="title">CRUD OPERATION</h1>
            </div>
            <div class="head">
                <h2>SIGN UP</h2>
                <p>Veuillez remplir le formulaire pour créer votre compte</p>
            </div>
            <div class="form">
                <form action="" method="get">
                    <div>
                        <label for="email">Email</label>
                        <input type="text" name="email" id="email" placeholder="Entrez votre Email">
                    </div>
                    <div>
                        <label for="nom">Nom</label>
                        <input type="text" name="nom" id="nom" placeholder="Entrez votre Nom">
                    </div>
                    <div>
                        <label for="prenom">Prénom</label>
                        <input type="text" name="prenom" id="prenom" placeholder="Entrez votre Prénom">
                    </div>
                    <div>
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="Entrez votre mot de passe">
                    </div>
                    <div class="button"><button type="submit">SIGN IN</button></div>
                </form>
            </div>
            <p class="forget">Mot de passe oublié ? <a href="#">Restaurer mot de passe</a></p>
            <p class="signup">Vous avez un compte ? <a href="#" @click="toogle">Se connecter</a></p>
        </div>
    </div>
</template>



<script setup>
import { ref } from 'vue';

const isOpen = ref(true);
const toogle=()=>{
    isOpen.value = !isOpen.value
}

</script>
<style scoped>

.card {
    width: 475px;
    height: auto;
    background-color: #fff;
    margin:5rem auto;
    border-radius: 0.5rem;
padding: 2rem;
}

.head {
    text-align: center;
    margin-bottom: 1rem;
}

.card-header {
    display: flex;
    justify-content: center;
}

.title {
    border-left: 4px solid #F8D442;
    padding: .5rem;
}

.form form div>input {
    margin:1rem;
}

label {
    margin-left: 1rem !important;
}

input {
    width: 415px;
    height: 44px;
    border-radius: .5rem;
    border: 1px solid #E5E5E5;
    background-color: #fff;
    padding-left:0.5rem;
    margin-bottom: 1rem;
}
.button {
    display: flex;
    justify-content: center;
}
button {
    width: 100px;
    height: 44px;
    background-color: #FEAF00;
    color: #fff;
    border: none;
    border-radius: .5rem;
    text-align: center;
}
a {
    text-decoration: none;
    color: #000;
    font-weight: bold;
}
.forget{
    font-size: 0.8rem;
    margin: 1rem;
}
.forget a {
    color: #FEAF00;
}
.signup{
    text-align: center;
}
</style>