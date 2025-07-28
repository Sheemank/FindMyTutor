function searchTutors() {
    const location = document.getElementById('location').value;
    const subject = document.getElementById('subject').value;
    alert(`Searching tutors in "${location}" for subject "${subject}"`);
}

// Example: Teachers tab par click par section show karo
document.getElementById('teachersTab').addEventListener('click', function() {
  document.getElementById('teachersSection').scrollIntoView({behavior: 'smooth'});
  document.getElementById('teachersSection').style.display = 'block';
});
// ...existing code...
const leftBtn = document.getElementById('sliderLeftBtn');
const rightBtn = document.getElementById('sliderRightBtn');

leftBtn.addEventListener('click', () => {
    if(index <= 0) {
        index = slider.children.length - 4;
        slider.style.transition = 'none';
        slider.style.transform = `translateX(-${index * cardWidth}px)`;
        setTimeout(() => {
            slider.style.transition = 'transform 0.7s cubic-bezier(.77,0,.18,1)';
            index--;
            slider.style.transform = `translateX(-${index * cardWidth}px)`;
        }, 20);
    } else {
        index--;
        slider.style.transition = 'transform 0.7s cubic-bezier(.77,0,.18,1)';
        slider.style.transform = `translateX(-${index * cardWidth}px)`;
    }
});

rightBtn.addEventListener('click', () => {
    slideNext();
});

// ...existing code...