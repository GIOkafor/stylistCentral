import { StyleCentralPage } from './app.po';

describe('style-central App', () => {
  let page: StyleCentralPage;

  beforeEach(() => {
    page = new StyleCentralPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
