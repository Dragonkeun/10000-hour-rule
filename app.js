const startButton = document.querySelector(".start_btn");
const openButton = document.querySelector(".modal_btn");
const closeButton = document.querySelector(".close_btn");
const shareButton = document.querySelector(".share_btn");
const result = document.querySelector(".result");
const modal = document.querySelector("#modal");
const loading = document.querySelector(".result_loading");

function calculator() {
  const fieldValue = document.querySelector("#filed_value");
  let timeValue = document.querySelector("#time_value");
  let timeValue_int = Number(timeValue.value);
  const fieldResult = document.querySelector(".field_result");
  const timeResult = document.querySelector(".time_result");
  if (fieldValue.value == "") {
    alert("입력되지 않았습니다");
    fieldValue.focus();
    return false;
  } else if (timeValue.value == "") {
    alert("입력되지 않았습니다");
    timeValue.focus();
    return false;
  } else if (timeValue_int > 24) {
    alert("잘못된 값입니다. 24이하의 값을 입력해주세요");
    return false;
  }
  result.style.display = "none"; //결과창 숨기고
  loading.style.display = "none"; //로딩창이 다시 보이도록 해줌 display=none을 display=flex로 바꿨기 때문
  setTimeout(function () {
    //모든 작업은 1.8초 후에 실행됨. 로딩이 1.8초 걸리다가 결과가 나오는 거임
    loading.style.display = "none"; //로딩창 숨기고
    result.style.display = "flex"; //결과창 보이게 해줌
    fieldResult.innerText = fieldValue.value; //fieldValue에 입력한 값을 fieldResult에 그대로 보여줌
    timeResult.innerText = parseInt(10000 / timeValue_int, 10); //timeValue에 입력한 값을 timeResult에 그대로 보여주는데 10000으로 나눈 상태로 보여줌
  }, 1800); //1.8초 후에
}

function openModal() {
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};

function copyUrl() {
  const url = window.location.href;
  navigator.clipboard.writeText(url).then(() => {
    alert("URL이 복사되었습니다");
  });
}

shareButton.addEventListener("click", copyUrl);
openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
startButton.addEventListener("click", calculator);
