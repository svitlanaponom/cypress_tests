describe('Page Load', () => {
    it('loads correct page', () => {
        cy.visit('https://en.wikipedia.org/wiki/Maxime_Faget')
        cy.title().should('include', 'Maxime Faget')
    })
});

describe('Verification of contect', () => {
    it('displays correct section', () => {
        cy.visit('https://en.wikipedia.org/wiki/Maxime_Faget')
        cy.contains('h1', 'Maxime Faget').should('be.visible')
        cy.contains('Maxime Faget').siblings('p').should('not.be.empty')
    })
});

describe('Language Selection', () => {
    it('check English page', () => {
        cy.visit('https://en.wikipedia.org/wiki/Maxime_Faget')
        cy.get('#p-lang-btn').should('be.visible');
        cy.get('#p-lang-btn').click();
        cy.contains('a', 'Deutsch').should('be.visible');
    })
});

describe('References Section', () => {
    it('shows references section with links', () => {
        cy.visit('https://en.wikipedia.org/wiki/Maxime_Faget')
        cy.contains('References').scrollIntoView().should('be.visible')
    })
})

describe('External links section', () => {
    it('shows references section with links', () => {
        cy.visit('https://en.wikipedia.org/wiki/Maxime_Faget')
        cy.contains('External links').scrollIntoView().should('be.visible')
    })
})