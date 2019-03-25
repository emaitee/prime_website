'use strict';

class News extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
    };
  }

  render() {
    const posts = [
      {
        image: 'images/news-1.png',
        date: 'April 12, 2018',
        header: 'The latest in Medicine',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.',
        postedBy: 'Dr. Jake Williams',
        commentsCount: 2,
      },
      {
        image: 'images/news-2.png',
        date: 'April 12, 2018',
        header: 'All you need to know about pills',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.',
        postedBy: 'Dr. Jake Bull',
        commentsCount: 5,
      },
      {
        image: 'images/news-3.png',
        date: 'April 11, 2018',
        header: 'Marketing and Medicine',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.',
        postedBy: 'Dr. Jane Doe',
        commentsCount: 21,
      },
    ];
    return (
      <div className="row">
        {posts.map((post, i) => (
          <NewsItem
            key={i}
            image={post.image}
            date={post.date}
            header={post.header}
            content={post.content}
            postedBy={post.postedBy}
            commentsCount={post.commentsCount}
          />
        ))}
      </div>
    );
  }
}

const Loading = () => (
  <div className="spinner-grow"  role="status">
    <span className="sr-only">Loading...</span>
  </div>
);

const NewsItem = ({
  image,
  date,
  header,
  content,
  postedBy,
  commentsCount,
}) => (
  <div className="col-12 col-md-6 col-lg-4" >
    <div className="the-news-wrap">
      <figure className="post-thumbnail">
        <a href="#">
          <img src={image} alt="" />
        </a>
      </figure>

      <header className="entry-header">
        <h3>{header}</h3>

        <div className="post-metas d-flex flex-wrap align-items-center">
          <div className="posted-date">
            <label>Date: </label>
            <a href="#"> {date}</a>
          </div>

          <div className="posted-by">
            <label>By: </label>
            <a href="#"> {postedBy}</a>
          </div>

          <div className="post-comments">
            <a href="#">{commentsCount} Comments</a>
          </div>
        </div>
      </header>

      <div className="entry-content">
        <p>{content}</p>
      </div>
    </div>
  </div>
);

let domContainer = document.querySelector('#react-news');
ReactDOM.render(<News />, domContainer);
