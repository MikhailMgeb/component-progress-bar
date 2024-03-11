import React, { FC } from 'react';

import { cnLoadingPicture } from './LoadingPicture.classname';
import imageComplete from '../../assets/image-complete.png';

import './LoadingPicture.css';

type LoadingPictureProps = {
    isFinish: boolean;
}

const LoadingPicture: FC<LoadingPictureProps> = ({ isFinish }) => {
    return (
        <>
            {isFinish ? <img src={imageComplete} className={cnLoadingPicture('Image')} alt='loading' /> : undefined}
        </>
    );
}

export { LoadingPicture };