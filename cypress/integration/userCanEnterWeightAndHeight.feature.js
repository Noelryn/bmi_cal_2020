
describe('user can enter weight and height', () => {
	it('test', () => {
    cy.visit('http://localhost:3001')
    cy.contains('BMI Calculator')
    cy.get('#weight').type('90')
    cy.get('#height').type('186')
	})
})
