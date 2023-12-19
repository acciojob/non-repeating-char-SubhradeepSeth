function firstNonRepeatedChar(str) {
 // Write your code here
	let n=str.length,c=0,j;
	for(let i=0;i<n;i++){
		c=0;
		for(let j=0;j<n;j++){
			if(i==j){
				continue;
			}
			if(str.charAt(i)==str.charAt(j)){
				c++;
				break;
			}
		}
		if(c==0){
			j=str.charAt(i);
			break;
		}
	}
	if(j===undefined) return null;
	return j;
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
