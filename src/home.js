import React,{ useState } from 'react';

function Home() {
    const [ color,setColor ] = useState()
    const [ style,setStyle ] = useState()
    const [ style2,setStyle2 ] = useState()
    const [ style3,setStyle3 ] = useState()
    const [ style4,setStyle4 ] = useState()
    const [ width,setWidth ] = useState()
    const [ height,setHeight ] = useState()
    return(
        <div>
            <div style={
                {borderTopLeftRadius: style,
                borderTopRightRadius: style2,
                borderBottomLeftRadius: style3,
                borderBottomRightRadius: style4,
                width: width,
                height: height,
                background: color}
                }></div>
            <input onChange={e => setStyle(e.target.value + 'px')} 
            type="range" max="100" />

            <input onChange={e => setStyle2(e.target.value + 'px')} 
            type="range" max="100" />

            <input onChange={e => setStyle3(e.target.value + 'px')} 
            type="range" max="100" />

            <input onChange={e => setStyle4(e.target.value + 'px')} 
            type="range" max="100" />
            <input onChange={e => setWidth(e.target.value + 'px')} 
            type="range" min="50" max="1000" />

            <input onChange={e => setHeight(e.target.value + 'px')} 
            type="range" min="50" max="500" />

            <input type="color" 
            onChange={e => setColor(e.target.value)} />
        </div>
    )
}

export default Home
