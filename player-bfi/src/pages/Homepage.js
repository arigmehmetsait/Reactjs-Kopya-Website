import React from 'react';
import './Homepage.css'; // CSS dosyası
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';



const GalleryItem = ({ image, title, description }) => (
    <div className="gallery-item">
        <img src={image} alt={title} className="gallery-image" />
        <div className="image-overlay">
            <p className="image-title">{title}</p>
            <p className='image-description'>{description}</p>
            <div className="rent-box">
                <p className="rent-text">Rent for 4.50</p>
            </div>
        </div>
    </div>
);

const Homepage = () => {

    const images = [
        {
            id: 1,
            title: 'Master Gardener',
            imageUrl: 'https://player.bfi.org.uk/sites/default/files/styles/landscape_480x270/public/hero-images/Master-Gardener.jpg?itok=3JdrKTvq',
            imageUrl1: 'https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/alt-still.jpg?itok=l9azxCyF',
            imageUrl2: 'https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/alt-still.jpg?itok=l9azxCyF',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting ',
        },
        {
            id: 2,
            title: 'Saint Omer',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting ',
            imageUrl: 'https://player.bfi.org.uk/sites/default/files/styles/landscape_480x270/public/hero-images/Saint_Omer_2-1920.jpg?itok=NGzUaTct',
            imageUrl1: 'https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/sick-of-myself-01.jpeg?itok=89XrqMC1',
            imageUrl2: 'https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/sick-of-myself-01.jpeg?itok=89XrqMC1',


        },

        {
            id: 3,
            title: 'Saint Omer',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting ',
            imageUrl: 'https://player.bfi.org.uk/sites/default/files/styles/landscape_480x270/public/hero-images/reality.jpg?itok=UK5Nfybk',
            imageUrl1: 'https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/521ca2789672d9bd5399c356d1545de3.jpg?itok=NmZW182w',
            imageUrl2: 'https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/521ca2789672d9bd5399c356d1545de3.jpg?itok=NmZW182w',


        }
        ,

        {
            id: 4,
            title: 'Saint Omer',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting ',
            imageUrl: 'https://player.bfi.org.uk/sites/default/files/styles/landscape_480x270/public/hero-images/Medusa_1920.jpg?itok=99swdaZl',
            imageUrl1: 'https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/Dance-Craze_1920-6.jpg?itok=Yb7_a-k_',
            imageUrl2: 'https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/Dance-Craze_1920-6.jpg?itok=Yb7_a-k_',


        }
        ,

        {
            id: 5,
            title: 'Saint Omer',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting ',
            imageUrl: 'https://player.bfi.org.uk/sites/default/files/styles/landscape_480x270/public/hero-images/Boys-On-Film-23_1920-4.jpg?itok=zBKIkp5x',
            imageUrl1: 'https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/b680db94ab8c770f3e8c4955d1fb9c3e.jpg?itok=ryn1sr0t',
            imageUrl2: 'https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/b680db94ab8c770f3e8c4955d1fb9c3e.jpg?itok=ryn1sr0t',


        }
        ,

        {
            id: 6,
            title: 'Saint Omer',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting ',
            imageUrl: 'https://player.bfi.org.uk/sites/default/files/styles/landscape_480x270/public/hero-images/Broker_2-1920.jpg?itok=Eukw2TTy',
            imageUrl1: 'https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/b680db94ab8c770f3e8c4955d1fb9c3e.jpg?itok=ryn1sr0t',
            imageUrl2: 'https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/b680db94ab8c770f3e8c4955d1fb9c3e.jpg?itok=ryn1sr0t',


        }
        ,

        {
            id: 7,
            title: 'Saint Omer',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting ',
            imageUrl: 'https://player.bfi.org.uk/sites/default/files/styles/square_320x320/public/collection/2023-02/Titane-480.jpg?itok=AiaXMPlb',
            imageUrl1: 'https://player.bfi.org.uk/sites/default/files/styles/square_320x320/public/collection/2023-07/Frances-Ha_480x480.jpg?itok=zAfj6qtK',
            imageUrl2: 'https://player.bfi.org.uk/sites/default/files/styles/square_320x320/public/collection/2023-07/Frances-Ha_480x480.jpg?itok=zAfj6qtK',

        }
        ,

        {
            id: 8,
            title: 'Saint Omer',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting ',
            imageUrl: 'https://player.bfi.org.uk/sites/default/files/styles/square_480x480/public/collection/2022-11/Summertime_Saint_Frances-480.jpg?itok=trULIciL',
            imageUrl1: 'https://player.bfi.org.uk/sites/default/files/styles/square_320x320/public/collection/2023-02/queenglory-480.jpg?itok=01JT25ce',
            imageUrl2: 'https://player.bfi.org.uk/sites/default/files/styles/square_320x320/public/collection/2023-02/queenglory-480.jpg?itok=01JT25ce',

        },
        {
            id: 9,
            title: 'Saint Omer',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting ',
            imageUrl: 'https://player.bfi.org.uk/sites/default/files/styles/square_480x480/public/collection/2023-02/mulholland1-480x480.jpg?itok=NJ5BHyhC',
            imageUrl1: 'https://player.bfi.org.uk/sites/default/files/styles/square_320x320/public/collection/2023-05/nina-menkes-season-crop.jpg?itok=-lJBlCtt',
            imageUrl2: 'https://player.bfi.org.uk/sites/default/files/styles/square_320x320/public/collection/2023-05/nina-menkes-season-crop.jpg?itok=-lJBlCtt',

        }

    ];
    return (
        <div style={{ backgroundColor: 'black' }}>
            <div class="card bg-dark text-white">
                <img src="https://player.bfi.org.uk/sites/default/files/styles/landscape_1440x810/public/homepage/2023-08/pretty_red_dress_2_burn_brighter.jpg?itok=XAEMyUKS" alt="..." />
                <div class="card-img-overlay">
                    <img src="https://player.bfi.org.uk/themes/custom/bfip/images/logo-alt.svg" alt="Logo" style={{ position: 'relative', top: '20%' }} />
                    <h5 className="card-title" style={{ fontSize: 60, fontWeight: "bold", position: 'relative', top: '20%', maxWidth: '60%' }}>
                        The greatest global cinema on demand
                        <p class="card-text " style={{ fontSize: 20, fontWeight: 'lighter' }}>
                            Rent the latest releases, subscribe to classics and explore

                            the best from the BFI, national and regional archives</p></h5>


                </div>
            </div>

            <div className="latest-releases-container">
                <div className="latest-releases-grid">
                    <div className="latest-release-item">
                        <img src="https://player.bfi.org.uk/sites/default/files/styles/portrait_pillar_480x810/public/homepage-section/2017-09/Homepage-pillars_1440_Rentals.jpg?itok=2iCmj682" alt="Latest Release 1" className="latest-release-image" />
                        <div className="latest-release-overlay">
                            <h1 className="latest-release-title">Latest releases</h1>
                            <h4 className="latest-release-description">New and acclaimed films to rent, including those in cinemas now <br /><br />
                                Features from just £2.50 - BFI Member discount available
                            </h4>
                            <Link to='/Rentals'>
                                <Button type="button" className="btn col-md-5" style={{ backgroundColor: '#dc3545', borderColor: 'white' }}>Explore Rentals</Button>
                            </Link>
                        </div>
                    </div>
                    <div className="latest-release-item">
                        <img src="https://player.bfi.org.uk/sites/default/files/styles/portrait_pillar_480x810/public/homepage-section/2023-04/Blue%20Jean_810x480movedleft.png?itok=OwhbfrhN" alt="Latest Release 2" className="latest-release-image" />
                        <div className="latest-release-overlay">
                            <h1 className="latest-release-title">Exceptional cinema</h1>
                            <h4 className="latest-release-description">New and acclaimed films to rent, including those in cinemas now
                                Features from just £2.50 - BFI Member discount available
                            </h4>
                            <a href='/Sub'>
                                <Button type="button" className="btn col-md-5" style={{ backgroundColor: '#673420', borderColor: 'white' }}>Explore Subscription</Button>
                            </a>
                        </div>
                    </div>
                    <div className="latest-release-item">
                        <img src="https://player.bfi.org.uk/sites/default/files/styles/portrait_pillar_480x810/public/homepage-section/2017-09/Homepage-pillars_1440_Free_0.jpg?itok=RSDkzxMX" alt="Latest Release 3" className="latest-release-image" />
                        <div className="latest-release-overlay">
                            <h1 className="latest-release-title">Archive films</h1>
                            <h4 className="latest-release-description">New and acclaimed films to rent, including those in cinemas now
                                Features from just £2.50 - BFI Member discount available
                            </h4>
                            <a href='/Free'>
                                <Button type="button" className="btn col-md-5" style={{ backgroundColor: '#457346', borderColor: 'white' }}>Explore Free</Button>
                            </a>
                        </div>
                    </div>
                </div>


            </div>

            <nav className="navbar bg-danger mt-2">
                <h1 style={{ color: 'white' }}>Explore Rentals</h1>

                <Button type="button" className="btn col-md-2 bg-danger" style={{ backgroundColor: '#673420', borderColor: 'white' }}><a id='b' href='/Rentals'>Explore Rentals</a></Button>

            </nav>
            <div className="gallery-container">
                {images.map((image) => (
                    <GalleryItem key={image.id} image={image.imageUrl} title={image.title} description={image.description} />
                ))}

            </div>

            <nav className="navbar bg-secondary mt-2">
                <h1 style={{ color: 'white' }}>Explore Subscription</h1>
                <Button type="button" className="btn col-md-2 bg-secondary" style={{ backgroundColor: '#673420', borderColor: 'white' }}><a id='b' href='/Sub'>Explore Subscription</a></Button>
            </nav>
            <div className="gallery-container">
                {images.map((image) => (
                    <GalleryItem key={image.id} image={image.imageUrl1} title={image.title} description={image.description} />
                ))}

            </div>

            <nav className="navbar bg-success mt-2">
                <h1 style={{ color: 'white' }}>Explore Free</h1>
                <Button type="button" className="btn col-md-2 bg-success" style={{ backgroundColor: '#457346', borderColor: 'white' }}><a id='b' href='/Free'>Explore Free</a></Button>
            </nav>
            <div className="gallery-container">
                {images.map((image) => (
                    <GalleryItem key={image.id} image={image.imageUrl2} title={image.title} description={image.description} />
                ))}

            </div>
        </div>
    );
};


export default Homepage;


