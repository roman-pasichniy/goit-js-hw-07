const categoriesQuantity = document.querySelectorAll('li.item');

console.log(`Numbet of categories: ${categoriesQuantity.length}`);

categoriesQuantity.forEach(item => {
    console.log(`Category: ${item.querySelector('h2').textContent}`);
    console.log(`Elements: ${item.querySelectorAll('ul li').length}`);
})
