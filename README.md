Небольшой pet проект , точнее , небольшой интернет-магазин .
Сделан полностью с 0 .

Старался не сверстать (макета не было .все по наитию), а сделать функционал . Поэтому, крайне рекомендую смотреть в адаптиве на 1440 ширины :) Использовал :

- TS
- React на функциональных компонентах с хуками
- Redux Toolkit
- react-router-dom
- axios

homeContainer , headerContainer , cartConteiner - контейнерные компоненты .БОльшая часть логики лежит в них .
homeContainer- домашняя страница , где происходит запрос на сервер с последующей отрисовкой карточек
headerContainer - отвечает только за рэндер шапки приложения
cartConteiner и дочерние- отрисовка данных из стейта

![image](https://user-images.githubusercontent.com/97777490/183833400-1823a9a0-7c0f-446e-8d94-55a829e10a46.png)
![image](https://user-images.githubusercontent.com/97777490/183833437-95f4921d-38e8-49d7-bf9b-53f01c51cbcc.png)
