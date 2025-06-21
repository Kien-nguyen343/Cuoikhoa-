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
    const result = await getDocs(collection(db, "new"));
    const Items = [];
    console.log(result)
    result.forEach((doc) => {
        Items.push({id : doc.id, ...doc.data()});
    });
    return Items;
}

console.log(getItems());

async function displayItems(){
    const list = document.getElementById("list");
    const Items = await getItems();
    Items.forEach((item) => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("border")
        itemDiv.innerHTML = `
        <div class="main-detail">
            <img src="https://s3.gomedia.ws/wp-content/uploads/sites/42/2022/03/19182845/box-truck-scaled.jpeg" alt="Chi tiết giao hàng">
            <div class="detail-content">
              <h1>Chi tiết đơn hàng</h1>
              <p>Mô tả chi tiết về đơn hàng bao gồm thời gian giao hàng, vị trí, hình thức giao hàng và thông tin người nhận.</p>
              <ul>
                <li><strong>Mã đơn:</strong> GHN123456</li>
                <li><strong>Thời gian giao hàng:</strong> 24/05/2025 - 14:00</li>
                <li><strong>Người nhận:</strong> Nguyễn Văn A</li>
                <li><strong>Địa chỉ:</strong> 123 Nguyễn Trãi, Quận 1, TP.HCM</li>
                <li><strong>Trạng thái:</strong> Đang giao</li>
              </ul>
            </div>
          </div>

        <div class="product-card">
          <span class="discount">-50%</span>
          <img src="${item.Img}" alt="Espresso">
          <h3>${item.Name}</h3>
          <p>$2.50 <span class="original-price">${item.Price}</span></p>
          <button class="delete" data-id='${item.id}'">Delete</button>
        </div>
        `
        
        ;
        itemDiv.addEventListener("click", function () {
            window.location.href = `detail.html?id=${item.id}`;
        })
        const deleteButton = itemDiv.querySelector(".delete");
        deleteButton.addEventListener("click", function () {
            const productId = deleteButton.getAttribute("data-id");
            deleteProduct(Items);
        });
        list.appendChild(itemDiv);
    })
}
displayItems()

async function deleteProduct(ItemsId){
    await deleteDoc(doc(db, "Menu", ItemsId));
    alert("Product deleted successfully");
    window.location.reload();
}