import React,{useState} from "react";


export default function Flames() {

   const [name1,setName1] = useState("");
   const [name2,setName2] = useState("");
   const [answer,setAnswer] = useState("");

    function resultFunc(s1,s2){
        s1=s1.trim().toLowerCase();
        s2=s2.trim().toLowerCase();
        if(!s1 || !s2){
            setAnswer("Please Enter valid input");
            return;
        }
        let s1Arr = s1.split("");
        let s2Arr = s2.split("");
        
        let i=0;
        while(i<s1Arr.length && s2Arr.length>0){
            let x = s2Arr.indexOf(s1Arr[i]);
            if(x!=-1){
                s1Arr.splice(i,1);
                s2Arr.splice(x,1);
            }else{
                i++;
            }
        }
        // console.log(s1Arr);
        // console.log(s2Arr);
        let ans = (s1Arr.length+s2Arr.length)%6;
        // console.log(ans);
        if(ans==1){
            setAnswer("Friends")
        }else if(ans==2){
            setAnswer("Love")
        }else if(ans==3){
            setAnswer("Affection")
        }else if(ans==4){
            setAnswer("Marriage")
        }else if(ans==5){
            setAnswer("Enemy")
        }else if(ans==0){
            setAnswer("Siblings")
        }

    }

  return (
    <div>
      <input type="text" data-testid="input1" name="name1" id="name1" onChange={(e)=>setName1(e.target.value)} value={name1}/>
      <input type="text" data-testid="input2" name="name2" id="name2" onChange={(e)=>setName2(e.target.value)} value={name2}/>
      <button data-testid="calculate_relationship" onClick={()=>resultFunc(name1,name2)}>Calculate Relationship Future</button>
      <button data-testid="clear" onClick={()=>{
        setAnswer("");
        setName1("");
        setName2("");
      }}>Clear</button>
      <h3 data-testid="answer" id="result">{answer}</h3>
    </div>
  )
}
