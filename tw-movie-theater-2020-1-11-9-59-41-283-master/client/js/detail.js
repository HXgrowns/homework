window.onload = () => {
  senderLayout();
}

const senderLayout = () => {
  let loveMovies = document.getElementById("love-movies-links");
  for (let i = 0; i < 10; i++) {
    let movieItem = `
    <div class="movie-item">
      <img class="movie-img" src="${movies[i].image}"/>
      <div class="movie-info">
        <span class="movie-name">${movies[i].title}</span>
        <span class="movie-rating">${movies[i].rating}</span>
      </div>
    </div>
    `;
    loveMovies.innerHTML = loveMovies.innerHTML + movieItem;
  }
}