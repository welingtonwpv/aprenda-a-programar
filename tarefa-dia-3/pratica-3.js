var j=0, msg="";
while (j<=16){
     
     //só concatena se forem números impares
     if(j%2 !=0){
        msg += j + ", ";
     }
    j++;
  };
//retira ultima virgula com ultimo espaço 
msg = msg.substr(0,(msg.length -2));
console.log(msg);