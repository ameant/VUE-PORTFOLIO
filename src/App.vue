<template>
  <div>
    <!-- En tête -->
    <header>
      <!-- Router pour revenir à la page d'accueil lors du clic sur le logo -->
      <RouterLink to="/" @click="scrollToTop" class="scroll_top">
        <img class="logo" src="./assets/images/aa.png" alt="Logo AA" />
      </RouterLink>

      <nav class="nav">
        <!-- Lien Présentation -->
        <a
          :class="{ active: activeNavLink === 'presentation' }"
          @click="activeLink('presentation')"
          class="nav_links"
          href="#presentation_container"
          >Présentation
        </a>
        <!-- Lien Créations -->
        <a
          :class="{ active: activeNavLink === 'creations' }"
          @click="activeLink('creations')"
          class="nav_links"
          href="#projects_container"
          >Créations
        </a>
        <!-- Lien Contact -->
        <a
          :class="{ active: activeNavLink === 'contact' }"
          @click="activeLink('contact')"
          class="nav_links"
          href="#form_container"
          >Contact
        </a>
      </nav>
    </header>

    <RouterView />

    <!-- Pied de page -->
    <footer>
      <div class="footer_links">
        <!-- Lien GitHub -->
        <a href="https://github.com/" target="_blank">
          <img
            class="footer_img"
            src="./assets/images/github.png"
            alt="Logo de GitHub"
          />
        </a>

        <!-- Lien LinkedIn -->
        <a href="https://fr.linkedin.com/" target="_blank">
          <img
            class="footer_img"
            src="./assets/images/linkedin.png"
            alt="Logo de LinkedIn"
          />
        </a>

        <!-- Lien Instagram -->
        <a href="https://www.instagram.com/" target="_blank">
          <img
            class="footer_img"
            src="./assets/images/instagram.png"
            alt="Logo d'Instagram"
          />
        </a>
      </div>

      <!-- Dernière mise à jour -->
      <p class="footer_p">
        Dernière mise à jour le
        <time datetime="2024-02-02">02 février 2024</time>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNavLink: null,
    };
  },
  methods: {
    // Revenir en haut de la page d'accueil lors du clic sur le logo
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    // Définir le lien du menu actif au clic
    activeLink(link) {
      this.activeNavLink = link;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inconsolata&display=swap");

#app {
  width: 100%;
  margin: auto;
  background-color: white;
  flex-wrap: wrap;
  font-family: "Inconsolata", monospace;
}

/* En tête */
header {
  background-color: rgba(197, 140, 197, 0.562);
  height: 120px;
  width: 100%;
  text-align: center;
}
.logo {
  height: 30px;
  border: 2px dashed black;
  border-radius: 50px;
  padding: 3px 3px;
  margin: 6px;
  position: fixed;
  display: flex;
  justify-content: left;
}
.nav {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  font-size: 20px;
  padding-top: 50px;
}
.nav_links {
  text-decoration: none;
  color: black;
  margin-top: 5px;
}
/* Souligner le lien du menu actif */
.nav_links.active {
  text-decoration: underline;
}

/* Pied de page */
footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: rgba(197, 140, 197, 0.562);
  height: 120px;
}
.footer_links {
  display: flex;
  gap: 15px;
}
.footer_img {
  width: 30px;
  height: 30px;
  margin-top: 10px;
}
</style>
