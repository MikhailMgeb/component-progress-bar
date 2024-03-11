import React, { useRef, useState } from 'react';
import type { DragEvent, FC } from 'react';

import { cnProgressBar } from './ProgressBar.classname';

import './ProgressBar.css';

type ProgressBarProps = {
    onFinish: () => void;
}

const ProgressBar: FC<ProgressBarProps> = ({ onFinish }) => {
    const [progress, setProgress] = useState(0);
    const loaderRef = useRef<HTMLDivElement>(null);

    const handleOnDragOver = (event: DragEvent) => {
        const currentWeightPercents = Math.round((((event.clientX - 49) * 100) / 360));

        if (progress === 100) {
            onFinish();
            return;
        }

        setProgress(currentWeightPercents);
    }

    const textIndicator = 'Загружено ' + progress + '%';

    return (
        <div className={cnProgressBar('')} draggable onDragOver={handleOnDragOver}>
            <div ref={loaderRef} className={cnProgressBar('Loader')} style={{ width: progress + '%' }} />
            <div className={cnProgressBar('Indicator')}>{textIndicator}</div>
        </div>
    );
}

export { ProgressBar }