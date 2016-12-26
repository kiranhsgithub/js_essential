for (let i=0; i <= 2; i++){
    for (let j=0; j <= 3; j++) {
        if(i == 1 && j == 2){
            console.log("Will break now, i = " + i +", j = " + j);
            break;
        }else {
            console.log("i = " + i +", j = " + j);
        }
    }
	if(j != 4) {
      break;  
    } 
}