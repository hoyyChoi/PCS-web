import React from 'react'
import Article from './Article'
import Populartags from './Populartags'

const Home = () => {
  return (
    <div class="home-page">

    <div class="banner">
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
                            <a class="nav-link disabled" href="">Your Feed</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="">Global Feed</a>
                        </li>
                    </ul>
                </div>

                <Article />
                <Article />
                <Article />
            </div>

            <Populartags />

        </div>
    </div>

</div>
  )
}

export default Home