// 서브페이지 공통부분
const subVisual = () => {};
const subText = () => {};
const subBanner = () => {};

//페이지별 함수
//sub1
//sub2
//sub3
//sub4
//sub5

const sub1 = () => {};
const sub2 = () => {};
const sub3 = () => {};
const sub4 = () => {};
const sub5 = () => {};

const subInit = () => {
    subVisual();
    subText();
    subBanner();

    //페이지별 sub 함수 호출
    if (location.pathname.split('/').pop() === 'sub1.html') {
        sub1();
    } else if (location.pathname.split('/').pop() === 'sub2.html') {
        sub2();
    } else if (location.pathname.split('/').pop() === 'sub3.html') {
        sub3();
    } else if (location.pathname.split('/').pop() === 'sub4.html') {
        sub4();
    } else if (location.pathname.split('/').pop() === 'sub5.html') {
        sub5();
    }
};

(() => {
    subInit();
})();
