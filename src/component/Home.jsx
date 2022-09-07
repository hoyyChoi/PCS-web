import React from 'react'
import ArticleList from './ArticleList'
import Populartags from './Populartags'

const Home = ({auth}) => {

  return (
    <div className="home-page">

    <div className="banner" style={auth?{display:'none'}:{display:'flex'}}>
        <div className="container">
            <h1 className="logo-font">conduit</h1>
            <p>A place to share your knowledge.</p>
        </div>
    </div>

    <div className="container page">
        <div className="row">

            <div className="col-md-9">
                <div className="feed-toggle">
                    <ul className="nav nav-pills outline-active">
                        <li className="nav-item">
                            <a className="nav-link disabled" href="" style={auth?{display:'flex'}:{display:'none'}}>Your Feed</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="">Global Feed</a>
                        </li>
                    </ul>
                </div>

                <ArticleList />
                <ArticleList />
                <ArticleList />
            </div>

            <Populartags />

        </div>
    </div>

</div>
  )
}

export default Home