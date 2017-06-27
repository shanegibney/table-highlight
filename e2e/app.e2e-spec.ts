import { AngularTableHighlightPage } from './app.po';

describe('angular-table-highlight App', () => {
  let page: AngularTableHighlightPage;

  beforeEach(() => {
    page = new AngularTableHighlightPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
