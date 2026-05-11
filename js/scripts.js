document.addEventListener('DOMContentLoaded', () => {
  const roleContent = document.getElementById('role-content');
  const navLinks = Array.from(document.querySelectorAll('.nav-link'));
  const roleLinks = navLinks.filter(link => link.dataset.role);
  const staticLinks = navLinks.filter(link => !link.dataset.role);
  const dsResumeBtn = document.getElementById('ds-resume-btn');
  const daResumeBtn = document.getElementById('da-resume-btn');
  const roleTabs = Array.from(document.querySelectorAll('.role-tab'));
  const menuToggle = document.getElementById('mobile-menu');
  const navList = document.getElementById('nav-links');

  const dsData = {
    skills: [
      { icon: 'fab fa-python', name: 'Python' },
      { icon: 'fas fa-database', name: 'SQL' },
      { icon: 'fas fa-brain', name: 'Machine Learning' },
      { icon: 'fas fa-chart-line', name: 'Statistics' },
      { icon: 'fas fa-code', name: 'Scikit-learn' },
      { icon: 'fas fa-table', name: 'Pandas/NumPy' },
      { icon: 'fas fa-cloud', name: 'Flask' },
      { icon: 'fab fa-git-alt', name: 'Git/GitHub' },
      { icon: 'fas fa-chart-bar', name: 'Matplotlib/Seaborn' }
    ],
    projects: [
      { title: 'Machine Learning Portfolio', desc: 'Multiple ML projects using Python, Pandas, Scikit-learn.', img: 'assets/img/portfolio/thumbnails/machine_learning.png', link: 'https://github.com/subodhkryadav' },
      { title: 'Pima Diabetes Prediction', desc: 'Healthcare dataset – classification model to predict diabetes.', img: 'assets/img/portfolio/thumbnails/pima.png', link: 'https://github.com/subodhkryadav/pima-diabetes-prediction-ml' },
      { title: 'Student Placement Prediction App', desc: 'Logistic Regression + Flask web app.', img: 'assets/img/portfolio/thumbnails/placement.png', link: 'https://github.com/subodhkryadav/Student-Placement-Prediction-App' },
      { title: 'Student Performance Prediction', desc: 'ML app to predict academic performance.', img: 'assets/img/portfolio/thumbnails/student_performance.png', link: 'https://github.com/subodhkryadav/student_performance_app' }
    ]
  };

  const daData = {
    skills: [
      { icon: 'fab fa-python', name: 'Python' },
      { icon: 'fas fa-database', name: 'SQL' },
      { icon: 'fas fa-chart-pie', name: 'Power BI' },
      { icon: 'fas fa-chart-bar', name: 'Tableau' },
      { icon: 'fas fa-file-excel', name: 'Advanced Excel' },
      { icon: 'fas fa-snowflake', name: 'Snowflake' },
      { icon: 'fas fa-chart-line', name: 'Statistical Methods' },
      { icon: 'fas fa-chart-simple', name: 'Pandas/NumPy' },
      { icon: 'fas fa-chart-scatter', name: 'Matplotlib/Seaborn' }
    ],
    projects: [
      { title: 'Customer Behavior Analysis', desc: 'Python, SQL, Power BI – interactive dashboards.', img: 'assets/img/portfolio/thumbnails/costomer_behaviour.png', link: 'https://github.com/subodhkryadav/Customer-Behavior-Data-Analysis-Portfolio-Project' },
      { title: 'End-to-End Data Analysis Projects', desc: 'SQL, Excel, Power BI – insights & dashboards.', img: 'assets/img/portfolio/thumbnails/Data_Analytics.jpg', link: 'https://github.com/subodhkryadav/End-to-End-Data-Analysis-Projects' },
      { title: 'Customer Churn Data Analysis', desc: 'Pandas/NumPy analysis + visualizations.', img: 'assets/img/portfolio/thumbnails/churndata.png', link: 'https://github.com/subodhkryadav/Customer-Churn-Analysis-Prediction' },
      { title: 'Student Placement Prediction App', desc: 'Flask app with Logistic Regression.', img: 'assets/img/portfolio/thumbnails/placement.png', link: 'https://github.com/subodhkryadav/Student-Placement-Prediction-App' }
    ]
  };

  const placeholderFor = (title) => `https://placehold.co/600x380?text=${encodeURIComponent(title)}`;

  const renderRole = (role) => {
    if (!roleContent) return;
    const data = role === 'ds' ? dsData : daData;
    const title = role === 'ds' ? '🤖 Data Science' : '📊 Data Analytics';
    const skillsMarkup = data.skills.map(skill => (
      `<div class="skill-card"><i class="${skill.icon}"></i><p>${skill.name}</p></div>`
    )).join('');

    const projectsMarkup = data.projects.map(project => (
      `<article class="project-card">
        <div class="project-media">
          <img src="${project.img}" alt="${project.title}" onerror="this.src='${placeholderFor(project.title)}'" />
        </div>
        <div class="project-body">
          <h3>${project.title}</h3>
          <p>${project.desc}</p>
          <div class="project-actions">
            <a class="project-link" href="${project.link}" target="_blank" rel="noopener">
              <i class="fab fa-github"></i> View on GitHub
            </a>
            <span class="project-meta">Updated 2026</span>
          </div>
        </div>
      </article>`
    )).join('');

    const resumeLabel = role === 'ds' ? 'Data Science Resume' : 'Data Analytics Resume';
    const resumeLink = role === 'ds' ? 'assets/Data_Science_Resume.pdf' : 'assets/Data_Analytics_Resume.pdf';

    roleContent.innerHTML = `
      <h2 class="section-title">${title}</h2>
      <div class="role-block">
        <div class="role-block-header">
          <span class="role-block-title">⚙️ Core Skills</span>
          <span class="role-block-pill">${data.skills.length} Skills</span>
        </div>
        <div class="skills-grid">${skillsMarkup}</div>
      </div>
      <div class="role-block">
        <div class="role-block-header">
          <span class="role-block-title">💼 Featured Projects</span>
          <span class="role-block-pill">${data.projects.length} Projects</span>
        </div>
        <div class="project-grid">${projectsMarkup}</div>
      </div>
      <div class="role-resume">
        <a class="btn btn-primary" href="${resumeLink}" target="_blank" rel="noopener">
          <i class="fas fa-file-lines"></i> ${resumeLabel}
        </a>
      </div>
    `;
  };

  const setResumeState = (role) => {
    if (!dsResumeBtn || !daResumeBtn) return;
    if (role === 'ds') {
      dsResumeBtn.classList.add('btn-primary');
      dsResumeBtn.classList.remove('btn-secondary');
      daResumeBtn.classList.add('btn-secondary');
      daResumeBtn.classList.remove('btn-primary');
      daResumeBtn.classList.remove('is-active');
    } else {
      daResumeBtn.classList.add('btn-primary');
      daResumeBtn.classList.remove('btn-secondary');
      dsResumeBtn.classList.add('btn-secondary');
      dsResumeBtn.classList.remove('btn-primary');
      dsResumeBtn.classList.remove('is-active');
    }
  };

  const setRoleActive = (role) => {
    roleLinks.forEach(link => link.classList.remove('active'));
    const activeLink = roleLinks.find(link => link.dataset.role === role);
    if (activeLink) activeLink.classList.add('active');
    roleTabs.forEach(tab => tab.classList.toggle('active', tab.dataset.role === role));
    renderRole(role);
    setResumeState(role);
  };

  roleLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const role = link.dataset.role;
      setRoleActive(role);
      document.getElementById('role')?.scrollIntoView({ behavior: 'smooth' });
      navList.classList.remove('active');
      menuToggle?.setAttribute('aria-expanded', 'false');
    });
  });

  roleTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const role = tab.dataset.role;
      setRoleActive(role);
      document.getElementById('role')?.scrollIntoView({ behavior: 'smooth' });
    });
  });

  staticLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');
      if (!targetId || !targetId.startsWith('#')) return;
      event.preventDefault();
      document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' });
      navList.classList.remove('active');
      menuToggle?.setAttribute('aria-expanded', 'false');
    });
  });

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navList.classList.toggle('active');
      menuToggle.setAttribute('aria-expanded', isOpen.toString());
    });
  }

  const sections = Array.from(document.querySelectorAll('section'));
  const revealTargets = sections.concat(Array.from(document.querySelectorAll('.glass-card')));
  revealTargets.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  revealTargets.forEach(target => observer.observe(target));

  const updateActiveLink = () => {
    const offset = 140;
    let currentId = sections[0]?.id || '';
    sections.forEach(section => {
      if (window.scrollY + offset >= section.offsetTop) {
        currentId = section.id;
      }
    });

    staticLinks.forEach(link => link.classList.remove('active'));
    const activeStatic = staticLinks.find(link => link.getAttribute('href') === `#${currentId}`);
    if (activeStatic) {
      activeStatic.classList.add('active');
    }

    if (currentId !== 'role') {
      roleLinks.forEach(link => link.classList.remove('active'));
    }
  };

  window.addEventListener('scroll', updateActiveLink);
  updateActiveLink();

  const typedEl = document.querySelector('.typed-text');
  if (typedEl) {
    const roles = ['Data Scientist', 'Data Analyst', 'Python Developer'];
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const typeLoop = () => {
      const current = roles[roleIndex];
      const nextText = deleting ? current.slice(0, charIndex - 1) : current.slice(0, charIndex + 1);
      typedEl.textContent = nextText;
      charIndex = deleting ? charIndex - 1 : charIndex + 1;

      if (!deleting && charIndex === current.length) {
        deleting = true;
        setTimeout(typeLoop, 1400);
        return;
      }

      if (deleting && charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeLoop, 300);
        return;
      }

      setTimeout(typeLoop, deleting ? 70 : 120);
    };

    typeLoop();
  }

  setRoleActive('da');
});