import { FridayDemoPage } from './app.po';

describe('friday-demo App', function() {
  let page: FridayDemoPage;

  beforeEach(() => {
    page = new FridayDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
