<template>
    <div class="nav-bar">
        <h1 class="app-name">Snacky</h1>
        <h2 class="page-name">Adicionar nova receita</h2>
    </div>
</template>

<script>
export default {
    name: "NavBar"
}
</script>

<style>
    .nav-bar {
        background-color: #FF5245;
        display: flex;        
        align-items: center;
        width: 100vw;  
        height: 64px;      
        color: #FFFFFF;
        position: fixed;
        z-index: 99;
    }

    h1.app-name {
        font-size: 24px;
        font-weight: bold;
        display: flex;
        margin: 0px 16px;   
    }

    h1.app-name::after {
        content: "";
        background-color: #FFFFFF;
        width: 1px;
        height: 24px;     
        margin: 4px 0px 0px 16px;           
    }

    h2.page-name {
        font-size: 20px;
        font-weight: normal;        
    }
</style>
