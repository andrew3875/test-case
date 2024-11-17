describe('Тест формы обратной связи', () => {

    it('Тест-кейс 1', () => {
        cy.visit('https://kontaktnaya-forma.testograf.ru'); //посещение страницы с формой

        cy.get('.question_107').find('input').type('Иван Иванов'); //заполнение поля "Ваше имя"
        cy.get('.question_108').find('input').type('ivanov@gmail.com'); //заполнение поля "E-mail"
        cy.get('.question_109').find('input').type('+79991234567'); //заполнение поля "Телефон"

        cy.get('#downshift-0-toggle-button').click(); //клик по кнопке раскрытия меню
        cy.get('.option').first().click(); //клик по опции "Заказ"

        cy.get('.question_110').type('Хотел бы заказать тестирование'); //заполнение поля "Ваше сообщение" 

        cy.get('.action___d45ea1f1799f107d8ccf').click(); //клик по кнопке отправки

        cy.contains('Благодарим за обращение!'); //проверка отображения сообщения
    });
});
