import React from 'react';

const Footer = (props) => {
let pageID = props.pageID;

console.log('page ID is: ' + pageID);

  return (
       <footer className="footer" id={props.pageID}>

        <div className="progressTracker">
          <svg className="heartPart" x="0px" y="0px" viewBox="0 0 822 100" xmlSpace="preserve">
          <g id="Heart">
          <path className="heart" d="M60.5,28.8c-2.5-4.1-6.9-5.9-11.6-5.2s-8.5,3.7-11.4,7.2c-3-3.5-6.8-6.4-11.4-7.2c-4.6-0.8-9,1.1-11.5,5.2 s-2.5,9-0.8,13.4c1.8,5,5.4,9,9.1,12.7c4.7,4.6,9.5,9,14.2,13.4c0.4,0.4,0.7,0.4,1.1,0c4.7-4.5,9.5-9,14.2-13.4 c3.7-3.6,7.4-7.7,9.1-12.7C63.1,37.9,63.1,32.9,60.5,28.8z"/>
          </g>
            <g id="Beats">
          	<polyline className="r1"   points="56,43.1 74.1,43.1 78.4,61.2 88,4.7 94.4,94.3 105.1,26 111.5,58 115.7,43.1 127.5,43.1 	"/>

          	<polyline className="r2" points="126.4,43.1 144.6,43.1 148.8,61.2 158.4,4.7 164.8,94.3 175.5,26 181.9,58 186.2,43.1 197.9,43.1 	"/>

            <polyline className="r3" points="196.9,43.1 212.9,43.1 217.1,61.2 226.7,4.7 233.1,94.3 243.8,26 250.2,58 254.5,43.1 266.2,43.1 	"/>

          	<polyline className="r4" points="265.2,43.1 283.3,43.1 287.6,61.2 297.2,4.7 303.6,94.3 314.2,26 320.6,58 324.9,43.1 336.7,43.1 	"/>

          	<polyline className="r5" points="335.6,43.1 353.7,43.1 358,61.2 367.6,4.7 374,94.3 384.7,26 391.1,58 395.3,43.1 407.1,43.1 	"/>

            <polyline className="r6" points="406,43.1 422,43.1 426.3,61.2 435.9,4.7 442.3,94.3 453,26 459.4,58 463.6,43.1 475.4,43.1 	"/>

          	<polyline className="r7" points="474.3,43.1 490.3,43.1 494.6,61.2 504.2,4.7 510.6,94.3 521.3,26 527.7,58 531.9,43.1 543.7,43.1 	"/>

          	<polyline className="r8" points="538.3,43.1 554.4,43.1 558.6,61.2 568.2,4.7 574.6,94.3 585.3,26 591.7,58 596,43.1 607.7,43.1 	"/>

            <polyline className="r9" points="602.4,43.1 618.4,43.1 622.7,61.2 632.3,4.7 638.7,94.3 649.3,26 655.7,58 660,43.1 671.7,43.1 	"/>

          	<polyline className="r10" points="670.7,43.1 686.7,43.1 691,61.2 700.6,4.7 707,94.3 717.6,26 724,58 728.3,43.1 740,43.1 	"/>

          	<polyline className="r11" points="739,43.1 755,43.1 759.3,61.2 768.9,4.7 775.3,94.3 785.9,26 792.3,58 796.6,43.1 808.3,43.1 	"/>

            <polyline className="r12" points="805.1,43.1 821.1,43.1 825.4,61.2 835,4.7 841.4,94.3 852.1,26 858.5,58 862.8,43.1 874.5,43.1 	"/>
          	<polyline className="r13" points="873.4,43.1 889.4,43.1 893.7,61.2 903.3,4.7 909.7,94.3 920.4,26 926.8,58 931.1,43.1 942.8,43.1 	"/>
          	<polyline className="r14" points="939.6,43.1 955.6,43.1 959.9,61.2 969.5,4.7 975.9,94.3 986.6,26 993,58 997.2,43.1 1009,43.1 	"/>

            <polyline className="r15" points="1005.8,43.1 1021.8,43.1 1026,61.2 1035.6,4.7 1042.1,94.3 1052.7,26 1059.1,58 1063.4,43.1 1075.1,43.1 	"/>
          	<polyline className="r16" points="1071.9,43.1 1087.9,43.1 1092.2,61.2 1101.8,4.7 1108.2,94.3 1118.9,26 1125.3,58 1129.6,43.1 1141.3,43.1 	"/>
          	<polyline className="r17" points="1140.2,43.1 1156.2,43.1 1160.5,61.2 1170.1,4.7 1176.5,94.3 1187.2,26 1193.6,58 1197.9,43.1 1209.6,43.1 	"/>

            <polyline className="r18" points="1206.4,43.1 1222.4,43.1 1226.7,61.2 1236.3,4.7 1242.7,94.3 1253.3,26 1259.8,58 1264,43.1 1275.8,43.1 	"/>
          	<polyline className="r19" points="1272.6,43.1 1288.6,43.1 1292.8,61.2 1302.4,4.7 1308.8,94.3 1319.5,26 1325.9,58 1330.2,43.1 1341.9,43.1 	"/>
          	<polyline className="r20" points="1340.9,43.1 1356.9,43.1 1361.1,61.2 1370.7,4.7 1377.1,94.3 1387.8,26 1394.2,58 1398.5,43.1 1410.2,43.1 	"/>

            <polyline className="r21" points="1409.2,43.1 1425.2,43.1 1429.4,61.2 1439,4.7 1445.4,94.3 1456.1,26 1462.5,58 1466.8,43.1 1478.5,43.1 	"/>
          	<polyline className="r22" points="1473.2,43.1 1489.2,43.1 1493.5,61.2 1503.1,4.7 1509.5,94.3 1520.1,26 1526.5,58 1530.8,43.1 1542.6,43.1 	"/>
          </g>
          </svg>
      </div>
    </footer>
);
}
export default Footer;