const container = document.getElementById('container');

const adicionaItem = (event) => {
    const newArticle = document.createElement('article');
    newArticle.setAttribute('class', 'item');
    newArticle.setAttribute('onclick', "removeItem(event)");
    container.insertAdjacentElement('beforeend', newArticle);
};

const removeItem = (event) => {
    container.removeChild(event.target);
}