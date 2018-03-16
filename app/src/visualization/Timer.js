import React from 'react';

const Timer = (props) => {
  let startAnimation = props.startAnimation;
  let counter = props.counter;
  let dire = props.dire;
  let numCount = (<text className="numStyle" x='160' y='205' textAnchor='middle'>{counter}</text>);
  let direction = (<text className="textStyle" x='160' y='190' textAnchor='middle'>{dire}</text>);

  return(
    <div>
        <svg viewBox="0 0 320 320" preserveAspectRatio='none'>
        <g id="Layer_2_1_">
            <g id="Layer_1-2">
            <circle className="st0" cx="160" cy="160" r="160"/>
            <path className="st1" d="M215.7,42.5c14.6,6.9,27.7,16.5,38.8,28.2c0.8,0.9,2.1,0.9,3,0.1l10.9-9.9c0.9-0.8,0.9-2.2,0.1-3.1c0,0,0,0,0,0c-12.8-13.7-28.1-24.8-45.1-32.8c-1.1-0.5-2.3,0-2.8,1c0,0,0,0,0,0l-6,13.4C214.2,40.8,214.6,42,215.7,42.5z"/>
                <g id="Layer_2_1_">
                  	<g className="timerTicks" id="btn">
                  		<circle className="outerRing" cx="160" cy="160" r="160"/>
                      <g className={counter === 16 || counter === 0 ? "notActive" : "active"}>
                        <path className='for-1' d="M101.2,25.4l6,13.5c0.5,1.1,1.7,1.6,2.8,1.1c0,0,0,0,0,0c14.9-6.3,30.8-9.6,46.9-10c1.2,0,2.1-1,2.1-2.1V13.2c0-1.2-0.9-2.2-2.1-2.2c0,0,0,0-0.1,0c-18.7,0.4-37.3,4.3-54.5,11.6C101.2,23,100.7,24.3,101.2,25.4C101.2,25.4,101.2,25.4,101.2,25.4z"/>
                        <path className='for-2' d="M51.6,61l10.9,9.8c0.9,0.8,2.2,0.7,3-0.1C76.6,59,89.7,49.4,104.3,42.5c1-0.5,1.5-1.7,1-2.8l-6-13.5c-0.5-1.1-1.7-1.6-2.8-1.1c0,0,0,0,0,0c-16.9,8-32.2,19.1-45,32.8C50.7,58.9,50.7,60.2,51.6,61z"/>
                        <path className='for-3' d="M20.6,113.7l14,4.6c1.1,0.4,2.3-0.2,2.7-1.3c5.3-15.2,13.5-29.3,24-41.5c0.8-0.9,0.7-2.2-0.2-3l-10.9-9.8c-0.9-0.8-2.2-0.7-3,0.2c-12.3,14.2-21.8,30.5-27.9,48.2C18.9,112,19.5,113.3,20.6,113.7C20.6,113.6,20.6,113.6,20.6,113.7z"/>
                        <path className='for-4' d="M20,115.6c-1.1-0.4-2.3,0.3-2.7,1.4c0,0,0,0,0,0c-4.2,13.9-6.3,28.4-6.3,43c0,4.2,0.2,8.3,0.5,12.4c0.1,1.2,1.1,2,2.3,1.9c0,0,0,0,0.1,0l14.7-1.5c1.2-0.1,2-1.2,1.9-2.3c-0.3-3.5-0.4-7-0.4-10.5c0-12.6,1.8-25.1,5.4-37.2c0.3-1.1-0.3-2.3-1.4-2.7L20,115.6z"/>
                        <path className='for-5' d="M12.2,178.7c2.3,18.6,8.1,36.6,17.2,53c0.6,1,1.9,1.4,2.9,0.8c0,0,0,0,0,0l12.8-7.4c1-0.6,1.4-1.9,0.8-2.9c-7.8-14.1-12.8-29.6-14.8-45.6c-0.1-1.2-1.2-2-2.3-1.9l-14.6,1.5C12.9,176.4,12,177.5,12.2,178.7C12.2,178.7,12.2,178.7,12.2,178.7z"/>
                        <path className='for-6' d="M32.6,237.2c9.8,16,22.4,30,37.3,41.4c0.9,0.7,2.3,0.5,3-0.4c0,0,0,0,0,0l8.7-11.9c0.7-0.9,0.5-2.3-0.4-3c0,0,0,0,0,0c-12.8-9.8-23.7-21.9-32.1-35.6c-0.6-1-1.9-1.3-2.9-0.8l-12.8,7.4C32.3,234.9,32,236.2,32.6,237.2C32.6,237.2,32.6,237.2,32.6,237.2z"/>
                        <path className='for-7' d="M75,282.4c15.4,10.7,32.6,18.4,50.9,22.7c1.2,0.3,2.3-0.5,2.6-1.6c0,0,0,0,0,0l3.1-14.4c0.2-1.1-0.5-2.3-1.6-2.5c-15.7-3.7-30.6-10.3-43.8-19.5c-0.9-0.7-2.3-0.5-3,0.4c0,0,0,0,0,0l-8.7,11.9C73.8,280.4,74,281.7,75,282.4C75,282.4,75,282.4,75,282.4z"/>
                        <path className='for-8' d="M132.1,306.4c18.4,3.5,37.3,3.5,55.7,0c1.2-0.2,1.9-1.4,1.7-2.5c0,0,0,0,0,0l-3.1-14.4c-0.2-1.1-1.3-1.9-2.5-1.6c-15.9,2.9-32.1,2.9-48,0c-1.1-0.2-2.2,0.5-2.5,1.6l-3.1,14.4C130.2,305,130.9,306.1,132.1,306.4C132.1,306.4,132.1,306.4,132.1,306.4z"/>
                        <path className='for-9' d="M188.4,289l3.1,14.4c0.2,1.2,1.4,1.9,2.5,1.7c0,0,0,0,0,0c18.3-4.2,35.5-11.9,50.9-22.6c1-0.7,1.2-2,0.5-3c0,0,0,0,0,0l-8.6-11.9c-0.7-1-2-1.2-3-0.5c0,0,0,0,0,0c-13.2,9.2-28.1,15.8-43.8,19.5C188.9,286.8,188.2,287.9,188.4,289z"/>
                        <path className='for-10' d="M238.5,266.3l8.6,11.9c0.7,1,2,1.2,3,0.5c0,0,0,0,0,0c14.9-11.4,27.5-25.4,37.3-41.4c0.6-1,0.3-2.3-0.7-2.9c0,0-0.1,0-0.1-0.1l-12.8-7.4c-1-0.6-2.3-0.2-2.9,0.8c-8.4,13.8-19.3,25.8-32.1,35.7C237.9,264,237.7,265.3,238.5,266.3C238.5,266.3,238.5,266.3,238.5,266.3z"/>
                        <path className='for-11' d="M274.9,225.2l12.8,7.4c1,0.6,2.4,0.2,2.9-0.8c0,0,0,0,0,0c9.1-16.4,14.9-34.4,17.2-53c0.1-1.2-0.7-2.2-1.9-2.4c0,0,0,0,0,0l-14.6-1.5c-1.2-0.1-2.2,0.7-2.3,1.9c-2,16-7.1,31.5-14.8,45.6C273.6,223.3,273.9,224.6,274.9,225.2z"/>
                        <path className='for-12' d="M291.5,172.8l14.6,1.5c1.2,0.1,2.2-0.7,2.4-1.9c0,0,0,0,0-0.1c0.3-4.1,0.5-8.2,0.5-12.4c0-14.6-2.1-29.1-6.3-43c-0.4-1.1-1.6-1.8-2.7-1.4c0,0,0,0,0,0l-14,4.6c-1.1,0.4-1.7,1.5-1.4,2.7c3.6,12.1,5.4,24.6,5.4,37.2c0,3.5-0.1,7-0.4,10.5C289.5,171.7,290.3,172.7,291.5,172.8z"/>
                        <path className='for-13' d="M258.6,75.3c10.5,12.2,18.7,26.3,24,41.5c0.4,1.1,1.6,1.7,2.7,1.3l14-4.6c1.1-0.4,1.7-1.6,1.4-2.7c0,0,0,0,0-0.1c-6.2-17.7-15.6-34.1-27.9-48.2c-0.8-0.9-2.1-1-3-0.2c0,0,0,0,0,0l-10.9,9.8C258,73.1,257.9,74.5,258.6,75.3z"/>
                        <path className='for-14' d="M215.7,42.5c14.6,6.9,27.7,16.5,38.8,28.2c0.8,0.9,2.1,0.9,3,0.1l10.9-9.9c0.9-0.8,0.9-2.2,0.1-3.1c0,0,0,0,0,0c-12.8-13.7-28.1-24.8-45.1-32.8c-1.1-0.5-2.3,0-2.8,1c0,0,0,0,0,0l-6,13.4C214.2,40.8,214.6,42,215.7,42.5z"/>
                        <path className='for-15' d="M163.1,30c16.1,0.4,32,3.8,46.9,10c1.1,0.5,2.3,0,2.8-1.1l6-13.5c0.5-1.1,0-2.3-1.1-2.8c0,0,0,0,0,0c-17.3-7.3-35.8-11.2-54.5-11.6c-1.2,0-2.2,0.9-2.2,2.1c0,0,0,0,0,0.1v14.7C161,29,161.9,30,163.1,30z"/>
                        <circle className="innerRing" cx="160" cy="160" r="118"/>
                      </g>
                    </g>
                </g>
            </g>
        </g>
        {counter === 16 || counter === 0 ? direction : numCount}
        </svg>
    </div>
  )
}

export default Timer;
