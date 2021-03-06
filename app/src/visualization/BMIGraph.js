import React from 'react';

const BMIGraph = (props) => {
  let res = props.results;
  let rotationDegree = props.rotation;
  let text = (<text className='bmiText' x='0' y='0' textAnchor='middle'>
                <tspan x='300' y='300'>BMI:</tspan>
                <tspan x='295' y='330'>{props.bmi}</tspan>
              </text>);

  let slightlyText = props.slightly;
  console.log('res: ' + res);
  console.log('slightly text: ' + slightlyText);

  let textUnder;

  if (slightlyText) {
    textUnder = (<text x='0' y='0' textAnchor='middle'>{slightlyText}</text>);
  }

  return(
    <div className="bmiGraph_desktop">
      <svg className="BMIGraph" viewBox="0 0 592.5 408.2" preserveAspectRatio="xMidYMid meet">
      <pattern  x="-73.4" y="-378.3" width="72" height="72" patternUnits="userSpaceOnUse" id="_x36__lpi_50_x25_" viewBox="72.2 -72 72 72">
        </pattern>
        <g id="Words">
          		<g className={res === "underweight" ? "alert" : "notAlert"}>
          			<path d="M15.5,269.6l11.6,1.3c4.4,0.5,6.4-1.3,6.7-3.9c0.3-2.9-1.4-5-5.7-5.4l-11.6-1.3l0.3-2.5l11.4,1.3c6,0.7,8.1,4.1,7.6,8.3c-0.4,4-3.1,6.8-9.1,6.1l-11.5-1.3L15.5,269.6z"/>
          			<path d="M27,253c-1.4-0.3-2.6-0.4-3.8-0.6l0.4-2.2l2.3,0.3l0-0.1c-1.2-0.9-2.2-2.8-1.8-5.1c0.3-1.9,2-4.7,6.8-3.8l8.3,1.5l-0.5,2.5l-8-1.4c-2.2-0.4-4.3,0.1-4.7,2.5c-0.3,1.7,0.6,3.2,2,3.9c0.3,0.2,0.7,0.3,1.1,0.4l8.3,1.5l-0.5,2.5L27,253z"/>
          			<path d="M23.2,221.4l16.5,4.1c1.2,0.3,2.6,0.6,3.6,0.8l-0.6,2.2l-2.4-0.5l0,0.1c1.3,1.1,2.1,3.1,1.5,5.3c-0.8,3.3-4.3,5.2-8.4,4.1c-4.6-1.1-6.7-4.6-5.8-8c0.5-2.1,1.9-3.3,3.1-3.6l0-0.1l-8.2-2L23.2,221.4z M34.5,226.8c-0.3-0.1-0.7-0.2-1.1-0.1c-1.7,0-3.3,1-3.8,2.9c-0.6,2.6,1.2,4.7,4.3,5.4c2.8,0.7,5.4-0.1,6.1-2.8c0.4-1.7-0.3-3.5-2.1-4.4c-0.3-0.2-0.7-0.3-1-0.4L34.5,226.8z"/>
          			<path d="M38.8,218.2c3.3,1,5.4-0.7,6.1-3.2c0.5-1.8,0.6-2.9,0.5-3.9l1.9,0.1c0.1,1,0.1,2.6-0.6,4.7c-1.3,4.1-4.8,5.8-8.9,4.5c-4.1-1.3-6.5-4.7-5.3-8.6c1.4-4.4,5.6-4.4,8.1-3.6c0.5,0.2,0.9,0.3,1.1,0.4L38.8,218.2z M39.3,210.5c-1.5-0.5-4.2-0.6-5,2.1c-0.8,2.5,1.2,4.3,2.8,5L39.3,210.5z"/>
          			<path d="M40.2,203.8c-1.6-0.6-2.9-1-4.2-1.4l0.8-2.1l2.6,0.9l0-0.1c-1.6-1.3-2.1-3.1-1.6-4.7c0.1-0.3,0.2-0.5,0.3-0.7l2.3,0.8c-0.1,0.2-0.3,0.5-0.4,0.8c-0.6,1.7,0.2,3.4,1.9,4.4c0.3,0.2,0.7,0.4,1.1,0.5l7.1,2.6l-0.9,2.4L40.2,203.8z"/>
          			<path d="M40.6,190.2l7.3,1.2c1.6,0.3,3.1,0.5,4.5,0.8l0-0.1c-1.2-0.9-2.4-1.9-3.6-2.9l-5.7-5l0.9-2l7.3,0.8c1.8,0.2,3.3,0.4,4.7,0.7l0-0.1c-1.2-0.8-2.4-1.7-3.8-2.8l-5.7-4.7l1-2.3l11.1,9.8l-0.9,2.1l-7-0.7c-1.6-0.2-3.1-0.4-4.7-0.7l0,0.1c1.4,1,2.6,2,3.8,3.1l5.2,4.8l-0.9,2.1l-14.6-1.8L40.6,190.2z"/>
          			<path d="M57.1,172.5c3.1,1.6,5.4,0.3,6.6-2c0.9-1.6,1.1-2.8,1.2-3.8l1.8,0.5c-0.1,1-0.4,2.6-1.4,4.6c-2,3.8-5.8,4.8-9.5,2.8c-3.8-2-5.6-5.8-3.7-9.4c2.1-4.1,6.3-3.3,8.6-2.1c0.5,0.2,0.8,0.5,1,0.6L57.1,172.5z M58.9,165c-1.4-0.8-4-1.3-5.3,1.2c-1.2,2.3,0.4,4.4,1.9,5.4L58.9,165z"/>
          			<path d="M55.2,152c0.8,0.4,1.1,1.3,0.5,2.2c-0.5,0.8-1.4,1-2.1,0.5c-0.8-0.5-1-1.4-0.6-2.2C53.5,151.7,54.4,151.5,55.2,152z M69.4,163.5l-12.2-7.1l1.3-2.2l12.2,7.1L69.4,163.5z"/>
          			<path d="M67.8,139.3c0.8,0.6,1.8,1.3,3.2,2.2l6.9,4.4c2.7,1.8,4,3.4,4.3,5.2c0.3,1.8-0.4,3.7-1.4,5.2c-0.9,1.4-2.3,2.8-3.5,3.3l-1.3-1.6c1-0.5,2.2-1.4,3.2-2.9c1.4-2.2,1.3-4.6-1.7-6.5l-1.3-0.9l0,0c0.7,1.4,0.7,3.2-0.4,5.1c-1.9,2.9-5.8,3.4-9,1.3c-4-2.6-4.6-6.7-2.9-9.4c1.3-2.1,3.1-2.5,4.4-2.4l0,0l-1.7-1.2L67.8,139.3z M71.1,144.5c-0.4-0.2-0.7-0.4-1.1-0.5c-1.5-0.4-3.2,0-4.2,1.5c-1.3,2.1-0.5,4.7,2.2,6.4c2.3,1.5,5,1.6,6.5-0.8c0.9-1.3,0.8-3.1-0.3-4.4c-0.3-0.4-0.7-0.7-1-0.9L71.1,144.5z"/>
          			<path d="M65.8,130.6l1.5-2.1l7.1,5.2l0,0c-0.3-0.8-0.5-1.7-0.4-2.6c0.1-0.9,0.4-1.8,1-2.5c1.1-1.5,3.9-3.3,7.8-0.4l6.8,5l-1.5,2.1l-6.5-4.8c-1.8-1.3-3.9-1.8-5.3,0.1c-1,1.3-0.8,3.1,0,4.3c0.2,0.3,0.5,0.6,0.9,0.9l6.9,5l-1.5,2.1L65.8,130.6z"/>
          			<path d="M80.4,115.7l3.1,2.6l2.3-2.8l1.5,1.2l-2.3,2.8l5.9,4.8c1.4,1.1,2.4,1.3,3.3,0.2c0.4-0.5,0.7-1,0.8-1.3l1.6,1.1c-0.2,0.5-0.5,1.2-1.2,2c-0.8,0.9-1.7,1.4-2.6,1.5c-1,0.1-2.2-0.5-3.5-1.6l-6-4.9l-1.4,1.7l-1.5-1.2l1.4-1.7l-2.6-2.1L80.4,115.7z"/>
          		</g>
          </g>

          <g>
          		<g className={res === "healthy" ? "goodResults" : "notAlert"}>
          			<path d="M150.9,53.8l4.1,6.8l7.8-4.7l-4.1-6.8l2.1-1.3l9.7,16.2l-2.1,1.3l-4.5-7.6l-7.8,4.7l4.5,7.6l-2.1,1.3L148.8,55L150.9,53.8z"/>
          			<path d="M173.1,55.4c1.6,2.9,4.1,3.2,6.3,2c1.6-0.8,2.4-1.6,3-2.3l1.2,1.4c-0.6,0.7-1.7,1.8-3.6,2.8c-3.7,1.9-7.2,0.6-9.1-3c-1.9-3.6-1.2-7.6,2.3-9.4c3.9-2,6.8,0.9,7.9,3.1c0.2,0.4,0.4,0.8,0.5,1.1L173.1,55.4z M178.7,50.5c-0.7-1.4-2.4-3.3-4.9-2c-2.2,1.1-2.1,3.7-1.5,5.3L178.7,50.5z"/>
          			<path d="M194.7,52l-0.9-1.5l-0.1,0c-0.3,1.3-1.2,2.7-2.9,3.5c-2.5,1.1-4.6-0.1-5.4-1.8c-1.3-3,0.6-5.8,5.4-7.9l-0.1-0.3c-0.5-1-1.6-2.7-4.1-1.6c-1.1,0.5-2.2,1.4-2.8,2.4l-1.2-1.2c0.7-1.1,2-2.2,3.6-2.9c3.8-1.7,5.9,0.5,7,2.9l2.1,4.6c0.5,1.1,1,2.1,1.5,2.9L194.7,52z M191.5,45.8c-2.5,1.1-5.1,2.7-4,5.1c0.7,1.5,1.9,1.7,3.1,1.2c1.6-0.7,2.2-2.2,2.1-3.4c0-0.3-0.1-0.5-0.2-0.8L191.5,45.8z"/>
          			<path d="M193.2,31.1l2.3-0.9l7.4,18.4l-2.3,0.9L193.2,31.1z"/>
          			<path d="M203.9,29.6l1.3,3.6l3.3-1.2l0.6,1.8l-3.3,1.2l2.5,6.9c0.6,1.6,1.4,2.3,2.6,1.8c0.6-0.2,1-0.5,1.3-0.6l0.7,1.7c-0.4,0.3-1,0.7-1.9,1.1c-1.1,0.4-2.1,0.4-2.9-0.1c-0.9-0.4-1.6-1.5-2.1-3l-2.5-6.9l-2,0.7l-0.6-1.8l2-0.7l-1.1-3L203.9,29.6z"/>
          			<path d="M210.4,24.6l2.3-0.7l2.5,8.1l0.1,0c0.2-0.8,0.6-1.6,1.2-2.2c0.6-0.6,1.3-1.1,2.2-1.4c1.7-0.5,4.8-0.3,6.2,4.1l2.4,7.7l-2.4,0.7l-2.3-7.4c-0.7-2.1-2-3.6-4.2-2.9c-1.5,0.5-2.4,1.9-2.4,3.3c0,0.4,0,0.7,0.2,1.2l2.4,7.8l-2.3,0.7L210.4,24.6z"/>
          			<path d="M229,25.7l4.8,7c0.5,0.8,1.1,1.7,1.5,2.5l0.1,0c0-0.8,0.1-1.9,0.1-3l0.7-8.4l2.5-0.6l-1.2,10.3c-0.6,4.9-1.2,7.5-2.4,9.4c-0.9,1.3-2,2-2.5,2.3l-1.1-1.9c0.5-0.3,1.2-0.9,1.8-1.7c0.5-0.7,1.1-1.8,1.3-3.2c0-0.3,0.1-0.5,0-0.6s-0.1-0.3-0.3-0.6l-7.9-10.9L229,25.7z"/>
          		</g>
    	    </g>

          <g>
          		<g className={res === "overweight" ? "medAlert" : "notAlert"}>
          			<path d="M352.5,23.6c-1,6.7-5.6,9.6-10.6,8.9c-5.1-0.8-8.1-5.3-7.2-11.2c0.9-6.2,5.4-9.6,10.6-8.8C350.6,13.2,353.4,17.8,352.5,23.6z M337.4,21.6c-0.6,4.2,1.1,8.2,5,8.8c4,0.6,6.8-2.7,7.5-7.1c0.6-3.9-0.8-8.2-5-8.8C340.7,13.8,338,17.3,337.4,21.6z"/>
          			<path d="M359.4,20.9l1,8.3c0.2,1.4,0.3,2.6,0.3,3.8l0.1,0c0.6-1.1,1.2-2.1,2-3.3l4.4-7.1l2.6,0.6l-8.5,12.6l-2.4-0.5l-2.2-14.9L359.4,20.9z"/>
          			<path d="M372.5,31.7c-0.9,3.4,0.9,5.3,3.3,6c1.8,0.5,2.9,0.5,4,0.4l-0.1,1.9c-1,0.1-2.6,0.2-4.8-0.4c-4.2-1.2-5.9-4.6-4.8-8.7c1.2-4.1,4.5-6.6,8.4-5.5c4.4,1.2,4.5,5.5,3.8,8c-0.1,0.5-0.3,0.9-0.4,1.1L372.5,31.7z M380.3,32c0.5-1.6,0.5-4.2-2.3-5c-2.5-0.7-4.2,1.3-4.9,2.9L380.3,32z"/>
          			<path d="M387,32.8c0.5-1.6,1-2.9,1.3-4.2l2.1,0.7l-0.8,2.7l0.1,0c1.2-1.6,3.1-2.2,4.7-1.7c0.3,0.1,0.5,0.2,0.7,0.3l-0.8,2.3c-0.2-0.1-0.5-0.2-0.8-0.4c-1.7-0.6-3.4,0.3-4.3,2c-0.2,0.3-0.4,0.7-0.5,1.1l-2.4,7.1l-2.4-0.8L387,32.8z"/>
          			<path d="M400.6,32.8l-1,7.3c-0.2,1.6-0.4,3.1-0.7,4.6l0.1,0c0.8-1.2,1.8-2.4,2.8-3.7l4.8-5.8l2,0.8l-0.6,7.4c-0.2,1.8-0.3,3.3-0.6,4.7l0.1,0c0.8-1.2,1.7-2.5,2.7-3.8l4.5-5.8l2.4,1l-9.5,11.4l-2.2-0.9l0.5-7.1c0.1-1.6,0.3-3.1,0.6-4.8l-0.1,0c-1,1.4-1.9,2.6-2.9,3.8l-4.6,5.4l-2.2-0.9l1.4-14.7L400.6,32.8z"/>
          			<path d="M418.8,48.7c-1.5,3.1-0.1,5.4,2.2,6.5c1.6,0.8,2.8,1,3.8,1.1l-0.4,1.8c-1,0-2.6-0.3-4.6-1.3c-3.9-1.9-5-5.6-3.1-9.4c1.9-3.8,5.6-5.7,9.3-3.9c4.1,2,3.5,6.2,2.3,8.5c-0.2,0.5-0.5,0.8-0.6,1L418.8,48.7z M426.4,50.4c0.7-1.5,1.2-4-1.4-5.3c-2.3-1.1-4.4,0.5-5.4,2L426.4,50.4z"/>
          			<path d="M428.1,60.8l6.7-12.4l2.3,1.2L430.4,62L428.1,60.8z M439.2,46.3c-0.4,0.8-1.3,1.1-2.2,0.6c-0.8-0.4-1-1.4-0.6-2.1c0.4-0.8,1.4-1.1,2.2-0.6C439.5,44.6,439.7,45.5,439.2,46.3z"/>
          			<path d="M452.3,58.5c-0.6,0.8-1.2,1.8-2.1,3.3l-4.2,7c-1.7,2.8-3.2,4.1-5.1,4.5c-1.8,0.4-3.7-0.3-5.3-1.2c-1.4-0.9-2.8-2.2-3.4-3.4l1.6-1.3c0.5,1,1.5,2.2,3,3.1c2.2,1.4,4.6,1.2,6.4-1.9l0.8-1.3l0,0c-1.4,0.7-3.2,0.8-5.1-0.3c-3-1.8-3.6-5.6-1.6-9c2.5-4.1,6.5-4.8,9.3-3.1c2.1,1.3,2.6,3.1,2.5,4.4l0,0l1.2-1.8L452.3,58.5z M447.1,61.9c0.2-0.4,0.4-0.7,0.5-1.1c0.4-1.5-0.1-3.2-1.7-4.2c-2.1-1.3-4.7-0.4-6.4,2.4c-1.4,2.4-1.4,5.1,0.9,6.5c1.3,0.8,3.1,0.7,4.4-0.4c0.4-0.3,0.7-0.7,0.9-1.1L447.1,61.9z"/>
          			<path d="M460.9,56.3l2.1,1.5l-5,7.2l0,0c0.8-0.4,1.6-0.5,2.5-0.4c0.9,0.1,1.8,0.3,2.6,0.9c1.6,1.1,3.4,3.8,0.6,7.8l-4.8,6.9l-2.1-1.5l4.6-6.7c1.3-1.9,1.7-3.9-0.3-5.3c-1.4-0.9-3.1-0.7-4.3,0.1c-0.3,0.2-0.6,0.5-0.8,0.9l-4.9,7l-2.1-1.5L460.9,56.3z"/>
          			<path d="M476.2,70.4l-2.5,3.2l2.9,2.2l-1.2,1.5l-2.9-2.2l-4.6,6c-1.1,1.4-1.3,2.5-0.1,3.3c0.5,0.4,1,0.6,1.3,0.8l-1.1,1.6c-0.5-0.1-1.2-0.5-2-1.1c-0.9-0.7-1.5-1.6-1.5-2.5c-0.1-1,0.4-2.2,1.5-3.5l4.7-6.1l-1.7-1.3l1.2-1.5l1.7,1.3l2.1-2.7L476.2,70.4z"/>
          		</g>
      	   </g>

           <g>
          		<g className={res === "obese" ? "alert" : "notAlert"}>
          			<path d="M549,170.2c-5.9,3.3-11,1.4-13.5-3c-2.5-4.5-0.8-9.7,4.4-12.6c5.5-3,10.9-1.6,13.4,3C556,162.3,554.1,167.4,549,170.2z M541.3,157c-3.7,2-5.9,5.8-3.9,9.3c2,3.5,6.3,3.7,10.2,1.6c3.4-1.9,6-5.7,3.9-9.4C549.5,154.9,545.1,154.9,541.3,157z"/>
          			<path d="M541.9,178.6c0.9-0.4,2.2-0.9,3.4-1.4l15.5-7.2l1.1,2.3l-8,3.7l0,0.1c1.8,0.2,3.4,1.2,4.4,3.3c1.5,3.2-0.1,6.6-4,8.4c-4.6,2.1-8.2,0.3-9.5-2.6c-0.9-1.9-0.8-3.7,0.4-5.4l0-0.1l-2.2,0.9L541.9,178.6z M548.2,178.7c-0.3,0.1-0.6,0.3-0.8,0.5c-1.4,1.2-1.9,3.1-1.1,4.8c1.1,2.4,3.8,3,6.7,1.6c2.6-1.2,4.1-3.5,3-6c-0.7-1.6-2.5-2.6-4.5-2.2c-0.3,0.1-0.6,0.1-1,0.3L548.2,178.7z"/>
          			<path d="M555.7,193.5c-3.2,1.3-3.7,3.9-2.8,6.3c0.7,1.7,1.4,2.6,2.1,3.4l-1.6,1.1c-0.7-0.7-1.7-2-2.5-4.1c-1.6-4,0.1-7.5,4.1-9c4-1.5,8-0.4,9.5,3.4c1.7,4.3-1.7,6.9-4.1,7.8c-0.5,0.2-0.9,0.3-1.1,0.4L555.7,193.5z M560.2,199.8c1.5-0.6,3.6-2.1,2.6-4.8c-0.9-2.4-3.6-2.6-5.3-2.1L560.2,199.8z"/>
          			<path d="M556.9,207.6c-0.2,0.9-0.3,2.3,0.1,3.5c0.6,1.8,1.8,2.3,2.9,1.9c1.2-0.4,1.6-1.3,1.6-3.3c0.1-2.7,1-4.3,2.6-4.8c2.2-0.7,4.5,0.4,5.5,3.3c0.5,1.4,0.5,2.7,0.3,3.6l-2,0c0.2-0.6,0.3-1.8-0.1-3c-0.5-1.4-1.6-2-2.6-1.6c-1.1,0.4-1.3,1.3-1.4,3.3c-0.1,2.6-0.9,4.2-2.9,4.9c-2.4,0.8-4.6-0.5-5.7-3.7c-0.5-1.5-0.6-2.9-0.3-4.1L556.9,207.6z"/>
          			<path d="M565,219.9c-3.3,1-4.1,3.5-3.4,6c0.5,1.8,1.1,2.8,1.7,3.6l-1.7,0.9c-0.6-0.8-1.5-2.1-2.1-4.3c-1.2-4.2,0.9-7.4,5-8.6c4.1-1.1,8,0.4,9.1,4.3c1.2,4.4-2.4,6.7-4.9,7.4c-0.5,0.1-0.9,0.2-1.2,0.2L565,219.9z M568.7,226.7c1.6-0.4,3.8-1.8,3.1-4.5c-0.7-2.5-3.3-3-5.1-2.7L568.7,226.7z"/>
          		</g>
          </g>

          <g>
              	<g><path className={res === "underweight" ? "alert" : "notAlert"} d="M124.6,121.6c-22.3,22.5-39.8,48.6-52.2,77.7c-12.8,30.1-19.5,62-19.8,95h244.6L124.6,121.6z"/></g>
              	<g><path className={res === "overweight" ? "medAlert" : "notAlert"} d="M398.7,67.4c-30-12.7-61.8-19.3-94.6-19.7v243.7l172.1-172.1C453.8,97.1,427.7,79.7,398.7,67.4z"/></g>
              	<g><path className={res === "healthy" ? "goodResults" : "notAlert"} d="M127.8,119.1l172.3,172.3V47.9c-31.6,0.2-62.3,6.3-91.5,18.1C178.4,78.3,151.2,96.1,127.8,119.1z"/></g>
              	<g><path className={res === "obese" ? "alert" : "notAlert"} d="M530.9,199.6c-12.3-28.9-29.7-55-51.9-77.5L306.9,294.2h243.6C550.3,261.4,543.7,229.6,530.9,199.6z"/></g>
              	<g><path className="graphBase" d="M535.9,392.7H67.3c-8.1,0-14.7-6.6-14.7-14.7v-76.3h498v76.3C550.6,386.2,544,392.7,535.9,392.7z"/></g>
          </g>

          <g>
          <g id="over_x5F_obese">
              {res === 'overObese' ?
                  <g><path className="notAlert" d="M493.3,135.4L302.2,295.7H302L455.8,98.9c7.8,6.2,15.3,12.8,22.3,19.8C483.4,124.1,488.5,129.6,493.3,135.4z"/>
                  <g className="medAlert">
                        <polygon points="430.4,137.7 429.2,137.7 424.6,143.7 430.4,143.7 430.9,143.7 478.7,143.7 485.8,137.7 430.9,137.7 "/>
                        <path d="M468.5,113.7H448l-4.7,6h31.5C472.7,117.7,470.6,115.7,468.5,113.7z"/>
                        <path d="M480.7,125.7h-42.1l-4.7,6h52.3C484.4,129.7,482.5,127.7,480.7,125.7z"/>
                        <path d="M456.3,103.2l-3.6,4.6h9.1C459.9,106.2,458.1,104.6,456.3,103.2z"/>
                        <polygon points="430.4,161.7 410.5,161.7 405.8,167.7 430.4,167.7 430.9,167.7 450.1,167.7 457.2,161.7 430.9,161.7 "/>
                        <polygon points="430.4,173.7 401.1,173.7 396.4,179.7 430.4,179.7 430.9,179.7 435.8,179.7 442.9,173.7 430.9,173.7 "/>
                        <polygon points="430.4,149.7 419.9,149.7 415.2,155.7 430.4,155.7 430.9,155.7 464.4,155.7 471.5,149.7 430.9,149.7 "/>
                        <polygon points="368.3,215.7 392.9,215.7 400,209.7 373,209.7 		"/>
                        <polygon points="387.1,191.7 421.5,191.7 428.6,185.7 391.7,185.7 		"/>
                        <polygon points="377.7,203.7 407.2,203.7 414.3,197.7 382.4,197.7 		"/>
                        <polygon points="358.9,227.7 378.6,227.7 385.7,221.7 363.6,221.7 		"/>
                        <polygon points="330.8,263.7 335.7,263.7 342.8,257.7 335.5,257.7 		"/>
                        <polygon points="358.4,233.7 354.2,233.7 349.6,239.7 358.4,239.7 358.9,239.7 364.3,239.7 371.4,233.7 358.9,233.7 "/>
                        <polygon points="321.5,275.6 328.5,269.7 326.1,269.7 		"/>
                        <polygon cpoints="340.2,251.7 350,251.7 357.1,245.7 344.9,245.7 		"/>
                  </g>
                  <path className="medAlert" d="M478.1,118.7c-7-7-14.5-13.7-22.3-19.8L302,295.7h0.2l191.1-160.3C488.5,129.6,483.4,124.1,478.1,118.7zM476,120.9c4.5,4.5,8.9,9.3,13.1,14.2L321.5,275.6l134.7-172.4C463.1,108.7,469.7,114.6,476,120.9z"/>
                  </g> : null }
          </g>
          <g id="healthy_x5F_over">
              {res === 'healthyOver' ?
                	<g>
                      <g><path className="notAlert" d="M328.2,47.5l-26.1,248.1l-0.2,0.1L275.9,47.3c9.9-1,19.9-1.4,29.8-1.2C313.2,46.2,320.8,46.7,328.2,47.5z"/></g>
                    	<g><path className="medAlert" d="M305.7,46.1c-1.5,0-2.9,0-4.4,0c-8.5,0-17,0.4-25.4,1.3L302,295.7l0.2-0.1l26.1-248.1C320.8,46.7,313.2,46.2,305.7,46.1z M301.3,49.1L301.3,49.1c1.4,0,2.9,0,4.4,0c6.4,0.1,12.8,0.5,19.3,1.1l-0.4,3.5h-37.7h-0.5h-6.8l-0.4-3.7C286.5,49.4,293.9,49.1,301.3,49.1z M301,257.7l-0.6-6h3.4l-0.6,6H301z M302.5,263.7l-0.4,3.9l-0.4-3.9H302.5zM299.8,245.7l-0.6-6h5.9l-0.6,6H299.8z M298.5,233.7l-0.6-6h8.4l-0.6,6H298.5z M297.2,221.7l-0.6-6h10.9l-0.6,6H297.2z M296,209.7l-0.6-6h13.4l-0.6,6H296z M294.7,197.7l-0.6-6h16l-0.6,6H294.7z M293.5,185.7l-0.6-6h18.5l-0.6,6H293.5z M292.2,173.7l-0.6-6h21l-0.6,6H292.2z M290.9,161.7l-0.6-6h23.5l-0.6,6H290.9z M289.7,149.7l-0.6-6h26.1l-0.6,6H289.7z M288.4,137.7l-0.6-6h28.6l-0.6,6H288.4z M287.1,125.7l-0.6-6h0.3h30.8l-0.6,6H287.1z M286.9,113.7h-0.5h-0.5l-0.6-6h1.1h0.5h32l-0.6,6H286.9z M286.9,101.7h-0.5h-1.7l-0.6-6h2.4h0.5h33.3l-0.6,6H286.9z M286.9,89.7h-0.5h-3l-0.6-6h3.6h0.5h34.5l-0.6,6H286.9z M286.9,77.7h-0.5h-4.3l-0.6-6h4.9h0.5h35.8l-0.6,6H286.9z M286.9,65.7h-0.5h-5.5l-0.6-6h6.2h0.5h37.1l-0.6,6H286.9z"/></g>
                    	<line x1="302.1" y1="37.7" x2="302.1" y2="37.2"/>
                  </g> : null}
          </g>
          <g id="under_x5F_healthy">
              {res === 'underHealthy' ?
                  <g>
                    	<g><path className="notAlert" d="M147.5,99.1l153.6,196.6l0,0.2L109.7,135.3c6.4-7.6,13.3-14.8,20.6-21.6C135.8,108.6,141.6,103.7,147.5,99.1z"/></g>
                    	<path className="medAlert" d="M147.5,99.1c-5.9,4.6-11.7,9.5-17.2,14.6c-7.3,6.8-14.2,14-20.6,21.6l191.3,160.5l0-0.2L147.5,99.1zM154.4,155.7h0.5h33.1l4.7,6h-37.8h-0.5h-8.5l-7.2-6H154.4z M131.6,149.7l-7.2-6h30h0.5h23.7l4.7,6h-28.4h-0.5H131.6zM154.4,167.7h0.5h42.4l4.7,6h-41.8l-7.2-6H154.4z M206.7,179.7l4.7,6h-36.9l-7.2-6H206.7z M216.1,191.7l4.7,6h-32l-7.2-6H216.1zM225.4,203.7l4.7,6h-3.3h-0.5h-23.3l-7.2-6H225.4z M226.4,215.7h0.5h7.9l4.7,6h-12.6h-0.5h-9l-7.2-6H226.4z M226.4,227.7h0.5h17.3l4.7,6h-17.2l-7.2-6H226.4z M253.6,239.7l4.7,6H246l-7.2-6H253.6z M262.9,251.7l4.7,6h-7.4l-7.2-6H262.9z M272.3,263.7l4.7,6h-2.4l-7.2-6H272.3z M150.4,107.7l4.7,6h-0.3h-0.5h-19.6c2.2-2,4.5-4,6.9-6H150.4z M128.4,119.7h26h0.5h4.9l4.7,6h-9.6h-0.5h-31.9C124.4,123.7,126.4,121.7,128.4,119.7z M116.9,131.7h37.5h0.5h14.3l4.7,6h-19h-0.5h-37.1L114,135C114.9,133.9,115.9,132.8,116.9,131.7z"/>
               </g> : null}
          </g>
          <g><path className="BMI_Graph_pointer" transform={rotationDegree} d="M302.2,230.6c35.8-0.1,64.7,29.7,63.1,65.9c-1.4,32.7-28.2,59.1-60.9,60.1c-25.7,0.8-48-13.8-58.6-35.2c-1.2-2.5-3.1-4.6-5.5-5.9l-35.5-20.4c-1.3-0.8-1.3-2.7,0-3.4l36-20.9c2.3-1.4,4.2-3.4,5.4-5.8C256.6,244.6,277.8,230.6,302.2,230.6z"/></g>
          { text }
          </g>
      </svg>
      <div>{textUnder}</div>
    </div>
  );
}

export default BMIGraph;
