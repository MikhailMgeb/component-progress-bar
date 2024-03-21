import { cnProgressBar } from '../ProgressBar/ProgressBar.classname';
import imageLoaded from '../../assets/image-complete.png';

import './LoadingPicture.css';

const LoadingPicture = () => {
    return (
        <div className={cnProgressBar('ContainerImage')}>
            <img src={imageLoaded} className={cnProgressBar('Image')} alt='loading' />
        </div>
    );
}

export { LoadingPicture };