var name = "Mujahid";
var age = 26;
var weight = 69.5;
var hight = 5.7;
var reactcomletion = false;

var travel_option = [
    {
        option: 'car',
        duration: 30
    },
    {
        option: 'bus',
        duration: 40
    },
    {
        option: 'bike',
        duration: 20

    },
    {
        option: 'aeroplane',
        duration: 12

    }
];

var minimumDurationObj = travel_option[0];

for (var i=1; i <= travel_option.length-1; i++) {
    if( travel_option[i].duration < minimumDurationObj.duration ){
        minimumDurationObj = travel_option[i];
    }
}

console.log(minimumDurationObj.option+' '+'is the best option');




var Number=[2,3,4,5,1];
 var mininumber=Number[0];
 for(var i=1; i <=Number.length-1;i++){
    if( Number[i]<mininumber){
        mininumber=Number[i];
    }
 }
 console.log('mini', mininumber);

 var a=[1,2,4,5,6];
 var target=a[2];
 a[2]=a[3]
 a[m]=target





