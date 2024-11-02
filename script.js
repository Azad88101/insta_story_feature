var arr = [
  {
    dp: "https://images.unsplash.com/photo-1456885284447-7dd4bb8720bf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1vZGVsfGVufDB8fDB8fHww",
    story:
      "https://plus.unsplash.com/premium_photo-1664464229692-44046bfd6b7d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vZGVsfGVufDB8fDB8fHww",
  },
  {
    dp: "https://plus.unsplash.com/premium_photo-1708110921398-1fc68e98eacc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fG1vZGVsfGVufDB8fDB8fHww",
    story:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fG1vZGVsfGVufDB8fDB8fHww",
  },
  {
    dp: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fG1vZGVsfGVufDB8fDB8fHww",
    story:
      "https://images.unsplash.com/photo-1503104834685-7205e8607eb9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fG1vZGVsfGVufDB8fDB8fHww",
  },
  {
    dp: "https://plus.unsplash.com/premium_photo-1707932484405-d8cac82c76c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://plus.unsplash.com/premium_photo-1668485968642-30e3d15e9b9c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fG1vZGVsfGVufDB8fDB8fHww",
  },

  {
    dp: "https://images.unsplash.com/photo-1513379733131-47fc74b45fc7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fG1vZGVsfGVufDB8fDB8fHww",
    story:
      "https://plus.unsplash.com/premium_photo-1672114785694-26e4bd4e1039?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
  },
];
var storiya = document.querySelector(".storiya");
var fullScreen =document.querySelector('.fullScreen')
var clutter = "";
arr.forEach(function (elem, idx) {
  clutter += `<div class="story">
                <img id="${idx}" src="${elem.dp}" alt="">
            </div>`;
});
storiya.innerHTML = clutter;
storiya.addEventListener("click", function (dets) {
    // console.log(
    fullScreen.style.display='block'
    fullScreen.style.backgroundImage=`url(${arr[dets.target.id].story})`
    setTimeout(function () {
        fullScreen.style.display='none'
    },4000)
});
