'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var News = function (_React$Component) {
  _inherits(News, _React$Component);

  function News() {
    _classCallCheck(this, News);

    var _this = _possibleConstructorReturn(this, (News.__proto__ || Object.getPrototypeOf(News)).call(this));

    _this.state = {
      isLoading: false
    };
    return _this;
  }

  _createClass(News, [{
    key: 'render',
    value: function render() {
      var posts = [{
        image: 'images/news-1.png',
        date: 'April 12, 2018',
        header: 'The latest in Medicine',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.',
        postedBy: 'Dr. Jake Williams',
        commentsCount: 2
      }, {
        image: 'images/news-2.png',
        date: 'April 12, 2018',
        header: 'All you need to know about pills',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.',
        postedBy: 'Dr. Jake Bull',
        commentsCount: 5
      }, {
        image: 'images/news-3.png',
        date: 'April 11, 2018',
        header: 'Marketing and Medicine',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.',
        postedBy: 'Dr. Jane Doe',
        commentsCount: 21
      }];
      return React.createElement(
        'div',
        { className: 'row' },
        posts.map(function (post, i) {
          return React.createElement(NewsItem, {
            key: i,
            image: post.image,
            date: post.date,
            header: post.header,
            content: post.content,
            postedBy: post.postedBy,
            commentsCount: post.commentsCount
          });
        })
      );
    }
  }]);

  return News;
}(React.Component);

var Loading = function Loading() {
  return React.createElement(
    'div',
    { className: 'spinner-grow', role: 'status' },
    React.createElement(
      'span',
      { className: 'sr-only' },
      'Loading...'
    )
  );
};

var NewsItem = function NewsItem(_ref) {
  var image = _ref.image,
      date = _ref.date,
      header = _ref.header,
      content = _ref.content,
      postedBy = _ref.postedBy,
      commentsCount = _ref.commentsCount;
  return React.createElement(
    'div',
    { className: 'col-12 col-md-6 col-lg-4' },
    React.createElement(
      'div',
      { className: 'the-news-wrap' },
      React.createElement(
        'figure',
        { className: 'post-thumbnail' },
        React.createElement(
          'a',
          { href: '#' },
          React.createElement('img', { src: image, alt: '' })
        )
      ),
      React.createElement(
        'header',
        { className: 'entry-header' },
        React.createElement(
          'h3',
          null,
          header
        ),
        React.createElement(
          'div',
          { className: 'post-metas d-flex flex-wrap align-items-center' },
          React.createElement(
            'div',
            { className: 'posted-date' },
            React.createElement(
              'label',
              null,
              'Date: '
            ),
            React.createElement(
              'a',
              { href: '#' },
              ' ',
              date
            )
          ),
          React.createElement(
            'div',
            { className: 'posted-by' },
            React.createElement(
              'label',
              null,
              'By: '
            ),
            React.createElement(
              'a',
              { href: '#' },
              ' ',
              postedBy
            )
          ),
          React.createElement(
            'div',
            { className: 'post-comments' },
            React.createElement(
              'a',
              { href: '#' },
              commentsCount,
              ' Comments'
            )
          )
        )
      ),
      React.createElement(
        'div',
        { className: 'entry-content' },
        React.createElement(
          'p',
          null,
          content
        )
      )
    )
  );
};

var domContainer = document.querySelector('#react-news');
ReactDOM.render(React.createElement(News, null), domContainer);