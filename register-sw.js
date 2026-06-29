// register-sw.js

if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    try {
      const registration = await navigator.serviceWorker.register("/service-worker.js");
      console.log("Service Worker registered successfully:", registration);

      // Optional: check updates automatically
      registration.onupdatefound = () => {
        const newWorker = registration.installing;

        newWorker.onstatechange = () => {
          if (newWorker.state === "installed") {
            if (navigator.serviceWorker.controller) {
              console.log("New version available, refresh to update.");
            } else {
              console.log("Content is cached for offline use.");
            }
          }
        };
      };
    } catch (error) {
      console.error("Service Worker registration failed:", error);
    }
  });
}
