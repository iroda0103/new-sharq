<template><iframe id="tour-embeded" name="Sharq_1-qavat" src="https://tour.panoee.net/iframe/69232ed26af138f518c2246d"
        frameBorder="0" width="100%" height="400px" scrolling="no" allowvr="yes"
        allow="vr; xr; accelerometer; gyroscope; autoplay;" allowFullScreen="false" webkitallowfullscreen="false"
        mozallowfullscreen="false" loading="eager"></iframe>

</template>
<script>
var pano_iframe_name = "tour-embeded";
window.addEventListener("devicemotion", function (e) { var iframe = document.getElementById(pano_iframe_name); if (iframe) iframe.contentWindow.postMessage({ type: "devicemotion", deviceMotionEvent: { acceleration: { x: e.acceleration.x, y: e.acceleration.y, z: e.acceleration.z }, accelerationIncludingGravity: { x: e.accelerationIncludingGravity.x, y: e.accelerationIncludingGravity.y, z: e.accelerationIncludingGravity.z }, rotationRate: { alpha: e.rotationRate.alpha, beta: e.rotationRate.beta, gamma: e.rotationRate.gamma }, interval: e.interval, timeStamp: e.timeStamp } }, "*"); });
</script>