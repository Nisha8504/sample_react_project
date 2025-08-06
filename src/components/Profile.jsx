import React, { useState } from 'react'
import Navbar from './Navbar'

const Profile = () => {


    const [profile, changeProfile] = useState([


        { "name": " Nisha", "age": "20", "College": "FISAT","photo":"https://img.freepik.com/premium-photo/3d-avatar-character_113255-29904.jpg" },
        { "name": "Megha", "age": "21", "College": "FISAT","photo":" https://tse3.mm.bing.net/th/id/OIP.Rb_jUbmfONsY0iT8sXHr7AHaHa?w=626&h=626&rs=1&pid=ImgDetMain&o=7&rm=3  " },
        { "name": "Sreya", "age": "21", "College": "FISAT","photo":"  https://img.freepik.com/premium-photo/3d-avatar-character_113255-32176.jpg " },
        { "name": "Sameeha", "age": "21", "College": "FISAT","photo":"https://tse4.mm.bing.net/th/id/OIP.ikZRHaBPfZTYqIcAVlMoXAHaHa?w=626&h=626&rs=1&pid=ImgDetMain&o=7&rm=3  " },
        { "name": "Linda", "age": "21", "College": "FISAT","photo":" https://img.freepik.com/premium-photo/3d-avatar-character_113255-32536.jpg  " },
        { "name": "Catherine", "age": "21", "College": "FISAT","photo":" https://img.freepik.com/premium-photo/3d-avatar-character_113255-30564.jpg  " },
        
       
    ])

    return (

        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="colummn col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                        <div className="row g-3">

                            {profile.map(
                                (value, index) => {
                                    return (


                                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                            <div class="card" >
                                                <img src={value.photo} class="card-img-top" alt="..." />
                                                <div class="card-body">
                                                    <h5 class="card-title">{value.name}</h5>
                                                    <p class="card-text">{value.age}</p>
                                                </div>
                                                <ul class="list-group list-group-flush">
                                                    <li class="list-group-item">SEM : S5</li>
                                                    <li class="list-group-item">REACT</li>
                                                    <li class="list-group-item">A third item</li>
                                                </ul>
                                                <div class="card-body">
                                                    <a href="#" class="card-link">Card link</a>
                                                    <a href="#" class="card-link">Another link</a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            )}


                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Profile