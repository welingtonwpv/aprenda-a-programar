var j=0, msg="";
while (j<=16){
     
     if(j%2 !=0){
        msg += j + ", ";
     }
    j++;
  };
msg = msg.substr(0,(msg.length -2));
console.log(msg);