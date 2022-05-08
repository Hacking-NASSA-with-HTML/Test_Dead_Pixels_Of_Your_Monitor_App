
let colorsSet = ['#009c61', '#cc0099', '#cc9900', '#cc0033', '#0099cc', '#6600cc', '#66cc00', '#f9f60d', '#14087a', 'black', 'white', '#f60808', '#2abf0b'];
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
