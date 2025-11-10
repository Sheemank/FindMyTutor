/* ===================================================================
   MASTER DATA ("Dictionary")
   !!! YEH ARRAY AB 'data.js' MEIN HAI !!!
   !!! IS FILE SE 'allTutors' ARRAY KO DELETE KAR DEIN !!!
=================================================================== */

// const allTutors = [ ... ] <-- Yahaan se poora array DELETE KAREIN


/* ===================================================================
   2. MAIN SCRIPT LOGIC
   (Yeh same rahega)
=================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    // Check karein ki 'data.js' load hui hai ya nahi
    if (typeof allTutors === 'undefined') {
        console.error("ERROR: data.js file load nahi hui hai.");
        return;
    }

    // --- Page-Specific Logic ---
    if (document.getElementById("tutorCardContainer")) {
        renderHomepageTutors();
        initStatsCounter();
        initReviewsSlider();
    }
    if (document.getElementById("teachersListContainer")) {
        renderSearchPageTutors();
    }
});


/* ===================================================================
   3. RENDERING FUNCTIONS (HTML banane wale functions)
=================================================================== */

/**
 * --- UPDATED: Homepage (index.html) ke liye Tutors Render karta hai ---
 * Ab yeh poore card ko ek link banata hai
 */
function renderHomepageTutors() {
    const container = document.getElementById("tutorCardContainer");
    if (!container) return; 

    const homeTutors = allTutors.slice(0, 12);

    container.innerHTML = homeTutors.map(tutor => `
      <a href="teacher_profile.html?id=${tutor.id}" class="tutor-link">
        <div class="card">
          <img src="${tutor.img}" alt="${tutor.name}" />
          <h3>${tutor.name}</h3>
          <p>${tutor.subjects.join(' & ')} - ${tutor.experience} Years Experience</p>
          <p><span class="location">🏠 ${tutor.location}</span></p>
          
          <div class="card-header">
              <span class="star-badge">★ ${tutor.rating.toFixed(1)}</span>
              ${tutor.isPopular ? '<span class="popular-tag">🔥 Popular</span>' : ''}
          </div>

          <div class="feedbacks">${tutor.reviews} feedbacks</div>
        </div>
      </a>
    `).join('');
}

/**
 * Teacher Search Page (search_teachers.html) ke liye cards Render karta hai
 * (Yeh same rahega)
 */
function renderSearchPageTutors() {
    const container = document.getElementById("teachersListContainer");
    if (!container) return; 

    const initialTutors = allTutors.slice(0, 8);
    container.innerHTML = initialTutors.map(tutor => createTeacherCardHTML(tutor)).join('');

    const loadMoreBtn = document.getElementById('loadMoreTeachers');
    const loadMoreContainer = document.getElementById('loadMoreContainer');
    const moreTeachersContainer = document.getElementById('moreTeachersSection');

    if (loadMoreBtn && moreTeachersContainer && loadMoreContainer) {
        loadMoreBtn.addEventListener('click', function () {
            const remainingTutors = allTutors.slice(8);
            moreTeachersContainer.innerHTML = remainingTutors.map(tutor => createTeacherCardHTML(tutor)).join('');
            moreTeachersContainer.style.display = "flex"; 
            loadMoreContainer.style.display = 'none'; // Button ke container ko hide karein
            moreTeachersContainer.scrollIntoView({ behavior: "smooth" });
        });
    }
}

/**
 * --- UPDATED: search_teachers.html ke liye ek card ka HTML banata hai ---
 * Ab yeh Teacher ke Naam ko link banata hai
 * @param {object} tutor - Tutor object (allTutors array se)
 * @returns {string} - HTML string
 */

/* ===================================================================
   (Baaki saari file same rahegi)
   ...
=================================================================== */

/**
 * --- UPDATED: search_teachers.html ke liye ek card ka HTML banata hai ---
 * Ab yeh Teacher ke Naam aur Image dono ko link banata hai
 * @param {object} tutor - Tutor object (allTutors array se)
 * @returns {string} - HTML string
 */
function createTeacherCardHTML(tutor) {
    return `
      <div class="teacher-card">
        <div class="teacher-img">
          <a href="teacher_profile.html?id=${tutor.id}" class="profile-link-img">
            <img src="${tutor.img}" alt="${tutor.name}">
          </a>
        </div>
        <div class="teacher-info">
          <div class="teacher-header">
            <span class="teacher-icon">${tutor.genderIcon}</span>
            
            <a href="teacher_profile.html?id=${tutor.id}" class="profile-link">
              <span class="teacher-name">${tutor.name}</span>
            </a>
            
            <span class="teacher-rating">
              <span class="star-badge">★ ${tutor.rating.toFixed(1)}</span>
              <span class="rating-count">${tutor.reviews} Ratings</span>
            </span>
            ${tutor.isPopular ? '<span class="teacher-popular">🔥 Popular</span>' : ''}
          </div>
          <div class="teacher-location">🏠 ${tutor.location}</div>
          <div class="teacher-tags">
            ${tutor.subjects.map(sub => `<span class="tag subject">${sub}</span>`).join('')}
            <span class="tag exp">${tutor.experience} Years Experience</span>
          </div>
          <div class="teacher-desc">
            ${tutor.bio.substring(0, 100)}... </div>
          <div class="teacher-actions">
            <button class="btn call-btn">📞 Show Number</button>
            <button class="btn whatsapp-btn">🟢 WhatsApp</button>
            <button class="btn enquiry-btn">💬 Send Enquiry</button>
          </div>
        </div>
      </div>
    `;
}


/* ===================================================================
   (Baaki saari file same rahegi)
   ...
=================================================================== */

/* ===================================================================
   4. UTILITY FUNCTIONS (UPDATED SEARCH FUNCTION)
   (Yeh poora section same rahega jaisa pichli baar banaya tha)
=================================================================== */

function searchTutors() {
    const locationInput = document.getElementById('location');
    const subjectInput = document.getElementById('subject');
    const location = locationInput.value.toLowerCase();
    const subject = subjectInput.value.toLowerCase();
    const container = document.getElementById('teachersListContainer');
    
    if (container) {
        // --- LOGIC FOR SEARCH_TEACHERS.HTML PAGE ---
        const filteredTutors = allTutors.filter(tutor => {
            const locationMatch = location ? tutor.location.toLowerCase().includes(location) : true;
            const subjectsString = tutor.subjects.join(' ').toLowerCase();
            const subjectMatch = subject ? subjectsString.includes(subject) : true;
            return locationMatch && subjectMatch;
        });

        if (filteredTutors.length > 0) {
            container.innerHTML = filteredTutors.map(tutor => createTeacherCardHTML(tutor)).join('');
        } else {
            container.innerHTML = `<h3 style="text-align:center; color:#555; margin: 40px 0;">No tutors found matching your criteria.</h3>`;
        }

        const loadMoreContainer = document.getElementById('loadMoreContainer');
        const moreTeachersContainer = document.getElementById('moreTeachersSection');
        if (loadMoreContainer) loadMoreContainer.style.display = 'none';
        if (moreTeachersContainer) moreTeachersContainer.style.display = 'none';

    } else {
        // --- FALLBACK LOGIC FOR INDEX.HTML PAGE ---
        alert(`Searching tutors in "${locationInput.value}" for subject "${subjectInput.value}"`);
    }
}
window.searchTutors = searchTutors;


// --- Stats Counter (index.html ke liye) ---
// (Yeh poora function same rahega)
function initStatsCounter() {
    const counters = document.querySelectorAll(".stat-number");
    const duration = 4000; 
    counters.forEach((counter) => {
        const target = +counter.getAttribute("data-target");
        let start = 0;
        let step = Math.ceil(target / (duration / 20));
        if (step < 1) step = 1;
        let current = 0;
        function updateCounter() {
            current += step;
            if (current > target) current = target;
            if (target >= 1000000) {
                counter.textContent = Math.floor(current / 1000000) + " Million+";
            } else if (target >= 1000) {
                counter.textContent = Math.floor(current).toLocaleString() + "+";
            } else {
                counter.textContent = current + "+";
            }
            if (current < target) {
                setTimeout(updateCounter, 20);
            } else {
                if (target >= 1000000) {
                    counter.textContent = Math.floor(target / 1000000) + " Million+";
                } else if (target >= 1000) {
                    counter.textContent = target.toLocaleString() + "+";
                } else {
                    counter.textContent = target + "+";
                }
            }
        }
        updateCounter();
    });
}

// --- Reviews Slider (index.html ke liye) ---
// (Yeh poora function same rahega)
function initReviewsSlider() {
    const slider = document.getElementById("reviewsSlider");
    const leftBtn = document.getElementById("sliderLeftBtn");
    const rightBtn = document.getElementById("sliderRightBtn");
    if (!slider || !leftBtn || !rightBtn) return;
    let cardWidth = slider.children[0].offsetWidth + 24; 
    let index = 0;
    let isHovered = false;
    for (let i = 0; i < 3; i++) {
        slider.appendChild(slider.children[i].cloneNode(true));
    }
    function slideNext() {
        if (isHovered) return;
        index++;
        slider.style.transition = "transform 0.7s cubic-bezier(.77,0,.18,1)";
        slider.style.transform = `translateX(-${index * cardWidth}px)`;
        if (index === slider.children.length - 3) {
            setTimeout(() => {
                slider.style.transition = "none";
                slider.style.transform = "translateX(0)";
                index = 0;
            }, 700);
        }
    }
    let sliderInterval = setInterval(slideNext, 2500);
    slider.addEventListener("mouseenter", () => (isHovered = true));
    slider.addEventListener("mouseleave", () => (isHovered = false));
    leftBtn.addEventListener('click', () => {
        if (index <= 0) return; 
        index--;
        slider.style.transition = 'transform 0.7s cubic-bezier(.77,0,.18,1)';
        slider.style.transform = `translateX(-${index * cardWidth}px)`;
    });
    rightBtn.addEventListener('click', () => {
        slideNext();
    });
    window.addEventListener("resize", () => {
        cardWidth = slider.children[0].offsetWidth + 24;
        slider.style.transition = "none";
        slider.style.transform = `translateX(-${index * cardWidth}px)`;
    });
}

// --- Like/Comment (onclick dwara call kiya gaya) ---
// (Yeh functions same rahenge)
function likeReview(btn) {
    let count = btn.querySelector(".like-count");
    count.textContent = parseInt(count.textContent) + 1;
    btn.classList.add("liked");
    setTimeout(() => btn.classList.remove("liked"), 400);
}
function commentReview(btn) {
    let count = btn.querySelector(".comment-count");
    count.textContent = parseInt(count.textContent) + 1;
    btn.classList.add("commented");
    setTimeout(() => btn.classList.remove("commented"), 400);
}
window.likeReview = likeReview;
window.commentReview = commentReview;
