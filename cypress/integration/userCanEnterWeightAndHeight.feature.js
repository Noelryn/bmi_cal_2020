
describe('user can enter weight and height', () => {
	it('test', () => {
    cy.visit('http://localhost:3001')
    cy.contains('BMI Calculator')
    cy.get('#weight').type('90')
    cy.get('#height').type('186')
    cy.get('#Calculate').click()
  })
  
  it('displays a BMI value of 26', () => {
    cy.get('#results').should('contain', '26')
  })
  
})
