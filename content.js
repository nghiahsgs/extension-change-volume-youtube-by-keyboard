ele = document.createElement('h1')
ele.style.zIndex = 20
ele.style.position = 'relative'
ele.style.color = 'black'
ele.style.fontWeight = 'bold';

ele.innerText = (parseFloat(document.querySelector('video').volume)).toFixed(2);
document.querySelector('.html5-video-container').appendChild(ele)

document.addEventListener('keyup', (e) => {
    if (document.querySelector('video').style.width.replace('px', '') == window.innerWidth) {
        if (e.code === "ArrowUp") {
            // console.log('ArrowUp')
            document.querySelector('video').volume = (parseFloat(document.querySelector('video').volume) + 0.08).toFixed(2);
            ele.innerText = document.querySelector('video').volume

        }
        if (e.code === "ArrowDown") {
            // console.log('ArrowDown')
            
            document.querySelector('video').volume = (parseFloat(document.querySelector('video').volume) - 0.08).toFixed(2);
            ele.innerText = document.querySelector('video').volume
        }
    }


});
