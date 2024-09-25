window.onload = function() {
    const images = document.querySelectorAll('#path img');
    const dragElement = document.getElementById('dragElement');
    const dropZone = document.getElementById('dropZone');
    const dragElement2 = document.getElementById('dragElement2');
    const dropZone2 = document.getElementById('dropZone2');
    const nextButton = document.getElementById("nextButton");
    let animationsStarted = false;
    let branchPointReached = false;
    let branchPointReached2 = false;
    let startTime;

    // Function to pause all animations
    function pauseAnimations() {
        images.forEach(img => {
            img.style.animationPlayState = 'paused';
        });
    }

    // Function to resume all animations
    function resumeAnimations() {
        images.forEach((img, index) => {
            const delay = index * 0.5; // Adjust delay based on index of image
            img.style.animationDelay = `${delay}s`;
            img.style.animationPlayState = 'running';
        });
        animationsStarted = true;
        startTime = Date.now(); // Record the start time
    }

    // Start animations immediately upon page load
    resumeAnimations();

    // Check if the first image has reached the branch point and pause animations
    function checkBranchPoint() {
        if (!branchPointReached) {
            const firstImage = document.getElementById('img1');
            const pathPoint = document.querySelector('.vertical-line-up').getBoundingClientRect().left;
            const imageRight = firstImage.getBoundingClientRect().right;
 

            // Adjust the delay based on when the first image reaches the branch point
            if (imageRight >= pathPoint) {
                branchPointReached = true;
                dragElement.draggable = true;
                dragElement.style.color = "black";
                pauseAnimations();
            }
        }
    }

    function checkBranchPoint2() {
        if (!branchPointReached2) {
            const firstImage = document.getElementById('img1');
            const pathPoint = document.querySelector('.vertical-line-up-up').getBoundingClientRect().left;
            const imageRight = firstImage.getBoundingClientRect().right;

            // Adjust the delay based on when the first image reaches the branch point
            if (imageRight >= pathPoint) {
                branchPointReached2 = true;
                dragElement2.draggable = true;
                dragElement2.style.color = "black";
                pauseAnimations();
            }
        }
    }


    // Check every 100 milliseconds if the first image has reached the branch point
    setInterval(checkBranchPoint, 100);



    // Drag and drop functionality
    dragElement.addEventListener('dragstart', function(event) {
        event.dataTransfer.setData('text/plain', 'Has Whiskers?');
    });

    dropZone.addEventListener('dragover', function(event) {
        event.preventDefault();
    });

    dropZone.addEventListener('drop', function(event) {
        event.preventDefault();
        const data = event.dataTransfer.getData('text/plain');
        if (data === 'Has Whiskers?') {
            dropZone.innerHTML = "";
            dragElement.style.top="10px";
            dragElement.style.right="50px";
            // Append the draggable element to dropzone
            dragElement.style.right="10px";
            dropZone.appendChild(dragElement);
            // Resume animations
            resumeAnimations();
            setInterval(checkBranchPoint2, 100);
        }
    });


    // Drag and drop functionality
    dragElement2.addEventListener('dragstart', function(event) {
        event.dataTransfer.setData('text/plain', 'Has Whiskers?');
    });

    dropZone2.addEventListener('dragover', function(event) {
        event.preventDefault();
    });

    nextButton.addEventListener("click",(e)=>{
        window.location.href="../index2.html"
    });

    dropZone2.addEventListener('drop', function(event) {
        event.preventDefault();
        const data = event.dataTransfer.getData('text/plain');
        if (data === 'Has Whiskers?') {
            dropZone2.innerHTML = "";
            dragElement2.style.top="10px";
            dragElement2.style.right="50px";
            // Append the draggable element to dropzone
            dragElement2.style.right="10px";
            dropZone2.appendChild(dragElement2);
            // Resume animations
            resumeAnimations();
            nextButton.style.display="block";
        }
    });
}
