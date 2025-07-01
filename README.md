# Leony
Name: Habchi Leony 
Sem8 - FO

-This website is dedicated to more than just telling the story of Flight 1549. It serves as a tribute to the courage and quick thinking that saved 155 lives, and as a resource to educate visitors about aviation safety, emergency response, and human resilience.
By understanding the details behind this historic event, we hope to inspire appreciation for the professionals who keep our skies safe, and remind everyone of the power of teamwork and preparedness in crisis situations.
-The website consists of 4 pages:
•	Home
•	Timeline 
•	About
•	Contact

-The API I used: NewsAPI.org to fetch current news articles and headlines from many news sources worldwide. 
•	/v2/top-headlines?country=us — for latest US top headlines
•	/v2/everything?q=... — for searching news articles by keywords
API key: 39be7cf6faee42758714115e8de17ec4

Each page consists of a navigation bar and footer:
1.	 Navigation Bar
The header features a clean and responsive navigation bar that allows users to easily access the main sections of the site: Home, Timeline, About, and Contact. 
It includes an airplane logo with a rotating airplane icon for a 3D effect. The navigation bar also provides a search input to query news articles dynamically via the NewsAPI. 
Additionally, a toggle button allows users to switch between light and dark modes, enhancing accessibility and user preference. The state of the mode chosen is maintain even after refreshing the page.

2.	Footer
The footer provides quick access to the website's social media platforms through visually consistent icons, promoting user engagement. It also contains a secondary navigation menu linking key pages to improve site usability. The footer concludes with copyright information and credits the site designer.

 

Home includes:
1.	Carousel
The home page contains a carousel showcasing three key moments of the “Miracle on the Hudson” story. Each slide includes a full-width background image with a dark overlay and captions.


2.	Map Section
An interactive Google Map displays the Hudson River crash location. The map is styled with subtle filters to blend smoothly with the website’s design.


Timeline: It presents a detailed, chronological narrative of the event using multiple timeline sections, each with a title, icon, short summary, and expandable full text for deeper reading.
Features:
1.	Responsive timeline layout with alternating rows for visual interest.
2.	Read More/Read Less toggle to expand or collapse detailed content.
3.	Smooth scrolling and user-friendly navigation.

 

About: presents detailed information about the crew members of US Airways Flight 1549, highlighting their roles and contributions during the Miracle on the Hudson incident.
Features:
•	Crew Section showcasing photos and biographies of the captain, first officer, and flight attendants.
•	Top Headlines Section dynamically fetching latest US news headlines via the NewsAPI.

 

Credits: serves as a part of the US Airline website and includes the contact Information section, displaying airline contact email, phone, and location with icons.




-Technologies Used
- HTML5: Semantic HTML structure
- CSS3: Styling with custom properties and transitions
- JavaScript (ES6): Implemented using ES6 classes
- Bootstrap 5: For layout and components
- Public API: NewsAPI.org


-Features:
1. Responsive Design: Adapts to all screen sizes using Flexbox and media queries
2. Dark/Light Mode Toggle: Custom theme switching with CSS variables
3. Dynamic Content: JavaScript-powered interactive elements
4. API Integration: Fetches and displays data from a public API
5. CSS Effects: Includes transitions and 3D transforms
6. Multi-page Navigation: Consistent navbar across all pages

-Custom UI Requirement:
The custom UI requirement implemented is a 3D transformed airplane logo with hover effects. This was achieved using: 
.logo-airplane-rotate {
  font-size: 24px; 
  color: var(--accent-color);
  transform-style: preserve-3d;
  animation: airplaneSpinX 8s linear infinite;
  cursor: default;
  transition: transform 0.3s ease;
}

.logo-airplane-rotate:hover {
  animation-play-state: paused;
  transform: rotateX(20deg) scale(1.2);
  color:var(--accent-color);
  
}

@keyframes airplaneSpinX {
  from {
    transform: rotateX(0deg);
  }
  to {
    transform: rotateX(360deg);
  }
}








-Requirement: Use bootstrap carousel to display a featured section

 
 
  <div id="hero-carousel" class="carousel slide" data-bs-ride="carousel">    
   
   *This tells Bootstrap to initialize a sliding carousel.
The data-bs-ride="carousel" attribute ensures the carousel starts cycling through slides automatically when the page loads.*

   
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>

    

    *the <div class="carousel-indicators"> section includes three buttons. These buttons act as navigation dots at the bottom of the carousel, allowing users to jump directly to any of the three slides. Each button targets the carousel using data-bs-target="#hero-carousel" and specifies which slide to show using data-bs-slide-to. The first button has the class active, meaning it's selected by default when the page loads.*


    

    <div class="carousel-inner">
      <div class="carousel-item active c-item">
        <img src="https://static1.simpleflyingimages.com/wordpress/wp-content/uploads/2023/07/2008_las_vegas_n106us_us_airways.jpg" class="d-block w-100 c-img" alt="Slide 1">
        <div class="carousel-caption top-0 mt-4">



        
*The first slide uses the class active so that it shows initially. The images use Bootstrap classes like d-block and w-100 to ensure they display properly and stretch to the full width. A custom class c-img is also used for styling.*




          <p class="mt-5 fs-3 text-uppercase">The Miracle on the Hudson</p>
          <p class="display-1 fw-bolder text-capitalize">US Airways Flight 1549</p>
          
         
        </div>
      </div>
      <div class="carousel-item c-item">
        <img src="https://allthatsinteresting.com/wordpress/wp-content/uploads/2024/01/sully-sullenberger-and-jeff-skiles.jpeg" class="d-block w-100 c-img" alt="Slide 2">
        <div class="carousel-caption top-0 mt-4">
          <p class="text-uppercase fs-3 mt-5">When Everything Fails</p>
          <p class="display-1 fw-bolder text-capitalize">The Landing That Made History</p>
         
        </div>
      </div>
      <div class="carousel-item c-item">
        <img src="https://cdn.britannica.com/39/130639-050-289FD709/Passengers-crew-wings-plane-Airways-emergency-landing-January-15-2009.jpg" class="d-block w-100 c-img" alt="Slide 3">
        <div class="carousel-caption top-0 mt-4">
          <p class="text-uppercase fs-3 mt-5">208 Seconds</p>
          <p class="display-1 fw-bolder text-capitalize">155 survivors</p>
         
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>




      *Finally, the carousel includes navigation arrows on the left and right, defined by <button class="carousel-control-prev"> and <button class="carousel-control-next">.These let users manually move through the slides. The span elements inside these buttons hold the arrow icons, and an extra visually-hidden label provides accessibility for screen readers.*





    </button>
  </div>
 



.c-item {
  height: 400px;
}

.c-img {
  height: 100%;
  object-fit: cover;
  filter: brightness (0.4);
} 




*These classes are used to customize the bootstrap carousel in CSS.*


