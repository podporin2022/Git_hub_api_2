'https://api.github.com/users/';
const form = document.querySelector('.inp-cont');
const inpE = document.querySelector('#inp');
const content = document.querySelector('.content');


// Формируем блок юзера
const userInfo = (userData)=>{
        content.innerHTML =
    `<div class="user">
        <h2>${userData.name}</h2>
        <div class="user_avatar">
            <img src="${userData.avatar_url}" alt="user-avatar">
        </div>
        <div class="user_info">
            <span>Repositories : ${userData.public_repos}</span>
            <span>Followers : ${userData.followers}</span>
            <span>Following : ${userData.following}</span>
        </div>
    </div>`;
};
// Формируем ошибку
const err = (data) =>{
    const error = document.createElement('h3')
    error.classList.add('error')
    error.innerText = data.message
    content.append(error)
};



//Отменяем дефолтное поведение кнопки
form.addEventListener('submit',(event)=>{
    event.preventDefault()
})
//При сабмите (Энтер или клик по кнопке) вызываем онфайнд
form.onsubmit = onFind



//Получаем данные, очищаем инпут и контент
function onFind() {
    getUser(inpE.value)
    inpE.value = '';
    content.innerHTML = '';
}
//Рендерим контент (если userRend имеет ключ login, тогда отрисовываем юзера,
// а если нет такого ключа, тогда говорим, что нет такого юзера
function renderDate(userRend){
    userRend.login ? userInfo(userRend) : err(userRend)
}




