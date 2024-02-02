<template>
  <div class="error">
    <img class="error_img" src="@/assets/images/warning.png" alt="Erreur 404" />
    <h1>404</h1>
  </div>
</template>

<style scoped>
.error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.error_img {
  padding-top: 15px;
  height: 300px;
}
h1 {
  font-size: 50px;
}
</style>
