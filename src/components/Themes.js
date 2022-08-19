import { useState } from 'react';
import Form from './Form';

const Themes = ({getData}) => {
const [color1, setcolor1] = useState("rgb(144, 224, 239)") 

const darkTheme = () => {
    document.getElementById("primary").style.backgroundColor = '#90e0ef';
    document.getElementById("secondary").style.backgroundColor = '#dedbd2';
}
const lightTheme = () => {
    document.getElementById("primary").style.backgroundColor = '#0077b6';
    document.getElementById("secondary").style.backgroundColor = '#468faf';

}
const contrastTheme = () => {
    document.getElementById("primary").style.backgroundColor = '#e63946';
    document.getElementById("secondary").style.backgroundColor = '#457b9d';

} 


const primary = () => {
    const element = document.getElementById("primary"); 
    let attr = element.getAttribute("style"); 
    const colorCode = attr.slice(18, -1);
    getData(colorCode);

}
const secondary = () => {
    const element = document.getElementById("secondary"); 
    let attr = element.getAttribute("style"); 
    const colorCode = attr.slice(18, -1);
    getData(colorCode);
}
    return <div className='theme-outer card' id='themeSec'>
        <table>
            <tbody>
                <tr>
                    <td>
                        <h5 className='mt0'>Apply Theme</h5>
                        <button className='theme_btn' onClick={darkTheme} id='dark'>Dark</button>
                        <button className='theme_btn' onClick={lightTheme} id='light'>Light</button>
                        <button className='theme_btn' onClick={contrastTheme} id='contrast'>Contrast</button>
                    </td>
                    <td>
                        <h5 className='mt0'>Select Color</h5>
                        <button className='clr_btn' style={{ backgroundColor:"#fff"}} onClick={primary} id='primary'>Primary</button>
                        <button className='clr_btn' style={{ backgroundColor:"#fff"}} onClick={secondary} id='secondary'>Secondary</button>
                    </td>
                </tr> 
            </tbody>
        </table>
    </div>;
}



export default Themes;