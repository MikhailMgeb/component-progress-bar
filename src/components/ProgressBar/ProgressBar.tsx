import React, { useState } from 'react';
import type { FC, MouseEvent } from 'react';

import { cnProgressBar } from './ProgressBar.classname';

import './ProgressBar.css';

function getPercentFromNumber(eventWidth: number) {
    return Math.round(((eventWidth * 100) / 360));
}

type ProgressBarProps = {
    onProgress: (progress: number) => void;
    progress: number;
}

const ProgressBar: FC<ProgressBarProps> = ({ onProgress, progress }) => {
    const [isActive, setIsActive] = useState(false);

    const handleMouseProgress = (event: MouseEvent<HTMLElement>) => {
        if (progress === 100) {
            return;
        }

        const target = event.target as HTMLElement;

        let offsetX = event.clientX - target.offsetLeft;

        if (isActive === true) {
            const progressPercent = getPercentFromNumber(offsetX);
            onProgress(progressPercent);
        }
    }

    const handleMouseDown = () => {
        setIsActive((true));
    }

    const handleMouseUp = () => {
        setIsActive((false));
    }

    const textIndicator = 'Загружено ' + progress + '%';

    return (
        <div className={cnProgressBar()}>
            <div className={cnProgressBar('Container')}
                onMouseMove={handleMouseProgress}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
            >
                <div className={cnProgressBar('Loader')} style={{ width: progress + '%' }} />
                <div className={cnProgressBar('Indicator')}>{textIndicator}</div>
            </div>
        </div>

    );
}

export { ProgressBar }