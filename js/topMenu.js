//서브 공통
const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);

let $links = getAll('a[href="#"]');
$links.forEach((link, idx) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

const customerheaderHover = () => {
  let $gnbli = getAll("#customerheader .nav .gnb > li");
  let $menuBar = get("#customerheader .menuIcon");
  let $customerheader = get("#customerheader");
  //let $header = get('#header .inner');

  $gnbli.forEach((liItem, idx) => {
    liItem.addEventListener("mouseenter", (e) => {
      $customerheader.classList.add("on");
    });
  });
  $customerheader.addEventListener("mouseleave", (e) => {
    $customerheader.classList.remove("on");
  });
};

const familySite = () => {
  let $family = get("#footer .family .title");
  let $sites = get("#footer .family .sites");
  $family.addEventListener("click", (e) => {
    e.preventDefault();
    $sites.classList.toggle("on");
  });
};

const subInit = () => {
  const getPage = (page, tag) => {
    fetch(page)
      .then((res) => res.text())
      .then((res) => {
        if (tag === "#customerheader") {
          get(tag).innerHTML = res;
          customerheaderHover();
        }
        if (tag === "#footer") {
          get(tag).innerHTML = res;
          familySite();
        }
      });
  };

  getPage("page/footer.html", "#footer");
  getPage("page/customerHeader.html", "#customerheader");
};

(() => {
  subInit();
})();
