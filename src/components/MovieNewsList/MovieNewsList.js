import MovieNews from "../MovieNews/MovieNews";
import Ul from "../ui/Ul/Ul";

export default class MovieNewsList {
  constructor(elParent, params) {
    this.elParent = elParent;
    this.params = params;
  }

  bindToDOM() {
    this.movieNewsList = new Ul({ class: "movie-news-list" }).element;

    this.params.data.forEach((movieNews) => {
      this.movieNews = new MovieNews(this.movieNewsList, { data: movieNews });
      this.movieNews.bindToDOM();
    });

    this.elParent.appendChild(this.movieNewsList);
  }

  loadingMovieNewsList() {
    let listLoading = [];
    this.movieNewsListLoading = new Ul({
      class: ["movie-news-list", "movie-news-list_loading"],
    }).element;

    if (typeof this.params.data === "number") {
      for (let i = 0; i < this.params.data; i++) {
        listLoading.push(i);
      }

      listLoading.forEach((movieNews) => {
        this.movieNews = new MovieNews(this.movieNewsListLoading, {
          data: movieNews,
        });
        this.movieNews.loadingMovieNews();
      });

      this.elParent.appendChild(this.movieNewsListLoading);
    }
  }
}
