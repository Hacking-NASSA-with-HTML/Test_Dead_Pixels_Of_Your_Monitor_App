
let colorsSet = ['green', '#cc0099', '#cc9900', '#cc0033', '#0099cc', '#6600cc', '#66cc00', '#f9f60d', '#14087a', 'black', 'white', '#f60808', '#2abf0b'];
let index = 0;


document.getElementById('invisible').addEventListener('click', () => {
    
    if (index >= colorsSet.length) { 
        index = 0;
    }

    document.getElementById('colorisedDiv').style.backgroundColor = colorsSet[index];
        if ((index === 9) || (index === 8)) {
            document.getElementById('colorisedDiv').style.color = 'white';
        } else {
            document.getElementById('colorisedDiv').style.color = '#0e1d7d';
        }
    index++;

});

/*
let removeHeadline = () => {
    let fadeTarget = document.getElementById('headline');
    let fadeEffect = setInterval(() => {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.025;
        } else {
            clearInterval(fadeEffect);
        }
    }, 50); 
}
*/
/*
let finalRemoveHeadline = () => {
    let fadeTargetH1 = document.getElementById('headline');
    let initialTargetStateH1 = fadeTargetH1.style.opacity = '1';

    if (initialTargetStateH1) {
        fadeTargetH1.style.opacity = '0';
    }
}*/

/*
let finalRemoveHeadline = () => {
    document.getElementById('headline').style.opacity = '0';
}
*/
/*
let finalRemoveManualForUser = () => {
    let fadeTargetP = document.getElementById('manualForUser');
    let initialTargetStateP = fadeTargetP.style.opacity = '1';

    if (initialTargetStateP) {
        fadeTargetP.style.opacity = '0';
    }
}
*/

let hideTextCall = () => {    
    setTimeout(() => {
        /*finalRemoveHeadline();*/
        document.getElementById('headline').style.opacity = '0';   
    }, 3000);

    setTimeout(() => {
        /*finalRemoveManualForUser();*/
        document.getElementById('manualForUser').style.opacity = '0';   
    }, 9000);
}

hideTextCall();
