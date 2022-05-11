
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

let removeManualForUser = () => {
    let toFadeTarget = document.getElementById('manualForUser');
    let fadeEffectForManualForUser = setInterval(() => {
        if (!toFadeTarget.style.opacity) {
            toFadeTarget.style.opacity = 1;
        }
        if (toFadeTarget.style.opacity > 0) {
            toFadeTarget.style.opacity -= 0.025;
        } else {
            clearInterval(fadeEffectForManualForUser);
        }
    }, 50); 
}



let hideText = () => {
    
    setTimeout(() => {
        removeHeadline();   
    }, 7000);

    setTimeout(() => {
        removeManualForUser();   
    }, 10000);

}

hideText();
