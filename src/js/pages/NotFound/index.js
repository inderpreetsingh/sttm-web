import React from 'react';
import PropTypes from 'prop-types';
import { TEXTS } from '../../constants';

export default class NotFound extends React.PureComponent {
  static defaultProps = {
    url: location.href,
  };
  static propTypes = {
    url: PropTypes.string.isRequired,
  };
  render() {
    const { url } = this.props;
    return (
      <div className="row" id="content-root">
        <div className="small-12 medium-6 medium-offset-1 columns text-center">
          <h1 id="error-code">404</h1>
          <div id="error-msg">{TEXTS.PAGE_NOT_FOUND_MESSAGE}</div>
          <div id="error-desc">{TEXTS.URL_NOT_FOUND(url)}</div>
        </div>
        <div className="small-12 medium-5 columns">
          <img
            src="/assets/images/404.png"
            alt="Image of Sikh Man smiling at you"
          />
        </div>
      </div>
    );
  }
}
