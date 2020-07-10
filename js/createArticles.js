const articles = [
  {
    title: "The startup waging war against cows farts",
    date: "1 June 2020",
    img: "assets/img/articles/article-brilliant-minds.png",
    tag: "company-news",
    publisher: "Sifted",
    url: "https://sifted.eu/articles/volta-greentech-cows/",
  },
  {
    title:
      "Swedish start-up tackling methane emissions in cattle attracts investors",
    date: "2 June 2020",
    img: "assets/img/articles/feedNavigator.png",
    tag: "company-news",
    publisher: "Feed Navigator",
    url:
      "https://www.feednavigator.com/ARTICLE/2020/06/02/METHANE-REDUCING-SWEDISH-START-UP-ATTRACTS-INVESTORS",
  },
  {
    title: "Här odlas alger som får kor att släppa ut mindre metan",
    date: "8 December 2019",
    img: "assets/img/articles/dn.png",
    tag: "company-news",
    publisher: "Dagens Nyheter",
    url:
      "https://www.dn.se/sthlm/har-odlas-alger-som-far-kor-att-fisa-mindre-metan//",
  },

  {
    title: "The answer to livestock that burp methane may be seaweed",
    date: "31 October 2019",
    img: "assets/img/articles/economist.png",
    tag: "industry-insight",
    publisher: "The Economist",
    url:
      "https://www.economist.com/science-and-technology/2019/10/31/the-answer-to-livestock-that-burp-methane-may-be-seaweed",
  },

  {
    title:
      "Northvolt-grundaren satsar på innovationen som ska få kossor att prutta och rapa mindre",
    date: "7 August 2019",
    img: "assets/img/articles/article-va-aug.png",
    tag: "company-news",
    publisher: "Veckans Affärer",
    url:
      "https://www.va.se/nyheter/2019/08/06/northvolt-grundaren-satsar-pa-innovationen-som-ska-fa-kossorna-att-rapa-och-prutta-mindre/",
  },
  {
    title: "Vill göra kossor miljövänliga - tar in pengar från Northvolt-vd:n",
    date: "7 August 2019",
    img: "assets/img/articles/article-di.png",
    tag: "company-news",
    publisher: "Dagens Industri",
    url:
      "https://www.di.se/nyheter/vill-gora-kossor-miljovanliga-tar-in-pengar-fran-northvolt-vdn/",
  },
  {
    title: "Så ska man få kossor fisa och rapa mindre",
    date: "7 August 2019",
    img: "assets/img/articles/article-expressen.png",
    tag: "company-news",
    publisher: "Expressen",
    url:
      "https://www.expressen.se/dinapengar/sa-ska-man-fa-kossor-fisa-och-rapa-mindre/",
  },
  {
    title:
      "De ska minska kornas utsläpp med sjögräs - backas av Northvolt grundaren",
    date: "7 August 2019",
    img: "assets/img/articles/article-breakit.png",
    tag: "company-news",
    publisher: "Breakit",
    url:
      "https://www.breakit.se/artikel/21221/de-ska-minska-kornas-utslapp-med-sjogras-backas-av-northvolt-grundaren",
  },

  {
    title: "Entreprenör vill göra kor klimatsmarta med alger",
    date: "20 Mars 2019",
    img: "assets/img/articles/article.png",
    tag: "company-news",
    publisher: "Lantbrukets Affärstidning",
    url:
      "https://www.atl.nu/lantbruk/entreprenor-vill-gora-kor-klimatsmarta-med-alger/",
  },

  {
    title: "Volta Greentech ska minska metanutsläpp från kor",
    date: "1 April 2019",
    img: "assets/img/articles/article-va.png",
    tag: "company-news",
    publisher: "Veckans Affärer",
    url:
      "https://www.va.se/nyheter/2019/04/01/volta-greentech-ska-minska-metanutslapp-fran-kor/",
  },
  {
    title: "Can seaweed cut methane emissions on dairy farms?",
    date: "24 May 2018",
    img: "assets/img/articles/industry-insights-4.png",
    tag: "industry-insight",
    publisher: "UC Davis",
    url:
      "https://www.ucdavis.edu/news/can-seaweed-cut-methane-emissions-dairy-farms/",
  },
  {
    title: "How eating seaweed can help cows to belch less methane",
    img: "assets/img/articles/industry-insights-3.png",
    tag: "industry-insight",
    publisher: "YaleEnvironment360",
    date: "2 July 2018",
    url:
      "https://e360.yale.edu/features/how-eating-seaweed-can-help-cows-to-belch-less-methane",
  },
  {
    title:
      "Seaweed could make cows burp less methane and cut their carbon hoofprint",
    date: "23 November 2018",
    img: "assets/img/articles/industry-insights-1.png",
    tag: "industry-insight",
    publisher: "MIT Technology Review",
    url:
      "https://www.technologyreview.com/s/612452/how-seaweed-could-shrink-livestocks-global-carbon-hoofprint/?fbclid=IwAR0wmvtkcK3egKf_Hcy5SUdhwsXfrq7WAPXlNFxNByvA3AYiqgVIQjDembg",
  },

  {
    title: "Volta presentated by Fredrik Åkerman at Brilliant Minds",
    date: "4 July 2019",
    img: "assets/img/articles/article-fredrik-video.png",
    tag: "company-news",
    publisher: "Youtube",
    url: "https://www.youtube.com/watch?v=77KozPbACI0",
  },

  {
    title: "This factory is growing a new kind of food for cows",
    date: "1 June 2020",
    img: "assets/img/articles/article-expressen.png",
    tag: "company-news",
    publisher: "Fast Company",
    url:
      "https://www.fastcompany.com/90510673/this-factory-is-growing-a-new-kind-of-food-for-cows-a-seaweed-that-reduces-their-burps",
  },
  {
    title: "Volta Greentech at Brilliant Minds 2019",
    date: "28 June 2019",
    img: "assets/img/articles/article-brilliant-minds.png",
    tag: "company-news",
    publisher: "Blog",
    url:
      "https://www.linkedin.com/pulse/volta-greentech-brilliant-minds-2019-fredrik-%C3%A5kerman/",
  },
  {
    title:
      "10 technologies that could combat climate change as food demand soars",
    date: "18 July 2019",
    img: "assets/img/articles/industry-insights-5.png",
    tag: "industry-insight",
    publisher: "MIT Technology Review",
    url:
      "https://www.technologyreview.com/s/613979/gene-editing-will-help-far-more-than-organic-food-to-slow-global-warming/amp/?__twitter_impression=true&fbclid=IwAR1v2jIE9C5wKqnKEb1Upk4F9QdL0bTFsCR-q4snVR_0KML02Yf2G8Ws_pw",
  },
  {
    title: "Have you met Volta Greentech?",
    date: "15 April 2019",
    img: "assets/img/articles/article-sweden-foodtech.png",
    tag: "company-news",
    publisher: "Sweden Foodtech",
    url:
      "https://www.foodtech.media/2019/04/15/HgfIeZ-have-you-met-volta-greentech",
  },

  {
    title: "5 intryck från Brilliant Minds 2019",
    date: "18 June 2019",
    img: "assets/img/articles/article-resume.png",
    tag: "company-news",
    publisher: "Resume",
    url:
      "https://www.resume.se/blogg/karin-winther/2019/06/18/5-intryck-fran-brilliant-minds/",
  },

  {
    title: "Cows fed seaweed in bid to tackle climate change",
    date: "31 August 2018",
    img: "assets/img/articles/industry-insights-2.png",
    tag: "industry-insight",
    publisher: "Independent",
    url:
      "https://www.independent.co.uk/environment/cows-seaweed-food-climate-change-global-warming-methane-emissions-university-california-a8516361.html",
  },
];

console.log(articles);

var container = document.getElementById("news-container");

function createArticle(article) {
  let prettyTag;
  switch (article.tag) {
    case "company-news":
      prettyTag = "Company News";
      break;
    case "industry-insight":
      prettyTag = "Industry Insight";
      break;
    case "blog-posts":
      prettyTag = "Blog Posts";
      break;
    default:
      prettyTag = "Company News";
      break;
  }
  const newsArticle = document.createElement("div");
  newsArticle.className = `${article.tag} col-sm-12 col-md-6 col-lg-4`;
  container.appendChild(newsArticle);

  const card = document.createElement("div");
  card.className = "card";
  newsArticle.appendChild(card);

  const img = document.createElement("img");
  img.className = "card-img-top";
  img.src = article.img;
  card.appendChild(img);

  const cardBlock = document.createElement("div");
  cardBlock.className = "card-block";
  card.appendChild(cardBlock);

  const articleType = document.createElement("div");
  articleType.className = "article-type";
  articleType.innerText = prettyTag;
  cardBlock.appendChild(articleType);

  const cardTitle = document.createElement("h4");
  cardTitle.className = "card-title press-card-title";
  cardTitle.innerText = article.title;
  cardBlock.appendChild(cardTitle);

  const source = document.createElement("div");
  source.className = "source";
  source.innerHTML = `${article.publisher}, ${article.date}`;
  cardBlock.appendChild(source);

  const link = document.createElement("a");
  link.className = "btn btn-border article";
  link.target = "_blank";
  link.href = article.url;
  link.innerHTML = "→";
  cardBlock.appendChild(link);
}

function createArticles() {
  for (let index = 0; index < articles.length; index++) {
    createArticle(articles[index]);
  }
}
createArticles();
