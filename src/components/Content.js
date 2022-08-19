
const Content = ({theme}) => {
    if(theme == "rgb(144, 224, 239)"){
        document.getElementById("content").style.backgroundColor = 'rgb(144, 224, 239)';
        document.getElementById("content").style.color = '#000';
    } else if (theme == "rgb(222, 219, 210)"){
        document.getElementById("content").style.backgroundColor = 'rgb(222, 219, 210)';
        document.getElementById("content").style.color = '#FFF';
    } else if (theme == "rgb(0, 119, 182)"){
        document.getElementById("content").style.backgroundColor = 'rgb(0, 119, 182)';
        document.getElementById("content").style.color = '#FFF';
    } else if (theme == "rgb(70, 143, 175)"){
        document.getElementById("content").style.backgroundColor = 'rgb(70, 143, 175)';
        document.getElementById("content").style.color = '#FFF';
    } else if (theme == "rgb(230, 57, 70)"){
        document.getElementById("content").style.backgroundColor = 'rgb(230, 57, 70)';
        document.getElementById("content").style.color = '#FFF';
    } else if (theme == "rgb(69, 123, 157)"){
        document.getElementById("content").style.backgroundColor = 'rgb(69, 123, 157)';
        document.getElementById("content").style.color = '#FFF';
    }

    return <div className='content-outer card' id="content">
        <h1><i className='fa fa-check-square-o'></i>Please Fill the Application Form </h1>
        <h3>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</h3>
    </div>;
}

export default Content;