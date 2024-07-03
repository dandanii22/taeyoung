//전체 공통
const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);

let $links = getAll('a[href="#"]');
$links.forEach((link, idx) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
    });
});

const headerHover = () => {
    let $gnbli = getAll('#header .nav .gnb > li ');
    let $menuBar = get('#header .menuIcon');
    let $header = get('#header');
    //let $header = get('#header .inner');

    $gnbli.forEach((liItem, idx) => {
        liItem.addEventListener('mouseenter', (e) => {
            $header.classList.add('on');
        });
    });
    $header.addEventListener('mouseleave', (e) => {
        $header.classList.remove('on');
    });
    $menuBar.addEventListener('mouseenter', (e) => {
        $header.classList.add('on');
    });
    $menuBar.addEventListener('mouseleave', (e) => {
        $header.classList.remove('on');
    });
};
const headerScroll = () => {
    let $header = get('#header');

    document.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        console.log(scrollY);
        if (window.scrollY > 795) {
            $header.classList.add('active');
        } else {
            $header.classList.remove('active');
        }
    });
};
const news = () => {
    const $newsImg = get('.newsImg a img');
    $newsImg.addEventListener('click', (e) => {
        let $ty = get('.news').offsetTop - 100;
        window.scrollTo({ top: $ty, behavior: 'smooth' });
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
const footerTop = () => {
    let $maintop = get('.topbtn');
    let ty = 0;

    $maintop.addEventListener('click', (e) => {
        ty = 0;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
};

//header / footer 호출 후 함수 실행
const comInit = () => {
    const getPage = (page, tag) => {
        fetch(page)
            .then((res) => res.text())
            .then((res) => {
                if (tag === '#header') {
                    get(tag).innerHTML = res;
                    headerHover();
                    headerScroll();
                    news();
                }

                if (tag === '#footer') {
                    get(tag).innerHTML = res;
                    familySite();
                    footerTop();
                }
            });
    };

    getPage('page/header.html', '#header');
    getPage('page/footer.html', '#footer');
};

(() => {
    comInit();
})();
