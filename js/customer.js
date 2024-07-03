import data from '../data/data2.js';

const customer = () => {
    const $tbody = get('tbody');
    const $paging = get('.table .paging');
    let postsperPage = 10,
        currentPage = 1;
    let $total = get('.con .num');

    let firstPost, lastPost, postMod, pageNumber, totalPage;

    const $listicon = get('.list span a i');
    const $list = get('.list .sites');

    $listicon.addEventListener('click', (e) => {
        e.preventDefault();
        $list.classList.toggle('on');
    });

    const pageList = () => {
        $tbody.innerHTML = '';

        for (let i = firstPost; i < lastPost; i++) {
            const tr = document.createElement('tr');
            const id = document.createElement('td');
            const name = document.createElement('td');
            const title = document.createElement('td');
            const date = document.createElement('td');
            const check = document.createElement('td');
            id.textContent = data[i].id;
            name.textContent = data[i].name;
            title.textContent = data[i].title;
            date.textContent = data[i].date;
            check.textContent = data[i].check;
            tr.append(id, name, title, date, check);
            $tbody.append(tr);
        }
    };

    const makePaging = () => {
        const pageEvent = (e) => {
            e.preventDefault();
            switch (e.currentTarget.textContent) {
                case '<<':
                    currentPage = 1;
                    break;
                case '<':
                    currentPage = currentPage > 1 ? currentPage - 1 : currentPage;
                    break;
                case '>>':
                    currentPage = pageNumber;
                    break;
                case '>':
                    currentPage = currentPage > 1 ? currentPage + 1 : currentPage;
                    break;
                default:
                    currentPage = Number(e.currentTarget.textContent);
            }

            getData();
        };
        $paging.innerHTML = '';
        for (let i = 1; i <= pageNumber; i++) {
            const a = document.createElement('a');
            a.setAttribute('href', '#');
            a.textContent = i;

            if (i === currentPage) {
                a.classList.add('on');
            }
            $paging.append(a);
        }
        const minPrevBtn = document.createElement('a');
        const prevBtn = document.createElement('a');
        const maxprevBtn = document.createElement('a');
        const nextBtn = document.createElement('a');

        minPrevBtn.innerHTML = '&lt;&lt;';
        prevBtn.innerHTML = '&lt;';
        maxprevBtn.innerHTML = '&gt;&gt;';
        nextBtn.innerHTML = '&gt;';
        $paging.append(nextBtn, maxprevBtn);
        $paging.prepend(minPrevBtn, prevBtn);

        let $aAll = getAll('.paging a');
        $aAll.forEach((aItem, idx) => {
            aItem.addEventListener('click', pageEvent);
        });
    };

    const getData = () => {
        totalPage = data.length;
        $total.textContent = totalPage;

        postMod = totalPage % postsperPage;
        firstPost = (currentPage - 1) * postsperPage;
        lastPost =
            currentPage === pageNumber && postMod !== 0
                ? firstPost + postMod
                : firstPost + postsperPage;
        pageNumber = Math.ceil(totalPage / postsperPage);

        makePaging();
        pageList(currentPage);
    };
    getData();
};

(() => {
    customer();
})();
