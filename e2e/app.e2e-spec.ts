import { CivicsTesterPage } from './app.po';

describe('civics-tester App', function() {
  let page: CivicsTesterPage;

  beforeEach(() => {
    page = new CivicsTesterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
