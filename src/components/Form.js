
const Form = ({theme}) => {
    console.log(theme)
    if(theme == "rgb(144, 224, 239)"){
        document.getElementById("form").style.backgroundColor = 'rgb(144, 224, 239)';
        document.getElementById("form").style.color = '#000';
    } else if (theme == "rgb(222, 219, 210)"){
        document.getElementById("form").style.backgroundColor = 'rgb(222, 219, 210)';
        document.getElementById("form").style.color = '#FFF';
    } else if (theme == "rgb(0, 119, 182)"){
        document.getElementById("form").style.backgroundColor = 'rgb(0, 119, 182)';
        document.getElementById("form").style.color = '#FFF';
    } else if (theme == "rgb(70, 143, 175)"){
        document.getElementById("form").style.backgroundColor = 'rgb(70, 143, 175)';
        document.getElementById("form").style.color = '#FFF';
    } else if (theme == "rgb(230, 57, 70)"){
        document.getElementById("form").style.backgroundColor = 'rgb(230, 57, 70)';
        document.getElementById("form").style.color = '#FFF';
    } else if (theme == "rgb(69, 123, 157)"){
        document.getElementById("form").style.backgroundColor = 'rgb(69, 123, 157)';
        document.getElementById("form").style.color = '#FFF';
    }

    return <div className='form-outer card' id="form">
        <table>
            <tbody>
                <tr>
                    <td><h5 className='mt0'>Basic Details</h5></td>
                </tr>
                <tr>
                    <td><input type='text' name='name' placeholder='Name' /></td>
                </tr>
                <tr>
                    <td><input type='text' name='Place' placeholder='Place' /></td>
                </tr>
                <tr>
                    <td><input type='text' name='mail' placeholder='Mail ID' /></td>
                </tr>
                <tr>
                    <td>
                        <h5>Gender</h5>
                        <input type='radio' name='sex' id='male' value='Male' />
                        <label htmlFor='male'>Male</label>  
                        <input type='radio' id='female' name='sex' value='Female'/>  
                        <label htmlFor='female'>Female</label></td>
                </tr>
                <tr>
                    <td>
                        <h5>Terms and Conditions</h5> 
                        <input type='checkbox' id='terms' name='terms' value='terms'/>
                        <label htmlFor='terms'> Doloremque laudantium, totam rem aperiam</label>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
}

export default Form;