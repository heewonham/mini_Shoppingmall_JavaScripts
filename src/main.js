
// Fetch the items from the JSON file
function loadItem(){
    return fetch('data/data.json')
    .then(response => response.json())
    .then(json => json.items);
}

// 각 json data를 html 요소로 변환
function displayItems(items){
    const container = document.querySelector('.items');
    container.innerHTML = items.map(item => createHTMLString(item)).join('');
    // 배열을 한가지의 문자열로 병합 : join

}

function createHTMLString(item) {
    return `
    <il class="item">
        <img src="${item.image}" alt="${item.type}" class="item__thumbnail">
        <span class="item_descriptions">${item.gender}, ${item.size}</span>
    </il>
    `;
}

// main
loadItem()
.then(items => {
    displayItems(items);        // item list 보여주기
    setEventListeners(items)    //item 누르면 이벤트 발생    
})
.catch(console.log)