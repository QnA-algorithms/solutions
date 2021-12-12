function solution(participant, completion) { 
    let par = participant.sort();
    let com = completion.sort();
    for(let i = 0; i < par.length; i++){
      if(par[i] !== com[i]){
      return par[i];   
      }        
    } 
}
