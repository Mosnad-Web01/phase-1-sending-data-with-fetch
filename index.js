function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Ensure this is set correctly
      Accept: "application/json", // Add this if needed
    },
    body: JSON.stringify({ name, email }),
  })
    .then((response) => response.json())
    .then((data) => {
      document.body.append(`New ID: ${data.id}`);
    })
    .catch((error) => {
      document.body.append(`Error: ${error.message}`);
    });
}
