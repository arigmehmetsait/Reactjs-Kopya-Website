import React from "react";
import './Rental.css'
import Carousel from 'react-grid-carousel'
import FloatingCard from '../Parts/FloatingCard'


const GalleryItem = ({ image, title, description }) => (
    <div className="gallery-item">
        <img src={image} alt={title} className="gallery-image" />
        <div className="image-overlay">
            <p className="image-title">{title}</p>
            <p className='image-description'>{description}</p>
            <div className="rent-box">
                <p className="rent-text">Subscribe to watch</p>
            </div>
        </div>
    </div>
);






const Rentals = () => {

    const images = [
        {
            id: 1,
            title: 'Master Gardener',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting ',
            imageUrl: 'https://player.bfi.org.uk/sites/default/files/styles/landscape_480x270/public/hero-images/Master-Gardener.jpg?itok=3JdrKTvq',
        },
        {
            id: 1,
            title: 'Master Gardener',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting ',
            imageUrl: 'https://player.bfi.org.uk/sites/default/files/styles/landscape_480x270/public/hero-images/Master-Gardener.jpg?itok=3JdrKTvq',
        },


        {
            id: 2,
            title: 'Saint Omer',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting ',
            imageUrl: 'https://player.bfi.org.uk/sites/default/files/styles/landscape_480x270/public/hero-images/reality.jpg?itok=UK5Nfybk',

        }
        ,

        {
            id: 3,
            title: 'Saint Omer',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting ',
            imageUrl: 'https://player.bfi.org.uk/sites/default/files/styles/landscape_480x270/public/hero-images/Medusa_1920.jpg?itok=99swdaZl',

        }
        ,

        {
            id: 4,
            title: 'Saint Omer',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting ',
            imageUrl: 'https://player.bfi.org.uk/sites/default/files/styles/landscape_480x270/public/hero-images/Boys-On-Film-23_1920-4.jpg?itok=zBKIkp5x',


        }
        ,

        {
            id: 5,
            title: 'Saint Omer',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting ',
            imageUrl: 'https://player.bfi.org.uk/sites/default/files/styles/landscape_480x270/public/hero-images/Broker_2-1920.jpg?itok=Eukw2TTy',



        }


    ];
    return (
        <div style={{ backgroundColor: 'black' }}>

            <nav className="navbar  d-flex justify-content-center " style={{ backgroundColor: '#ac8545' }}>
                <h1 style={{ color: 'white', fontSize: '100%' }}>Subscription</h1>
            </nav>

            <div class="card bg-dark text-white">
                <img style={{ opacity: 0.5 }} src="https://player.bfi.org.uk/sites/default/files/styles/letterbox_960x420/public/blocks/hero-images/BlueJean-extended-brighter.png?itok=2KJ3HmdN" alt="..." />
                <div class="card-img-overlay">
                    <h5 class="card-title" style={{ fontSize: 60, fontWeight: "bold", position: 'relative', top: '25%', maxWidth: '70%' }}>Discover exceptional cinema <p class="card-text " style={{ fontSize: 20, fontWeight: 'lighter' }}>Exclusives and classic films for subscribers only

                        Free for 14 days, then £4.99/month or £49/year</p></h5>
                </div>
            </div>

            <nav
                className="navbar d-flex flex-column flex-md-row justify-content-md-between"
                style={{ fontSize: 30, fontWeight: 'bold', backgroundColor: '#ac8545', padding: '15px' }}
            >
                <div>
                    <h1 style={{ color: 'white', fontSize: '100%', marginBottom: '10px' }}>Summer offer</h1>
                    <p style={{ maxWidth: '70%', fontSize: 17 }}>Subscribe annually with voucher code SUMMER35 and enjoy a year of film for £35</p>
                    <p style={{ maxWidth: '70%', fontSize: 17 }}>Includes a 14-day free trial for new customers</p>
                </div>
                <div className="mt-3 mt-md-0" >
                    <button style={{ borderRadius: 8, border: 0 }}>Redeem Now</button>
                </div>
            </nav>
            <nav className="navbar bg-black d-flex justify-content-start " style={{ marginLeft: 25, fontSize: 30, fontWeight: 'bold' }}>
                <h1 style={{ color: 'white', fontSize: '100%' }}>What we're watching</h1>
            </nav>

            <div className="gallery-container ">
                {images.map((image) => (
                    <GalleryItem key={image.id} image={image.imageUrl} title={image.title} description={image.description} />
                ))}
            </div>




            <div className="d-flex justify-content-between align-items-center my-2" style={{ marginLeft: 25, fontSize: 30, fontWeight: 'bold' }}>
                <nav className="navbar bg-black">
                    <h1 style={{ color: 'white', fontSize: '100%', marginLeft: 15 }}>New</h1>
                </nav>
                <button type="button" class="btn btn-outline-secondary text-white ">View All</button>
            </div>

            <div >
                <Carousel cols={3} rows={1} gap={0} loop >
                    <Carousel.Item>
                        <a href="" className="carousel-link row ">
                            <img
                                className="carousel-image"
                                src="https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/GODLAND_still01_0.jpg?itok=Y_1GyNAB"
                                alt=""

                            />
                            <div className="carousel-text"><p className="renta-text">Subscribe to watch</p> <strong> Master Gardener</strong> <br /> Drama / 2022 / 111mins <br /> Director: Paul Schrader</div>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="#" className="carousel-link row">
                            <img
                                className="carousel-image"
                                src="https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/INLAND_Still8_MARK-1.jpg?itok=mWiuFYgM"
                                alt=""
                            />
                            <div className="carousel-text"><p className="renta-text">Subscribe to watch</p> <strong> Master Gardener</strong> <br /> Drama / 2022 / 111mins <br /> Director: Paul Schrader</div>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="#" className="carousel-link row">
                            <img
                                className="carousel-image"
                                src="https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/Cairo_Conspiracy.jpg?itok=5E-ka0bj"
                                alt=""
                            />
                            <div className="carousel-text"><p className="renta-text">Subscribe to watch</p> <strong> Master Gardener</strong> <br /> Drama / 2022 / 111mins <br /> Director: Paul Schrader</div>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="#" className="carousel-link row">
                            <img
                                className="carousel-image"
                                src="https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/how-to-blow-up-a-pipeline.jpg?itok=WeG5hCa0"
                                alt=""
                            />
                            <div className="carousel-text"><p className="renta-text">Subscribe to watch</p> <strong> Master Gardener</strong> <br /> Drama / 2022 / 111mins <br /> Director: Paul Schrader</div>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="#" className="carousel-link row">
                            <img
                                className="carousel-image"
                                src="https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/1_9.jpg?itok=Lm7z5knM"
                                alt=""
                            />
                            <div className="carousel-text"> <p className="renta-text">Subscribe to watch</p><strong> Master Gardener</strong> <br /> Drama / 2022 / 111mins <br /> Director: Paul Schrader</div>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="#" className="carousel-link row">
                            <img
                                className="carousel-image"
                                src="https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/Small-Slow-But-Steady_1920-5.jpg?itok=FOiotXTM"
                                alt=""
                            />
                            <div className="carousel-text"><p className="renta-text">Subscribe to watch</p> <strong> Master Gardener</strong> <br /> Drama / 2022 / 111mins <br /> Director: Paul Schrader</div>
                        </a>
                    </Carousel.Item>

                </Carousel>
            </div>

            <div className="d-flex justify-content-between align-items-center my-2" style={{ marginLeft: 25, fontSize: 30, fontWeight: 'bold' }}>
                <nav className="navbar bg-black">
                    <h1 style={{ color: 'white', fontSize: '100%', marginLeft: 15 }}>Popular</h1>
                </nav>
                <button type="button" class="btn btn-outline-secondary text-white ">View All</button>
            </div>



            <div >
                <Carousel cols={3} rows={1} gap={0} loop >
                    <Carousel.Item>
                        <a href="#" className="carousel-link row">
                            <img
                                className="carousel-image"
                                src="https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/GODLAND_still01_0.jpg?itok=Y_1GyNAB"
                                alt=""

                            />
                            <div className="carousel-text"><p className="renta-text">Subscribe to watch</p> <strong> Master Gardener</strong> <br /> Drama / 2022 / 111mins <br /> Director: Paul Schrader</div>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="#" className="carousel-link row">
                            <img
                                className="carousel-image"
                                src="https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/INLAND_Still8_MARK-1.jpg?itok=mWiuFYgM"
                                alt=""
                            />
                            <div className="carousel-text"><p className="renta-text">Subscribe to watch</p> <strong> Master Gardener</strong> <br /> Drama / 2022 / 111mins <br /> Director: Paul Schrader</div>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="#" className="carousel-link row">
                            <img
                                className="carousel-image"
                                src="https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/Cairo_Conspiracy.jpg?itok=5E-ka0bj"
                                alt=""
                            />
                            <div className="carousel-text"><p className="renta-text">Subscribe to watch</p> <strong> Master Gardener</strong> <br /> Drama / 2022 / 111mins <br /> Director: Paul Schrader</div>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="#" className="carousel-link row">
                            <img
                                className="carousel-image"
                                src="https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/how-to-blow-up-a-pipeline.jpg?itok=WeG5hCa0"
                                alt=""
                            />
                            <div className="carousel-text"><p className="renta-text">Subscribe to watch</p> <strong> Master Gardener</strong> <br /> Drama / 2022 / 111mins <br /> Director: Paul Schrader</div>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="#" className="carousel-link row">
                            <img
                                className="carousel-image"
                                src="https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/1_9.jpg?itok=Lm7z5knM"
                                alt=""
                            />
                            <div className="carousel-text"> <p className="renta-text">Subscribe to watch</p><strong> Master Gardener</strong> <br /> Drama / 2022 / 111mins <br /> Director: Paul Schrader</div>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="#" className="carousel-link row">
                            <img
                                className="carousel-image"
                                src="https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/Small-Slow-But-Steady_1920-5.jpg?itok=FOiotXTM"
                                alt=""
                            />
                            <div className="carousel-text"><p className="renta-text">Subscribe to watch</p> <strong> Master Gardener</strong> <br /> Drama / 2022 / 111mins <br /> Director: Paul Schrader</div>
                        </a>
                    </Carousel.Item>

                </Carousel>
            </div>


            <div className="d-flex justify-content-between align-items-center my-2" style={{ marginLeft: 25, fontSize: 30, fontWeight: 'bold' }}>
                <nav className="navbar bg-black">
                    <h1 style={{ color: 'white', fontSize: '100%', marginLeft: 15 }}>Drama</h1>
                </nav>
                <button type="button" class="btn btn-outline-secondary text-white">View All</button>
            </div>

            <div >
                <Carousel cols={3} rows={1} gap={0} loop >
                    <Carousel.Item>
                        <a href="#" className="carousel-link row">
                            <img
                                className="carousel-image"
                                src="https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/GODLAND_still01_0.jpg?itok=Y_1GyNAB"
                                alt=""

                            />
                            <div className="carousel-text"><p className="renta-text">Subscribe to watch</p> <strong> Master Gardener</strong> <br /> Drama / 2022 / 111mins <br /> Director: Paul Schrader</div>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="#" className="carousel-link row">
                            <img
                                className="carousel-image"
                                src="https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/INLAND_Still8_MARK-1.jpg?itok=mWiuFYgM"
                                alt=""
                            />
                            <div className="carousel-text"><p className="renta-text">Subscribe to watch</p> <strong> Master Gardener</strong> <br /> Drama / 2022 / 111mins <br /> Director: Paul Schrader</div>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="#" className="carousel-link row">
                            <img
                                className="carousel-image"
                                src="https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/Cairo_Conspiracy.jpg?itok=5E-ka0bj"
                                alt=""
                            />
                            <div className="carousel-text"><p className="renta-text">Subscribe to watch</p> <strong> Master Gardener</strong> <br /> Drama / 2022 / 111mins <br /> Director: Paul Schrader</div>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="#" className="carousel-link row">
                            <img
                                className="carousel-image"
                                src="https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/how-to-blow-up-a-pipeline.jpg?itok=WeG5hCa0"
                                alt=""
                            />
                            <div className="carousel-text"><p className="renta-text">Subscribe to watch</p> <strong> Master Gardener</strong> <br /> Drama / 2022 / 111mins <br /> Director: Paul Schrader</div>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="#" className="carousel-link row">
                            <img
                                className="carousel-image"
                                src="https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/1_9.jpg?itok=Lm7z5knM"
                                alt=""
                            />
                            <div className="carousel-text"> <p className="renta-text">Subscribe to watch</p><strong> Master Gardener</strong> <br /> Drama / 2022 / 111mins <br /> Director: Paul Schrader</div>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="#" className="carousel-link row">
                            <img
                                className="carousel-image"
                                src="https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/Small-Slow-But-Steady_1920-5.jpg?itok=FOiotXTM"
                                alt=""
                            />
                            <div className="carousel-text"><p className="renta-text">Subscribe to watch</p> <strong> Master Gardener</strong> <br /> Drama / 2022 / 111mins <br /> Director: Paul Schrader</div>
                        </a>
                    </Carousel.Item>

                </Carousel>
            </div>

            <div className="d-flex justify-content-between align-items-center my-0" style={{ marginLeft: 25, fontSize: 30, fontWeight: 'bold' }}>
                <nav className="navbar bg-black">
                    <h1 style={{ color: 'white', fontSize: '100%', marginLeft: 15 }}>Cult Rentals <p style={{ fontSize: 15, fontWeight: 'lighter' }}>Timeless quality from the underground</p></h1>

                </nav>
                <button type="button" class="btn btn-outline-secondary text-white">View All</button>
            </div>


            <div >
                <Carousel cols={3} rows={1} gap={0} loop >
                    <Carousel.Item>
                        <a href="#" className="carousel-link row">
                            <img
                                className="carousel-image"
                                src="https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/GODLAND_still01_0.jpg?itok=Y_1GyNAB"
                                alt=""

                            />
                            <div className="carousel-text"><p className="renta-text">Subscribe to watch</p> <strong > Master Gardener</strong> <br /> Drama / 2022 / 111mins <br /> Director: Paul Schrader</div>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="#" className="carousel-link row">
                            <img
                                className="carousel-image"
                                src="https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/INLAND_Still8_MARK-1.jpg?itok=mWiuFYgM"
                                alt=""
                            />
                            <div className="carousel-text"><p className="renta-text">Subscribe to watch</p> <strong> Master Gardener</strong> <br /> Drama / 2022 / 111mins <br /> Director: Paul Schrader</div>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="#" className="carousel-link row">
                            <img
                                className="carousel-image"
                                src="https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/Cairo_Conspiracy.jpg?itok=5E-ka0bj"
                                alt=""
                            />
                            <div className="carousel-text"><p className="renta-text">Subscribe to watch</p> <strong> Master Gardener</strong> <br /> Drama / 2022 / 111mins <br /> Director: Paul Schrader</div>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="#" className="carousel-link row">
                            <img
                                className="carousel-image"
                                src="https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/how-to-blow-up-a-pipeline.jpg?itok=WeG5hCa0"
                                alt=""
                            />
                            <div className="carousel-text"><p className="renta-text">Subscribe to watch</p> <strong> Master Gardener</strong> <br /> Drama / 2022 / 111mins <br /> Director: Paul Schrader</div>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="#" className="carousel-link row">
                            <img
                                className="carousel-image"
                                src="https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/1_9.jpg?itok=Lm7z5knM"
                                alt=""
                            />
                            <div className="carousel-text"> <p className="renta-text">Subscribe to watch</p><strong> Master Gardener</strong> <br /> Drama / 2022 / 111mins <br /> Director: Paul Schrader</div>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="#" className="carousel-link row">
                            <img
                                className="carousel-image"
                                src="https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/Small-Slow-But-Steady_1920-5.jpg?itok=FOiotXTM"
                                alt=""
                            />
                            <div className="carousel-text"><p className="renta-text">Subscribe to watch</p> <strong> Master Gardener</strong> <br /> Drama / 2022 / 111mins <br /> Director: Paul Schrader</div>
                        </a>
                    </Carousel.Item>

                </Carousel>
            </div>


            <div className="d-flex justify-content-between align-items-center my-2" style={{ marginLeft: 25, fontSize: 30, fontWeight: 'bold' }}>
                <nav className="navbar bg-black">
                    <h1 style={{ color: 'white', fontSize: '100%', marginLeft: 15 }}>New</h1>
                </nav>
                <button type="button" class="btn btn-outline-secondary text-white " >View All</button>
            </div>

            <div >
                <Carousel cols={3} rows={1} gap={0} loop >
                    <Carousel.Item>
                        <a href="#" className="carousel-link row">
                            <img
                                className="carousel-image"
                                src="https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/GODLAND_still01_0.jpg?itok=Y_1GyNAB"
                                alt=""

                            />
                            <div className="carousel-text"><p className="renta-text">Subscribe to watch</p> <strong> Master Gardener</strong> <br /> Drama / 2022 / 111mins <br /> Director: Paul Schrader</div>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="#" className="carousel-link row">
                            <img
                                className="carousel-image"
                                src="https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/INLAND_Still8_MARK-1.jpg?itok=mWiuFYgM"
                                alt=""
                            />
                            <div className="carousel-text"><p className="renta-text">Subscribe to watch</p> <strong> Master Gardener</strong> <br /> Drama / 2022 / 111mins <br /> Director: Paul Schrader</div>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="#" className="carousel-link row">
                            <img
                                className="carousel-image"
                                src="https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/Cairo_Conspiracy.jpg?itok=5E-ka0bj"
                                alt=""
                            />
                            <div className="carousel-text"><p className="renta-text">Subscribe to watch</p> <strong> Master Gardener</strong> <br /> Drama / 2022 / 111mins <br /> Director: Paul Schrader</div>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="#" className="carousel-link row">
                            <img
                                className="carousel-image"
                                src="https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/how-to-blow-up-a-pipeline.jpg?itok=WeG5hCa0"
                                alt=""
                            />
                            <div className="carousel-text"><p className="renta-text">Subscribe to watch</p> <strong> Master Gardener</strong> <br /> Drama / 2022 / 111mins <br /> Director: Paul Schrader</div>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="#" className="carousel-link row">
                            <img
                                className="carousel-image"
                                src="https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/1_9.jpg?itok=Lm7z5knM"
                                alt=""
                            />
                            <div className="carousel-text"> <p className="renta-text">Subscribe to watch</p><strong> Master Gardener</strong> <br /> Drama / 2022 / 111mins <br /> Director: Paul Schrader</div>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="#" className="carousel-link row">
                            <img
                                className="carousel-image"
                                src="https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/Small-Slow-But-Steady_1920-5.jpg?itok=FOiotXTM"
                                alt=""
                            />
                            <div className="carousel-text"><p className="renta-text">Subscribe to watch</p> <strong> Master Gardener</strong> <br /> Drama / 2022 / 111mins <br /> Director: Paul Schrader</div>
                        </a>
                    </Carousel.Item>

                </Carousel>
            </div>


            <div className="d-flex justify-content-between align-items-center my-2" style={{ marginLeft: 25, fontSize: 30, fontWeight: 'bold' }}>
                <nav className="navbar bg-black">
                    <h1 style={{ color: 'white', fontSize: '100%', marginLeft: 15 }}>New</h1>
                </nav>
                <button type="button" class="btn btn-outline-secondary text-white">View All</button>
            </div>


            <div >
                <Carousel cols={3} rows={1} gap={0} loop >
                    <Carousel.Item>
                        <a href="#" className="carousel-link row">
                            <img
                                className="carousel-image"
                                src="https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/GODLAND_still01_0.jpg?itok=Y_1GyNAB"
                                alt=""

                            />
                            <div className="carousel-text"><p className="renta-text">Subscribe to watch</p> <strong> Master Gardener</strong> <br /> Drama / 2022 / 111mins <br /> Director: Paul Schrader</div>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="#" className="carousel-link row">
                            <img
                                className="carousel-image"
                                src="https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/INLAND_Still8_MARK-1.jpg?itok=mWiuFYgM"
                                alt=""
                            />
                            <div className="carousel-text"><p className="renta-text">Subscribe to watch</p> <strong> Master Gardener</strong> <br /> Drama / 2022 / 111mins <br /> Director: Paul Schrader</div>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="#" className="carousel-link row">
                            <img
                                className="carousel-image"
                                src="https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/Cairo_Conspiracy.jpg?itok=5E-ka0bj"
                                alt=""
                            />
                            <div className="carousel-text"><p className="renta-text">Subscribe to watch</p> <strong> Master Gardener</strong> <br /> Drama / 2022 / 111mins <br /> Director: Paul Schrader</div>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="#" className="carousel-link row">
                            <img
                                className="carousel-image"
                                src="https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/how-to-blow-up-a-pipeline.jpg?itok=WeG5hCa0"
                                alt=""
                            />
                            <div className="carousel-text"><p className="renta-text">Subscribe to watch</p> <strong> Master Gardener</strong> <br /> Drama / 2022 / 111mins <br /> Director: Paul Schrader</div>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="#" className="carousel-link row">
                            <img
                                className="carousel-image"
                                src="https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/1_9.jpg?itok=Lm7z5knM"
                                alt=""
                            />
                            <div className="carousel-text"> <p className="renta-text">Subscribe to watch</p><strong> Master Gardener</strong> <br /> Drama / 2022 / 111mins <br /> Director: Paul Schrader</div>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="#" className="carousel-link row">
                            <img
                                className="carousel-image"
                                src="https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/Small-Slow-But-Steady_1920-5.jpg?itok=FOiotXTM"
                                alt=""
                            />
                            <div className="carousel-text"><p className="renta-text">Subscribe to watch</p> <strong> Master Gardener</strong> <br /> Drama / 2022 / 111mins <br /> Director: Paul Schrader</div>
                        </a>
                    </Carousel.Item>

                </Carousel>
            </div>


            <div className="d-flex justify-content-between align-items-center my-2" style={{ marginLeft: 25, fontSize: 30, fontWeight: 'bold' }}>
                <nav className="navbar bg-black">
                    <h1 style={{ color: 'white', fontSize: '100%', marginLeft: 15 }}>French Cinema</h1>
                </nav>
                <button type="button" class="btn btn-outline-secondary text-white">View All</button>
            </div>


            <div >
                <Carousel cols={3} rows={1} gap={0} loop >
                    <Carousel.Item>
                        <a href="#" className="carousel-link row">
                            <img
                                className="carousel-image"
                                src="https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/GODLAND_still01_0.jpg?itok=Y_1GyNAB"
                                alt=""

                            />
                            <div className="carousel-text"><p className="renta-text">Subscribe to watch</p> <strong> Master Gardener</strong> <br /> Drama / 2022 / 111mins <br /> Director: Paul Schrader</div>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="#" className="carousel-link row">
                            <img
                                className="carousel-image"
                                src="https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/INLAND_Still8_MARK-1.jpg?itok=mWiuFYgM"
                                alt=""
                            />
                            <div className="carousel-text"><p className="renta-text">Subscribe to watch</p> <strong> Master Gardener</strong> <br /> Drama / 2022 / 111mins <br /> Director: Paul Schrader</div>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="#" className="carousel-link row">
                            <img
                                className="carousel-image"
                                src="https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/Cairo_Conspiracy.jpg?itok=5E-ka0bj"
                                alt=""
                            />
                            <div className="carousel-text"><p className="renta-text">Subscribe to watch</p> <strong> Master Gardener</strong> <br /> Drama / 2022 / 111mins <br /> Director: Paul Schrader</div>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="#" className="carousel-link row">
                            <img
                                className="carousel-image"
                                src="https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/how-to-blow-up-a-pipeline.jpg?itok=WeG5hCa0"
                                alt=""
                            />
                            <div className="carousel-text"><p className="renta-text">Subscribe to watch</p> <strong> Master Gardener</strong> <br /> Drama / 2022 / 111mins <br /> Director: Paul Schrader</div>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="#" className="carousel-link row">
                            <img
                                className="carousel-image"
                                src="https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/1_9.jpg?itok=Lm7z5knM"
                                alt=""
                            />
                            <div className="carousel-text"> <p className="renta-text">Subscribe to watch</p><strong> Master Gardener</strong> <br /> Drama / 2022 / 111mins <br /> Director: Paul Schrader</div>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="#" className="carousel-link row">
                            <img
                                className="carousel-image"
                                src="https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/Small-Slow-But-Steady_1920-5.jpg?itok=FOiotXTM"
                                alt=""
                            />
                            <div className="carousel-text"><p className="renta-text">Subscribe to watch</p> <strong> Master Gardener</strong> <br /> Drama / 2022 / 111mins <br /> Director: Paul Schrader</div>
                        </a>
                    </Carousel.Item>

                </Carousel>
            </div>



            <div className="d-flex justify-content-between align-items-center my-2" style={{ marginLeft: 25, fontSize: 30, fontWeight: 'bold' }}>
                <nav className="navbar bg-black">
                    <h1 style={{ color: 'white', fontSize: '100%', marginLeft: 15 }}>Sight and Sound Pool</h1>
                </nav>
                <button type="button" class="btn btn-outline-secondary text-white">View All</button>
            </div>

            <div >
                <Carousel cols={3} rows={1} gap={0} loop >
                    <Carousel.Item>
                        <a href="#" className="carousel-link row">
                            <img
                                className="carousel-image"
                                src="https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/GODLAND_still01_0.jpg?itok=Y_1GyNAB"
                                alt=""

                            />
                            <div className="carousel-text"><p className="renta-text">Subscribe to watch</p> <strong> Master Gardener</strong> <br /> Drama / 2022 / 111mins <br /> Director: Paul Schrader</div>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="#" className="carousel-link row">
                            <img
                                className="carousel-image"
                                src="https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/INLAND_Still8_MARK-1.jpg?itok=mWiuFYgM"
                                alt=""
                            />
                            <div className="carousel-text"><p className="renta-text">Subscribe to watch</p> <strong> Master Gardener</strong> <br /> Drama / 2022 / 111mins <br /> Director: Paul Schrader</div>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="#" className="carousel-link row">
                            <img
                                className="carousel-image"
                                src="https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/Cairo_Conspiracy.jpg?itok=5E-ka0bj"
                                alt=""
                            />
                            <div className="carousel-text"><p className="renta-text">Subscribe to watch</p> <strong> Master Gardener</strong> <br /> Drama / 2022 / 111mins <br /> Director: Paul Schrader</div>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="#" className="carousel-link row">
                            <img
                                className="carousel-image"
                                src="https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/how-to-blow-up-a-pipeline.jpg?itok=WeG5hCa0"
                                alt=""
                            />
                            <div className="carousel-text"><p className="renta-text">Subscribe to watch</p> <strong> Master Gardener</strong> <br /> Drama / 2022 / 111mins <br /> Director: Paul Schrader</div>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="#" className="carousel-link row">
                            <img
                                className="carousel-image"
                                src="https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/1_9.jpg?itok=Lm7z5knM"
                                alt=""
                            />
                            <div className="carousel-text"> <p className="renta-text">Subscribe to watch</p><strong> Master Gardener</strong> <br /> Drama / 2022 / 111mins <br /> Director: Paul Schrader</div>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="#" className="carousel-link row">
                            <img
                                className="carousel-image"
                                src="https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/Small-Slow-But-Steady_1920-5.jpg?itok=FOiotXTM"
                                alt=""
                            />
                            <div className="carousel-text"><p className="renta-text">Subscribe to watch</p> <strong> Master Gardener</strong> <br /> Drama / 2022 / 111mins <br /> Director: Paul Schrader</div>
                        </a>
                    </Carousel.Item>

                </Carousel>
            </div>



            <div className="d-flex justify-content-between align-items-center my-2" style={{ marginLeft: 25, fontSize: 30, fontWeight: 'bold' }}>
                <nav className="navbar bg-black">
                    <h1 style={{ color: 'white', fontSize: '100%', marginLeft: 15 }}>Godard Forever</h1>
                </nav>
                <button type="button" class="btn btn-outline-secondary text-white">View All</button>
            </div>


            <div >
                <Carousel cols={3} rows={1} gap={0} loop >
                    <Carousel.Item>
                        <a href="#" className="carousel-link row">
                            <img
                                className="carousel-image"
                                src="https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/GODLAND_still01_0.jpg?itok=Y_1GyNAB"
                                alt=""

                            />
                            <div className="carousel-text"><p className="renta-text">Subscribe to watch</p> <strong> Master Gardener</strong> <br /> Drama / 2022 / 111mins <br /> Director: Paul Schrader</div>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="#" className="carousel-link row">
                            <img
                                className="carousel-image"
                                src="https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/INLAND_Still8_MARK-1.jpg?itok=mWiuFYgM"
                                alt=""
                            />
                            <div className="carousel-text"><p className="renta-text">Subscribe to watch</p> <strong> Master Gardener</strong> <br /> Drama / 2022 / 111mins <br /> Director: Paul Schrader</div>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="#" className="carousel-link row">
                            <img
                                className="carousel-image"
                                src="https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/Cairo_Conspiracy.jpg?itok=5E-ka0bj"
                                alt=""
                            />
                            <div className="carousel-text"><p className="renta-text">Subscribe to watch</p> <strong> Master Gardener</strong> <br /> Drama / 2022 / 111mins <br /> Director: Paul Schrader</div>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="#" className="carousel-link row">
                            <img
                                className="carousel-image"
                                src="https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/how-to-blow-up-a-pipeline.jpg?itok=WeG5hCa0"
                                alt=""
                            />
                            <div className="carousel-text"><p className="renta-text">Subscribe to watch</p> <strong> Master Gardener</strong> <br /> Drama / 2022 / 111mins <br /> Director: Paul Schrader</div>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="#" className="carousel-link row">
                            <img
                                className="carousel-image"
                                src="https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/1_9.jpg?itok=Lm7z5knM"
                                alt=""
                            />
                            <div className="carousel-text"> <p className="renta-text">Subscribe to watch</p><strong> Master Gardener</strong> <br /> Drama / 2022 / 111mins <br /> Director: Paul Schrader</div>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="#" className="carousel-link row">
                            <img
                                className="carousel-image"
                                src="https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/Small-Slow-But-Steady_1920-5.jpg?itok=FOiotXTM"
                                alt=""
                            />
                            <div className="carousel-text"><p className="renta-text">Subscribe to watch</p> <strong> Master Gardener</strong> <br /> Drama / 2022 / 111mins <br /> Director: Paul Schrader</div>
                        </a>
                    </Carousel.Item>

                </Carousel>
            </div>


            <div className="d-flex justify-content-between align-items-center my-2" style={{ marginLeft: 25, fontSize: 30, fontWeight: 'bold' }}>
                <nav className="navbar bg-black">
                    <h1 style={{ color: 'white', fontSize: '100%', marginLeft: 15 }}>Futured collections</h1>
                </nav>
                <button type="button" class="btn btn-outline-secondary text-white">View All</button>
            </div>



        </div>
    );
};



export default Rentals;











// ENTEGRE EDİLECEK KOD


// import React from 'react';
// import { Carousel } from 'react-bootstrap';

// const images = [
//   'resim1.jpg',
//   'resim2.jpg',
//   'resim3.jpg',
//   'resim4.jpg',
//   'resim5.jpg',
//   'resim6.jpg',
// ];

// const MyCarousel = () => {
//   return (
//     <Carousel cols={1} rows={1} gap={0} loop={2}>
//       {images.map((image, index) => (
//         <Carousel.Item key={index}>
//           <img src={image} alt={`Resim ${index + 1}`} />
//         </Carousel.Item>
//       ))}
//     </Carousel>
//   );
// };

// export default MyCarousel;