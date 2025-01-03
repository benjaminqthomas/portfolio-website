


// Project Scroll Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
          console.log(entry)
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
    });

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
entry.target.classList.toggle('show', entry.isIntersecting);





// Gallery Carousel Activation 

const images = [...document.querySelectorAll('.image')];

//popup

const popup = document.querySelector('.popup');
const topBar = document.querySelector('.top-bar');
const largeImage = document.querySelector('.large-image');
const arrowBtn = document.querySelector('.arrow-btn');

left index = 0; // will track our current image;

images.forEach((item, i) => {
  item.addEventListener('click', () => {
    updateImage(i);
    popup.classList.toggle('active');
  })
})


const updateImage = (i) => {
  let path = 'img/img${i+1}.png';
}

closeBtn.addEventListener('click', () => {
  popup.classList.toggle('active');
})


leftArrow.addEventListener('click', () => {
  if(index > 0) {
    updateImage(index - 1);
  }
})

rightArrow.addEventListener('click', () => {
  if(index < images.length - 1) {
    updateImage(index + 1);
  }
})





















//Mobile Menu Navigation

// Bulb Animation Hover Play //


    // const video1 = document.getElementById('video1');
    // const videoDiv = document.getElementById('videoDiv');

    // // Play the video when the div is hovered
    // videoDiv.addEventListener('mouseenter', function() {
    //     video1.play();
    // });

// People Animation Hover Play //
        // const video2 = document.getElementById('video2');
        // const videoDiv2 = document.getElementById('videoDiv2');
    
        // // Play the video when the div is hovered
        // videoDiv2.addEventListener('mouseenter', function() {
        //     video2.play();
        // });
    
// Detail Animation Hover Play //
        // const video3 = document.getElementById('video3');
        // const videoDiv3 = document.getElementById('videoDiv3');
    
        // // Play the video when the div is hovered
        // videoDiv3.addEventListener('mouseenter', function() {
        //     video3.play();
        // });



// Bulb Animation Hover Play //


// const video1 = document.getElementById('video1');
// const videoDiv = document.getElementById('videoDiv');

// // Play the video when the div is hovered
// videoDiv.addEventListener('mouseenter', function() {
//     video1.play();
// });

// People Animation Hover Play //
    // const video2 = document.getElementById('video2');
    // const videoDiv2 = document.getElementById('videoDiv2');

    // // Play the video when the div is hovered
    // videoDiv2.addEventListener('mouseenter', function() {
    //     video2.play();
    // });

// Detail Animation Hover Play //
    // const video3 = document.getElementById('video3');
    // const videoDiv3 = document.getElementById('videoDiv3');

    // // Play the video when the div is hovered
    // videoDiv3.addEventListener('mouseenter', function() {
    //     video3.play();
    // });
                
            

    














//Mobile menu 

//     const toggleMenu = document.getElementById('toggle-menu');
// const mobileMenu = document.getElementById('mobileMenu');

// // Add click event listener to the trigger div
// toggleMenu.addEventListener('click', () => {
//     // Toggle the visibility class on the target div
//     toggleMenu.classList.toggle('visible');
//     toggleMenu.classList.toggle('hidden');
// });





// Mobile Menu the sliding effect

    //             document.getElementById('toggle-menu').addEventListener('click', function() {
    //                 const mobileMenu = document.getElementById('mobileMenu');
    //                 mobileMenu.classList.toggle('show'); // Toggle the 'show' class
    //             });



    // const mobileMenu = document.getElementById('mobileMenu');
    // const toggleMenu = document.getElementById('toggle-menu');

    // // Close the div when clicking outside of it
    // document.addEventListener('click', function (event) {
    //     const isClickInside = mobileMenu.contains(event.target) || toggleMenu.contains(event.target);

    //     if (!isClickInside) {
    //         mobileMenu.style.opacity = '0'; // Close the div if the click is outside
    //     }
    // });

 // Select the menu icon and mobile menu
        // const toggleMenu = document.getElementById('toggle-menu');
        // const mobileMenu = document.getElementById('mobileMenu');

        // // Add click event to toggle the "show" class
        // toggleMenu.addEventListener('click', () => {
        //     mobileMenu.classList.toggle('show');
        //     toggleMenu.classList.toggle('active'); // Optional: animate the menu icon
        // });
