import { WindsweptPage } from './app.po';

describe('windswept App', () => {
  let page: WindsweptPage;

  beforeEach(() => {
    page = new WindsweptPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
