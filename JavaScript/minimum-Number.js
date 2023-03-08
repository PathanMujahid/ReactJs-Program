var Number=[2,3,4,5,1];
 var mininumber=Number[0];
 for(var i=1; i <=Number.length-1;i++){
    if( Number[i]<mininumber)
    {
        mininumber=Number[i];
    }
 }
 console.log('mini', mininumber);

