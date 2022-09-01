import React from 'react'
import Article from './Article'

const Profile = () => {
  return (
    <div class="profile-page">

    <div class="user-info">
        <div class="container">
            <div class="row">

                <div class="col-xs-12 col-md-10 offset-md-1">
                    <img src="http://i.imgur.com/Qr71crq.jpg" class="user-img"/>
                    <h4>Eric Simons</h4>
                    <p>
                        Cofounder @GoThinkster, lived in Aol's HQ for a few months, kinda looks like Peeta from the
                        Hunger Games
                    </p>
                    <button class="btn btn-sm btn-outline-secondary action-btn">
                        <i class="ion-plus-round"></i>
                        &nbsp;
                        Follow Eric Simons
                    </button>
                </div>

            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">

            <div class="col-xs-12 col-md-10 offset-md-1">
                <div class="articles-toggle">
                    <ul class="nav nav-pills outline-active">
                        <li class="nav-item">
                            <a class="nav-link active" href="">My Articles</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="">Favorited Articles</a>
                        </li>
                    </ul>
                </div>

                <Article />
                <Article />

                


            </div>

        </div>
    </div>

</div>
  )
}

export default Profile