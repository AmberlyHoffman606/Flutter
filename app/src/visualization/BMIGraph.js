import React from 'react';

const BMIGraph = (props) => {
  let res = props.results;
  let rotationDegree = props.rotation;
  let text = (<text className='bmiText' x='0' y='0' textAnchor='middle'>
                <tspan x='350' y='338'>BMI:</tspan>
                <tspan x='350' y='368'>{props.bmi}</tspan>
              </text>);
  console.log('rotation degree: ' + rotationDegree);
  return(
    <div>
      <svg className="BMIGraph" viewBox="0 0 696.9 439.2" width="350" preserveAspectRatio='none'>
      <g className="">
          <path className="refNum" d="M350.2,48.1v3.7h-21c0-0.9,0.1-1.8,0.5-2.7c0.5-1.4,1.4-2.8,2.6-4.2c1.2-1.4,2.9-3,5.1-4.8c3.5-2.8,5.8-5.1,7-6.7c1.2-1.7,1.8-3.2,1.8-4.7c0-1.5-0.6-2.8-1.7-3.9c-1.1-1.1-2.5-1.6-4.3-1.6c-1.9,0-3.4,0.6-4.5,1.7c-1.1,1.1-1.7,2.7-1.7,4.7l-4-0.4c0.3-3,1.3-5.3,3.1-6.8c1.8-1.6,4.2-2.4,7.2-2.4c3,0,5.5,0.8,7.2,2.5c1.8,1.7,2.7,3.8,2.7,6.3c0,1.3-0.3,2.5-0.8,3.7c-0.5,1.2-1.4,2.5-2.6,3.9c-1.2,1.4-3.2,3.2-6,5.6c-2.3,2-3.8,3.3-4.5,4s-1.2,1.4-1.6,2.1H350.2z"/>
          <path className="refNum" d="M354.3,43.6l4.1-0.3c0.3,2,1,3.5,2.1,4.5c1.1,1,2.4,1.5,4,1.5c1.9,0,3.5-0.7,4.8-2.1c1.3-1.4,1.9-3.3,1.9-5.6c0-2.2-0.6-4-1.9-5.3c-1.2-1.3-2.9-1.9-4.9-1.9c-1.3,0-2.4,0.3-3.4,0.9c-1,0.6-1.8,1.3-2.4,2.2l-3.7-0.5l3.1-16.3h15.8v3.7h-12.7l-1.7,8.5c1.9-1.3,3.9-2,6-2c2.8,0,5.1,1,7,2.9c1.9,1.9,2.9,4.4,2.9,7.4c0,2.9-0.8,5.4-2.5,7.5c-2,2.6-4.8,3.9-8.3,3.9c-2.9,0-5.2-0.8-7.1-2.4C355.6,48.4,354.6,46.2,354.3,43.6z"/>
      </g>
      <g>
	         <path className="lines" d="M347.9,94.9c-0.8,0-1.5-0.7-1.5-1.5v-25c0-0.8,0.7-1.5,1.5-1.5c0.8,0,1.5,0.7,1.5,1.5v25C349.4,94.2,348.7,94.9,347.9,94.9z"/>
      </g>
      <g className="">
        	<path className="refNum" d="M122.1,152.3l-2.8,2.8l-17.6-17.6c0,1.3-0.3,2.8-0.7,4.5c-0.4,1.7-0.9,3.2-1.5,4.3l-2.7-2.7c0.8-2.3,1.3-4.5,1.4-6.7c0.1-2.2-0.1-4-0.6-5.5l1.8-1.8L122.1,152.3z"/>
          <path className="refNum" d="M121.2,128.9c-1.6,0.7-3,1-4.3,0.8c-1.3-0.2-2.5-0.9-3.6-2c-1.6-1.6-2.4-3.6-2.4-5.9c0.1-2.3,1.1-4.4,3-6.4c2-2,4.1-3,6.4-3c2.3-0.1,4.3,0.7,5.9,2.4c1,1,1.7,2.2,1.9,3.5c0.2,1.3,0,2.7-0.7,4.3c1.8-0.9,3.6-1.3,5.3-1c1.7,0.3,3.3,1.1,4.7,2.5c1.9,1.9,2.9,4.2,2.8,6.9c-0.1,2.7-1.2,5.1-3.4,7.3c-2.2,2.2-4.7,3.3-7.3,3.4c-2.7,0-5-0.9-6.9-2.9c-1.5-1.5-2.3-3.1-2.6-4.8C119.8,132.3,120.2,130.6,121.2,128.9z M116,124.7c1.1,1.1,2.3,1.6,3.6,1.6c1.4,0,2.6-0.6,3.7-1.7c1.1-1.1,1.6-2.3,1.6-3.6c0-1.3-0.5-2.5-1.4-3.5c-1-1-2.2-1.5-3.6-1.5s-2.6,0.5-3.6,1.6c-1.1,1.1-1.6,2.3-1.6,3.6C114.6,122.7,115.1,123.8,116,124.7z M125.5,136c0.8,0.8,1.7,1.4,2.8,1.7c1.1,0.4,2.2,0.4,3.4,0c1.1-0.3,2.1-0.9,3-1.8c1.3-1.3,2-2.8,2-4.5c0-1.7-0.6-3.2-1.9-4.5c-1.3-1.3-2.9-2-4.6-2c-1.8,0-3.3,0.7-4.6,2c-1.3,1.3-1.9,2.8-1.9,4.5C123.6,133.2,124.2,134.7,125.5,136z"/>
          <path className="refNum" d="M148.2,126.3l-3.1-3.1l3.1-3.1l3.1,3.1L148.2,126.3z"/>
          <path className="refNum" d="M149.4,113.2l2.6-3.1c1.6,1.2,3.2,1.8,4.7,1.7c1.5-0.1,2.8-0.7,3.9-1.8c1.3-1.3,2-3,1.9-4.9c-0.1-1.9-0.9-3.7-2.6-5.4c-1.6-1.6-3.3-2.4-5-2.4c-1.8,0-3.4,0.7-4.8,2.1c-0.9,0.9-1.5,1.9-1.8,3c-0.3,1.1-0.3,2.2-0.1,3.3l-2.9,2.3l-9.4-13.7L147,83.2l2.6,2.6l-9,9l4.8,7.2c0.4-2.3,1.4-4.2,2.8-5.7c2-2,4.3-2.9,7-2.9c2.7,0,5.1,1.1,7.3,3.2c2,2,3.2,4.4,3.5,7c0.4,3.3-0.7,6.1-3.2,8.6c-2,2-4.3,3.1-6.7,3.3S151.5,115,149.4,113.2z"/>
      </g>
      <g>
        	<path className="lines" d="M163.3,171.3c-0.4,0-0.8-0.1-1.1-0.4l-17.6-17.6c-0.6-0.6-0.6-1.5,0-2.1c0.6-0.6,1.5-0.6,2.1,0l17.6,17.6c0.6,0.6,0.6,1.5,0,2.1C164,171.1,163.7,171.3,163.3,171.3z"/>
      </g>
      <g className="">
        	<path className="refNum" d="M45.4,355.7v3.9H20.5c0.9,0.9,1.8,2.2,2.7,3.7c0.9,1.5,1.6,2.9,2,4.1h-3.8c-1-2.2-2.3-4.1-3.7-5.7s-2.9-2.8-4.2-3.5v-2.5H45.4z"/>
        	<path className="refNum" d="M37,345.7l-0.3-4.1c2-0.3,3.5-1,4.5-2.1c1-1.1,1.5-2.4,1.5-4c0-1.9-0.7-3.5-2.1-4.8c-1.4-1.3-3.3-1.9-5.6-1.9c-2.2,0-4,0.6-5.3,1.9c-1.3,1.2-1.9,2.9-1.9,4.9c0,1.3,0.3,2.4,0.9,3.4c0.6,1,1.3,1.8,2.2,2.4l-0.5,3.7L14,342v-15.8h3.7v12.7l8.5,1.7c-1.3-1.9-2-3.9-2-6c0-2.8,1-5.1,2.9-7c1.9-1.9,4.4-2.9,7.4-2.9c2.9,0,5.4,0.8,7.5,2.5c2.6,2,3.9,4.8,3.9,8.3c0,2.9-0.8,5.2-2.4,7.1C41.9,344.4,39.7,345.5,37,345.7z"/>
      </g>
      <g>
        	<path className="lines" d="M86.9,355.9h-25c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5h25c0.8,0,1.5,0.7,1.5,1.5S87.7,355.9,86.9,355.9z"/>
      </g>
      <g className="">
          <path className="refNum" d="M553.3,120.2l3.1,2.4c-1.2,1.9-1.8,3.5-1.8,5c0.1,1.4,0.7,2.7,1.7,3.8c1.3,1.3,2.8,1.9,4.6,1.9c1.8,0,3.4-0.7,4.7-2c1.3-1.3,1.9-2.7,1.9-4.4c0-1.6-0.6-3.1-1.9-4.4c-0.5-0.5-1.3-1.1-2.3-1.6l2.7-2.1c0.2,0.2,0.3,0.4,0.4,0.5c1.2,1.2,2.5,1.9,4.1,2.3s3-0.1,4.2-1.4c1-1,1.5-2.2,1.5-3.5c0-1.3-0.6-2.6-1.7-3.6c-1.1-1.1-2.3-1.6-3.7-1.7c-1.4,0-2.9,0.5-4.4,1.7l-2.3-3.2c2.2-1.5,4.4-2.2,6.6-2c2.2,0.2,4.2,1.2,6,2.9c1.2,1.2,2.1,2.6,2.6,4.2c0.5,1.6,0.6,3.1,0.2,4.5c-0.4,1.5-1.1,2.7-2.1,3.7c-1,1-2.1,1.6-3.4,1.9c-1.3,0.3-2.7,0.1-4.2-0.4c1,1.6,1.4,3.3,1.2,5c-0.2,1.7-1.1,3.3-2.5,4.7c-2,2-4.3,2.9-7.1,2.8s-5.3-1.2-7.5-3.4c-2-2-3-4.2-3.1-6.7C550.9,124.5,551.6,122.2,553.3,120.2z"/>
        	<path className="refNum" d="M575.9,132.5c2.7-2.7,5.1-4.5,7.2-5.6c2.2-1.1,4.2-1.5,6.2-1.3c2,0.2,3.7,1.1,5.4,2.7c1.2,1.2,2,2.5,2.4,3.9c0.4,1.4,0.5,2.8,0.2,4.3c-0.3,1.5-1,3.1-1.9,4.7s-2.6,3.6-4.8,5.8c-2.6,2.6-5,4.5-7.2,5.6c-2.2,1.1-4.2,1.5-6.2,1.3c-2-0.2-3.8-1.1-5.4-2.8c-2.2-2.2-3.1-4.6-2.8-7.4C569.4,140.5,571.7,136.7,575.9,132.5z M578.7,135.3c-3.7,3.7-5.7,6.6-6.1,8.7c-0.4,2.1,0.1,3.8,1.4,5s2.9,1.7,5,1.4s5-2.4,8.6-6.1c3.7-3.7,5.7-6.6,6.1-8.7c0.4-2.1-0.1-3.8-1.4-5c-1.3-1.3-2.8-1.7-4.6-1.4C585.4,129.6,582.4,131.6,578.7,135.3z"/>
      </g>
      <g>
        	<path className="lines" d="M532.5,171.3c-0.4,0-0.8-0.1-1.1-0.4c-0.6-0.6-0.6-1.5,0-2.1l17.6-17.6c0.6-0.6,1.5-0.6,2.1,0s0.6,1.5,0,2.1l-17.6,17.6C533.2,171.1,532.9,171.3,532.5,171.3z"/>
      </g>
      <g className="">
        	<path className="refNum" d="M659,336.2l0.5,3.9c-2.2,0.4-3.8,1.2-4.8,2.3s-1.5,2.4-1.5,3.9c0,1.8,0.6,3.4,1.9,4.6c1.3,1.3,2.8,1.9,4.7,1.9c1.8,0,3.3-0.6,4.4-1.8c1.2-1.2,1.7-2.7,1.7-4.5c0-0.7-0.1-1.7-0.4-2.8l3.4,0.4c0,0.3,0,0.5,0,0.6c0,1.7,0.4,3.2,1.3,4.5c0.9,1.3,2.2,2,4,2c1.4,0,2.6-0.5,3.6-1.5s1.4-2.2,1.4-3.7c0-1.5-0.5-2.8-1.4-3.8s-2.4-1.7-4.3-1.9l0.7-3.9c2.6,0.5,4.6,1.6,6.1,3.2c1.4,1.7,2.2,3.8,2.2,6.3c0,1.7-0.4,3.3-1.1,4.8c-0.7,1.5-1.8,2.6-3,3.3c-1.3,0.8-2.6,1.2-4.1,1.2c-1.4,0-2.6-0.4-3.7-1.1c-1.1-0.7-2-1.8-2.7-3.3c-0.4,1.9-1.3,3.3-2.7,4.4S662,357,660,357c-2.8,0-5.1-1-7-3c-1.9-2-2.9-4.6-2.9-7.7c0-2.8,0.8-5.1,2.5-6.9C654.2,337.5,656.3,336.5,659,336.2z"/>
        	<path className="refNum" d="M658.9,360.9l0.3,4.1c-2,0.3-3.5,1-4.5,2.1s-1.5,2.4-1.5,4c0,1.9,0.7,3.5,2.1,4.8c1.4,1.3,3.3,1.9,5.6,1.9c2.2,0,4-0.6,5.3-1.9c1.3-1.2,1.9-2.9,1.9-4.9c0-1.3-0.3-2.4-0.9-3.4c-0.6-1-1.3-1.8-2.2-2.4l0.5-3.7l16.3,3.1v15.8h-3.7v-12.7l-8.5-1.7c1.3,1.9,2,3.9,2,6c0,2.8-1,5.1-2.9,7c-1.9,1.9-4.4,2.9-7.4,2.9c-2.9,0-5.4-0.8-7.5-2.5c-2.6-2-3.9-4.8-3.9-8.3c0-2.9,0.8-5.2,2.4-7.1C654.1,362.2,656.2,361.1,658.9,360.9z"/>
      </g>
      <g>
        	<path className="lines" d="M634.1,356.4h-25c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5h25c0.8,0,1.5,0.7,1.5,1.5S634.9,356.4,634.1,356.4z"/>
      </g>
      <g>
      	<g>
      		<path className={res === "healthy" ? "goodResults" : "notAlert"} d="M212.6,109.9c2.4,5.1,4.8,10.2,7.2,15.4c0.3,0.6,0.1,1.1-0.7,1.6s-1.3,0.4-1.6-0.2c-1.1-2.3-2.2-4.7-3.3-7c-3.1,1.8-6.1,3.7-9.1,5.7c1.1,2.3,2.2,4.5,3.2,6.8c0.3,0.6,0.1,1.1-0.7,1.6s-1.3,0.4-1.6-0.1c-2.4-5-4.7-9.9-7.1-14.8c-0.3-0.6-0.1-1.1,0.7-1.7c0.8-0.5,1.3-0.5,1.6,0.1c1,2,2,4.1,2.9,6.2c3-2,6.1-3.9,9.1-5.7c-1-2.1-2-4.2-3-6.3c-0.3-0.6-0.1-1.1,0.7-1.6C211.8,109.2,212.3,109.3,212.6,109.9z"/>
      		<path className={res === "healthy" ? "goodResults" : "notAlert"} d="M233.1,117c0.2,0.4,0.1,0.8-0.3,1.5c-0.7,1.2-1.9,2.2-3.4,2.9c-3.7,1.9-7,0.8-8.7-2.9c-1.7-3.7-0.7-7.3,2.8-9.2c3.2-1.7,6.3-0.5,7.7,2.5c0.6,1.4,0.2,1.9-0.7,2.3c-2.4,1.2-4.7,2.4-7.1,3.7c1.2,2.1,3,2.8,5.4,1.6c0.9-0.5,1.7-1.1,2.3-2c0.3-0.5,0.5-0.8,0.8-0.9C232.3,116.1,232.9,116.5,233.1,117z M222.5,116.1c2.1-1.1,4.2-2.2,6.2-3.3c-0.9-2-2.6-2.8-4.6-1.7C222.3,112.1,221.8,114,222.5,116.1z"/>
      		<path className={res === "healthy" ? "goodResults" : "notAlert"} d="M236.8,104.9c-1,0.4-1.6,1.1-2.2,1.9c-0.3,0.5-0.5,0.8-0.8,0.9c-0.6,0.3-1.2-0.2-1.4-0.6c-0.1-0.3,0-0.8,0.4-1.4c0.8-1.1,1.9-2.1,3.4-2.8c1.8-0.8,3.4-1,4.5-0.3c0.8,0.4,1.5,1.3,2.1,2.7c1,2.4,2.1,4.7,3.1,7.1c0.3,0.7,0.2,1.1-0.7,1.5c-0.7,0.3-1.1,0.2-1.4-0.3c-0.1-0.2-0.2-0.4-0.3-0.7c-0.5,1.4-1.5,2.4-3.1,3.1c-2.5,1.1-4.6,0.5-5.5-1.6c-1.1-2.5,0.5-4.9,5.7-7.7c-0.1-0.1-0.1-0.2-0.2-0.4C239.8,104.6,238.7,104.1,236.8,104.9z M237.4,113.1c0.4,1,1.4,1.4,3,0.7c1-0.5,1.8-1.2,2.4-2.3c-0.5-1.1-0.9-2.1-1.4-3.2C238,110.2,236.7,111.6,237.4,113.1z"/>
      		<path className={res === "healthy" ? "goodResults" : "notAlert"} d="M252.2,109.9c0.3,0.7,0.1,1.1-0.7,1.4c-0.8,0.3-1.3,0.1-1.6-0.5c-2.5-5.8-5-11.6-7.6-17.3c-0.3-0.6-0.1-1.1,0.7-1.5c0.8-0.4,1.3-0.2,1.6,0.5C247.1,98.3,249.7,104.1,252.2,109.9z"/>
      		<path className={res === "healthy" ? "goodResults" : "notAlert"} d="M263.8,105.3c0.1,0.3,0.1,0.7-0.2,1.1c-0.5,0.6-1.3,1.1-2.2,1.4c-1.6,0.6-3,0.3-4-0.6c-0.9-0.8-1.4-1.9-2-3.2c-0.8-1.9-1.6-3.7-2.4-5.6c-0.5,0.2-1,0.4-1.6,0.6c-0.6,0.3-1.1,0.1-1.4-0.6s-0.1-1.2,0.5-1.4c0.5-0.2,1-0.4,1.6-0.6c-0.4-1-0.9-2.1-1.3-3.1c-0.3-0.6-0.1-1.1,0.7-1.4c0.8-0.3,1.3-0.1,1.6,0.5c0.4,1,0.9,2.1,1.3,3.1c1.1-0.4,2.1-0.8,3.2-1.2c0.6-0.2,1.1,0,1.4,0.7s0.1,1.2-0.5,1.4c-1.1,0.4-2.1,0.8-3.2,1.2c0.8,1.9,1.6,3.8,2.4,5.6c0.3,0.7,0.7,1.7,1.3,2.2c0.5,0.4,1.1,0.5,1.8,0.3c0.4-0.1,0.8-0.4,1.1-0.7c0.2-0.2,0.4-0.4,0.5-0.4C263.1,104.3,263.7,105,263.8,105.3z"/>
      		<path className={res === "healthy" ? "goodResults" : "notAlert"} d="M277.3,101.8c0.3,0.7,0.1,1.1-0.7,1.3c-0.8,0.2-1.3,0-1.6-0.7c-0.9-2.3-1.9-4.6-2.8-6.8c-0.4-0.9-0.9-1.7-1.5-2.2c-0.8-0.6-1.6-0.7-2.7-0.4c-1.5,0.5-2.2,1.5-2.4,2.6c1.2,2.8,2.3,5.6,3.5,8.5c0.3,0.7,0.1,1.1-0.7,1.4c-0.8,0.2-1.3,0-1.6-0.7c-2.5-6-5-12-7.5-18c-0.3-0.7-0.1-1.1,0.7-1.4c0.8-0.3,1.3-0.1,1.6,0.6c1.1,2.5,2.1,5.1,3.2,7.7c0.3-1.3,1.3-2.6,3.1-3.1c1.8-0.5,3.1-0.2,4.3,0.7c0.9,0.7,1.6,1.8,2.2,3.3C275.3,97,276.3,99.4,277.3,101.8z"/>
      		<path className={res === "healthy" ? "goodResults" : "notAlert"} d="M286.6,86.8c0.1,0.4,0.3,1,0.4,1.8c0.8,5.3,0.7,13.2-0.9,17.7c-0.3,0.9-0.5,1.3-1,1.4c-0.6,0.1-1.4-0.3-1.7-0.9c-0.2-0.5,0-0.9,0.2-1.4c0.7-1.7,1.1-3.5,1.2-4.5c-3-3.6-6.1-7.1-9.1-10.6c-0.3-0.3-0.5-0.5-0.6-0.8c-0.2-0.4,0-0.9,0.8-1.1c1-0.3,1.3,0,1.9,0.7c2.5,2.9,5,5.9,7.4,8.9c0.2-2.9-0.2-7.8-0.7-10.3c-0.2-0.8-0.2-1.4,0.7-1.6C286.1,86,286.4,86.3,286.6,86.8z"/>
      	</g>
      </g>
      <g>
      	<g>
      		<path className={res === "overweight" ? "medAlert" : "notAlert"} d="M399.3,81.1c5.1,0.7,7,5,4.7,10.6c-2.2,5.5-7,8.5-12,7.7c-5.1-0.8-6.9-4.7-4.7-10.2C389.4,83.6,394.2,80.3,399.3,81.1z M392.8,97.4c3.6,0.5,7.1-1.8,8.9-6.2c1.7-4.4,0.5-7.6-3.2-8.1s-7.1,2-8.9,6.3C387.9,93.8,389.1,96.8,392.8,97.4z"/>
      		<path className={res === "overweight" ? "medAlert" : "notAlert"} d="M416,91.6c0.6-0.7,1-0.9,1.7-0.7c0.8,0.2,0.9,0.5,0.8,0.9c-0.1,0.2-0.3,0.5-0.5,0.8c-2.7,2.9-5.3,5.8-8,8.7c-0.7,0.8-1.1,1-2,0.8c-1-0.2-1.1-0.6-1.1-1.4c0-3.5-0.1-7-0.1-10.4c0-0.3,0.1-0.6,0.1-0.9c0.2-0.4,0.5-0.6,1.3-0.5c0.8,0.2,1,0.5,1,1.3c0,3.1,0,6.2,0,9.3C411.5,96.8,413.8,94.2,416,91.6z"/>
      		<path className={res === "overweight" ? "medAlert" : "notAlert"} d="M426.9,104.6c-0.2,0.4-0.5,0.6-1.2,0.8c-1.3,0.4-2.7,0.4-4.2,0c-3.6-1-4.8-3.8-3.3-7.7c1.5-3.8,4.6-5.8,8-4.9c3.1,0.8,4.2,3.7,3,6.8c-0.6,1.4-1.2,1.5-2.1,1.2c-2.3-0.7-4.6-1.3-6.9-1.9c-0.7,2.3-0.1,4,2.2,4.6c0.9,0.2,1.8,0.3,2.8,0c0.5-0.2,0.9-0.3,1.1-0.2C426.9,103.5,427,104.2,426.9,104.6z M420.9,97.2c2,0.5,4,1.1,6.1,1.6c0.8-2,0.3-3.7-1.6-4.2C423.6,94.2,422,95.2,420.9,97.2z"/>
      		<path className={res === "overweight" ? "medAlert" : "notAlert"} d="M432,107.4c-0.3,0.6-0.7,0.8-1.5,0.6c-0.8-0.2-1-0.7-0.8-1.3c1.4-3.4,2.8-6.9,4.2-10.3c0.2-0.6,0.6-0.9,1.5-0.6s0.9,0.7,0.7,1.1c-0.2,0.5-0.4,1-0.6,1.5c1.3-1.3,2.8-1.7,4.2-1.2c0.6,0.2,0.9,0.6,0.6,1.4s-0.8,0.9-1.6,0.6c-0.7-0.2-2.1-0.6-3.8,1.1C434,102.5,433,105,432,107.4z"/>
      		<path className={res === "overweight" ? "medAlert" : "notAlert"} d="M443.6,111.1c-0.6,0.7-1.1,1-2,0.6c-0.9-0.3-1.1-0.8-1-1.7c0.4-3.5,0.7-7,1.1-10.5c0.1-0.3,0.1-0.6,0.2-0.8c0.2-0.4,0.5-0.7,1.4-0.4c0.8,0.3,1,0.7,0.9,1.5c-0.4,3.1-0.8,6.2-1.1,9.3c2-2.3,3.9-4.7,5.9-7c0.6-0.7,1.1-0.9,1.9-0.6s1,0.9,1,1.7c-0.2,3-0.4,6-0.6,9c1.9-2.5,3.9-5,5.8-7.5c0.5-0.7,0.8-0.9,1.7-0.5c0.8,0.3,1,0.8,0.8,1.2c-0.1,0.2-0.3,0.5-0.5,0.7c-2.3,2.8-4.5,5.6-6.8,8.3c-0.6,0.7-1.1,0.9-2,0.5s-1.1-0.9-1-1.8c0.2-3,0.3-5.9,0.5-8.9C447.6,106.5,445.6,108.8,443.6,111.1z"/>
      		<path className={res === "overweight" ? "medAlert" : "notAlert"} d="M467.9,120.5c-0.2,0.4-0.5,0.6-1.2,0.7c-1.3,0.2-2.7-0.1-4.2-0.8c-3.6-1.7-4.9-5-3.3-8.8c1.5-3.8,4.7-5.4,8-3.8c3.1,1.5,4.2,4.7,3,7.8c-0.6,1.4-1.2,1.3-2.1,0.9c-2.3-1.1-4.6-2.2-6.9-3.2c-0.7,2.3-0.1,4.2,2.2,5.3c0.9,0.4,1.8,0.6,2.8,0.5c0.5-0.1,0.9-0.1,1.1,0C467.9,119.3,468,120,467.9,120.5z M461.9,111.5c2,0.9,4.1,1.9,6.1,2.8c0.8-2,0.3-3.9-1.6-4.8C464.6,108.7,463,109.5,461.9,111.5z"/>
      		<path className={res === "overweight" ? "medAlert" : "notAlert"} d="M473,124.3c-0.3,0.6-0.7,0.8-1.5,0.4s-1-0.9-0.8-1.5c1.4-3.4,2.8-6.9,4.2-10.3c0.3-0.6,0.7-0.8,1.5-0.4s1,0.9,0.8,1.6C475.8,117.5,474.4,120.9,473,124.3z M477.5,110c-0.9-0.4-1.2-1.4-0.9-2.3c0.3-0.8,1.2-1.1,2.1-0.7s1.2,1.4,0.9,2.2C479.2,110.2,478.3,110.5,477.5,110z"/>
      		<path className={res === "overweight" ? "medAlert" : "notAlert"} d="M490.2,122.8c-0.4-0.3-0.9-0.5-1.3-0.8c0,0.7-0.1,1.3-0.3,1.9c-1,2.4-3.5,2.9-6.2,1.4c-0.5-0.3-1-0.6-1.4-1c-0.4,0.2-0.7,0.4-0.8,0.8c-0.3,0.8,0.3,1.6,1.6,2.4c2.1,1.2,3.2,2,3.9,3.2c0.7,1.1,0.9,2.3,0.4,3.5c-1,2.4-3.5,2.9-7.3,0.8c-3.7-2.1-4.9-4.6-4.2-6.5c0.5-1.2,1.7-1.8,3.4-1.7c-0.4-0.8-0.5-1.6-0.2-2.3c0.3-0.8,1.1-1.3,2.1-1.4c-0.9-1.3-1.1-2.9-0.5-4.3c0.9-2.3,3.5-3,6.2-1.4c1.1,0.6,2,1.5,2.6,2.5c1,0.2,1.9,0.5,2.7,1c0.7,0.4,0.9,0.9,0.6,1.5C491.3,123,490.8,123.2,490.2,122.8zM479.4,128.2c-1.2,0-1.9,0.5-2.3,1.3c-0.5,1.2,0.1,2.6,2.4,3.8c2.3,1.3,3.7,1,4.2-0.3c0.5-1.2-0.2-2.2-2.7-3.7C480.3,128.8,479.7,128.5,479.4,128.2z M486.4,122.7c0.6-1.4,0-2.9-1.4-3.7c-1.4-0.8-2.8-0.4-3.3,1c-0.6,1.4,0,2.8,1.4,3.6C484.5,124.5,485.9,124.1,486.4,122.7z"/>
      		<path className={res === "overweight" ? "medAlert" : "notAlert"} d="M500.1,140.4c-0.2,0.6-0.7,0.7-1.5,0.2s-1-1.1-0.8-1.7c0.8-2,1.7-4.1,2.5-6.1c0.3-0.8,0.5-1.7,0.3-2.5c-0.2-0.9-0.8-1.7-1.8-2.4c-1.4-0.9-2.7-0.9-3.6-0.4c-1,2.6-2.1,5.1-3.1,7.7c-0.2,0.6-0.7,0.7-1.5,0.2s-1-1-0.8-1.6c2.2-5.5,4.5-11,6.7-16.6c0.2-0.6,0.7-0.7,1.5-0.3c0.8,0.5,1,1.1,0.8,1.7c-1,2.4-1.9,4.7-2.9,7.1c1.1-0.6,2.7-0.5,4.4,0.7c1.7,1.1,2.5,2.4,2.8,3.8c0.2,1.1,0.1,2.3-0.5,3.7C501.8,136.1,501,138.2,500.1,140.4z"/>
      		<path className={res === "overweight" ? "medAlert" : "notAlert"} d="M511.4,148c-0.1,0.3-0.4,0.5-0.9,0.4c-0.7-0.1-1.7-0.5-2.6-1.2c-1.6-1.1-2.3-2.4-2.5-3.8c-0.1-1.2,0.3-2.3,0.8-3.5c0.7-1.7,1.4-3.5,2.1-5.2c-0.5-0.4-1-0.7-1.5-1.1c-0.6-0.4-0.8-0.9-0.6-1.6c0.3-0.6,0.7-0.7,1.3-0.3c0.5,0.3,1,0.7,1.5,1.1c0.4-1,0.8-1.9,1.2-2.9c0.2-0.6,0.7-0.7,1.5-0.1s1,1.2,0.8,1.8c-0.4,1-0.8,1.9-1.2,2.9c1,0.7,2,1.5,3,2.2c0.6,0.5,0.8,1,0.6,1.6c-0.3,0.6-0.7,0.7-1.3,0.3c-1-0.8-2-1.5-3-2.2c-0.7,1.7-1.4,3.5-2.1,5.2c-0.3,0.7-0.6,1.5-0.6,2.3c0.1,0.6,0.4,1.2,1.1,1.7c0.4,0.3,0.9,0.5,1.2,0.6s0.5,0.1,0.7,0.2C511.6,146.8,511.6,147.6,511.4,148z"/>
      	</g>
      </g>
      <g>
      	<g>
      		<path className={res === "obese" ? "alert" : "notAlert"} d="M593.8,219c4,5.2,2.6,10.8-3.1,14.2c-5.7,3.5-11.4,3-14.6-1.2c-3.2-4.2-2.3-9.8,2.6-14.2C583.6,213.5,589.7,213.9,593.8,219z M578,230.5c2.4,3.1,6.7,3.3,11.1,0.4c4.4-2.8,5.5-7,2.7-10.6s-7.4-3.8-11.4-0.5C576.5,223.2,575.6,227.4,578,230.5z"/>
      		<path className={res === "obese" ? "alert" : "notAlert"} d="M585.8,246.6c-0.8-1.5-1.2-3.1-1.2-4.2c0-1.2,0.7-1.6,1.4-2.1c5.3-3.3,10.5-6.3,15.7-8.9c0.7-0.3,1.2-0.1,1.7,0.7c0.5,0.9,0.4,1.5-0.2,1.8c-2.2,1.1-4.5,2.2-6.7,3.4c1.2,0.5,2.2,1.4,2.9,2.8c2,3.7,0.7,7.3-3.5,9.2C591.7,251.2,587.8,250.2,585.8,246.6z M587.8,245.4c1.3,2.3,3.9,2.8,6.8,1.4c2.8-1.4,4-3.8,2.6-6.3c-0.6-1.1-1.4-1.8-2.5-2.2c-2.5,1.4-5,2.8-7.5,4.3C587.1,243.5,587.3,244.5,587.8,245.4z"/>
      		<path className={res === "obese" ? "alert" : "notAlert"} d="M596.8,264.9c-0.4,0.2-0.9,0-1.5-0.4c-1.2-0.8-2.1-2-2.7-3.6c-1.5-3.8,0.1-7.3,4.4-9.2c4.2-1.9,8.1-0.5,9.7,3.5c1.5,3.8-0.3,7-3.9,8.1c-1.7,0.5-2.1,0-2.4-1c-0.9-2.6-1.9-5.2-3-7.8c-2.4,1.3-3.4,3.2-2.5,5.7c0.4,1,1,1.8,1.8,2.4c0.5,0.3,0.8,0.6,0.9,0.9C597.9,264.1,597.3,264.7,596.8,264.9z M599.3,253.7c1,2.3,1.9,4.6,2.7,6.9c2.3-0.8,3.5-2.5,2.6-4.8C603.8,253.7,601.8,252.9,599.3,253.7z"/>
      		<path className={res === "obese" ? "alert" : "notAlert"} d="M605.9,265.4c2.3-0.7,4.5,1,5.4,4.4c0.4,1.6,0.4,3.4,0,4.6c-0.3,0.8-0.6,1.2-1,1.3c-0.5,0.1-1.3-0.2-1.5-1c-0.1-0.3,0.1-0.7,0.2-1.3c0.3-1.1,0.3-2.1,0-3.2c-0.4-1.6-1.3-2.4-2.3-2.1c-2.6,0.7,0.4,8.4-4.6,9.5c-2.6,0.6-4.7-1-5.5-4.1c-0.4-1.5-0.4-3,0-4.5c0.2-0.7,0.5-1.2,1-1.3c0.5-0.2,1.4,0,1.6,0.7c0.1,0.3-0.1,0.6-0.2,1.2c-0.3,1.2-0.4,2.1-0.1,3.3c0.4,1.5,1.4,2.4,2.5,2.1C604.4,274.2,601.3,266.7,605.9,265.4z"/>
      		<path className={res === "obese" ? "alert" : "notAlert"} d="M602.7,293.4c-0.5,0.1-0.9-0.2-1.3-0.8c-0.9-1.1-1.5-2.6-1.7-4.4c-0.6-4.4,1.7-7.6,6.3-8.5c4.5-0.9,7.9,1.6,8.4,6.2c0.5,4.3-2,7.1-5.5,7.3c-1.7,0.1-1.9-0.5-2-1.7c-0.2-3-0.6-6-1.1-8.9c-2.6,0.7-4,2.5-3.6,5.3c0.1,1.1,0.5,2.2,1.2,3c0.4,0.5,0.6,0.8,0.7,1.1C603.8,292.9,603.2,293.4,602.7,293.4z M607.6,282.3c0.4,2.6,0.7,5.2,1,7.9c2.3-0.2,3.8-1.7,3.5-4.3C611.8,283.5,610.1,282.2,607.6,282.3z"/>
      	</g>
      </g>
      <g>
        <g>
          <path className={res === "underweight" ? "alert" : "notAlert"} d="M84.3,315.6c-0.7-0.4-1.5-0.8-2.5-1c-3.3-0.8-6.5-1.4-9.7-2c-0.6-0.1-0.9-0.5-0.8-1.2s0.4-1,1-0.9c3.2,0.6,6.4,1.3,9.7,2c1.4,0.3,2.5,0.8,3.5,1.4c2.4,1.6,3.2,4,3,6.7s-1.4,4.5-3.9,5c-1,0.2-2.1,0.1-3.5-0.2c-3.3-0.7-6.5-1.2-9.7-1.7c-0.6-0.1-0.9-0.5-0.8-1.3c0-0.8,0.4-1.1,1-1c3.2,0.5,6.4,1.1,9.7,1.8c1.3,0.3,1.9,0.2,2.5,0.1c1.8-0.3,2.7-1.4,2.8-3.3C86.7,318.2,86,316.7,84.3,315.6z"/>
          <path className={res === "underweight" ? "alert" : "notAlert"} d="M78.6,305.6c0.3,0.1,0.6,0.1,0.8,0.2c-1-0.9-1.5-2.4-1.2-4.2c0.3-1.7,1-2.6,2.1-3c0.8-0.3,1.9-0.3,3.2,0c2.1,0.6,4.3,1.2,6.5,1.8c0.6,0.2,0.9,0.6,0.8,1.3s-0.5,1-1.1,0.8c-2.1-0.6-4.1-1.2-6.1-1.7c-0.8-0.2-1.6-0.3-2.2,0c-0.7,0.3-1.1,0.9-1.3,1.9c-0.2,1.4,0.3,2.5,1.1,3.3c2.5,0.6,5.1,1.3,7.7,2c0.6,0.2,0.9,0.6,0.8,1.3s-0.5,1-1.1,0.8c-3.4-0.9-6.8-1.8-10.2-2.5c-0.6-0.1-0.9-0.5-0.8-1.3C77.6,305.7,78,305.5,78.6,305.6z"/>
          <path className={res === "underweight" ? "alert" : "notAlert"} d="M80.6,289c0.2-1,0.7-1.9,1.3-2.5c-2-0.5-3.9-1.1-5.9-1.5c-0.6-0.1-0.8-0.6-0.6-1.3c0.2-0.8,0.6-1.1,1.2-0.9c5.3,1.3,10.7,2.9,16.1,4.7c0.6,0.2,0.8,0.7,0.7,1.4c-0.2,0.7-0.5,0.9-1,0.7c-0.2-0.1-0.4-0.1-0.6-0.2c0.7,1.1,0.9,2.3,0.7,3.7c-0.6,2.9-3.3,4.3-7,3.3C81.8,295.3,79.8,292.4,80.6,289z M82.5,289.2c-0.5,2.2,0.8,4,3.4,4.8s4.5-0.1,5-2.2c0.2-0.9,0.1-1.9-0.4-2.8c-2.2-0.7-4.4-1.4-6.6-2C83.1,287.6,82.7,288.3,82.5,289.2z"/>
          <path className={res === "underweight" ? "alert" : "notAlert"} d="M95.1,274.6c0.4,0.1,0.6,0.5,0.8,1.1c0.4,1.2,0.4,2.5,0,3.9c-0.9,3.4-3.7,4.6-7.4,3.4c-3.7-1.2-5.5-3.9-4.6-7.1c0.8-3,3.6-4.3,6.5-3.3c1.4,0.5,1.4,1,1.1,1.9c-0.6,2.2-1.3,4.3-1.8,6.5c2.2,0.5,3.8-0.1,4.4-2.2c0.2-0.8,0.3-1.7,0-2.6c-0.1-0.5-0.3-0.8-0.2-1C94,274.6,94.7,274.5,95.1,274.6z M88,280.5c0.5-1.9,1.1-3.8,1.6-5.8c-1.9-0.6-3.5-0.1-4,1.8C85,278.2,86,279.6,88,280.5z"/>
          <path className={res === "underweight" ? "alert" : "notAlert"} d="M97.7,269.8c0.6,0.2,0.8,0.7,0.6,1.4c-0.2,0.7-0.7,1-1.2,0.7c-3.3-1.3-6.6-2.4-9.8-3.5c-0.5-0.2-0.9-0.5-0.6-1.4s0.7-0.9,1-0.8c0.5,0.2,0.9,0.3,1.4,0.5c-1.2-1.1-1.5-2.5-1.1-3.8c0.2-0.5,0.5-0.9,1.3-0.6c0.8,0.3,0.8,0.7,0.6,1.4c-0.2,0.7-0.6,2,1,3.5C93.1,268,95.4,268.9,97.7,269.8z"/>
          <path className={res === "underweight" ? "alert" : "notAlert"} d="M101.2,259.2c0.7,0.5,0.9,1.1,0.6,1.9c-0.3,0.8-0.7,1-1.6,0.9c-3.3-0.4-6.6-0.7-9.9-0.9c-0.3,0-0.6-0.1-0.8-0.1c-0.4-0.1-0.6-0.5-0.3-1.3c0.3-0.8,0.6-0.9,1.4-0.9c2.9,0.2,5.8,0.5,8.7,0.9c-2.2-1.9-4.3-3.7-6.5-5.4c-0.6-0.5-0.8-1-0.5-1.7c0.3-0.8,0.8-1,1.5-0.9c2.8,0.1,5.6,0.3,8.4,0.6c-2.3-1.9-4.6-3.7-6.9-5.4c-0.6-0.5-0.8-0.8-0.5-1.5c0.3-0.8,0.7-0.9,1.1-0.7c0.2,0.1,0.4,0.3,0.7,0.4c2.5,2.1,5.1,4.2,7.7,6.4c0.7,0.6,0.8,1.1,0.5,1.9c-0.3,0.8-0.8,1-1.7,0.9c-2.8-0.3-5.5-0.5-8.3-0.6C96.9,255.4,99,257.3,101.2,259.2z"/>
          <path className={res === "underweight" ? "alert" : "notAlert"} d="M110.9,236.9c0.6,0.3,0.7,0.7,0.4,1.4s-0.8,0.9-1.3,0.6c-1.9-0.9-3.7-1.8-5.6-2.7c-0.7-0.3-1.5-0.5-2.2-0.4c-0.8,0.2-1.4,0.7-1.8,1.6c-0.6,1.3-0.4,2.5,0.1,3.4c2.4,1,4.7,2.1,7.1,3.2c0.6,0.3,0.7,0.7,0.4,1.4s-0.8,0.9-1.3,0.6c-5.1-2.4-10.2-4.6-15.2-6.4c-0.6-0.2-0.7-0.6-0.4-1.4c0.3-0.7,0.8-1,1.4-0.8c2.2,0.8,4.3,1.7,6.5,2.6c-0.6-1-0.7-2.5,0-4.2c0.7-1.6,1.7-2.3,2.9-2.6c0.9-0.2,2,0,3.2,0.6C107,234.9,108.9,235.9,110.9,236.9z"/>
          <path className={res === "underweight" ? "alert" : "notAlert"} d="M115.9,224.6c0.3,0.2,0.5,0.6,0.5,1.2c0.1,1.2-0.2,2.5-0.8,3.8c-1.6,3.2-4.7,4-8.1,2.4c-3.4-1.6-4.6-4.5-3-7.6c1.5-2.8,4.5-3.7,7.1-2.3c1.2,0.6,1.1,1.2,0.7,2c-1.1,2.1-2.2,4.1-3.2,6.2c2.1,0.8,3.8,0.4,4.8-1.6c0.4-0.8,0.6-1.7,0.6-2.5c0-0.5-0.1-0.8,0-1.1C114.9,224.4,115.6,224.4,115.9,224.6z M107.7,229.4c0.9-1.8,1.9-3.6,2.8-5.5c-1.7-0.9-3.4-0.5-4.4,1.2C105.3,226.8,105.9,228.3,107.7,229.4z"/>
          <path className={res === "underweight" ? "alert" : "notAlert"} d="M107.2,215c-0.4,0.8-1.3,1.1-2,0.7c-0.7-0.3-0.9-1.1-0.5-1.9c0.5-0.8,1.3-1.1,2-0.8C107.4,213.4,107.6,214.2,107.2,215z M119.5,220.2c0.5,0.3,0.6,0.8,0.3,1.4c-0.4,0.7-0.8,0.9-1.4,0.6c-2.9-1.7-5.9-3.3-8.9-4.8c-0.5-0.3-0.6-0.7-0.2-1.4c0.4-0.7,0.9-0.9,1.4-0.6C113.7,216.9,116.6,218.5,119.5,220.2z"/>
          <path className={res === "underweight" ? "alert" : "notAlert"} d="M119,204c-0.2,0.4-0.5,0.8-0.7,1.2c0.6,0,1.1,0.2,1.6,0.5c2,1.2,2.3,3.6,0.9,5.9c-0.3,0.4-0.6,0.8-0.9,1.2c0.1,0.4,0.3,0.7,0.6,0.9c0.7,0.4,1.4-0.1,2.1-1.2c1.1-1.8,1.9-2.7,2.9-3.3c0.9-0.5,1.9-0.5,2.9,0.2c2,1.3,2.3,3.9,0.5,7.1c-1.8,3.2-4.1,3.9-5.7,2.9c-1-0.6-1.5-1.8-1.4-3.5c-0.7,0.3-1.4,0.2-2-0.1c-0.7-0.4-1.1-1.1-1.1-2.1c-1.2,0.7-2.5,0.7-3.7,0.1c-2-1.1-2.4-3.5-0.9-5.9c0.6-1,1.4-1.8,2.3-2.2c0.2-0.9,0.6-1.7,1-2.4c0.4-0.6,0.8-0.7,1.3-0.4C119.2,203.1,119.3,203.5,119,204zM118.7,207.6c-1.1-0.7-2.5-0.2-3.2,1c-0.8,1.2-0.5,2.5,0.7,3.2c1.2,0.6,2.5,0.2,3.2-1C120.1,209.5,119.9,208.2,118.7,207.6zM123.1,214.8c-0.1,1.1,0.3,1.9,1,2.3c1,0.6,2.2,0.2,3.3-1.7c1.2-2,0.9-3.4-0.1-4c-1-0.6-1.9-0.2-3.2,2C123.7,214,123.3,214.5,123.1,214.8z"/>
          <path className={res === "underweight" ? "alert" : "notAlert"} d="M133.9,197c0.5,0.3,0.5,0.8,0.1,1.4c-0.4,0.7-0.9,0.8-1.4,0.5c-1.6-1.1-3.3-2.2-4.9-3.3c-0.6-0.4-1.3-0.7-2-0.6c-0.8,0.1-1.5,0.6-2,1.4c-0.8,1.2-0.9,2.4-0.5,3.3c2.1,1.3,4.2,2.6,6.3,4c0.5,0.3,0.6,0.8,0.2,1.4c-0.4,0.7-0.9,0.8-1.4,0.5c-4.5-2.9-9-5.6-13.6-8c-0.5-0.3-0.6-0.7-0.1-1.4c0.5-0.7,1-0.9,1.5-0.6c1.9,1,3.9,2.1,5.8,3.3c-0.4-1.1-0.3-2.6,0.8-4.1c1-1.5,2.1-2.1,3.3-2.2c0.9-0.1,1.9,0.2,3,0.9C130.5,194.7,132.2,195.8,133.9,197z"/>
          <path className={res === "underweight" ? "alert" : "notAlert"} d="M140.3,187.4c0.2,0.2,0.3,0.4,0.3,0.9c-0.1,0.7-0.5,1.5-1,2.3c-0.9,1.3-2,1.8-3.1,1.7c-1-0.1-1.8-0.7-2.7-1.3c-1.4-0.9-2.7-1.9-4.1-2.8c-0.3,0.4-0.6,0.9-0.9,1.3c-0.4,0.5-0.8,0.7-1.3,0.3c-0.5-0.3-0.6-0.8-0.2-1.3c0.3-0.4,0.6-0.9,0.9-1.3c-0.8-0.5-1.5-1-2.3-1.4c-0.5-0.3-0.5-0.7,0-1.4c0.5-0.7,1-0.8,1.5-0.5c0.8,0.5,1.5,0.9,2.3,1.4c0.6-0.9,1.3-1.7,1.9-2.6c0.4-0.5,0.8-0.6,1.3-0.3c0.5,0.3,0.5,0.8,0.1,1.3c-0.6,0.9-1.3,1.7-1.9,2.6c1.4,0.9,2.7,1.8,4.1,2.8c0.5,0.4,1.2,0.8,1.8,0.9c0.5,0.1,1-0.2,1.4-0.8c0.2-0.3,0.4-0.8,0.5-1.1c0.1-0.3,0.1-0.5,0.2-0.6C139.4,187.1,140,187.2,140.3,187.4z"/>
        </g>
        </g>
        <polygon className="graphBase" points="348.4,356.4 348.4,354.9 348.4,356.4 96.4,356.4 96.4,427.9 598.4,427.9 598.4,355.4 "/>
        <path className={res === "underweight" ? "alert" : "notAlert"} d="M169.3,178c-44.8,45.1-72.6,107-72.9,175.4h248.4L169.3,178z"/>
        <path className={res === "healthy" ? "goodResults" : "notAlert"} d="M345.9,103.9c-68,0.4-129.4,27.8-174.4,71.9l175.4,175.4L345.9,103.9z"/>
        <path className={res === "overweight" ? "medAlert" : "notAlert"} d="M523.3,175.8c-45-44.2-106.5-71.6-174.4-71.9l1,247.4L523.3,175.8z"/>
        <path className={res === "obese" ? "alert" : "notAlert"}  d="M598.3,352.4c-0.6-68-28.4-129.6-72.9-174.4L352,353.4L598.3,352.4z"/>
        <polygon className="lines" points="348.4,354.9 348.4,356.4 598.4,355.4 598.4,355.4 598.4,352.4 598.3,352.4 352,353.4 525.4,177.9 525.4,177.9 523.3,175.8 523.3,175.8 349.9,351.2 348.9,103.9 348.9,103.9 345.9,103.9 345.9,103.9 346.9,351.2 171.4,175.8 171.4,175.8 169.3,177.9 169.3,178 344.7,353.4 96.4,353.4 96.4,353.4 96.4,353.9 96.4,356.4 348.4,356.4 "/>
        <g>
          <path className= "BMI_Graph_pointer" transform={rotationDegree} d="M338.8,276.6c34.2-5.9,66.9,17.2,72.8,51.4s-17.2,66.9-51.4,72.8c-25.9,4.5-51-7.6-64.1-28.7l-45.7-16.9l37.9-31.5C294.1,300.1,313.4,281,338.8,276.6z"/>
          { text }
        </g>
      </svg>
    </div>
  );
}

export default BMIGraph;
