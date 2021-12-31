let output="";
let operation="";
let temp="";
let memory=0;
Math.radians = function(degrees) {
    return degrees * Math.PI / 180;
};
function memoryClick(m)
{
    if(document.getElementById('output').innerText.indexOf('(') == -1)
    {
        if(m=='+')
            memory=Number(memory)+Number(document.getElementById('output').innerText);
        else
            memory=Number(memory)-Number(document.getElementById('output').innerText);

        document.getElementById('ms').innerHTML=memory;
    }
}
function pressBrsCls()
{
    if(document.getElementById('output').innerText.indexOf('(') != -1)
        document.getElementById('output').innerHTML=output=output+')';
}
function pressC()
{
    document.getElementById('output').innerHTML=0;
    output="";
}
function dblPressC()
{
    document.getElementById('operation').innerHTML="Operation";
    operation="";
    temp="";
}
function press0()
{
    if(output!="")
    {
        document.getElementById('output').innerHTML=output=output+'0';
    }
}
function pressPoint()
{
    if(!output.includes('.') > 0)
    {
        if(output=="" && output==0)
        {
            document.getElementById('output').innerHTML=output=output+'0.';
        }
        else
        {
            document.getElementById('output').innerHTML=output=output+'.';
        }
    }
}
function pressBack()
{
    output+="";
    
    if(String(output).length <= 1)
    {
        document.getElementById('output').innerHTML=0;
        output=""
    }
    else
    {
        output = output.slice(0, output.length - 1);
        document.getElementById('output').innerHTML=output;
    }
}
function pressOperator(op)
{
    
        console.log(op);
        if(output=="")
        {
            document.getElementById('output').innerHTML=0;
            output="0"
        }
        output+=op;
        if(output.indexOf('(') == -1)
        {
            document.getElementById('operation').innerHTML=output;
            temp=output;
            console.log(temp);
            document.getElementById('output').innerHTML=0;
            output="";  
        }
        else
        {
            document.getElementById('output').innerHTML=output;
        }
    }
function fact(){  
    let fact = 1;
    for (i = 1; i <= parseInt(output); i++) {
        fact *= i;
    }  
    document.getElementById("output").innerHTML=output=fact;  
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
function toggleDiv(btnFE) {
    if (btnFE.value == "Yes") {
        document.getElementById('btnFE').style.backgroundColor="white";
        document.getElementById('output').innerHTML=Number(output);
        btnFE.value = "No";
    } else {
        document.getElementById('btnFE').style.backgroundColor="gray";
        document.getElementById('output').innerHTML=Number(output).toExponential();
        btnFE.value = "Yes";
    }
}
function pressAns()
{
    console.log("operation: "+temp);
    console.log("Output: "+output);
    let ans;
    if((temp+output).indexOf('(') != -1)
    {
        ans=eval(temp+output);
    }
    else
    {
        if(temp != "" && output != "")
        {
            let first = temp.slice(0, temp.length - 1);
            let op = temp.slice(temp.length - 1,temp.length);
            console.log(first+output)
            first=Number(first);
            output=Number(output);
            
            switch(op) {
                case '+':
                    ans=first+output;
                    break;
                case '-':
                    ans=first-output;
                    break;
                case '*':
                    ans=first*output;
                    break;
                case '/':
                    ans=first/output;
                    break;
                case '%':
                    ans=first%output;
                    break;
                case '^':
                    ans=Math.pow(first,output);
                    break;
            }
        }
    }
    document.getElementById('output').innerHTML=ans;
    output=ans;
    if(output==0)
    {
        output="";
    }
}