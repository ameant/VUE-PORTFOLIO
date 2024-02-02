<template>
  <section class="main_container" id="main_container">
    <!-- Section Présentation -->
    <div class="presentation_container" id="presentation_container">
      <h3>Amelyne Antunes</h3>
      <p>Actuellement en formation pour devenir développeuse web full-stack</p>
    </div>

    <!-- Section Créations -->
    <section class="projects_container" id="projects_container">
      <!-- Premier projet -->
      <div class="project">
        <div @click="openModale('Project One')" class="btn">
          <h4>Projet 1 : Curriculum Vitae</h4>
          <img
            class="project_image"
            src="../assets/images/cv.jpg"
            alt="Projet de CV"
          />
        </div>
      </div>

      <!-- Deuxième projet -->
      <div class="project">
        <div @click="openModale('Project Two')" class="btn">
          <h4>Projet 2 : Cahier des charges</h4>
          <img
            class="project_image"
            src="../assets/images/cdc.jpg"
            alt="Projet de Cahier des charges"
          />
        </div>
      </div>

      <!-- Troisième projet -->
      <div class="project">
        <div @click="openModale('Project Three')" class="btn">
          <h4>Projet 3 : Espace commentaire</h4>
          <img
            class="project_image"
            src="../assets/images/ec.png"
            alt="Projet d'Espace commentaire"
          />
        </div>
      </div>
    </section>

    <!-- Section Contact -->
    <div class="form_container" id="form_container">
      <form action="#" method="post" @submit.prevent="submitForm">
        <div class="names">
          <label>Prénom et Nom</label>
          <input v-model="names" name="names" type="text" required />
        </div>

        <div class="object">
          <label>Objet</label>
          <input v-model="object" name="objet" type="text" required />
        </div>

        <div class="msg">
          <label>Message</label>
          <textarea v-model="msg" name="msg" rows="5" required></textarea>
          <input type="submit" value="Envoyer" />
        </div>

        <div id="successMsg">
          <p v-if="successMsg">{{ successMsg }} {{ email }}</p>
        </div>
      </form>
    </div>

    <!-- Rubrique de la modale -->
    <modale
      :revele="reveleModale"
      :toggleModale="toggleModale"
      :projectTitle="currentProjectTitle"
      :projectLink="currentProjectLink"
      :projectDescription="currentProjectDescription"
    ></modale>
  </section>
</template>

<script>
import Modale from "./Modale.vue";

export default {
  name: "Contenu",
  data() {
    return {
      reveleModale: false,
      currentProjectTitle: "",
      currentProjectLink: "",
      currentProjectDescription: "",
      names: "",
      object: "",
      msg: "",
      successMsg: "",
      email: import.meta.env.VITE_EMAIL,
    };
  },

  components: {
    Modale,
  },

  watch: {
    successMsg(newMsg) {
      if (newMsg) {
        // Supprimer les input et le textarea lorsque le message de succès apparaît
        this.names = "";
        this.object = "";
        this.msg = "";
      }
    },
  },

  methods: {
    toggleModale() {
      this.reveleModale = !this.reveleModale;
    },
    openModale(project) {
      // Modale pour le Projet 1
      if (project === "Project One") {
        this.currentProjectTitle = "CV d'Amelyne Antunes";
        this.currentProjectLink = "https://github.com/ameant/CV";
        this.currentProjectDescription =
          "Créé le 15/12/2023 en utilisant HTML 5, CSS 3, Git et GitHub";
      }

      // Modale pour le Projet 2
      else if (project === "Project Two") {
        this.currentProjectTitle = "Cahier des charges";
        this.currentProjectLink =
          "https://drive.google.com/file/d/1vxv5fPzSemQO65dHvV4KMM2RDGx83ATY/view?usp=sharing";
        this.currentProjectDescription = "Créé le 22/12/2023";
      }

      // Modale pour le Projet 3
      else if (project === "Project Three") {
        this.currentProjectTitle = "Dynamiser un espace commentaire";
        this.currentProjectLink =
          "https://github.com/ameant/Espace-commentaire";
        this.currentProjectDescription =
          "Créé le 13/01/2024 en utilisant HTML 5, CSS 3, Javascript, Git et GitHub";
      }

      this.reveleModale = true;
    },

    // Afficher le message d'envoi
    submitForm() {
      this.successMsg = "Votre message a bien été envoyé à";
    },
  },
};
</script>

<style scoped>
.main_container {
  flex-direction: column;
}

/* Présentation */
.presentation_container {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 20px;
}

/* Projets */
.projects_container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-bottom: 20px;
}
.project {
  text-align: center;
}
h4:hover {
  text-decoration: underline;
}
.project_image {
  border: 1px solid black;
  border-radius: 25px;
}
.project_image:hover {
  box-shadow: 5px 5px 3px rgba(0, 0, 0, 0.3);
}
.btn {
  text-decoration: none;
  cursor: pointer;
}

/* Formulaire */
.form_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 40px 0;
}
label {
  display: block;
  margin-bottom: 5px;
  font-size: 16px;
}
input,
textarea {
  width: 80%;
  box-sizing: border-box;
  font-family: inherit;
  font-size: 16px;
}
</style>
