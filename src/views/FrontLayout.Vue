<template>
    <div class="flex-row bd-highlight mb-3 text-center">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <button type="button" class="btn btn-outline-secondary"><router-link to="/">Home</router-link></button>
                    </li>
                    <li class="nav-item">
                        <button type="button" class="btn btn-outline-secondary"><router-link to="/about">About</router-link></button>
                    </li>
                    <li class="nav-item">
                        <button type="button" class="btn btn-outline-secondary"><router-link to="/products">產品列表</router-link></button>
                    </li>
                    <li class="nav-item">
                        <button type="button" class="btn btn-outline-secondary"><router-link to="/admin/products">後台產品列表</router-link></button>
                    </li>
                </ul>
                <span class="navbar-text">
                    <button type="button" class="btn btn-outline-secondary"><i class="bi bi-cart4"></i><router-link to="/cart">購物車</router-link></button>
                </span>
                </div>
            </div>
        </nav>
    <RouterView></RouterView>
    <div class="bg-dark py-5">
      <div class="container">
        <div class="d-flex align-items-center justify-content-between text-white mb-md-7 mb-4">
          <a class="text-white h4" href="./index.html">LOGO</a>
          <ul class="d-flex list-unstyled mb-0 h4">
            <li><a href="#" class="text-white mx-3"><i class="fab fa-facebook"></i></a></li>
            <li><a href="#" class="text-white mx-3"><i class="fab fa-instagram"></i></a></li>
            <li><a href="#" class="text-white ms-3"><i class="fab fa-line"></i></a></li>
          </ul>
        </div>
        <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-end align-items-start text-white">
          <div class="mb-md-0 mb-1">
            <p class="mb-0">02-3456-7890</p>
            <p class="mb-0">service@mail.com</p>
          </div>
          <p class="mb-0">© 2020 LOGO All Rights Reserved.</p>
        </div>
      </div>
    </div>
    </div>

</template>
