function myFunction() {
  let input = document.getElementById("myInput");
  let ul = document.getElementById("myUL");
  let li = ul.getElementsByTagName("li");
  //duyệt
  for (let i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName("a")[0];
    let txtValue = a.innerText;
    if (txtValue.toLowerCase().indexOf(input.value.toLowerCase()) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
