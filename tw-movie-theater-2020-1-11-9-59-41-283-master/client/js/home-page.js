window.onload = () => {
  senderLayout("movies-classfy-cartoon", "动画");
  senderLayout("movies-classfy-science", "科幻");
  senderLayout("movies-classfy-history", "喜剧");
  senderLayout("movies-classfy-war", "战争");
  senderLayout("movies-classfy-story", "剧情");
}
const senderLayout = (id, genre) => {
  let moviesLinkHot = document.getElementById(id);

  movies.forEach((value) => {
    if (value.genres.indexOf(genre) > -1) {
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
      moviesLinkHot.innerHTML = moviesLinkHot.innerHTML + movieItem;
    }
  });
}