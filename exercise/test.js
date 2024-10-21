fetch 
function ambilDataUser(){
    Fecth("https://reqres.in/api/users")
    .then((response) => response.json())
    .then((json) => console.log(json));
};
  
function ambilDataUser() {
    fetch("https://reqres.in/api/users")
      .then(response => response.json())
      .then(data => {
        // Tampilkan hanya email dari setiap user
        data.data.forEach(user => {
          console.log(user.email);
        });
      })
      .catch(error => {
        console.error("Terjadi kesalahan:", error);
      });
  }
  
  ambilDataUser();

