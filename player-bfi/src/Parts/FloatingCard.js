import React from 'react';
import './FloatingCard';

const images = [
    {
        id: 1,
        title: 'Resim 1',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
        imageUrl: 'https://player.bfi.org.uk/sites/default/files/styles/square_640x640/public/collection/2023-02/mulholland1-480x480.jpg?itok=VrPQQgkz',
    },
    {
        id: 2,
        title: 'Resim 2',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
        imageUrl: 'https://player.bfi.org.uk/sites/default/files/styles/square_640x640/public/collection/2022-03/lola%20and%20the%20sea%20flare%20480%20480.jpg?itok=IcoMCDDd',
    },
    {
        id: 3,
        title: 'Resim 3',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
        imageUrl: 'https://player.bfi.org.uk/sites/default/files/styles/square_640x640/public/collection/2022-09/ag_480.jpg?itok=9d9h4uO_',
    },
];

const FloatingCard = () => {
    return (
        <div className="image-grid">
            {images.map((image) => (
                <div key={image.id} className="image-item">
                    <img src={image.imageUrl} alt={image.title} />
                    <div className="image-overlay">
                        <div className="overlay-title">{image.title}</div>
                        <div className="overlay-description">{image.description}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FloatingCard;
