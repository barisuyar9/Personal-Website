describe("Success tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });
  it("Karanlık ve aydınlık tema arasında geçiş yapılabiliyor", () => {
    cy.wait(3000);
    // Başlangıçta tema light mı?
    cy.get('header').should('have.attr', 'data-theme', 'light');
    cy.wait(3000);
    // Temayı değiştiren checkbox'ı bul ve tıkla
    cy.get('input[type="checkbox"]').first().check({ force: true });
    cy.wait(3000);
    // Tema dark oldu mu?
    cy.get('header').should('have.attr', 'data-theme', 'dark');
    cy.wait(3000);
    // Tekrar tıkla, light'a döndü mü?
    cy.get('input[type="checkbox"]').first().uncheck({ force: true });
    cy.wait(3000);
    cy.get('header').should('have.attr', 'data-theme', 'light');
  });
  it("Dil İngilizce-Türkçe-İngilizce arasında değişiyor", () => {
    cy.wait(3000);
    // Başlangıçta İngilizce başlıyor: Menüdeki ilk buton 'Skills' olmalı
    cy.get('nav a').first().should('contain', 'Skills');
    cy.wait(3000);
    // Dil değiştirici butonu bul ve tıkla (TÜRKÇE'YE)
    cy.contains("TÜRKÇE'YE").click();
    cy.wait(3000);
    // Menüdeki ilk buton Türkçe oldu mu?
    cy.get('nav a').first().should('contain', 'Yetenekler');
    cy.wait(3000);
    // Tekrar tıkla, İngilizce'ye döndü mü?
    cy.contains('ENGLISH').click();
    cy.wait(3000);
    cy.get('nav a').first().should('contain', 'Skills');
  });
});