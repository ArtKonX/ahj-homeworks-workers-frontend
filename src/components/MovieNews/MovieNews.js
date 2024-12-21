import Div from "../ui/Div/Div";
import Heading from "../ui/Heading/Heading";
import Img from "../ui/Img/Img";
import Li from "../ui/Li/Li";
import Paragraph from "../ui/Paragraph/Paragraph";
import Span from "../ui/Span/Span";

export default class MovieNews {
  constructor(elParent, params) {
    this.elParent = elParent;
    this.params = params;
  }

  bindToDOM() {
    this.movieNewsEl = new Li({ class: "movie-news-el" }).element;
    this.titleMovieNews = new Heading({
      class: "title-movie-news",
      text: this.params.data.title,
      level: 2,
    }).element;
    this.imgTextMovieNews = new Div({ class: "img-text-movie-news" }).element;
    this.imgMovieNews = new Img({
      class: "img-movie-news",
      src: this.params.data.imgSrc,
    }).element;
    this.textMovieNewsContainer = new Div({
      class: "text-movie-news-conatiner",
    }).element;
    this.textMovieNews = new Paragraph({
      class: "text-movie-news",
      text: this.params.data.text,
    }).element;

    this.textMovieNewsContainer.appendChild(this.textMovieNews);
    this.imgTextMovieNews.append(
      this.imgMovieNews,
      this.textMovieNewsContainer,
    );
    this.movieNewsEl.append(this.titleMovieNews, this.imgTextMovieNews);
    this.elParent.appendChild(this.movieNewsEl);
  }

  loadingMovieNews() {
    this.movieNewsElLoading = new Li({
      class: ["movie-news-el", "movie-news-el_loading"],
    }).element;
    this.titleMovieNewsLoading = new Span({
      class: ["title-movie-news", "title-movie-news_loading"],
    }).element;
    this.imgTextMovieNewsLoading = new Div({
      class: "img-text-movie-news",
    }).element;
    this.imgMovieNewsLoading = new Span({
      class: ["img-movie-news", "img-movie-news_loading"],
    }).element;
    this.textMovieNewsLoadingContainer = new Div({
      class: "text-movie-news-conatiner",
    }).element;
    this.textMovieNewsLoadingFirst = new Span({
      class: ["text-movie-news", "text-movie-news_loading"],
    }).element;
    this.textMovieNewsLoadingSecond = new Span({
      class: ["text-movie-news", "text-movie-news_loading"],
    }).element;

    this.textMovieNewsLoadingContainer.append(
      this.textMovieNewsLoadingFirst,
      this.textMovieNewsLoadingSecond,
    );
    this.imgTextMovieNewsLoading.append(
      this.imgMovieNewsLoading,
      this.textMovieNewsLoadingContainer,
    );
    this.movieNewsElLoading.append(
      this.titleMovieNewsLoading,
      this.imgTextMovieNewsLoading,
    );
    this.elParent.appendChild(this.movieNewsElLoading);
  }
}
