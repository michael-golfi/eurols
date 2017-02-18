import { CsrhPage } from './app.po';

describe('csrh App', function() {
  let page: CsrhPage;

  beforeEach(() => {
    page = new CsrhPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
