import React from 'react'
import styled from 'styled-components'

function Background() {
  return (
    <Back>
<div className="back">

</div>
<div className="another"></div>

    </Back>
   

  )


}
const Back=styled.section`

position: absolute;
width: 879px;
height: 626px;
left: -182px;
top:360 px;
opacity:0.7;

background: #AD987B;
filter: blur(284.5px);

.another{
position: absolute;
width: 940px;
height: 776px;
right: -800px;
top: -800px;
opacity:0.4;
z-index:1;

background: #E7E4DF;
filter: blur(61.5px);

pointer-events: none; /* Add this line */
}

`


export default Background