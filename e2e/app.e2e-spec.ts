import { EurolsPage } from './app.po';

describe('Eurols App', function() {
  let page: EurolsPage;

  beforeEach(() => {
    page = new EurolsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
