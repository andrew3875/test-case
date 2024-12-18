(Тестирование в браузере Microsoft Edge Version 130.0.2849.80)

**Тест 1. Проверка обязательных полей (*)**

_Стартовое условие:_ открыта форма обратной связи [Форма обратной связи для сайта](https://kontaktnaya-forma.testograf.ru/)

Оставить обязательные поля пустыми и нажать “Отправить”.  
**Ожидаемый результат:** сообщение об ошибке на обязательных полях (“Вопрос является обязательным.” )

Заполнить одно обязательное поле и нажать “Отправить”.  
**Ожидаемый результат:** сообщение об ошибке на остальных обязательных полях (“Вопрос является обязательным.” )

Заполнить все обязательные поля, нажать “Отправить”.  
**Ожидаемый результат**: сообщение “Благодарим за обращение!”

**Тест 2. Валидация формата полей**

_Стартовое условие:_ открыта форма обратной связи [Форма обратной связи для сайта](https://kontaktnaya-forma.testograf.ru/)

Заполнить поочередно каждое поле  
**Ожидаемый результат:** Все поля заполняются 

В поле "Ваше имя" ввести некорректные данные ( “12345” )  
**Ожидаемый результат:** ошибка валидации.

В поле "E-mail" ввести некорректные данные ( "абвгд" )  
**Ожидаемый результат:** ошибка валидации.

В поле "Телефон"ввести некорректные данные (“абвгд”)  
**Ожидаемый результат:** ошибка валидации.

**Тест 3. Выбор “цели обращения”**

_Стартовое условие:_ открыта форма обратной связи [Форма обратной связи для сайта](https://kontaktnaya-forma.testograf.ru/)  
_Стартовое условие:_ корректно заполнены поля “Ваше имя”, “E-mail”, “Ваше сообщение”  

Выбрать поочередно пункты меню  “Заказ”,  “Вопрос о товаре”,  “Вопрос в тех.поддержку“, “Отзыв“,  “Жалоба“,  “Другое“ и нажать “Отправить” после выбора каждого из пунктов  
**Ожидаемый результат:** сообщение “Благодарим за обращение!”, информация поступила на почту соответствующего сотрудника.

**Тест 4. Проверка уязвимости**

_Стартовое условие:_ открыта форма обратной связи [Форма обратной связи для сайта](https://kontaktnaya-forma.testograf.ru/)  
_Стартовое условие:_ корректно заполнены обязательные поля за исключением того, в которое введен код  

Ввести HTML-код, SQL-запрос, JavaScript поочередно в одно из полей, нажать “Отправить”.  
**Ожидаемый результат:** код не исполняется, сохраняется в виде текста или отклоняется валидацией.

**Тест 5. Обработка ошибок сервера**

_Стартовое условие:_ открыта форма обратной связи [Форма обратной связи для сайта](https://kontaktnaya-forma.testograf.ru/)  
_Стартовое условие:_ корректно заполнены поля “Ваше имя”, “E-mail”, “Ваше сообщение”  

Создать ситуацию, при которой сервер недоступен, нажать “Отправить”.  
**Ожидаемый результат:** отображение сообщения об ошибке.

**Тест 6. Тестирование длины поля "Ваше имя"**

_Стартовое условие:_ открыта форма обратной связи [Форма обратной связи для сайта](https://kontaktnaya-forma.testograf.ru/)  
_Стартовое условие:_ корректно заполнены поля “E-mail”, “Ваше сообщение”, “Цель обращения”

Ввести в поле "Ваше имя" 1 корректный символ, нажать “Отправить”.  
**Ожидаемый результат:** форма отправляется, появляется сообщение “Благодарим за обращение!”

Ввести в поле "Ваше сообщение" строку с количеством символов, превышающим лимит (в соответствии с требованиями).  
**Ожидаемый результат:** отображение сообщения об ошибке.

**Тест 7. Тестирование кнопки “Отправить”**

_Стартовое условие:_ открыта форма обратной связи [Форма обратной связи для сайта](https://kontaktnaya-forma.testograf.ru/)  
_Стартовое условие:_ корректно заполнены обязательные поля 

Проверить кнопку "Отправить", быстро многократно нажимая на нее.  
**Ожидаемый результат:** отправляется один запрос на сервер, отображается сообщение "Благодарим за обращение!" один раз.

**Тест 8. Тестирование поля "Цель обращения"**

_Стартовое условие:_ открыта форма обратной связи [Форма обратной связи для сайта](https://kontaktnaya-forma.testograf.ru/)  
_Стартовое условие:_ корректно заполнены обязательные поля, кроме "Цель обращения".

Нажать "Отправить".  
**Ожидаемый результат:** отображается ошибка на поле “Цель обращения” (“Вопрос является обязательным.” )

**Тест 9. Тестирование восстановления данных после обновления страницы**

_Стартовое условие:_ открыта форма обратной связи [Форма обратной связи для сайта](https://kontaktnaya-forma.testograf.ru/)  
_Стартовое условие:_ корректно заполнены обязательные поля

Обновить страницу  
**Ожидаемый результат:** поля очищаются или данные восстанавливаются (в зависимости от требований).

**Тест 10. Тестирование переключения полей с помощью клавиши Tab**

_Стартовое условие:_ открыта форма обратной связи [Форма обратной связи для сайта](https://kontaktnaya-forma.testograf.ru/)

Нажать клавишу Tab  
**Ожидаемый результат:** курсор помещается в поле “Ваше имя”

Нажать Tab повторно  
**Ожидаемый результат:** курсор перемещается в поле “E-mail”

**Тест 11. Тестирование времени загрузки формы**

_Стартовое условие:_ открыта форма обратной связи [Форма обратной связи для сайта](https://kontaktnaya-forma.testograf.ru/)

Обновить страницу  
**Ожидаемый результат:** страница с формой загружается быстро (в соответствии с требованиями)



