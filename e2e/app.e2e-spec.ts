import { AppPerguntasPage } from './app.po';

describe('app-perguntas App', () => {
  let page: AppPerguntasPage;

  beforeEach(() => {
    page = new AppPerguntasPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
