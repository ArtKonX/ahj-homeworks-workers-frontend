import Button from "../ui/Button/Button";
import Div from "../ui/Div/Div";
import Heading from "../ui/Heading/Heading";

import API_ROOT from "../../environment/environment";

import MovieNewsList from "../MovieNewsList/MovieNewsList";
import Paragraph from "../ui/Paragraph/Paragraph";

const url = `${API_ROOT}/movie-world-news`;

export default class LoadingStyling {
  constructor(elParent) {
    this.elParent = elParent;
  }

  init() {
    this.bindToDom();
    this.updateListNews();
  }

  bindToDom() {
    this.container = new Div({ class: "container" }).element;
    this.titleBtn = new Div({ class: "title-btn" }).element;
    this.title = new Heading({
      class: "title-news",
      text: "Новости мира кино",
      level: 1,
    }).element;
    this.updateNewsBtn = new Button({
      class: "update-news-btn",
      type: "button",
      text: "Обновить",
    }).element;

    this.titleBtn.append(this.title, this.updateNewsBtn);
    this.container.appendChild(this.titleBtn);
    this.elParent.appendChild(this.container);

    this.updateNewsBtn.addEventListener(
      "click",
      this.updateListNews.bind(this),
    );
  }

  async updateListNews() {
    this.updateNewsBtn.disabled = true;

    this.movieNewsList = new MovieNewsList(this.container, { data: 5 });

    const movieNewsList = this.elParent.querySelector(".movie-news-list");

    movieNewsList && movieNewsList.remove();

    this.movieNewsList.loadingMovieNewsList();

    const movieNewsListLoading = this.elParent.querySelector(
      ".movie-news-list_loading",
    );

    try {
      const response = await fetch(url, { method: "GET" });
      const data = await response.json();
      movieNewsListLoading.remove();
      this.movieNewsList = new MovieNewsList(this.container, {
        data: data.news,
      });
      this.movieNewsList.bindToDOM();
      this.updateNewsBtn.disabled = false;
    } catch (err) {
      console.error(err);
      this.updateNewsBtn.disabled = true;
      const newslist = document.querySelector(".movie-news-list");
      newslist.remove();
      this.container.classList.add("container_data-error");
      const textDataError = new Paragraph({
        class: "text-data-error",
        innerHTML:
          "Не удалось загрузить данные <br>Проверьте подключение <br>и обновите страницу",
      }).element;

      this.movieNewsList.loadingMovieNewsList();
      const containerError = new Div({ class: "container-text-error" }).element;
      containerError.appendChild(textDataError);
      this.elParent.appendChild(containerError);
    }
  }
}
