import React, { useState } from 'react';
import type { DragEvent, FC } from 'react';

import { cnProgressBar } from './ProgressBar.classname';

import './ProgressBar.css';

type ProgressBarProps = {
    progressLoading: (arg0: boolean) => void;
}

const ProgressBar: FC<ProgressBarProps> = ({ progressLoading }) => {
    const [progress, setProgress] = useState(0);

    const handleOnDragOver = (event: DragEvent) => {

        if (progress === 360) {
            event.preventDefault();
            progressLoading(true);
            return;
        }

        setProgress(event.clientX - 49);
    }

    const textIndicator = 'Загружено ' + Math.round((progress * 100) / 360) + '%';

    return (
        <div className={cnProgressBar('')} draggable onDragOver={handleOnDragOver}>
            <div className={cnProgressBar('Loader')} style={{ width: progress + 'px' }} />
            <div className={cnProgressBar('Indicator')}>{textIndicator}</div>
        </div>
    );
}

export { ProgressBar };
