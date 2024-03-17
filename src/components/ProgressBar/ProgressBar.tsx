import React, { useState } from 'react';
import type { MouseEvent } from 'react';

import { cnProgressBar } from './ProgressBar.classname';
import { LoadingPicture } from './LoadingPicture/LoadingPicture';

import './ProgressBar.css';

function getPercentFromNumber(eventWidth: number) {
    return Math.round(((eventWidth * 100) / 360));
}

const ProgressBar = () => {
    const [progress, setProgress] = useState({
        isPressMouse: false,
        isFinish: false,
        progress: 0
    });

    const handleMouseProgress = (event: MouseEvent<HTMLElement>) => {
        if (progress.progress === 100) {
            return;
        }

        const target = event.target as HTMLElement;
        let offsetX = event.clientX - target.offsetLeft;

        if (progress.isPressMouse === true && progress.isFinish === false) {
            const progressPercent = getPercentFromNumber(offsetX);
            setProgress((prev) => ({ ...prev, progress: progressPercent }));
        } else {
            return
        }
    }

    const handleMouseDown = () => {
        setProgress(prev => ({ ...prev, isPressMouse: true }))
    }

    const handleMouseUp = () => {
        setProgress(prev => ({ ...prev, isPressMouse: false }))
    }

    const textIndicator = 'Загружено ' + progress.progress + '%';

    return (
        <div className={cnProgressBar('')}>
            <div className={cnProgressBar('Container')}
                onMouseMove={handleMouseProgress}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
            >
                <div className={cnProgressBar('Loader')} style={{ width: progress.progress + '%' }} />
                <div className={cnProgressBar('Indicator')}>{textIndicator}</div>
                <LoadingPicture isLoaded={progress.progress === 100} />
            </div>
        </div>

    );
}

export { ProgressBar }