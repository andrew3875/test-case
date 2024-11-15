describe('Тест формы обратной связи', () => {

    it('Тест-кейс 1', () => {
        cy.visit('https://kontaktnaya-forma.testograf.ru');

        cy.get('.question_107').find('input').type('Иван Иванов'); 
        cy.get('.question_108').find('input').type('ivanov@gmail.com'); 
        cy.get('.question_109').find('input').type('+79991234567'); 

        cy.get('#downshift-0-toggle-button').click();
        cy.get('.option').first().click();

        cy.get('.question_110').type('Сервисом пользуюсь давно, все четко, профессионально и быстро');

        cy.get('.action___d45ea1f1799f107d8ccf').click();

        cy.contains('Благодарим за обращение!')
    });
});
