import { MarketPlaceClientPage } from './app.po';

describe('market-place-client App', () => {
  let page: MarketPlaceClientPage;

  beforeEach(() => {
    page = new MarketPlaceClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
