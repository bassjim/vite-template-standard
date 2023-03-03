<template>
    <div class="flex-row bd-highlight mb-3 text-center">
    <button type="button" class="btn btn-outline-secondary"><router-link to="/">Home</router-link></button>
    <button type="button" class="btn btn-outline-secondary"><router-link to="/about">About</router-link></button>
    <button type="button" class="btn btn-outline-secondary"><router-link to="/products">產品列表</router-link></button>
    <button type="button" class="btn btn-outline-secondary"><router-link to="/cart">購物車</router-link></button>
    <button type="button" class="btn btn-outline-secondary"><router-link to="/admin/products">後台產品列表</router-link></button>
    <hr>
    <RouterView></RouterView>
    </div>
</template>
