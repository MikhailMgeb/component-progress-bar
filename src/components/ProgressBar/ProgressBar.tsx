import React, { useRef, useState } from 'react';
import type { DragEvent } from 'react';

import { cnProgressBar } from './ProgressBar.classname';
import { LoadingPicture } from './LoadingPicture/LoadingPicture';

import './ProgressBar.css';

function getPercentFromNumber(eventWidth: number, parentWidth: number) {
    return Math.round((((eventWidth - 49) * 100) / parentWidth));
}

const ProgressBar = () => {
    const [progress, setProgress] = useState(0);
    const progressBarRef = useRef<HTMLDivElement>(null);

    const handleOnDragOver = (event: DragEvent) => {
        const progressBarCurrent = progressBarRef.current as HTMLElement;

        const currentWeightPercents = getPercentFromNumber(event.clientX, progressBarCurrent.clientWidth);

        setProgress(currentWeightPercents);
    }

    const textIndicator = 'Загружено ' + progress + '%';

    return (
        <div className={cnProgressBar('')} draggable onDragOver={handleOnDragOver} ref={progressBarRef}>
            <div className={cnProgressBar('Loader')} style={{ width: progress + '%' }} />
            <div className={cnProgressBar('Indicator')}>{textIndicator}</div>
            <LoadingPicture isLoaded={progress === 100} />
        </div>
    );
}

export { ProgressBar }