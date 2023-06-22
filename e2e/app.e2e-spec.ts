import { TimeSheetTemplatePage } from './app.po';

describe('TimeSheet App', function() {
  let page: TimeSheetTemplatePage;

  beforeEach(() => {
    page = new TimeSheetTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
