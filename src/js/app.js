import LoadingStyling from "../components/LoadingStyling/LoadingStyling";

const registerServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register(
        "./service-worker.js",
      );

      console.log(
        `Регистрация serviceWorker прошла успешно - ${registration.scope}`,
      );
    } catch (error) {
      console.error(`Ошибка регистрации serviceWorker - ${error}`);
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const app = document.querySelector("#app");

  registerServiceWorker();

  const loadingStyling = new LoadingStyling(app);
  loadingStyling.init();
});
