var cardClass = document.querySelector(".cardClass");

var anaYemek = document.getElementById('active');
var tatli = document.getElementById("tatli");
var salata = document.getElementById("salata");
var icecek = document.getElementById("icecek");

var cardSalt  = document.querySelector(".cardClassSalata");
var cardtat = document.querySelector(".cardClassTatli");
var cardice = document.querySelector(".cardClassIcecekler");

function showContent(){
    cardClass.style.display = "block"; 
    cardSalt.style.display = "none"; 
    cardtat.style.display = "none"; 
    cardice.style.display = "none"; 
}  
function cardtatl(){    
    cardClass.style.display = "none"; 
    cardSalt.style.display = "none"; 
    cardtat.style.display = "block"; 
    cardice.style.display = "none"; 

}
function cardicec(){    
    cardClass.style.display = "none"; 
    cardSalt.style.display = "none"; 
    cardtat.style.display = "none"; 
    cardice.style.display = "block"; 

} 
function cardSal(){    
    cardClass.style.display = "none"; 
    cardSalt.style.display = "block"; 
    cardtat.style.display = "none"; 
    cardice.style.display = "none"; 

}   






cardClass.innerHTML = ` 
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-20 py-12">
        <div class="card bg-white rounded-lg shadow-md overflow-hidden">
            <img src="doner1.png" class="card-img-top w-full h-48 object-cover" alt="...">
            <div class="card-body p-4">
                <h5 class="card-title font-bold text-lg">Card title</h5>
                <p class="card-text text-gray-600">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    
        <div class="card bg-white rounded-lg shadow-md overflow-hidden">
            <img src="doner1.png" class="card-img-top w-full h-48 object-cover" alt="...">
            <div class="card-body p-4">
                <h5 class="card-title font-bold text-lg">Card title</h5>
                <p class="card-text text-gray-600">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    
        <div class="card bg-white rounded-lg shadow-md overflow-hidden">
            <img src="doner1.png" class="card-img-top w-full h-48 object-cover" alt="...">
            <div class="card-body p-4">
                <h5 class="card-title font-bold text-lg">Card title</h5>
                <p class="card-text text-gray-600">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    
        <div class="card bg-white rounded-lg shadow-md overflow-hidden">
            <img src="doner1.png" class="card-img-top w-full h-48 object-cover" alt="...">
            <div class="card-body p-4">
                <h5 class="card-title font-bold text-lg">Card title</h5>
                <p class="card-text text-gray-600">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    
        <div class="card bg-white rounded-lg shadow-md overflow-hidden">
            <img src="doner1.png" class="card-img-top w-full h-48 object-cover" alt="...">
            <div class="card-body p-4">
                <h5 class="card-title font-bold text-lg">Card title</h5>
                <p class="card-text text-gray-600">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    
        <div class="card bg-white rounded-lg shadow-md overflow-hidden">
            <img src="doner1.png" class="card-img-top w-full h-48 object-cover" alt="...">
            <div class="card-body p-4">
                <h5 class="card-title font-bold text-lg">Card title</h5>
                <p class="card-text text-gray-600">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    
        <div class="card bg-white rounded-lg shadow-md overflow-hidden">
            <img src="doner1.png" class="card-img-top w-full h-48 object-cover" alt="...">
            <div class="card-body p-4">
                <h5 class="card-title font-bold text-lg">Card title</h5>
                <p class="card-text text-gray-600">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </div>
    ` ;

cardtat.innerHTML = `
     <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-20 py-12">
        <div class="card bg-white rounded-lg shadow-md overflow-hidden">
            <img src="tatli.png" class="card-img-top w-full h-48 object-cover" alt="...">
            <div class="card-body p-4">
                <h5 class="card-title font-bold text-lg">Card title</h5>
                <p class="card-text text-gray-600">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    
        <div class="card bg-white rounded-lg shadow-md overflow-hidden">
            <img src="tatli.png" class="card-img-top w-full h-48 object-cover" alt="...">
            <div class="card-body p-4">
                <h5 class="card-title font-bold text-lg">Card title</h5>
                <p class="card-text text-gray-600">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    
        <div class="card bg-white rounded-lg shadow-md overflow-hidden">
            <img src="tatli.png" class="card-img-top w-full h-48 object-cover" alt="...">
            <div class="card-body p-4">
                <h5 class="card-title font-bold text-lg">Card title</h5>
                <p class="card-text text-gray-600">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    
        <div class="card bg-white rounded-lg shadow-md overflow-hidden">
            <img src="tatli.png" class="card-img-top w-full h-48 object-cover" alt="...">
            <div class="card-body p-4">
                <h5 class="card-title font-bold text-lg">Card title</h5>
                <p class="card-text text-gray-600">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    
        <div class="card bg-white rounded-lg shadow-md overflow-hidden">
            <img src="tatli.png" class="card-img-top w-full h-48 object-cover" alt="...">
            <div class="card-body p-4">
                <h5 class="card-title font-bold text-lg">Card title</h5>
                <p class="card-text text-gray-600">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    
        <div class="card bg-white rounded-lg shadow-md overflow-hidden">
            <img src="tatli.png" class="card-img-top w-full h-48 object-cover" alt="...">
            <div class="card-body p-4">
                <h5 class="card-title font-bold text-lg">Card title</h5>
                <p class="card-text text-gray-600">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    
        <div class="card bg-white rounded-lg shadow-md overflow-hidden">
            <img src="tatli.png" class="card-img-top w-full h-48 object-cover" alt="...">
            <div class="card-body p-4">
                <h5 class="card-title font-bold text-lg">Card title</h5>
                <p class="card-text text-gray-600">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    tatli
`;
cardice.innerHTML = `
     <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-20 py-12">
        <div class="card bg-white rounded-lg shadow-md overflow-hidden">
            <img src="icecek.png" class="card-img-top w-full h-48 object-cover" alt="...">
            <div class="card-body p-4">
                <h5 class="card-title font-bold text-lg">Card title</h5>
                <p class="card-text text-gray-600">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    
        <div class="card bg-white rounded-lg shadow-md overflow-hidden">
            <img src="icecek.png" class="card-img-top w-full h-48 object-cover" alt="...">
            <div class="card-body p-4">
                <h5 class="card-title font-bold text-lg">Card title</h5>
                <p class="card-text text-gray-600">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    
        <div class="card bg-white rounded-lg shadow-md overflow-hidden">
            <img src="icecek.png" class="card-img-top w-full h-48 object-cover" alt="...">
            <div class="card-body p-4">
                <h5 class="card-title font-bold text-lg">Card title</h5>
                <p class="card-text text-gray-600">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    
        <div class="card bg-white rounded-lg shadow-md overflow-hidden">
            <img src="icecek.png" class="card-img-top w-full h-48 object-cover" alt="...">
            <div class="card-body p-4">
                <h5 class="card-title font-bold text-lg">Card title</h5>
                <p class="card-text text-gray-600">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    
        <div class="card bg-white rounded-lg shadow-md overflow-hidden">
            <img src="icecek.png" class="card-img-top w-full h-48 object-cover" alt="...">
            <div class="card-body p-4">
                <h5 class="card-title font-bold text-lg">Card title</h5>
                <p class="card-text text-gray-600">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    
        <div class="card bg-white rounded-lg shadow-md overflow-hidden">
            <img src="icecek.png" class="card-img-top w-full h-48 object-cover" alt="...">
            <div class="card-body p-4">
                <h5 class="card-title font-bold text-lg">Card title</h5>
                <p class="card-text text-gray-600">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    
        <div class="card bg-white rounded-lg shadow-md overflow-hidden">
            <img src="tatli.png" class="card-img-top w-full h-48 object-cover" alt="...">
            <div class="card-body p-4">
                <h5 class="card-title font-bold text-lg">Card title</h5>
                <p class="card-text text-gray-600">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    tatli
`;
cardSalt.innerHTML = `
     <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-20 py-12">
        <div class="card bg-white rounded-lg shadow-md overflow-hidden">
            <img src="salata.png" class="card-img-top w-full h-48 object-cover" alt="...">
            <div class="card-body p-4">
                <h5 class="card-title font-bold text-lg">Card title</h5>
                <p class="card-text text-gray-600">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    
        <div class="card bg-white rounded-lg shadow-md overflow-hidden">
            <img src="salata.png" class="card-img-top w-full h-48 object-cover" alt="...">
            <div class="card-body p-4">
                <h5 class="card-title font-bold text-lg">Card title</h5>
                <p class="card-text text-gray-600">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    
        <div class="card bg-white rounded-lg shadow-md overflow-hidden">
            <img src="salata.png" class="card-img-top w-full h-48 object-cover" alt="...">
            <div class="card-body p-4">
                <h5 class="card-title font-bold text-lg">Card title</h5>
                <p class="card-text text-gray-600">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    
        <div class="card bg-white rounded-lg shadow-md overflow-hidden">
            <img src="salata.png" class="card-img-top w-full h-48 object-cover" alt="...">
            <div class="card-body p-4">
                <h5 class="card-title font-bold text-lg">Card title</h5>
                <p class="card-text text-gray-600">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    
        <div class="card bg-white rounded-lg shadow-md overflow-hidden">
            <img src="salata.png" class="card-img-top w-full h-48 object-cover" alt="...">
            <div class="card-body p-4">
                <h5 class="card-title font-bold text-lg">Card title</h5>
                <p class="card-text text-gray-600">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    
        <div class="card bg-white rounded-lg shadow-md overflow-hidden">
            <img src="salata.png" class="card-img-top w-full h-48 object-cover" alt="...">
            <div class="card-body p-4">
                <h5 class="card-title font-bold text-lg">Card title</h5>
                <p class="card-text text-gray-600">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    
        <div class="card bg-white rounded-lg shadow-md overflow-hidden">
            <img src="tatli.png" class="card-img-top w-full h-48 object-cover" alt="...">
            <div class="card-body p-4">
                <h5 class="card-title font-bold text-lg">Card title</h5>
                <p class="card-text text-gray-600">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
  `;
  
  const burgerBtn = document.getElementById("burger-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  
  burgerBtn.addEventListener("click", () => {
      if (mobileMenu.classList.contains("hidden")) {
          // Menüyü göster
          mobileMenu.classList.remove("hidden");
          mobileMenu.classList.remove("-translate-y-full");
          mobileMenu.classList.add("translate-y-0");
      } else {
          // Menüyü gizle
          mobileMenu.classList.add("-translate-y-full");
          mobileMenu.classList.remove("translate-y-0");
          setTimeout(() => {
              mobileMenu.classList.add("hidden");
          }, 300); // Animasyon süresi (300ms) kadar bekle
      }
  });
  
  