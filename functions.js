var count = 0

function like() {
  count += 1;
  document.getElementById('count').innerHTML = count;
}

function dislike() {
  count -= 1;
  document.getElementById('count').innerHTML = count;
}
