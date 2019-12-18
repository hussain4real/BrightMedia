const myCard = document.getElementsByClassName('card');
for (let i = 0; i < myCard.length; i += 1) {
  myCard[i].addEventListener('click', function() {
    document.getElementById('myOverlay').style.display = 'block';
  });
}

document.getElementById('invisibleDiv').onclick = function() {
  document.getElementById('myOverlay').style.display = 'none';
};
