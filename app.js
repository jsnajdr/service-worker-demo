navigator.serviceWorker.register("/worker.js");

function doFetch() {
  fetch("/test").then(response => {
    console.log("Response:", response);
  }).catch(err => {
    console.error("Error while fetching:", err);
  });
}
