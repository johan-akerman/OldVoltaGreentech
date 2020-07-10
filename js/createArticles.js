const articles = [
  ({
    title: "Title1",
    picture: "assets/img/articles/article.png",
    tag: "company-news"
  },
  {
    title: "Title2",
    picture: "assets/img/articles/article-fredrik-video.png",
    tag: "company-news"
  }),
];

function createArticle() {
    const container = document.createElement('div');
    container.className = `card ${}`
}


<div class="card company-news col-sm-12 col-md-6 col-lg-4">
  <img
    class="card-img-top"
    src="assets/img/articles/article-brilliant-minds.png"
  />
  <div class="card-block">
    <div class="article-type">
      Company news
    </div>
    <h4 class="card-title press-card-title">
      The startup waging war against cows farts
    </h4>
    <div class="source">
      Sifted, 1 June 2020
    </div>
    <a
      class="btn btn-border article"
      target="_blank"
      href="https://sifted.eu/articles/volta-greentech-cows/"
      >→
    </a>
  </div>