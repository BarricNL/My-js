
    function with0(n)
    {
        if (n<10)
        {
            return "0" + n;
        }
        else 
        {
            return "" + n;
        }
    }

window.onload=function ()
{    
    var aTime=document.getElementsByTagName('img');
    function clock()
    {
        var oDate=new Date();
        var str=with0(oDate.getHours())+with0(oDate.getMinutes())+with0(oDate.getSeconds());
        
        for(var i=0; i<aTime.length; i++)
        {
            aTime[i].src='img/if_number_'+str[i]+'_blue.png';
        }
    }
    setInterval(clock,1000);
    clock();
};