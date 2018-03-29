import React from 'react';

const Radial = (props) => {
    const BAR_WIDTH = 5;

    const amt = props.completed || 0;
    console.log('props completed: ' + amt);
    const dashString = `${amt}, 100`;

    let text = null;
    if (props.showPercentage) {
        text = (<text x='50%' y='50%' dy='0.3em' textAnchor='middle'>{amt}%</text>);
    }

    return (
        <svg className='Radial' viewBox='0 0 36 36'>
            <g className="Radial__outer">
                <path
                    d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831'
                    fill='none'
                    strokeWidth={BAR_WIDTH}
                />
                <path className='completed'
                    d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831'
                    fill='none'
                    strokeDasharray={dashString}
                />
                { text }
            </g>
        </svg>
    );

};

export default Radial;
