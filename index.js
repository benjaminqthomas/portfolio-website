
// Hero Image Scroll Animation 

    const image = document.querySelector('.hero-img');

    window.addEventListener('scroll', () => {
    // Get the scroll position relative to the page height
    let scrollPosition = window.scrollY;
    let scaleValue = 1 + scrollPosition / 2000; // Adjust scale ratio as needed

    // Apply the scaling effect to the image
    image.style.transform = `scale(${scaleValue})`;
    });



// Project Scroll Animation


// Section Scroll Animations 

      // Define a function that handles the intersection (scroll) event
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // Check if the section is in the viewport (isIntersecting)
      if (entry.isIntersecting) {
        // Add the 'visible' class to animate in
        entry.target.classList.add('visible');
        // Optionally unobserve the element after it becomes visible (so it doesn't animate repeatedly)
        observer.unobserve(entry.target);
      }
    });
  });

    // Select all sections with the 'section' class
    const sections = document.querySelectorAll('.section');

    // Observe each section
    sections.forEach(section => {
        observer.observe(section);
    });



// Mobile Menu the sliding effect

                document.getElementById('toggle-menu').addEventListener('click', function() {
                    const mobileMenu = document.getElementById('mobileMenu');
                    mobileMenu.classList.toggle('show'); // Toggle the 'show' class
                });



    const mobileMenu = document.getElementById('mobile-menu');
    const toggleMenu = document.getElementById('toggle-menu');

    // Close the div when clicking outside of it
    document.addEventListener('click', function (event) {
        const isClickInside = mobileMenu.contains(event.target) || toggleMenu.contains(event.target);

        if (!isClickInside) {
            mobileMenu.style.opacity = '0'; // Close the div if the click is outside
        }
    });



// Bulb Animation Hover Play //


    const video1 = document.getElementById('video1');
    const videoDiv = document.getElementById('videoDiv');

    // Play the video when the div is hovered
    videoDiv.addEventListener('mouseenter', function() {
        video1.play();
    });

// People Animation Hover Play //
        const video2 = document.getElementById('video2');
        const videoDiv2 = document.getElementById('videoDiv2');
    
        // Play the video when the div is hovered
        videoDiv2.addEventListener('mouseenter', function() {
            video2.play();
        });
    
// Detail Animation Hover Play //
        const video3 = document.getElementById('video3');
        const videoDiv3 = document.getElementById('videoDiv3');
    
        // Play the video when the div is hovered
        videoDiv3.addEventListener('mouseenter', function() {
            video3.play();
        });
            

    