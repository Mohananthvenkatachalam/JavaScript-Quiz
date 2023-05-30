
let button=document.getElementById('submit')
let radio1=document.getElementById('radio1')
let radio44=document.getElementById('radio44')
let radio444=document.getElementById('radio444')
let radio2222=document.getElementById('radio2222')
let ratio33333=document.getElementById('radio33333')
let result=document.getElementById('result');

button.addEventListener('click',callForMarks);
function callForMarks()
{
    let total=0;
    if(radio1.checked)
    {
        total++;
    }
    if(radio2222.checked)
    {
        total++;
    }
    if(radio33333.checked)
    {
        total++;
    }
    if(radio44.checked)
    {
        total++;
    }
    if(radio444.checked)
    {
        total++;
    }
    result.innerHTML=total;
}