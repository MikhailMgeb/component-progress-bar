import React, { FC } from 'react';

import { cnProgressBar } from '../ProgressBar.classname';
import imageLoaded from '../../../assets/image-complete.png';

import './LoadingPicture.css';

type LoadingPictureProps = {
    isLoaded: boolean;
}

const LoadingPicture: FC<LoadingPictureProps> = ({ isLoaded }) => {
    return (
        <div>
            {isLoaded ? <img src={imageLoaded} className={cnProgressBar('Image')} alt='loading' /> : undefined}
        </div>
    );
}

export { LoadingPicture };