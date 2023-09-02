import './DefaultPreviewMain.css';
import './DefaultPreviewSub.css';
import { wrapper } from './Preview.css';

function Preview(): JSX.Element {
  return (
    <div className={wrapper} id="previewWrapper">
      <div className="" id="previewBody">
        <div>
          <div className="container">
            <div className="row">
              <div className="col-sm-10 col-sm-offset-1 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2 form-box">
                <form id="mainform">
                  <div id="app">
                    <div className="fieldsets">
                      <span>
                        <fieldset>
                          <div id="form_top" className="form-top">
                            <div className="form-top-left">
                              <h3 className="text-break">
                                ヘッダータイトル
                                <small className="text-danger">
                                  <b>(プレビュー)</b>
                                </small>
                              </h3>{' '}
                              <p className="text-break">ヘッダーコンテンツ</p>
                            </div>{' '}
                            <div className="form-top-right"></div>
                          </div>{' '}
                          <div className="form-bottom">
                            <div className="form-editor">
                              <div>
                                <div className="form-group">
                                  <div className="form-text">
                                    <label
                                      htmlFor="lvi_text_1"
                                      className="control-label col-sm-4 text-break"
                                    >
                                      テキストの質問
                                    </label>{' '}
                                    <div className="col-sm-8">
                                      <span data-v-41cbabc3="">
                                        <div
                                          data-v-41cbabc3=""
                                          className="untouched pristine"
                                        >
                                          <input
                                            data-v-41cbabc3=""
                                            id="lvi_text_1"
                                            name="text_1"
                                            type="text"
                                            className="form-control"
                                          />{' '}
                                          <span
                                            data-v-41cbabc3=""
                                            className="help-block help-error"
                                          ></span>
                                        </div>
                                      </span>{' '}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <div className="form-group">
                                  <div className="form-text">
                                    <div className="col-sm-12">
                                      <h5 className="description-title text-break">
                                        小見出し
                                      </h5>{' '}
                                      <p className="text-break">
                                        小見出しのコンテンツが入ります。小見出しのコンテンツが入ります。小見出しのコンテンツが入ります。小見出しのコンテンツが入ります。小見出しのコンテンツが入ります。小見出しのコンテンツが入ります。小見出しのコンテンツが入ります。小見出しのコンテンツが入ります。小見出しのコンテンツが入ります。
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <div className="form-group">
                                  <div className="form-text">
                                    <div className="col-sm-12">
                                      {' '}
                                      <h4 className="description-md-title text-break">
                                        中見出し
                                      </h4>{' '}
                                      <p className="text-break">
                                        中見出しのコンテンツが入ります。中見出しのコンテンツが入ります。中見出しのコンテンツが入ります。中見出しのコンテンツが入ります。中見出しのコンテンツが入ります。中見出しのコンテンツが入ります。中見出しのコンテンツが入ります。中見出しのコンテンツが入ります。中見出しのコンテンツが入ります。中見出しのコンテンツが入ります。
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>{' '}
                              <br />{' '}
                              <div className="row">
                                <div className="col-xs-4 col-sm-3 col-md-2">
                                  {' '}
                                  <br className="visible-xs" />
                                </div>{' '}
                                <div className="col-xs-12 col-sm-6 col-md-8">
                                  <button
                                    id="submit-button"
                                    type="button"
                                    className="btn btn-primary btn-lg btn-block"
                                  >
                                    進む
                                  </button>
                                </div>
                              </div>{' '}
                              <div className="clearfix"></div>
                            </div>{' '}
                          </div>
                        </fieldset>
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <link rel="stylesheet" href="/css/o1h1xS/style.css?v=20230902105619" />
      </div>
    </div>
  );
}

export default Preview;
