var slideIndex = 0;
var slideInterval;

showAutomaticSlides();

function showAutomaticSlides() {
  var slides = document.getElementsByClassName("mySlides");

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  
  slides[slideIndex - 1].style.display = "block";

  slideInterval = setTimeout(showAutomaticSlides, 4000); // 4초마다 이미지가 체인지됩니다
}

function plusSlides(n) {
  clearTimeout(slideInterval); // 슬라이드를 수동으로 조작할 때 자동 넘김 중지
  showManualSlides(slideIndex += n);
}

function showManualSlides(n) {
  var slides = document.getElementsByClassName("mySlides");

  if (n && n <= slides.length) {
    slideIndex = n;
  }

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  if (slideIndex < 1) {
    slideIndex = slides.length;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";

  slideInterval = setTimeout(showAutomaticSlides, 4000); // 4초마다 이미지가 체인지됩니다
}
function calculateTotal() {
    var numPlayersSelect = document.getElementById("numPlayers");
    var totalAmountElement = document.getElementById("totalAmount");

    var selectedPlayers = parseInt(numPlayersSelect.value);
    var unitPrice = 6000; // 각 참가자당 가격 (6000원으로 가정)

    var totalAmount = selectedPlayers * unitPrice;
    totalAmountElement.innerText = "총 결제 예상 금액: " + totalAmount + "원";
}
function openInquiryForm() {
    // 작은 창을 여는 함수
    var windowFeatures = 'width=500,height=400,left=100,top=100';
    window.open('community.html', 'Inquiry Form', windowFeatures);
}