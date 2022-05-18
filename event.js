const plusFirst = document.querySelector('.plus.first');
const plusSecond = document.querySelector('.plus.second');
const plusFour = document.querySelector('.plus.four');
const plusThird = document.querySelector('.plus.third');
const pluschildfirst = document.querySelector('.plus.child-first');
const pluschildsecon = document.querySelector('.plus.child-secon');
const pluschildthird = document.querySelector('.plus.child-third');

function handleEvent() {
    plusFirst.onclick = () => {
        document.querySelector('.children-ul.first').classList.toggle('active');

        document.querySelector('.first .minus').classList.toggle('active');
        document.querySelector('.first .pplus').classList.toggle('active');

    }

    plusSecond.onclick = () => {
        document.querySelector('.children-ul.second').classList.toggle('active');

        document.querySelector('.second .minus').classList.toggle('active');
        document.querySelector('.second .pplus').classList.toggle('active');
    }

    plusFour.onclick = () => {
        document.querySelector('.children-ul.four').classList.toggle('active');

        document.querySelector('.four .minus').classList.toggle('active');
        document.querySelector('.four .pplus').classList.toggle('active');
    }

    plusThird.onclick = () => {
        document.querySelector('.children-ul.third').classList.toggle('active');

        document.querySelector('.third .minus').classList.toggle('active');
        document.querySelector('.third .pplus').classList.toggle('active');
    }

    pluschildfirst.onclick = () => {
        document.querySelector('.children-ul.children-secon-ul-first').classList.toggle('active');

        document.querySelector('.child-first .minus').classList.toggle('active');
        document.querySelector('.child-first .pplus').classList.toggle('active');
    }

    pluschildsecon.onclick = () => {
        document.querySelector('.children-ul.children-secon-ul-secon').classList.toggle('active');

        document.querySelector('.child-secon .minus').classList.toggle('active');
        document.querySelector('.child-secon .pplus').classList.toggle('active');
    }

    pluschildthird.onclick = () => {
        document.querySelector('.children-ul.children-secon-ul-third').classList.toggle('active');

        document.querySelector('.child-third .minus').classList.toggle('active');
        document.querySelector('.child-third .pplus').classList.toggle('active');
    }

    // plus.onclick = () => {
    //     document.querySelector('.minus').classList.toggle('active');
    //     plus.classList.toggle('active');
    // }
}

handleEvent();