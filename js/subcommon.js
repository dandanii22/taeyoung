//서브 공통
const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);

let $links = getAll('a[href="#"]');
$links.forEach((link, idx) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
    });
});

const subheaderHover = () => {
    let $gnbli = getAll('#subheader .nav .gnb > li');
    let $menuBar = get('#subheader .menuIcon');
    let $subheader = get('#subheader');
    //let $header = get('#header .inner');

    $gnbli.forEach((liItem, idx) => {
        liItem.addEventListener('mouseenter', (e) => {
            $subheader.classList.add('on');
        });
    });
    $subheader.addEventListener('mouseleave', (e) => {
        $subheader.classList.remove('on');
    });
};

const familySite = () => {
    let $family = get('#footer .family .title');
    let $sites = get('#footer .family .sites');
    $family.addEventListener('click', (e) => {
        e.preventDefault();
        $sites.classList.toggle('on');
    });
};
const topCilck = () => {
    let $maintop = get('.page .topbtn ');
    let ty = 0;

    $maintop.addEventListener('click', (e) => {
        ty = 0;
        window.scrollTo({ top: ty, behavior: 'smooth' });
    });
};

const subInit = () => {
    const getPage = (page, tag) => {
        fetch(page)
            .then((res) => res.text())
            .then((res) => {
                if (tag === '#subheader') {
                    get(tag).innerHTML = res;
                    subheaderHover();
                }
                if (tag === '#footer') {
                    get(tag).innerHTML = res;
                    familySite();
                    topCilck();
                }
            });
    };

    getPage('page/footer.html', '#footer');
    getPage('page/subheader.html', '#subheader');
};

(() => {
    subInit();
})();
