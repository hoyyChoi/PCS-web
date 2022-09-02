import React from 'react'
import ArticleList from './ArticleList'
import Populartags from './Populartags'

const Home = ({auth}) => {

  return (
    <div class="home-page">

    <div class="banner" style={auth?{display:'none'}:{display:'flex'}}>
        <div class="container">
            <h1 class="logo-font">conduit</h1>
            <p>A place to share your knowledge.</p>
        </div>
    </div>

    <div class="container page">
        <div class="row">

            <div class="col-md-9">
                <div class="feed-toggle">
                    <ul class="nav nav-pills outline-active">
                        <li class="nav-item">
                            <a class="nav-link disabled" href="" style={auth?{display:'flex'}:{display:'none'}}>Your Feed</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="">Global Feed</a>
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