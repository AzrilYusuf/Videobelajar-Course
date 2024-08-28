// Array of objects containing card data
const cards = [
    {
      image: '../assets/class-img.png',
      title: 'Big 4 Auditor Financial Analyst',
      description: 'Mulai transformasi dengan instruktur<br />profesional, harga yang terjangkau, dan...',
      tutorImage: '../assets/tutor-logo.png',
      tutorName: 'Jenna Ortega',
      tutorPosition: 'Senior Accountant di <span style="font-weight: 700;">Gojek</span>',
      rating: '2.5 (86)',
      price: 'Rp 300K'
    },
    {
      image: '../assets/class-img.png',
      title: 'Big 4 Auditor Data Analyst',
      description: 'Mulai transformasi dengan instruktur<br />profesional, harga yang terjangkau, dan...',
      tutorImage: '../assets/tutor-logo.png',
      tutorName: 'John Doe',
      tutorPosition: 'Senior Developer at <span style="font-weight: 700;">Tokopedia</span>',
      rating: '4.5 (120)',
      price: 'Rp 500K'
    },
    {
      image: '../assets/class-img.png',
      title: 'AI learning',
      description: 'Mulai transformasi dengan instruktur<br />profesional, harga yang terjangkau, dan...',
      tutorImage: '../assets/tutor-logo.png',
      tutorName: 'John Doe',
      tutorPosition: 'Senior Developer at <span style="font-weight: 700;">Tokopedia</span>',
      rating: '4.5 (120)',
      price: 'Rp 500K'
    },
    {
      image: '../assets/class-img.png',
      title: 'Full-Stack Web Development',
      description: 'Mulai transformasi dengan instruktur<br />profesional, harga yang terjangkau, dan...',
      tutorImage: '../assets/tutor-logo.png',
      tutorName: 'John Doe',
      tutorPosition: 'Senior Developer at <span style="font-weight: 700;">Tokopedia</span>',
      rating: '4.5 (60)',
      price: 'Rp 800K'
    },
    {
      image: '../assets/class-img.png',
      title: 'Front-End Engineering',
      description: 'Mulai transformasi dengan instruktur<br />profesional, harga yang terjangkau, dan...',
      tutorImage: '../assets/tutor-logo.png',
      tutorName: 'John Doe',
      tutorPosition: 'Senior Developer at <span style="font-weight: 700;">Tokopedia</span>',
      rating: '4.5 (120)',
      price: 'Rp 500K'
    },
    {
      image: '../assets/class-img.png',
      title: 'Back-End Engineering',
      description: 'Mulai transformasi dengan instruktur<br />profesional, harga yang terjangkau, dan...',
      tutorImage: '../assets/tutor-logo.png',
      tutorName: 'Tom Hiddleston',
      tutorPosition: 'Senior Developer at <span style="font-weight: 700;">Tokopedia</span>',
      rating: '4.5 (120)',
      price: 'Rp 500K'
    },
    {
      image: '../assets/class-img.png',
      title: 'Machine Learning',
      description: 'Mulai transformasi dengan instruktur<br />profesional, harga yang terjangkau, dan...',
      tutorImage: '../assets/tutor-logo.png',
      tutorName: 'John Doe',
      tutorPosition: 'Senior Developer at <span style="font-weight: 700;">Tokopedia</span>',
      rating: '4.5 (200)',
      price: 'Rp 299K'
    },
    {
      image: '../assets/class-img.png',
      title: 'Cyber Security',
      description: 'Mulai transformasi dengan instruktur<br />profesional, harga yang terjangkau, dan...',
      tutorImage: '../assets/tutor-logo.png',
      tutorName: 'John Doe',
      tutorPosition: 'Senior Developer at <span style="font-weight: 700;">Meta</span>',
      rating: '4.5 (120)',
      price: 'Rp 500K'
    },
    {
      image: '../assets/class-img.png',
      title: 'Blockchain',
      description: 'Mulai transformasi dengan instruktur<br />profesional, harga yang terjangkau, dan...',
      tutorImage: '../assets/tutor-logo.png',
      tutorName: 'Ryan Gosling',
      tutorPosition: 'Senior Developer at <span style="font-weight: 700;">Google</span>',
      rating: '4.5 (99)',
      price: 'Rp 679K'
    },
  ];
  
  // Select the container where the cards will be added
  const container = document.getElementById('priceListClass');
  
  // Loop through the array and create cards
  cards.forEach((card) => {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'class-card-container';
  
    cardDiv.innerHTML = `
      <img src="${card.image}" alt="" />
      <div style="display: flex; flex-direction: column; gap: 8px">
        <h3>${card.title}</h3>
        <p>${card.description}</p>
      </div>
      <div class="tutor">
        <img src="${card.tutorImage}" alt="" style="width: 40px; height: 40px" />
        <div style="display: flex; flex-direction: column">
          <h4>${card.tutorName}</h4>
          <p style="font-size: 14px;">${card.tutorPosition}</p>
        </div>
      </div>
      <div style="display: flex; justify-content: space-between">
        <div style="display: flex; justify-content: center; align-items: center;">
          <div>
            <svg width="90" height="19" viewBox="0 0 90 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 13.4525L13.635 16.25L12.405 10.9775L16.5 7.43L11.1075 6.9725L9 2L6.8925 6.9725L1.5 7.43L5.595 10.9775L4.365 16.25L9 13.4525Z" fill="#FCE91B"/>
              <path d="M27 13.4525L31.635 16.25L30.405 10.9775L34.5 7.43L29.1075 6.9725L27 2L24.8925 6.9725L19.5 7.43L23.595 10.9775L22.365 16.25L27 13.4525Z" fill="#FCE91B"/>
              <mask id="mask0_5110_815" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="36" y="0" width="18" height="19">
                <path d="M45 13.4525L49.635 16.25L48.405 10.9775L52.5 7.43L47.1075 6.9725L45 2L42.8925 6.9725L37.5 7.43L41.595 10.9775L40.365 16.25L45 13.4525Z" fill="black"/>
              </mask>
              <g mask="url(#mask0_5110_815)">
                <rect x="36" y="0.5" width="9" height="18" fill="#FCE91B"/>
                <rect x="45" y="0.5" width="9" height="18" fill="#3A3541" fill-opacity="0.12"/>
              </g>
              <path d="M63 13.4525L67.635 16.25L66.405 10.9775L70.5 7.43L65.1075 6.9725L63 2L60.8925 6.9725L55.5 7.43L59.595 10.9775L58.365 16.25L63 13.4525Z" fill="#3A3541" fill-opacity="0.12"/>
              <path d="M81 13.4525L85.635 16.25L84.405 10.9775L88.5 7.43L83.1075 6.9725L81 2L78.8925 6.9725L73.5 7.43L77.595 10.9775L76.365 16.25L81 13.4525Z" fill="#3A3541" fill-opacity="0.12"/>
            </svg>
          </div>
          <p style="font-size: 14px; color: #333333ad; text-decoration: underline;">${card.rating}</p>
        </div>
        <h2 style="font-weight: 600; line-height: 28.8px; color: #3ecf4c">${card.price}</h2>
      </div>
    `;
  
    container.appendChild(cardDiv);
  });
  