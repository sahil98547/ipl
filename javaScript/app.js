document.getElementById('my-select').addEventListener('change', function () {
    let coachFliter = this.value;
    let contentElements = document.getElementsByClassName(coachFliter);
    console.log(contentElements);

    let popularCards = document.getElementsByClassName('popular__card');
    
    for (let i = 0; i < popularCards.length; i++) {
        popularCards[i].classList.remove('active');
    }

    if (coachFliter === 'All') {
        let popularCards = document.getElementsByClassName('popular__card');
        for (let i = 0; i < popularCards.length; i++) {
            popularCards[i].classList.add('active');
        }
    } 

    else {
        Array.from(contentElements).forEach(element => {
            element.classList.add('active');
        });
    }
});

