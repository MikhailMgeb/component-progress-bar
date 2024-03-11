import React, { useState } from 'react';
import type { DragEvent, FC } from 'react';

import { cnProgressBar } from './ProgressBar.classname';

import './ProgressBar.css';

type ProgressBarProps = {
    onFinish: (arg0: boolean) => void;
}

const ProgressBar: FC<ProgressBarProps> = ({ onFinish }) => {
    const [progress, setProgress] = useState(0);

    const progressPercent = Math.round((progress * 100) / 358);

    const handleOnDragOver = (event: DragEvent) => {
        if (progressPercent === 100) {
            onFinish(true);
            return;
        }

        setProgress(event.clientX - 49);
    }

    const textIndicator = 'Загружено ' + progressPercent + '%';

    return (
        <div className={cnProgressBar('')} draggable onDragOver={handleOnDragOver}>
            <div className={cnProgressBar('Loader')} style={{ width: progressPercent + '%' }} />
            <div className={cnProgressBar('Indicator')}>{textIndicator}</div>
        </div>
    );
}

export { ProgressBar };
