 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
 import { getFirestore, collection, addDoc, getDocs, getDoc, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyBZH0FPiZtsh7sa-yUecu4GYGHqNcQ0Fe0",
   authDomain: "mindx1-525ea.firebaseapp.com",
   projectId: "mindx1-525ea",
   storageBucket: "mindx1-525ea.firebasestorage.app",
   messagingSenderId: "645118580742",
   appId: "1:645118580742:web:6e3e1f9b5c51ac7ef08b87",
   measurementId: "G-P07SYSS6GS"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const db = getFirestore(app)


async function getItems(){
    const result = await getDocs(collection(db, "Start"));
    const Items = [];
    console.log(result)
    result.forEach((doc) => {
        Items.push({id : doc.id, ...doc.data()});
    });
    return Items;
}
localStorage.getItem

let submit = document.getElementById('buttonsubmit');
let sender = document.getElementById('sender');
let senderAddress = document.getElementById('senderAddress');
let senderNumber = document.getElementById('senderPhone');
let receiver = document.getElementById('receiver');
let receiverAddress = document.getElementById('receiverAddress');
let receiverNumber = document.getElementById('receiverPhone');
let weight = document.getElementById('weight');
let size = document.getElementById('size');
let payment = document.getElementsByClassName('iii')[0];

submit.addEventListener('click', checkWord);
async function checkWord(e){
  e.preventDefault()
  if (sender.value.length == 0) {
    alert('Vui lòng nhập tên người gửi');
    return;
  } else if (senderAddress.value.length == 0) {
    alert('Vui lòng nhập địa chỉ người gửi');
    return;
  } else if (senderNumber.value.length == 0) {
    alert('Vui lòng nhập số điện thoại người gửi');
    return;
  } else if (receiver.value.length == 0) {
    alert('Vui lòng nhập tên người nhận');
    return;
  } else if (receiverAddress.value.length == 0) {
    alert('Vui lòng nhập địa chỉ người nhận');
    return;
  } else if (receiverNumber.value.length == 0) {
    alert('Vui lòng nhập số điện thoại người nhận');
    return;

} else if (weight.value.length == 0) {
  alert('Vui lòng nhập khối lượng vật vận chuyển');
  return;
} else if (size.value.length == 0) {
  alert('Vui lòng nhập kích thước vật vận chuyển');
  return;
}
else {
  const docRef = await addDoc(collection(db, "new"),{
    sender: sender.value,
    senderAddress: senderAddress.value,
    senderNumber: senderNumber.value,
    receiver: receiver.value,
    receiverAddress: receiverAddress.value,
    receiverNumber: receiverNumber.value,
    size: size.value,
    weight: weight.value,
    payment: payment.value,
    vender: localStorage.getItem('page')
  })
  alert('Tạo đơn hàng thành công');
  window.location.href = 'file.html';
  return;
}
}



