
// function getElement(id) {
//     return document.getElementById(id);
// }

// heart icon functionality
// const heartIcons = document.getElementsByClassName("heart-icon");
// for(let heartIcon of heartIcons){
//     heartIcon.addEventListener("click",function(){
//         const heart = getElement("heart-count").innerText;
//         let heartCount = Number(heart);
//         heartCount++; 
//         getElement("heart-count").innerText = heartCount;
//     })
// }

// copy btn and count functionality
// const copyBtns = document.getElementsByClassName("copy-btn");
// for(let copyBtn of copyBtns){
//     copyBtn.addEventListener("click",function(){
//         const copy = getElement("copy-count").innerText;
//         let copyCount = Number(copy);
//         copyCount++; 
//         getElement("copy-count").innerText = copyCount;
//     })
// }



// call btn and add to call history functionality
// const contactsData = [];
// const callBtns = document.getElementsByClassName("call-btn");

// for (let callBtn of callBtns) {
//     callBtn.addEventListener("click", function () {
//         const coin = Number(getElement("coin-count").innerText);
//         if(coin < 20){
//             alert("❌ You don't have sufficient coins! At least, 20 coins needed to make call.");
//             return;
//         }
//         const newCoin = coin - 20;
//         const cardTitle = callBtn.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
//         const cardnumber = callBtn.parentNode.parentNode.childNodes[5].childNodes[1].innerText;
//         alert(`📞 calling ${cardTitle} ${cardnumber}...`);
//         getElement("coin-count").innerText = newCoin;
        
        
//         console.log(cardTitle);
//         console.log(cardnumber);
//         const data = {
//             date: new Date().toLocaleTimeString()
//         }
//         data.cardTitle = cardTitle;
//         data.cardnumber = cardnumber;
//         contactsData.push(data);

//         const contactParent = getElement("contact-history")
//         const div = document.createElement("div")
//         div.innerHTML = `
//                         <div class="flex justify-between items-center bg-[#f5fff6] shadow-md p-2 rounded-lg">
//                             <div>
//                                 <h1>${data.cardTitle}</h1>
//                                 <p>${data.cardnumber}</p>
//                             </div>
//                             <p>${data.date}</p>
//                         </div>
//         `
//         contactParent.appendChild(div);


//         getElement("clear-btn").addEventListener("click", function () {
//             div.innerHTML = ``;
//         })


//     })
// }
