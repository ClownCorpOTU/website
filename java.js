const gallery = []
gallery[0] = "https://picsum.photos/id/756/400/400.jpg";
gallery[1] = "https://picsum.photos/id/407/400/400.jpg";
gallery[2] = "https://picsum.photos/id/684/400/400.jpg";
gallery[3] = "https://picsum.photos/id/665/400/400.jpg";

let x = 1;
let y = gallery.length - 1;
let z = 0;
function change(z) {
  x += z;
  if (x > y) {
    x = 0;
  }
  if(x < 0){
    x = y;
  }
  document.getElementById("pic").src = gallery[x];
}
