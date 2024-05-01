let li1 = document.querySelectorAll('.js1 li');
let li2 = document.querySelectorAll('.js2 li');
let input = document.querySelectorAll("input");

let a='RUB';
let b='USD';
let amount1= 1;

let apiKey = "Dae5peUZvHbtRwXlbsxu9gB3seNl9ogT";
let apiUrl1 = "https://api.currencybeacon.com/v1/convert";
let apiUrl= `${apiUrl1}?api_key=${apiKey}&from=${a}&to=${b}&amount=${amount1}`;
fetch(apiUrl)
.then((res)=>res.json())
.then((data)=>{
       let p1 = document.querySelector(".change-p");   
       p1.innerHTML=`1 ${a} = ${data.value} ${b}`;
})
let amount2= 1;
   const apiUrl2= `${apiUrl1}?api_key=${apiKey}&from=${b}&to=${a}&amount=${amount2}`;
   fetch(apiUrl2)
   .then((res)=>res.json())
   .then((data)=>{
        let p = document.querySelector(".change-p1");    
        p.innerHTML=`1 ${b} = ${data.value} ${a}`;
})

let value1='RUB';
li1.forEach((a,index )=>{
    a.addEventListener('click',()=>{
        value1 = li1[index].innerText;
    a.classList.toggle('violet');
        for(i=0;i<li1.length;i++){
            if(i== index){
            continue;
            }
            else {
                li1[i].classList.remove('violet')
            }
        }
    })
})

let value2='USD';
li2.forEach((a,index )=>{
    a.addEventListener('click',()=>{
      value2 = li2[index].innerText;
        a.classList.toggle('violet');
        for(i=0;i<li2.length;i++){
            if(i== index){
             continue;
            }
            else {
                li2[i].classList.remove('violet')
            }
        }
    })
})

li1.forEach( x =>{
    x.addEventListener('click',()=>{
         let amount= input[0].value;
         const apiUrl= `${apiUrl1}?api_key=${apiKey}&from=${value1}&to=${value2}&amount=${amount}`;
         fetch(apiUrl)
         .then((res)=>res.json())
         .then((data)=>{
             input[1].value = data.value.toFixed(4)   
        })
    })
})

li2.forEach(x =>{
    x.addEventListener('click',()=>{
         let amount= input[1].value;
         const apiUrl= `${apiUrl1}?api_key=${apiKey}&from=${value2}&to=${value1}&amount=${amount}`;
         fetch(apiUrl)
         .then((res)=>res.json())
         .then((data)=>{
            console.log(data);
             input[0].value = data.value.toFixed(4)   
        })
    })
})

input[0].addEventListener('keyup',()=>{
     let amount= input[0].value;
     const apiUrl= `${apiUrl1}?api_key=${apiKey}&from=${value1}&to=${value2}&amount=${amount}`;
     fetch(apiUrl)
     .then((res)=>res.json())
     .then((data)=>{
        input[1].value = data.value.toFixed(4)   
    })
})

input[1].addEventListener('keyup',()=>{
    input[1].value = input[1].value.replace(/[^0-9.]/g,'');
 })

 function myprg0(){
     let amount= 1;
     const apiUrl= `${apiUrl1}?api_key=${apiKey}&from=${value2}&to=${value1}&amount=${amount}`;
     fetch(apiUrl)
     .then((res)=>res.json())
     .then((data)=>{
     let p = document.querySelector(".change-p1");    
        p.innerHTML=`1 ${a} = ${data.value} ${b}`;
    })
     let amountt= 1;
     const apiKeyy = "Dae5peUZvHbtRwXlbsxu9gB3seNl9ogT";
     const apiUrl11 = "https://api.currencybeacon.com/v1/convert";
     const apiUrll= `${apiUrl11}?api_key=${apiKeyy}&from=${value1}&to=${value2}&amount=${amountt}`;
     fetch(apiUrll)
     .then((res)=>res.json())
     .then((data)=>{
        let p1 = document.querySelector(".change-p");
        p1.innerHTML=`1 ${value1} = ${data.value} ${value2}`;
    })
   
  }
  input[1].addEventListener('keyup', ()=>{
    let amount= input[1].value;
    const apiUrl= `${apiUrl1}?api_key=${apiKey}&from=${value2}&to=${value1}&amount=${amount}`;
    fetch(apiUrl)
    .then((res)=>res.json())
    .then((data)=>{
        input[0].value = data.value.toFixed(4)
      })
  })

function myprg1(){
    let a=value2 ;
    let b=value1;
     let amount= 1;
     const apiUrl= `${apiUrl1}?api_key=${apiKey}&from=${value2}&to=${value1}&amount=${amount}`;
     fetch(apiUrl)
     .then((res)=>res.json())
     .then((data)=>{
        console.log(data.value)
        let p = document.querySelector(".change-p1");   
        p.innerHTML=`1 ${value2} = ${data.value} ${value1}`;
       })
        let amountt= 1;
        const apiKeyy = "Dae5peUZvHbtRwXlbsxu9gB3seNl9ogT";
        const apiUrl11 = "https://api.currencybeacon.com/v1/convert";
        const apiUrll= `${apiUrl11}?api_key=${apiKeyy}&from=${value1}&to=${value2}&amount=${amountt}`;
        fetch(apiUrll)
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            let p1 = document.querySelector(".change-p1");
            p1.innerHTML=`1 ${value1} = ${data.value} ${value2}`;
    })
}
li1.forEach(item =>{
    item.addEventListener('click',myprg0)
})
li2.forEach(item =>{
    item.addEventListener('click', myprg1)
})