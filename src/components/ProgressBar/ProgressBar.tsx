import React, { useRef, useState } from 'react';
import type { DragEvent, FC } from 'react';

import { cnProgressBar } from './ProgressBar.classname';

import './ProgressBar.css';

type ProgressBarProps = {
    onFinish: () => void;
}

function getPercentFromNumber(eventWidth: number, parentWidth: number) {
    return Math.round((((eventWidth - 49) * 100) / parentWidth));
}

const ProgressBar: FC<ProgressBarProps> = ({ onFinish }) => {
    const [progress, setProgress] = useState(0);
    const progressBarRef = useRef<HTMLDivElement>(null);

    const handleOnDragOver = (event: DragEvent) => {
        const progressBarCurrent = progressBarRef.current as HTMLElement;

        const currentWeightPercents = getPercentFromNumber(event.clientX, progressBarCurrent.clientWidth);

        if (progress === 100) {
            onFinish();
            return;
        }

        setProgress(currentWeightPercents);
    }

    const textIndicator = 'Загружено ' + progress + '%';

    return (
        <div className={cnProgressBar('')} draggable onDragOver={handleOnDragOver} ref={progressBarRef}>
            <div className={cnProgressBar('Loader')} style={{ width: progress + '%' }} />
            <div className={cnProgressBar('Indicator')}>{textIndicator}</div>
        </div>
    );
}

export { ProgressBar }