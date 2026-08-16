# portflio
# Portfolio-
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Suhana A — Software Developer & AI Enthusiast</title>
<meta name="description" content="Portfolio of Suhana A , an Information Technology student, aspiring software developer, AI enthusiast and prompt engineer.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
<link rel="stylesheet" href="style.css">
</head>
<body data-theme="light">

<div id="preloader"><div class="loader-ring"></div><div class="loader-text">Loading</div></div>
<div id="progress-bar"></div>

<nav>
  <div class="nav-inner">
    <a href="#hero" class="logo">Suhana A<span>.</span></a>
    <div class="nav-links">
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#education">Education</a>
      <a href="#certifications">Certs</a>
      <a href="#achievements">Achievements</a>
      <a href="#contact">Contact</a>
    </div>
    <div class="nav-right">
      <button class="theme-toggle" id="theme-toggle" aria-label="Toggle dark mode"><i class="fa-solid fa-moon"></i></button>
      <button class="hamburger" id="hamburger" aria-label="Open menu"><i class="fa-solid fa-bars"></i></button>
    </div>
  </div>
  <div class="mobile-menu" id="mobile-menu">
    <a href="#about">About</a>
    <a href="#skills">Skills</a>
    <a href="#projects">Projects</a>
    <a href="#education">Education</a>
    <a href="#certifications">Certifications</a>
    <a href="#achievements">Achievements</a>
    <a href="#contact">Contact</a>
  </div>
</nav>

<!-- HERO -->
<section id="hero">
  <canvas id="particle-canvas"></canvas>
  <div class="wrap">
    <div class="hero-grid">
      <div>
        <div class="eyebrow reveal"><span class="dot"></span> Open to opportunities</div>
        <h1 class="hero-name reveal">Hey, I'm <span class="highlight">Suhana A</span></h1>
        <div id="typed-role" class="reveal"></div>
        <p class="hero-intro reveal">A third-year Information Technology student who loves turning ideas into working software. I build with code, explore what AI can do, and I'm always chasing the next thing worth learning.</p>
        <div class="btn-row reveal">
          <a href="#" class="btn btn-primary" id="resume-btn"><i class="fa-solid fa-download"></i> Download Resume</a>
          <a href="#contact" class="btn btn-outline"><i class="fa-solid fa-envelope"></i> Contact Me</a>
        </div>
        <div class="social-row reveal">
          <a class="social-icon" href="https://www.linkedin.com/in/suhana-a-9aa47a338/" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
          <a class="social-icon" href="https://github.com/suhana12707" aria-label="GitHub"><i class="fa-brands fa-github"></i></a>
          <a class="social-icon" href="mailto:suhana12707@gmail.com" aria-label="Email"><i class="fa-solid fa-envelope"></i></a>
        </div>
      </div>
      <div class="hero-photo-wrap reveal">
        <div class="ring ring-1"></div>
        <div class="ring ring-2"></div>
        <div class="photo-orb"><img src="asserts.jpg"></div>
        <div class="badge-floating glass badge-1"><i class="fa-solid fa-robot" style="color:var(--purple-deep)"></i> AI Enthusiast</div>
        <div class="badge-floating glass badge-2"><i class="fa-solid fa-code" style="color:var(--blue-deep)"></i> IT Student</div>
      </div>
    </div>
  </div>
</section>

<!-- ABOUT -->
<section id="about">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="section-tag">About Me</div>
      <h2 class="section-title">A little about who I am</h2>
    </div>
    <div class="about-grid">
      <div class="glass about-card reveal">
        <p>I'm a third-year Information Technology student with a genuine curiosity for how software gets built and how AI is reshaping it.</p>
        <p>I enjoy solving real problems with code, whether that's a web app, a smart recommendation system, or figuring out the right prompt to get an AI model to do exactly what I need.</p>
        <p>Outside of academics, I care about working well with people — clear communication and good teamwork make every project better.</p>
      </div>
      <div class="about-points">
        <div class="glass about-point reveal">
          <i class="fa-solid fa-graduation-cap"></i>
          <div><h4>Third-Year IT Student</h4><p>Building a strong foundation in software development and computer science fundamentals.</p></div>
        </div>
        <div class="glass about-point reveal">
          <i class="fa-solid fa-brain"></i>
          <div><h4>AI & Web Technologies</h4><p>Genuinely passionate about AI, prompt engineering, and modern web development.</p></div>
        </div>
        <div class="glass about-point reveal">
          <i class="fa-solid fa-lightbulb"></i>
          <div><h4>Always Learning</h4><p>Excited to pick up new technologies and turn them into useful, working applications.</p></div>
        </div>
        <div class="glass about-point reveal">
          <i class="fa-solid fa-people-group"></i>
          <div><h4>Communication & Teamwork</h4><p>Comfortable collaborating, explaining ideas clearly, and learning from others.</p></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- SKILLS -->
<section id="skills">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="section-tag">Skills</div>
      <h2 class="section-title">What I work with</h2>
      <p class="section-sub">A mix of what I know well, the tools I use daily, and what I'm learning right now.</p>
    </div>
    <div class="skills-grid">
      <div class="glass skill-card reveal">
        <h3><i class="fa-solid fa-code"></i> Programming</h3>
        <div class="skill-row" data-level="70"><div class="skill-row-top"><span>Python</span><span>80%</span></div><div class="skill-track"><div class="skill-fill"></div></div></div>
        <div class="skill-row" data-level="72"><div class="skill-row-top"><span>C</span><span>72%</span></div><div class="skill-track"><div class="skill-fill"></div></div></div>
        <div class="skill-row" data-level="80"><div class="skill-row-top"><span>HTML5</span><span>85%</span></div><div class="skill-track"><div class="skill-fill"></div></div></div>
        <div class="skill-row" data-level="75"><div class="skill-row-top"><span>CSS3</span><span>80%</span></div><div class="skill-track"><div class="skill-fill"></div></div></div>
        <div class="skill-row" data-level="70"><div class="skill-row-top"><span>JavaScript</span><span>70%</span></div><div class="skill-track"><div class="skill-fill"></div></div></div>
      </div>
      <div class="glass skill-card reveal">
        <h3><i class="fa-solid fa-screwdriver-wrench"></i> Tools</h3>
        <div class="skill-row" data-level="75"><div class="skill-row-top"><span>Git</span><span>75%</span></div><div class="skill-track"><div class="skill-fill"></div></div></div>
        <div class="skill-row" data-level="78"><div class="skill-row-top"><span>GitHub</span><span>78%</span></div><div class="skill-track"><div class="skill-fill"></div></div></div>
        <div class="skill-row" data-level="85"><div class="skill-row-top"><span>VS Code</span><span>88%</span></div><div class="skill-track"><div class="skill-fill"></div></div></div>
        <div class="skill-row" data-level="82"><div class="skill-row-top"><span>Prompt Engineering</span><span>82%</span></div><div class="skill-track"><div class="skill-fill"></div></div></div>
      </div>
      <div class="glass skill-card reveal">
        <h3><i class="fa-solid fa-seedling"></i> Currently Learning</h3>
        <div class="skill-row" data-level="55"><div class="skill-row-top"><span>React</span><span>55%</span></div><div class="skill-track"><div class="skill-fill"></div></div></div>
        <div class="skill-row" data-level="50"><div class="skill-row-top"><span>Node.js</span><span>50%</span></div><div class="skill-track"><div class="skill-fill"></div></div></div>
        <div class="skill-row" data-level="45"><div class="skill-row-top"><span>MongoDB</span><span>45%</span></div><div class="skill-track"><div class="skill-fill"></div></div></div>
        <div class="skill-row" data-level="48"><div class="skill-row-top"><span>Express.js</span><span>48%</span></div><div class="skill-track"><div class="skill-fill"></div></div></div>
      </div>
    </div>
  </div>
</section>

<!-- PROJECTS -->
<section id="projects">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="section-tag">Projects</div>
      <h2 class="section-title">Things I've built</h2>
      <p class="section-sub">A few projects where I turned an idea into something that actually runs.</p>
    </div>
    <div class="project-grid">
      <div class="glass project-card reveal">
        <div class="project-media"><i class="fa-solid fa-layer-group"></i></div>
        <div class="project-body">
          <h3>Skill Development Platform</h3>
          <p>A platform where learners can explore courses, track progress, and build skills relevant to their career goals.</p>
          <div class="tech-tags"><span class="tech-tag">HTML5</span><span class="tech-tag">CSS3</span><span class="tech-tag">JavaScript</span></div>
          <div class="project-links"><a href="#"><i class="fa-brands fa-github"></i> GitHub</a><a href="#"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo</a></div>
        </div>
      </div>
      <div class="glass project-card reveal">
        <div class="project-media"><i class="fa-solid fa-hotel"></i></div>
        <div class="project-body">
          <h3>Hotel Management Registration Form</h3>
          <p>A guest registration and booking form for hotel management, built with form validation and a clean UI.</p>
          <div class="tech-tags"><span class="tech-tag">HTML5</span><span class="tech-tag">CSS3</span><span class="tech-tag">JavaScript</span></div>
          <div class="project-links"><a href="#"><i class="fa-brands fa-github"></i> GitHub</a><a href="#"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo</a></div>
        </div>
      </div>
      <div class="glass project-card reveal">
        <div class="project-media"><i class="fa-solid fa-laptop-code"></i></div>
        <div class="project-body">
          <h3>Portfolio Website</h3>
          <p>This site — a personal portfolio built to showcase my skills, projects, and journey as a developer.</p>
          <div class="tech-tags"><span class="tech-tag">HTML5</span><span class="tech-tag">CSS3</span><span class="tech-tag">JavaScript</span></div>
          <div class="project-links"><a href="#"><i class="fa-brands fa-github"></i> GitHub</a><a href="#"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo</a></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- EDUCATION -->
<section id="education">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="section-tag">Education</div>
      <h2 class="section-title">My academic journey</h2>
    </div>
    <div class="timeline">
      <div class="tl-item reveal">
        <div class="tl-dot"><i class="fa-solid fa-graduation-cap"></i></div>
        <div class="glass tl-card">
          <div class="tl-date">Currently Pursuing</div>
          <h4>Bachelor of Information Technology</h4>
          <p>Mahendra College of Engineering — building a solid foundation in programming, systems, and software development while exploring AI and web technologies.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CERTIFICATIONS -->
<section id="certifications">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="section-tag">Certifications</div>
      <h2 class="section-title">Courses & credentials</h2>
    </div>
    <div class="cert-grid">
      <div class="glass cert-card reveal"><div class="cert-icon"><i class="fa-brands fa-python"></i></div><h4>Python Basics</h4><span>Certification</span></div>
      <div class="glass cert-card reveal"><div class="cert-icon"><i class="fa-solid fa-globe"></i></div><h4>Web Development</h4><span>Certification</span></div>
      <div class="glass cert-card reveal"><div class="cert-icon"><i class="fa-solid fa-brain"></i></div><h4>AI Fundamentals</h4><span>Certification</span></div>
    </div>
  </div>
</section>

<!-- ACHIEVEMENTS -->
<section id="achievements">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="section-tag">Achievements</div>
      <h2 class="section-title">Milestones along the way</h2>
    </div>
    <div class="timeline">
      <div class="tl-item reveal">
        <div class="tl-dot"><i class="fa-solid fa-diagram-project"></i></div>
        <div class="glass tl-card"><div class="tl-date">College Projects</div><h4>Built and presented multiple academic projects</h4><p>Applied classroom learning to real, working applications across different domains.</p></div>
      </div>
      <div class="tl-item reveal">
        <div class="tl-dot"><i class="fa-solid fa-bolt"></i></div>
        <div class="glass tl-card"><div class="tl-date">Hackathons</div><h4>Took part in hackathons</h4><p>Collaborated under time pressure to build and pitch working solutions.</p></div>
      </div>
      <div class="tl-item reveal">
        <div class="tl-dot"><i class="fa-solid fa-certificate"></i></div>
        <div class="glass tl-card"><div class="tl-date">Online Certifications</div><h4>Completed self-driven online courses</h4><p>Continuously upskilling through structured online learning in AI and development.</p></div>
      </div>
    </div>
  </div>
</section>

<!-- CONTACT -->
<section id="contact">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="section-tag">Contact</div>
      <h2 class="section-title">Let's work together</h2>
      <p class="section-sub">Have an opportunity, project, or just want to say hi? I'd love to hear from you.</p>
    </div>
    <div class="contact-grid">
      <form class="glass contact-card reveal" id="contact-form">
        <div class="form-group"><label for="name">Name</label><input type="text" id="name" placeholder="Your name" required></div>
        <div class="form-group"><label for="email">Email</label><input type="email" id="email" placeholder="you@example.com" required></div>
        <div class="form-group"><label for="message">Message</label><textarea id="message" placeholder="Tell me about your project or opportunity..." required></textarea></div>
        <button type="submit" class="btn btn-primary" style="width:100%; justify-content:center;"><i class="fa-solid fa-paper-plane"></i> Send Message</button>
        <div class="toast" id="form-toast">Thanks for reaching out! I'll get back to you soon.</div>
      </form>
      <div class="glass contact-card reveal">
        <div class="contact-info-item"><i class="fa-solid fa-envelope"></i><div><h4>Email</h4><p>suhana12707@gmail.com</p></div></div>
        <div class="contact-info-item"><i class="fa-solid fa-phone"></i><div><h4>Phone</h4><p>+91 95246 67789</p></div></div>
        <div class="contact-info-item"><i class="fa-solid fa-location-dot"></i><div><h4>Based in</h4><p>Tamil Nadu, India</p></div></div>
        <div class="contact-btn-row">
          <a href="https://linkedin.com/" target="_blank" rel="noopener" class="btn btn-outline" style="flex:1; justify-content:center;"><i class="fa-brands fa-linkedin-in"></i> LinkedIn</a>
          <a href="https://github.com/" target="_blank" rel="noopener" class="btn btn-outline" style="flex:1; justify-content:center;"><i class="fa-brands fa-github"></i> GitHub</a>
        </div>
      </div>
    </div>
  </div>
</section>

<footer>
  <p>Designed and Developed by <span class="heart">Suhana A</span> · © <span id="year"></span></p>
</footer>

<div id="scroll-top"><i class="fa-solid fa-arrow-up"></i></div>

<script src="script.js"></script>
</body>
</html>
