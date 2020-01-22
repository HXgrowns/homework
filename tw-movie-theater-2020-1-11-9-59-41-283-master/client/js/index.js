window.onload = () => {
  drawLayout();
};

const drawLayout = () => {
  let moviesLink = document.getElementById("movies-links");
  movies.forEach((value) => {
    let movieItem = `
    <a href="${value.alt}">    
      <div class="movie-item">
        <img class="movie-img" src="${value.image}"/>
        <div class="movie-info">
          <span class="movie-name">${value.title}</span>
          <span class="movie-rating">${value.rating}</span>
        </div>
      </div>
    </a>
    `;
    moviesLink.innerHTML = moviesLink.innerHTML + movieItem;
  });
}

const searchMovie = () => {
  let searchInput = document.getElementById("search-input").value.trim();
  for (let i = 0; i < movies.length; i++) {
    let reg = RegExp(searchInput);
    if (movies[i].title.match(reg)) {
      window.open(movies[i].alt);
      return;
    }
  }
  window.open("vain.html");
  return;
}