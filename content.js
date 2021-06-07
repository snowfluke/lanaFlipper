
let imageList = document.getElementsByTagName("img");

for (let i = 0; i < imageList.length-1; i++) {
	imageList[i].setAttribute('onclick','this.style.transform = this.style.transform == "scaleX(-1)"? "scaleX(1)":"scaleX(-1)"');
}

