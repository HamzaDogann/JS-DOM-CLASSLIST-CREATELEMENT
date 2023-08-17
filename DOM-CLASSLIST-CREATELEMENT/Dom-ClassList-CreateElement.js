//! CreateElement

for (let i = 0; i < 10; i++) {

let h1 = document.createElement('h1');

h1.className='test'
h1.style.backgroundColor="purple"
h1.textContent=`${i}. İcerik`
h1.style.color="white"

document.body.appendChild(h1);  //--> Elementi body'nin sonuna ekledi.
  // .appendChild yerine .prepend kullansaydık kendisininden önceki elemanın ekleyecekti.   
}



//! Remove
const AllH1Element = document.querySelectorAll("h1");

for(const h1 of AllH1Element){
    h1.remove() //--> h1 ler kaldırıldı.
}



/-------------------------------------------------///


//! classList

function SinifEkle(){

//? -- > add

const example = document.getElementById("btn1");

example.classList.add('newclass'); //--> h2 elementimize bir sınıf ekledik.

//todo | add ile sınıf ekleme işlemini başarıyla tamamladık.
console.log(example);





//? -- > remove

const textTittle = document.getElementById("textTittle");
textTittle.classList.remove('oldclass');  //---> Sınıf kaldırdık.
//todo | Remove ile sınıf silme işlemini başarıyla tamamladık.





//? --> Replace


const replaceclass = document.getElementById("ex1");
replaceclass.classList.replace('oldclass','newclass')  //--> sınıfları değiştirebiliriz örnek olarak oldclass'ı newclass ile değiştir dedik.
//todo | Replace ile sınıfları değiştirebildik.




//? toggle;

const ToggleEx = document.getElementById("tglbutton");

ToggleEx.addEventListener("click", function(){  // */
ToggleEx.classList.toggle('yeniclass'); // Eğer yazdığımız sınıf varsa var olanı siler yoksa yazdığımız sınıfı elemente ekler.
//todo | Toggle ile sınıf yoksa eklemeyi varsa kaldırmayı başardık.
})


//? Contains

const linkElement = document.getElementById("myLink");

if (linkElement.classList.contains("link-highlight")) {  // contains ile yazdığımız sınıfın elementin içinde olup olmamasına göre işlemler yapabiliriz.
  //myLink id li elementimiz içinde  "link-highlight" sınıfı olduğundan if işlemi true olur ve gerekli işlemleri yapar.
    linkElement.textContent = "Sınıfı içeriyorum!!";
    linkElement.style.color="blue"
}
//todo | Contains ile sınıf var mı yok mu? denetimimizi yaptık.

};








