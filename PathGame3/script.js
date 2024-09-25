window.onload = function() {

    const nextButton = document.getElementById("nextButton");


    function checkBranchPoint2() {
        nextButton.style.display='block';
    }
    nextButton.addEventListener("click",(e)=>{
        window.location.href = "../index4.html"
    });


    // Check every 100 milliseconds if the first image has reached the branch point
    setInterval(checkBranchPoint2, 1000);


}
