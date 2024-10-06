// script.js file

function domReady(fn) {
    if (
        document.readyState === "complete" ||
        document.readyState === "interactive"
    ) {
        setTimeout(fn, 1000);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

domReady(function () {

    // If found you qr code
    function onScanSuccess(decodeText, decodeResult) {
    let ps = decodeText;
	//let ps = "655770";
	let p1 = ps[0];
	let p2 = ps[1];
	let p3 = ps[2];
	let p4 = ps[3];
	let p5 = ps[4];
	let p6 = ps[5];
	console.log(ps);
	//------------------
	p1 = String(Math.abs(((parseInt(p1) + parseInt(p1)) - parseInt(p2)) * parseInt(p3)));
	p2 = String(Math.abs(((parseInt(p2) + parseInt(p1)) - parseInt(p2)) * parseInt(p3)));
	p3 = String(Math.abs(((parseInt(p3) + parseInt(p1)) - parseInt(p2)) * parseInt(p3)));
	p4 = String(Math.abs(((parseInt(p4) + parseInt(p1)) - parseInt(p2)) * parseInt(p3)));
	p5 = String(Math.abs(((parseInt(p5) + parseInt(p1)) - parseInt(p2)) * parseInt(p3)));
	p6 = String(Math.abs(((parseInt(p6) + parseInt(p1)) - parseInt(p2)) * parseInt(p3)));
	let result_str = String(p1[0] + p2[0] + p3[0] + p4[0] + p5[0] + p6[0]);
    
    
        alert("You Qr is : " + result_str, decodeResult);
               
        
    }

    let htmlscanner = new Html5QrcodeScanner(
        "my-qr-reader",
        { fps: 10, qrbos: 250 }
    );
    htmlscanner.render(onScanSuccess);
});
