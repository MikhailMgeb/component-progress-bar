import React, { FC } from 'react';

import { cnLoadingPicture } from './LoadingPicture.classname';
import imageComplete from '../../assets/image-complete.png';

import './LoadingPicture.css';

type LoadingPictureProps = {
    isLoading: boolean;
}

const LoadingPicture: FC<LoadingPictureProps> = ({ isLoading }) => {
    return (
        <>
            {isLoading ? <img src={imageComplete} className={cnLoadingPicture('Image')} alt='loading' /> : undefined}
        </>
    );
}

export { LoadingPicture };