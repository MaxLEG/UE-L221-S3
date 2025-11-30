$(document).ready(function ($) {
  $(".js-main-nav-button").on("click tap", function () {
    $("#main-nav").toggleClass("is-open");
  });

  $(".js-gallery").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });
});

// script pour la semaine 3
document.addEventListener("DOMContentLoaded", () => {
  // sible le conteneur pour video
  const container = document.getElementById("video-interface-container");
  if (!container) return; // si conteneur pas trouvé - script s'arret
  // creation des elements - bouton1, bouton 2, video
  // boutonn 1
  const btnOne = document.createElement("button");
  btnOne.textContent = "Regardez la vidéo de promotion";
  btnOne.classList.add("button-js-element", "btn-show");
  // vidéo
  const videoContainer = document.createElement("div");
  videoContainer.classList.add("video-js-element");
  // bouton 2 - masqué
  const btnTwo = document.createElement("button");
  btnTwo.textContent = "Masquer la vidéo";
  btnTwo.classList.add("button-js-element", "btn-hide");

  // injection des elements dans le conteneur
  container.appendChild(btnOne);
  container.appendChild(videoContainer);
  container.appendChild(btnTwo);

  // fonction de basculement
  const showVideo = () => {
    // injection de iframe de video YouTube
    videoContainer.innerHTML = `
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/2wz_DS5lZGI?si=q2sEwCXKAdfgUAPp"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>;
    `;
    // transition CSS
    btnOne.style.display = "none";
    videoContainer.classList.add("is-visible");
    btnTwo.classList.add("is-visible");
    btnTwo.style.display = "block";
  };

  const hideVideo = () => {
    // manipulation pour trasition CSS
    videoContainer.classList.remove("is-visible");
    btnTwo.classList.remove("is-visible");
    btnTwo.style.display = "none";
    btnOne.style.display = "block";
    // arrete la lecture de video pour qu'il ne continue en arriere-plan
    videoContainer.innerHTML = "";
  };

  // ecouteurs d'evenements
  btnOne.addEventListener("click", showVideo);
  btnTwo.addEventListener("click", hideVideo);

  // initialisation de l'etat cahché
  btnTwo.style.display = "none";
});
