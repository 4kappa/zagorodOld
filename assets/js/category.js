const filterBox = document.querySelectorAll('.grid');
const filterColor = document.querySelectorAll('.character');

document.querySelector('.tegs').addEventListener('click', event => {
    if (event.target.tagName !== 'LI') return false;

    let filterClass = event.target.dataset['f'];
    
    filterBox.forEach( elem => {
        elem.classList.remove('hide');
        if (!elem.classList.contains(filterClass)) {
            elem.classList.add('hide');
        }
    })
})

