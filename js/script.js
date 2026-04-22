function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  //pegar a tag da imag
  const img = document.querySelector("#profile img");

  //substituir a image
  if (html.classList.contains("light")) {
    //se tiver ligth mode,adicionar a imagem ligth
    img.setAttribute("src", "./assets/avatar-light.png");
  } else {
    //se nao tiver light mode,adicionar a imagem dark
    img.setAttribute("src", "./assets/avatar.png");
  }
}
