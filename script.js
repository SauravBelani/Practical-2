let input="";
let operation="";
let flag=false;
let lstOpr="";
let lstOp="";
let DRtoggle;
let memory=0;
let brs=0;

function pressC()
{
    document.getElementById('output').innerHTML=0;
    input="";
}
function dblPressC()
{
    document.getElementById('operation').innerHTML="";
    operation="";
}
function pressBack()
{
    let xyz=document.getElementById('operation').innerText;
    if(xyz.indexOf('=') == -1)
    {
        input+="";
        if(!(String(input).length <= 1))
        {
            input = input.slice(0, input.length - 1);
            document.getElementById('output').innerHTML=input;
        }
        else
        {
            document.getElementById('output').innerHTML=0;
            input=""
        }
    }
    else
    {
        document.getElementById('operation').innerHTML=operation="";
    }
}
function pressOprand(or)
{
    if((document.getElementById('operation').innerText).indexOf('(') != -1)
    {
       document.getElementById('operation').innerHTML= document.getElementById('operation').innerHTML+=or;
       flag=true;
       return ;
    }
    let xyz=document.getElementById('operation').innerText;
    if(xyz.indexOf('=') != -1)
    {
        input="";
        operation="";
        document.getElementById('output').innerHTML=operation;
    }
    if(or=='0')
    {
        if(input!="")
        {
            document.getElementById('output').innerHTML=input+=or;
            flag=true;
        }
    }
    else if(or=='.')
    {
        if(!input.includes('.') > 0)
        {
            if(input=="" && input==0)
            {
                document.getElementById('output').innerHTML=input+='0.';
            }
            else
            {
                document.getElementById('output').innerHTML=input+=or;
            }
        }
    }
    else
    {
        document.getElementById('output').innerHTML=input+=or;
        flag=true;
    }
}
function brsCls()
{
    if(brs!=0)
    {
        document.getElementById('operation').innerHTML+=')'
        brs--;
    }
}
function pressOperator(op)
{
    if((document.getElementById('operation').innerText).indexOf('(') != -1)
    {
        if(!flag)
        {
            document.getElementById('operation').innerHTML=(document.getElementById('operation').innerHTML).substring(0,(document.getElementById('operation').innerHTML).length-1)+op;
        }
        else{
            document.getElementById('operation').innerHTML= document.getElementById('operation').innerHTML+=op;
            flag=false;
        }
        return ;
    }
    lstOp=op;
    if(input=="" && operation=="")
    {
        return'';
    }
    if(!flag)
    {
        let lstCh=operation.substring(0,operation.length-1);
        operation=lstCh+op;
        document.getElementById('operation').innerHTML=operation;
        console.log("op na if"+operation);
    }
    else{
        console.log(operation+","+input);
        operation=operation+input;
        document.getElementById('output').innerHTML=eval(operation.replace('^','**'));
        document.getElementById('operation').innerHTML=operation+=op;  
        flag=false;
        console.log("op na else"+operation);
    }
    input="";
}
function memoryClick(m)
{
    if(document.getElementById('output').innerText.indexOf('(') == -1)
    {
        if(m=='+')
            memory=Number(memory)+Number(document.getElementById('output').innerText);
        else if(m=='-')
            memory=Number(memory)-Number(document.getElementById('output').innerText);
        else if(m=='mr'){
            if(memory != 0){
                document.getElementById('output').innerHTML=input=memory;
            }
        }
        else if(m=='mc')
            document.getElementById('ms').innerHTML='Empty';
        else
            memory=Number(document.getElementById('output').innerText);

        document.getElementById('ms').innerHTML=memory;
    }
}
function fact(){  
    let fact = 1;
    for (i = 1; i <= Number(input); i++) {
        fact *= i;
    }  
    document.getElementById("output").innerHTML=input=fact;  
} 
function toggleDiv(btnFE) {
    console.log(btnFE.value);
    if (btnFE.value == "Yes") {
        document.getElementById('btnFE').style.backgroundColor="white";
        document.getElementById('output').innerHTML=Number(input);
        btnFE.value = "No";
    } else {
        document.getElementById('btnFE').style.backgroundColor="gray";
        document.getElementById('output').innerHTML=Number(input).toExponential();
        btnFE.value = "Yes";
    }
}
function toggleDiv1(btnDR) {
    console.log(btnDR.value);
    if (btnDR.value == "Yes") {
        document.getElementById('btnDR').innerHTML="DEG";
        btnDR.value = "No";
        DRtoggle=false;
    } else {
        document.getElementById('btnDR').innerHTML="RAD";
        btnDR.value = "Yes";
        DRtoggle=true;
    }
}
function ConvertDDToDMS(dd)
{
    dd=dd.toFixed(2);
    var deg = dd | 0; // truncate dd to get degrees
    var frac = Math.abs(dd - deg); // get fractional part
    var min = (frac * 60) | 0; // multiply fraction by 60 and truncate
    var sec = (frac * 3600 - min * 60) | 0;
    return deg+"."+min+sec;
}
function ConvertDMSToDD(dms)
{
    var deg = dms | 0; // truncate dms to get deg
    var frac = Math.abs(dms - deg)*100; // get fractional part
    var min= frac | 0;//truncate frac to get min
    frac=Math.abs(frac - min)*100;// get fractional part
    var sec= frac | 0;//truncate frac to get sec
    return Math.fround(deg+(min/60)+(sec/3600)).toFixed(4);//Formula
}
Math.radians = function(degrees) {
    if(!DRtoggle){
        
        return degrees * Math.PI / 180;
    }
    else{
        console.log("true");
        return degrees;
    }    
};
function pressAns()
{
    if((document.getElementById('operation').innerText).indexOf('(') != -1)
    {
        if(brs==0)
        {
            document.getElementById('output').innerHTML=operation=eval(document.getElementById('operation').innerText);
            document.getElementById('operation').innerHTML="";
        }
        else
        {
            window.alert("Invalid Format please close all brackets");
        }
        return;
    }
    let xyz=document.getElementById('operation').innerText;
    if(xyz.indexOf('=') == -1)
    {
        lstOpr=lstOp+document.getElementById('output').innerHTML;
        console.log("lst opr: "+lstOpr);
        operation+=document.getElementById('output').innerHTML;
        document.getElementById('operation').innerHTML=operation+'=';
        let ans=eval(operation.replace('^','**'));
        document.getElementById('output').innerHTML=ans;
        operation=ans
        flag=true;
        console.log("ayu");
    } 
    else
    {
        lstOpr.replace('^','**');
        console.log("lst opr: "+lstOpr);
        console.log("else ma ayu");
        document.getElementById('operation').innerHTML=document.getElementById('output').innerText+lstOpr+'=';
        document.getElementById('output').innerHTML=eval(document.getElementById('output').innerText+lstOpr.replace('^','**'));
    }   
    operation=""; 
    input=document.getElementById('output').innerText;
}