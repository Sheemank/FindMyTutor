<!DOCTYPE html>
<html lang="en">
<body>
<div class="container">

  <h1>📘 FindMyTutor – Tutor Discovery Platform</h1>
    <p><strong>FindMyTutor</strong> is a fully responsive web platform that connects students with qualified tutors in their area. It features a searchable directory of tutors, detailed profiles, registration flows for both students and teachers, and an engaging home page with reviews and platform statistics.</p>

  <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin: 1.8rem 0;">
        <span class="badge">HTML5</span>
        <span class="badge">CSS3</span>
        <span class="badge">JavaScript (ES6)</span>
        <span class="badge">Firebase Auth</span>
        <span class="badge">Responsive</span>
    </div>

  <h2>🚀 Live Demo</h2>
    <p>Open <code>index.html</code> in any modern browser to start exploring.<br>
    <em>Note: Firebase authentication is partially implemented; replace the configuration in <code>login_page.html</code> to enable full login functionality.</em></p>

  <h2>📖 Table of Contents</h2>
    <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#pages--functionality">Pages & Functionality</a></li>
        <li><a href="#technologies-used">Technologies Used</a></li>
        <li><a href="#project-structure">Project Structure</a></li>
        <li><a href="#getting-started">Getting Started</a></li>
        <li><a href="#data-structure-alltutors">Data Structure (allTutors)</a></li>
        <li><a href="#firebase-setup">Firebase Setup</a></li>
        <li><a href="#future-improvements">Future Improvements</a></li>
        <li><a href="#license">License</a></li>
    </ul>

  <h2 id="features">✨ Features</h2>

  <div class="feature-grid">
        <div class="feature-card">
            <h4>🎓 For Students</h4>
            <ul style="margin:0; padding-left:1.2rem;">
                <li>Browse popular tutors</li>
                <li>Search by location & subject</li>
                <li>Detailed tutor profiles</li>
                <li>Like & comment on reviews</li>
            </ul>
        </div>
        <div class="feature-card">
            <h4>🧑‍🏫 For Tutors</h4>
            <ul style="margin:0; padding-left:1.2rem;">
                <li>Multi‑step registration</li>
                <li>Showcase certifications</li>
                <li>Languages, grades, demo video</li>
            </ul>
        </div>
        <div class="feature-card">
            <h4>⚙️ General</h4>
            <ul style="margin:0; padding-left:1.2rem;">
                <li>Responsive design</li>
                <li>Animated stats counter</li>
                <li>Reviews slider</li>
                <li>Consistent footer</li>
            </ul>
        </div>
    </div>

   <h2 id="pages--functionality">🧩 Pages & Functionality</h2>
    <table class="page-table">
        <thead><tr><th>Page</th><th>Description</th></tr></thead>
        <tbody>
            <tr><td><code>index.html</code></td><td>Landing page with search bar, top tutors, platform stats, and a reviews slider.</td></tr>
            <tr><td><code>search_teachers.html</code></td><td>Displays all tutors with “Show More” button; search filters are applied here.</td></tr>
            <tr><td><code>teacher_profile.html</code></td><td>Dynamic profile page for a single tutor (uses <code>?id=...</code> from <code>data.js</code>).</td></tr>
            <tr><td><code>login_page.html</code></td><td>Dual‑tab login: Email/Password (Firebase) and Mobile OTP (demo).</td></tr>
            <tr><td><code>register_student_teacher.html</code></td><td>Tabbed registration: one‑step for students, three‑step for teachers.</td></tr>
        </tbody>
    </table>

   <h2 id="technologies-used">🛠 Technologies Used</h2>
    <ul>
        <li><strong>HTML5</strong> – semantic structure</li>
        <li><strong>CSS3</strong> – gradients, animations, responsive layouts</li>
        <li><strong>JavaScript (ES6)</strong> – dynamic rendering, event handling, Firebase integration</li>
        <li><strong>Firebase (Auth)</strong> – email/password and phone authentication (demo OTP flow)</li>
        <li><strong>Font Awesome & Google Fonts</strong> – icons and typography</li>
        <li><strong>RandomUser.me</strong> – placeholder profile images</li>
    </ul>

   <h2 id="project-structure">📁 Project Structure</h2>
    <pre><code>findmytutor/
├── index.html               # Homepage
├── search_teachers.html     # Search results page
├── teacher_profile.html     # Dynamic tutor profile
├── login_page.html          # Login with Firebase
├── register_student_teacher.html # Registration page
├── style.css                # Global styles
├── script.js                # Main JavaScript (rendering, search, slider)
├── data.js                  # Master array of 16 tutors (allTutors)
└── README.md                # This file (original markdown)</code></pre>

   <h2 id="getting-started">🚀 Getting Started</h2>
    <ol>
        <li><strong>Clone the repository</strong>
            <pre><code>git clone https://github.com/your-username/findmytutor.git
cd findmytutor</code></pre>
        </li>
        <li><strong>Open the project</strong> – simply open <code>index.html</code> in your browser. No build tools required.</li>
        <li><strong>Replace Firebase config</strong> (optional) – in <code>login_page.html</code>, replace the <code>firebaseConfig</code> object with your own Firebase project credentials to enable real authentication.</li>
    </ol>

  <h2 id="data-structure-alltutors">📊 Data Structure (allTutors)</h2>
    <p>All tutor data is stored in <code>data.js</code> as an array of objects. Each object contains:</p>
    <pre><code>{
  id: 1,
  name: "Priya Sharma",
  img: "url",
  location: "Rohini, Delhi, India",
  rating: 4.5,
  reviews: 128,
  experience: 5,
  subjects: ["Math", "Science"],
  genderIcon: "👩‍🏫",
  isPopular: true,
  qualification: "M.Sc (Physics), B.Ed",
  bio: "...",
  contact: { phone: "+91 9876543210", email: "..." },
  availability: "Mon-Fri (5 PM - 8 PM)",
  fees: "₹800/hr (Online)",
  languages: ["Hindi", "English"],
  grades: ["Class 9", "Class 10", ...],
  certifications: ["CBSE Certified Educator", ...],
  stats: { successRate: "98%", students: 128, rating: 4.5 },
  demo_video: "https://www.youtube.com/embed/...",
  linkedin: "https://linkedin.com/in/..."
}</code></pre>

    <h2 id="firebase-setup">🔥 Firebase Setup</h2>
  <p>To enable real authentication:</p>
    <ol>
        <li>Go to the <a href="https://console.firebase.google.com/" target="_blank">Firebase Console</a> and create a new project.</li>
        <li>Enable <strong>Email/Password</strong> and <strong>Phone</strong> sign‑in methods.</li>
        <li>Copy your web app's configuration (apiKey, authDomain, etc.).</li>
        <li>Paste it into the <code>firebaseConfig</code> object in <code>login_page.html</code>:
            <pre><code>const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  appId: "YOUR_APP_ID"
};</code></pre>
        </li>
    </ol>

  <h2 id="future-improvements">🔮 Future Improvements</h2>
    <ul>
        <li><strong>Backend Integration</strong> – Replace static <code>data.js</code> with a database (Firestore, MongoDB).</li>
        <li><strong>Real OTP</strong> – Implement Firebase phone authentication with reCAPTCHA.</li>
        <li><strong>User Dashboard</strong> – Allow students to save favourite tutors and book sessions.</li>
        <li><strong>Review System</strong> – Let students submit actual reviews.</li>
        <li><strong>Payment Gateway</strong> – Integrate online fee payment.</li>
    </ul>

  <h2 id="license">📄 License</h2>
    <p>This project is for educational purposes. You are free to use and modify it as needed.</p>

   <div class="footer-note">
        ⚡ <strong>Made with ❤️ for students and tutors.</strong><br>
        <span style="font-size:0.85rem;">FindMyTutor · Project Documentation · 2025</span>
    </div>
</div>
</body>
</html>
