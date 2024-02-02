<template>
  <section class="bloc_modale" v-if="revele">
    <!-- Cache transparent en fond -->
    <div class="overlay" v-on:click="toggleModale"></div>

    <!-- Modale -->
    <div class="modale">
      <div v-on:click="toggleModale" class="btn_modale">X</div>
      <a :href="projectLink" target="_blank" class="m_link">
        {{ projectTitle }}
      </a>
      <p class="p_description">{{ projectDescription }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Modale",
  props: [
    "revele",
    "toggleModale",
    "projectTitle",
    "projectLink",
    "projectDescription",
  ],
};
</script>

<style scoped>
.bloc_modale {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

/* Cache trasparent en fond */
.overlay {
  background: rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.overlay:hover {
  cursor: pointer;
}

/* Modale */
.modale {
  background: whitesmoke;
  color: black;
  padding: 50px;
  position: fixed;
  top: 30%;
  height: 50px;
  width: 400px;
}

/* Bouton de la modale */
.btn_modale {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}
.btn_modale:hover {
  border: 2px solid rgba(114, 47, 114, 0.562);
  border-radius: 25px;
}

/* Lien de la modale */
.m_link {
  text-decoration: none;
  border: 1px solid rgba(114, 47, 114, 0.562);
  padding: 8px;
  border-radius: 25px;
}
.m_link:hover {
  border-width: 3px;
}
.m_link:visited {
  color: inherit;
}

/* Texte de la modale */
.p_description {
  padding-top: 10px;
}
</style>
