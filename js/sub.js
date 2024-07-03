import { bgImg, shape2_bImg } from '../data/sub2.js';
import arr from '../data/data.js';

const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);

let $more = getAll('.main .aboutCon .listBox li .about-wrap .txt .more');
let $moreLink = getAll('.main .aboutCon .listBox li .about-wrap .txt .more a');
let $subtab = getAll('.banner1 .sub-tab .tab li');
let $cons = getAll('.sub1 .con-box');

console.log($more);

$more.forEach((more, index) => {
    more.addEventListener('click', (e) => {
        $moreLink.forEach((item, idx) => {
            item.setAttribute('href', `sub1-${index + 1}.html`);
        });
    });
});

// 서브페이지 공통부분
const subVisual = () => {};

//페이지별 함수
//sub1
//sub2
//sub3
//sub4
//sub5

const sub1 = () => {
    let $cons = getAll('.sub1 .con-box');
    let $subtab = getAll('.banner1 .sub-tab .tab li');
    let $top = get('.sub1 .top');
    let $historyBg = get('.sub1 .con2 .history');
    let $historyYear = getAll('.sub1 .history .scroll-tab ul li');
    let $historyBox = getAll('.sub1 .hist-wrap');
    let $scrollTab = getAll('.sub1 .hist');
    let $images = getAll('.sub1 .con3 .vision img');
    let $paging = getAll('.sub1 .con5 .paging li');
    let $valueTxt = getAll('.sub1 .con5 .value-wrap .value-txt');
    let $circles = getAll('.sub1 .con5 .value-wrap .circle-wrap .item');

    $paging.forEach((paging, index) => {
        paging.addEventListener('click', (e) => {
            $paging.forEach((item, index) => {
                item.classList.remove('on');
            });
            e.currentTarget.classList.add('on');

            $valueTxt.forEach((txt, index) => {
                txt.classList.remove('on');
            });
            $valueTxt[index].classList.add('on');
        });
    });

    $historyYear.forEach((hisYear, index) => {
        hisYear.addEventListener('click', (e) => {
            $historyBg.style.backgroundImage = `url(images/sub1/con2_bg${index + 1}.png)`;
            $historyYear.forEach((item, index) => {
                item.classList.remove('on');
            });
            e.currentTarget.classList.add('on');

            $historyBox.forEach((hisBox, index) => {
                hisBox.classList.remove('on');
            });
            $historyBox[index].classList.add('on');
        });
    });

    window.addEventListener('scroll', (e) => {
        let mouseY = e.currentTarget.scrollY;
        if (mouseY >= 3000) {
            $images.forEach((images, index) => {
                images.style.transform = `translateY(0px)`;
                images.style.transition = `1.5s`;
            });
        }
        if (mouseY >= 4800) {
            $circles.forEach((item, index) => {
                item.classList.add('on');
            });
        }
    });

    $subtab.forEach((subtab, index) => {
        subtab.addEventListener('click', (e) => {
            function scrollTo(element, duration) {
                var e = document.documentElement;
                if (e.scrollTop === 0) {
                    var t = e.scrollTop;
                    ++e.scrollTop;
                    e = t + 1 === e.scrollTop-- ? e : document.body;
                }
                scrollToC(e, e.scrollTop, element, duration);
            }

            function scrollToC(element, from, to, duration) {
                if (duration < 0) return;
                if (typeof from === 'object') from = from.offsetTop;
                if (typeof to === 'object') to = to.offsetTop;

                scrollToX(element, from, to, 0, 1 / duration, 20, linearTween);
            }

            function scrollToX(element, x1, x2, t, v, step, operacion) {
                if (t < 0 || t > 1 || v <= 0) return;
                element.scrollTop = x1 - (x1 - x2) * operacion(t);
                t += v * step;

                setTimeout(function () {
                    scrollToX(element, x1, x2, t, v, step, operacion);
                }, step);
            }

            function linearTween(t) {
                return t;
            }

            scrollTo($cons[index].offsetTop + 1100, 1000);

            $subtab.forEach((item, index) => {
                item.classList.remove('on');
            });
            e.currentTarget.classList.add('on');
        });
    });

    $top.addEventListener('click', (e) => {
        ty = 0;
        window.scrollTo({ top: ty, behavior: 'smooth' });
        $subtab.forEach((item, index) => {
            item.classList.remove('on');
        });
        $subtab[0].classList.add('on');
    });

    window.addEventListener('scroll', (e) => {
        let mouseY = e.currentTarget.scrollY;
        if (mouseY <= 1900) {
            $subtab.forEach((subtab, index) => {
                subtab.classList.remove('on');
            });
            $subtab[0].classList.add('on');
        }
        if (mouseY >= 1000) {
            $top.classList.add('on');
        } else {
            $top.classList.remove('on');
        }
    });
};

const sub2_com = () => {
    let $bg = get('.sub2 .shape1 .con2 .bg');
    let $list = getAll('.sub2 .shape1 .con2 .bg .list > li');
    let $subtab = getAll('.sub-tab .tab li');
    let $content = getAll('.sub2 .business');

    $subtab.forEach((subtab, index) => {
        subtab.addEventListener('click', (e) => {
            $subtab.forEach((item, index) => {
                item.classList.remove('on');
            });
            e.currentTarget.classList.add('on');

            $content.forEach((content, idx) => {
                content.classList.remove('on');
            });
            $content[index].classList.add('on');
        });
    });
};
const sub2_1 = () => {
    let $bg = getAll('.sub2 .shape1 .con2 .bg');
    let $list = getAll('.sub2 .shape1 .con2 .bg .list > li');
    let $subtab = getAll('.banner2 .sub-tab .tab li');
    let $content = getAll('.sub2 .business');

    let $imgLists = getAll('.sub2 .shape2 .imgList ul li');
    let $bImgs = getAll('.sub2 .shape2 .bigImg img');

    let gallery = Array.from($imgLists);

    let $top = get('.topbtn');
    $top.addEventListener('click', (e) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    window.addEventListener('scroll', (e) => {
        let mouseY = e.currentTarget.scrollY;
        if (mouseY >= 1100) {
            $top.classList.add('on');
        } else {
            $top.classList.remove('on');
        }
    });

    function fn(n) {
        gallery.slice(4 * n - 4, 4 * n).forEach((item, index) => {
            item.addEventListener('click', (e) => {
                $bImgs[n - 1].setAttribute('src', shape2_bImg.slice(4 * n - 4, 4 * n)[index]);
            });
        });
    }

    for (let n = 1; n <= 6; n++) {
        fn(n);
    }

    $subtab.forEach((subtab, index) => {
        subtab.classList.remove('on');
    });
    $subtab[0].classList.add('on');

    $bg.forEach((item, index) => {
        item.style.backgroundImage = bgImg[3 * index - 3];
    });

    $subtab.forEach((subtab, index) => {
        subtab.addEventListener('click', (e) => {
            $subtab.forEach((item, index) => {
                item.classList.remove('on');
            });
            e.currentTarget.classList.add('on');
            $content.forEach((content, idx) => {
                content.classList.remove('on');
            });
            $content[index].classList.add('on');

            $bg.forEach((item, index) => {
                item.style.backgroundImage = bgImg[3 * index - 3];
            });
        });
    });

    $list.forEach((list, index) => {
        list.addEventListener('mouseenter', (e) => {
            $bg.forEach((item) => {
                item.style.backgroundImage = bgImg[index];
                item.style.transition = '0.5s';
            });
        });
    });

    $bg.forEach((item, index) => {
        item.style.backgroundImage = bgImg[3 * index - 3];
    });
};
const sub2_2 = () => {
    let $bg = getAll('.sub2 .shape1 .con2 .bg');
    let $list = getAll('.sub2 .shape1 .con2 .bg .list > li');
    let $subtab = getAll('.banner2 .sub-tab .tab li');
    let $content = getAll('.sub2 .business');

    let $imgLists = getAll('.sub2 .shape2 .imgList ul li');
    let $bImgs = getAll('.sub2 .shape2 .bigImg img');

    let gallery = Array.from($imgLists);

    let $top = get('.topbtn');
    $top.addEventListener('click', (e) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    window.addEventListener('scroll', (e) => {
        let mouseY = e.currentTarget.scrollY;
        if (mouseY >= 1100) {
            $top.classList.add('on');
        } else {
            $top.classList.remove('on');
        }
    });

    function fn(n) {
        gallery.slice(4 * n - 4, 4 * n).forEach((item, index) => {
            item.addEventListener('click', (e) => {
                $bImgs[n - 1].setAttribute('src', shape2_bImg.slice(4 * n - 4, 4 * n)[index]);
            });
        });
    }

    for (let n = 1; n <= 6; n++) {
        fn(n);
    }

    $subtab.forEach((subtab, index) => {
        subtab.classList.remove('on');
    });
    $subtab[1].classList.add('on');

    $bg.forEach((item, index) => {
        item.style.backgroundImage = bgImg[3 * index - 3];
    });

    $subtab.forEach((subtab, index) => {
        subtab.addEventListener('click', (e) => {
            $subtab.forEach((item, index) => {
                item.classList.remove('on');
            });
            e.currentTarget.classList.add('on');
            $content.forEach((content, idx) => {
                content.classList.remove('on');
            });
            $content[index].classList.add('on');

            $bg.forEach((item, index) => {
                item.style.backgroundImage = bgImg[3 * index - 3];
            });
        });
    });

    $list.forEach((list, index) => {
        list.addEventListener('mouseenter', (e) => {
            $bg.forEach((item) => {
                item.style.backgroundImage = bgImg[index];
                item.style.transition = '0.5s';
            });
        });
    });

    $bg.forEach((item, index) => {
        item.style.backgroundImage = bgImg[3 * index - 3];
    });
};
const sub2_3 = () => {
    let $bg = getAll('.sub2 .shape1 .con2 .bg');
    let $list = getAll('.sub2 .shape1 .con2 .bg .list > li');
    let $subtab = getAll('.banner2 .sub-tab .tab li');
    let $content = getAll('.sub2 .business');

    let $imgLists = getAll('.sub2 .shape2 .imgList ul li');
    let $bImgs = getAll('.sub2 .shape2 .bigImg img');

    let gallery = Array.from($imgLists);

    let $top = get('.topbtn');
    $top.addEventListener('click', (e) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    window.addEventListener('scroll', (e) => {
        let mouseY = e.currentTarget.scrollY;
        if (mouseY >= 1100) {
            $top.classList.add('on');
        } else {
            $top.classList.remove('on');
        }
    });

    function fn(n) {
        gallery.slice(4 * n - 4, 4 * n).forEach((item, index) => {
            item.addEventListener('click', (e) => {
                $bImgs[n - 1].setAttribute('src', shape2_bImg.slice(4 * n - 4, 4 * n)[index]);
            });
        });
    }

    for (let n = 1; n <= 6; n++) {
        fn(n);
    }

    $subtab.forEach((subtab, index) => {
        subtab.classList.remove('on');
    });
    $subtab[2].classList.add('on');

    $bg.forEach((item, index) => {
        item.style.backgroundImage = bgImg[3 * index - 3];
    });

    $subtab.forEach((subtab, index) => {
        subtab.addEventListener('click', (e) => {
            $subtab.forEach((item, index) => {
                item.classList.remove('on');
            });
            e.currentTarget.classList.add('on');
            $content.forEach((content, idx) => {
                content.classList.remove('on');
            });
            $content[index].classList.add('on');

            $bg.forEach((item, index) => {
                item.style.backgroundImage = bgImg[3 * index - 3];
            });
        });
    });

    $list.forEach((list, index) => {
        list.addEventListener('mouseenter', (e) => {
            $bg.forEach((item) => {
                item.style.backgroundImage = bgImg[index];
                item.style.transition = '0.5s';
            });
        });
    });

    $bg.forEach((item, index) => {
        item.style.backgroundImage = bgImg[3 * index - 3];
    });
};
const sub2_4 = () => {
    let $bg = getAll('.sub2 .shape1 .con2 .bg');
    let $list = getAll('.sub2 .shape1 .con2 .bg .list > li');
    let $subtab = getAll('.banner2 .sub-tab .tab li');
    let $content = getAll('.sub2 .business');

    let $imgLists = getAll('.sub2 .shape2 .imgList ul li');
    let $bImgs = getAll('.sub2 .shape2 .bigImg img');

    let gallery = Array.from($imgLists);

    let $top = get('.topbtn');
    $top.addEventListener('click', (e) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    window.addEventListener('scroll', (e) => {
        let mouseY = e.currentTarget.scrollY;
        if (mouseY >= 1100) {
            $top.classList.add('on');
        } else {
            $top.classList.remove('on');
        }
    });

    function fn(n) {
        gallery.slice(4 * n - 4, 4 * n).forEach((item, index) => {
            item.addEventListener('click', (e) => {
                $bImgs[n - 1].setAttribute('src', shape2_bImg.slice(4 * n - 4, 4 * n)[index]);
            });
        });
    }

    for (let n = 1; n <= 6; n++) {
        fn(n);
    }

    $subtab.forEach((subtab, index) => {
        subtab.classList.remove('on');
    });
    $subtab[3].classList.add('on');

    $bg.forEach((item, index) => {
        item.style.backgroundImage = bgImg[3 * index - 3];
    });

    $subtab.forEach((subtab, index) => {
        subtab.addEventListener('click', (e) => {
            $subtab.forEach((item, index) => {
                item.classList.remove('on');
            });
            e.currentTarget.classList.add('on');
            $content.forEach((content, idx) => {
                content.classList.remove('on');
            });
            $content[index].classList.add('on');

            $bg.forEach((item, index) => {
                item.style.backgroundImage = bgImg[3 * index - 3];
            });
        });
    });

    $list.forEach((list, index) => {
        list.addEventListener('mouseenter', (e) => {
            $bg.forEach((item) => {
                item.style.backgroundImage = bgImg[index];
                item.style.transition = '0.5s';
            });
        });
    });

    $bg.forEach((item, index) => {
        item.style.backgroundImage = bgImg[3 * index - 3];
    });
};
const sub2_5 = () => {
    let $bg = getAll('.sub2 .shape1 .con2 .bg');
    let $list = getAll('.sub2 .shape1 .con2 .bg .list > li');
    let $subtab = getAll('.banner2 .sub-tab .tab li');
    let $content = getAll('.sub2 .business');

    let $imgLists = getAll('.sub2 .shape2 .imgList ul li');
    let $bImgs = getAll('.sub2 .shape2 .bigImg img');

    let gallery = Array.from($imgLists);

    let $top = get('.topbtn');
    $top.addEventListener('click', (e) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    window.addEventListener('scroll', (e) => {
        let mouseY = e.currentTarget.scrollY;
        if (mouseY >= 1100) {
            $top.classList.add('on');
        } else {
            $top.classList.remove('on');
        }
    });

    function fn(n) {
        gallery.slice(4 * n - 4, 4 * n).forEach((item, index) => {
            item.addEventListener('click', (e) => {
                $bImgs[n - 1].setAttribute('src', shape2_bImg.slice(4 * n - 4, 4 * n)[index]);
            });
        });
    }

    for (let n = 1; n <= 6; n++) {
        fn(n);
    }

    $subtab.forEach((subtab, index) => {
        subtab.classList.remove('on');
    });
    $subtab[4].classList.add('on');

    $bg.forEach((item, index) => {
        item.style.backgroundImage = bgImg[3 * index - 3];
    });

    $subtab.forEach((subtab, index) => {
        subtab.addEventListener('click', (e) => {
            $subtab.forEach((item, index) => {
                item.classList.remove('on');
            });
            e.currentTarget.classList.add('on');
            $content.forEach((content, idx) => {
                content.classList.remove('on');
            });
            $content[index].classList.add('on');

            $bg.forEach((item, index) => {
                item.style.backgroundImage = bgImg[3 * index - 3];
            });
        });
    });

    $list.forEach((list, index) => {
        list.addEventListener('mouseenter', (e) => {
            $bg.forEach((item) => {
                item.style.backgroundImage = bgImg[index];
                item.style.transition = '0.5s';
            });
        });
    });

    $bg.forEach((item, index) => {
        item.style.backgroundImage = bgImg[3 * index - 3];
    });
};

const sub3_2 = () => {
    let $prev = get('.icon .prev');
    let $next = get('.icon .next');
    let $li = getAll('.con2-3 ul li');
    let $rollingTxt = getAll('.rollingTxt');
    let current = 0,
        old = 0,
        total = $li.length;

    function imgbanner() {
        $li[current].style.opacity = '1';
        $li[old].style.opacity = '0';
        $rollingTxt[current].style.opacity = '1';
        $rollingTxt[old].style.opacity = '0';
        $li[current].classList.add('on');
        $li[old].classList.remove('on');

        old = current;
    }

    $next.addEventListener('click', (e) => {
        current++;
        if (current > total - 1) {
            current = 0;
        }
        imgbanner();
    });
    $prev.addEventListener('click', (e) => {
        current--;
        if (current < 0) {
            current = total - 1;
        }
        imgbanner();
    });

    let $subtab = getAll('.sub3 .sub-tab .tab li ');

    $subtab.forEach((subtap, idx) => {
        subtap.addEventListener('click', (e) => {
            $subtab.forEach((item, idx) => {
                item.classList.remove('on');
            });
            e.currentTarget.classList.add('on');
        });
    });
};
const sub3_3 = () => {
    const $li = getAll('.con3Accordion li');
    const $desc = getAll('.con3Accordion .accoDesc');
    const $height = document.querySelector('.accoDesc').offsetHeight;
    console.log($height);
    //아코디언 개수만큼 반복문 돌리기
    for (let i = 0; i < $li.length; i++) {
        $li[i].addEventListener('click', (e) => {
            // li[i].classList.toggle('on');
            $desc[i].classList.toggle('on');
        });
    }
};
const sub3_4 = () => {
    let $prev = get('.icon .prev');
    let $next = get('.icon .next');
    let $li = getAll('.sub3-4 .con2 ul li');
    let $rollingTxt = getAll('.sub3rollingTxt');
    let current = 0,
        old = 0,
        total = $li.length;

    function imgbanner() {
        $li[current].style.opacity = '1';
        $li[old].style.opacity = '0';
        $rollingTxt[current].style.opacity = '1';
        $rollingTxt[old].style.opacity = '0';
        $li[current].classList.add('on');
        $li[old].classList.remove('on');

        old = current;
    }

    $next.addEventListener('click', (e) => {
        current++;
        if (current > total - 1) {
            current = 0;
        }
        imgbanner();
    });
    $prev.addEventListener('click', (e) => {
        current--;
        if (current < 0) {
            current = total - 1;
        }
        imgbanner();
    });
};
const sub4 = () => {
    let $bigArea = get('.bigImg');
    let $bigImg = get('.bigImg .imgArea img');
    let $bigName = get('.bigImg .bigTxt .name');
    let $bigTitle = get('.bigImg .bigTxt .title');
    let $bigTxt = get('.bigImg .bigTxt .txt1');
    let $bigDesc = get('.bigImg .bigTxt .desc');
    let $bigDate = get('.bigImg .bigTxt .date');
    let $li = getAll('.smallUl li');
    let $paging = getAll('.paging li');
    let cnt = 0;
    let timer = null,
        interval = 4000;
    let total = $li.length;

    timer = setInterval(make, interval);
    function make() {
        cnt++;
        if (cnt > total - 1) {
            cnt = 0;
        }
        $bigImg.setAttribute('src', arr[cnt].img);
        $bigName.textContent = arr[cnt].name;
        $bigTitle.textContent = arr[cnt].title;
        $bigTxt.textContent = arr[cnt].txt1;
        $bigDesc.textContent = arr[cnt].desc;
        $bigDate.textContent = arr[cnt].date;
        $bigArea.animate([{ opacity: 0 }, { opacity: 1 }], 400);

        $paging.forEach((item) => {
            item.classList.remove('on');
        });
        $paging[cnt].classList.add('on');
    }

    $li.forEach((item, idx) => {
        item.addEventListener('click', () => {
            window.open(arr[idx].window);
        });
    });

    $paging.forEach((item, idx) => {
        item.addEventListener('click', (e) => {
            $bigImg.setAttribute('src', arr[idx].img);
            $bigName.textContent = arr[idx].name;
            $bigTitle.textContent = arr[idx].title;
            $bigTxt.textContent = arr[idx].txt1;
            $bigDesc.textContent = arr[idx].desc;
            $bigDate.textContent = arr[idx].date;

            $paging.forEach((item2) => {
                item2.classList.remove('on');
            });
            e.target.classList.add('on');
        });
    });
    let $btn1 = get('.con3 .btn1');
    let $btn2 = get('.con3 .btn2');
    let $btn3 = get('.con3 .btn3');
    let $btn4 = get('.con3 .btn4');

    $btn1.addEventListener('click', (e) => {
        window.open('https://www.taeyoung.com/file//TY_Brochure.pdf');
    });
    $btn2.addEventListener('click', (e) => {
        window.open('https://www.taeyoung.com/en/file/TY_Brochure(Eng).pdf');
    });
    $btn3.addEventListener('click', (e) => {
        window.open(
            'https://www.taeyoung.com/file/%EA%B4%91%EB%AA%85%20%EC%9C%A0%ED%94%8C%EB%9E%98%EB%8B%9B.pdf'
        );
    });
    $btn4.addEventListener('click', (e) => {
        window.open(
            'https://www.taeyoung.com/file/%EA%B4%91%EB%AA%85%20%EC%9C%A0%ED%94%8C%EB%9E%98%EB%8B%9B.pdf'
        );
    });
    let $myVideo = get('.vid_box');
    let $span = getAll('.vid_box span');
    let $vid = get('.vid');
    let isPlay = false;
    $vid.muted = true; //음소거
    $myVideo.addEventListener('mouseenter', (e) => {
        if (!isPlay) {
            $span[0].classList.remove('on');
            $span[1].classList.add('on');
        } else {
            $span[1].classList.add('on');
            $span[0].classList.remove('on');
        }
    });
    $span[0].addEventListener('click', (e) => {
        $vid.play();
        $span[0].classList.remove('on');
        $span[1].classList.add('on');
        isPlay = true;
    });
    $span[1].addEventListener('click', (e) => {
        $vid.pause();
        $span[0].classList.add('on');
        $span[1].classList.remove('on');
        isPlay = false;
    });
    $myVideo.addEventListener('mouseleave', (e) => {
        $span[0].classList.remove('on');
        $span[1].classList.remove('on');
    });

    let $subtab = getAll('.sub-tab .tab li ');
    let $scroll = getAll('.sub4 .scroll');
    let ty = 0;

    $subtab.forEach((subtap, idx) => {
        subtap.addEventListener('click', (e) => {
            ty = $scroll[idx].offsetTop + 2500;
            window.scrollTo({ top: ty, left: 0, behavior: 'smooth' });
            $subtab.forEach((item, idx) => {
                item.classList.remove('on');
            });
            e.currentTarget.classList.add('on');
        });
    });
};

const sub5 = () => {
    let $subtab = getAll('.banner5 .sub-tab .tab li');
    let $title = get('.sub5 .con1 .con1-box .txt .title');
    let $h5 = get('.sub5 .con1 .con1-box .txt h5');
    let $p = get('.sub5 .con1 .con1-box .txt p');
    let $top = get('.sub5 .topbtn');
    let $cons = getAll('.sub5 .careers');
    let ty = 0;
    let $hireNotice = get('.sub5 .con1 .con1-box');
    let $circles = getAll('.sub5 .con2 .circle-wrap .circles');

    window.addEventListener('scroll', (e) => {
        let mouseY = e.currentTarget.scrollY;
        if (mouseY >= 2100) {
            $circles.forEach((circle, index) => {
                circle.classList.add('on');
            });
        }
    });

    $hireNotice.addEventListener('mouseenter', (e) => {
        const keyframes = {
            opacity: ['0', '1'],
            transform: ['translateY(30px)', 'translateY(0px)'],
        };
        const options = {
            duration: 700,
            easing: 'ease-in-out',
        };
        $title.animate(keyframes, options);
        $h5.animate(keyframes, options);
        $p.animate(keyframes, options);
    });

    $subtab.forEach((subtab, index) => {
        subtab.addEventListener('click', (e) => {
            ty = $cons[index].offsetTop + 950;
            window.scrollTo({ top: ty, behavior: 'smooth' });

            $subtab.forEach((item, index) => {
                item.classList.remove('on');
            });
            e.currentTarget.classList.add('on');
        });
    });

    $top.addEventListener('click', (e) => {
        ty = 0;
        window.scrollTo({ top: ty, behavior: 'smooth' });
        $subtab.forEach((item, index) => {
            item.classList.remove('on');
        });
        $subtab[0].classList.add('on');
    });

    window.addEventListener('mousemove', (e) => {
        let mouseY = e.pageY;
        if (mouseY <= 1500) {
            $subtab.forEach((subtab, index) => {
                subtab.classList.remove('on');
            });
            $subtab[0].classList.add('on');
        }
        if (mouseY >= 1000) {
            $top.classList.add('on');
        } else {
            $top.classList.remove('on');
        }
    });
};

const subInit = () => {
    subVisual();
    sub2_com();

    //페이지별 sub 함수 호출
    if (location.pathname.split('/').pop() === 'sub1.html') {
        sub1();
    }
    if (location.pathname.split('/').pop() === 'sub1-1.html') {
        sub1();
    }
    if (location.pathname.split('/').pop() === 'sub1-2.html') {
        sub1();
    }
    if (location.pathname.split('/').pop() === 'sub1-3.html') {
        sub1();
    }
    if (location.pathname.split('/').pop() === 'sub2-1.html') {
        sub2_1();
    }
    if (location.pathname.split('/').pop() === 'sub2-2.html') {
        sub2_2();
    }
    if (location.pathname.split('/').pop() === 'sub2-3.html') {
        sub2_3();
    }
    if (location.pathname.split('/').pop() === 'sub2-4.html') {
        sub2_4();
    }
    if (location.pathname.split('/').pop() === 'sub2-5.html') {
        sub2_5();
    }
    if (location.pathname.split('/').pop() === 'sub3.html') {
        sub3();
    }
    if (location.pathname.split('/').pop() === 'sub3-2.html') {
        sub3_2();
    }
    if (location.pathname.split('/').pop() === 'sub3-3.html') {
        sub3_3();
    }
    if (location.pathname.split('/').pop() === 'sub3-4.html') {
        sub3_4();
    }
    if (location.pathname.split('/').pop() === 'sub4.html') {
        sub4();
    }
    if (location.pathname.split('/').pop() === 'sub5.html') {
        sub5();
    }
};

(() => {
    subInit();
})();
