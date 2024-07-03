//비쥬얼배너
// 타이머, pagingli
const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);

const mainBanner = () => {
    let $visual = get('#visual');
    let $ul = get('.main-banner');
    let $li = getAll('#visual .main-banner li ');
    let $txt = getAll('.visualTxt');

    let total = $li.length;
    let timer = null,
        interval = 3000,
        cnt = 0,
        current = 0,
        old = 0;
    let $paging = getAll('.paging li');

    timer = setInterval(make, interval);
    function make() {
        current++;
        if (current > total - 1) {
            current = 0;
        }
        imgbanner();
    }
    $paging.forEach((item, idx) => {
        item.addEventListener('click', (e) => {
            current = idx;
            if (current !== old) {
                imgbanner();
                clearInterval(timer);
                timer = setInterval(make, interval);
            }
        });
    });

    function imgbanner() {
        $paging[current].classList.add('on');
        $paging[old].classList.remove('on');
        $li[current].classList.add('on');
        $li[old].classList.remove('on');

        lastBanner(old);
        old = current;
    }

    function lastBanner(x) {
        setTimeout(() => {
            $li[current].classList.add('on');
        }, 400);
    }
};

//이벤트배너 (hover 및 con1~4 기타 javascript 기능)
export const con1 = () => {
    let $aboutTab = getAll('.main .aboutCon .aboutTab li');
    let $aboutList = getAll('.main .aboutCon .listBox li');

    $aboutTab.forEach((aboutTab, index) => {
        aboutTab.addEventListener('click', (e) => {
            $aboutTab.forEach((item, index) => {
                item.classList.remove('on');
            });
            e.currentTarget.classList.add('on');

            $aboutList.forEach((item, index) => {
                item.classList.remove('on');
            });
            $aboutList[index].classList.add('on');
        });
    });
};
const con4 = () => {
    let $report = getAll('.main .report .reportCon li span');
    let $reportCon = get('.main .con-box .report');
    let start = 0,
        end = 0,
        speed = 100,
        current = 0,
        step = 0;

    window.addEventListener('scroll', (e) => {
        let scroll = e.currentTarget.scrollY;

        if (scroll >= 3200) {
            $report.forEach((report, index) => {
                const countUp = () => {
                    end = Number(report.dataset.num);
                    current = Number(report.textContent.replace(/,/g, ''));
                    step = end / speed;

                    if (current < end) {
                        current = current + step;
                        report.textContent = new Intl.NumberFormat().format(current);
                        setTimeout(countUp, 20);
                    } else {
                        report.textContent = new Intl.NumberFormat().format(end);
                    }
                };
                countUp();
            });
        }
    });
};

//합치기
const mainInit = () => {
    mainBanner();
    con1();
    con4();
};

//즉시실행
(() => {
    mainInit();
})();
