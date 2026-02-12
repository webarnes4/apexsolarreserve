document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    // 1. Nav & Hamburger Logic
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('is-active');
        navMenu.classList.toggle('active');
    });

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    // 2. S1 Gallery Loop (12 Pics)
    const s1Img = document.getElementById('s1-target');
    const s1Count = document.getElementById('img-index');
    let s1Idx = 1;
    setInterval(() => {
        if(!s1Img) return;
        s1Img.style.opacity = '0.3';
        setTimeout(() => {
            s1Idx = (s1Idx % 12) + 1;
            s1Img.src = `images/s${s1Idx}.webp`;
            if(s1Count) s1Count.innerText = s1Idx;
            s1Img.style.opacity = '1';
        }, 500);
    }, 4000);

    // 3. Estate Pro S2 Loop (10 Pics)
    const epImg = document.getElementById('ep-target');
    const epCount = document.getElementById('ep-img-index');
    let epIdx = 1;
    setInterval(() => {
        if(!epImg) return;
        epImg.style.opacity = '0.3';
        setTimeout(() => {
            epIdx = (epIdx % 10) + 1;
            epImg.src = `images/ep${epIdx}.webp`;
            if(epCount) epCount.innerText = epIdx;
            epImg.style.opacity = '1';
        }, 500);
    }, 4500);

    // 4. Industrial X1 Loop (11 Pics)
    const xImg = document.getElementById('x-target');
    const xCount = document.getElementById('x-img-index');
    let xIdx = 1;
    setInterval(() => {
        if(!xImg) return;
        xImg.style.opacity = '0.3';
        setTimeout(() => {
            xIdx = (xIdx % 11) + 1;
            xImg.src = `images/x${xIdx}.webp`;
            if(xCount) xCount.innerText = xIdx;
            xImg.style.opacity = '1';
        }, 500);
    }, 5000);

    // 5. Spec Table Data
    const specData = {
        's1': { title: 'Essential Reserve S1 Specifications', specs: [['Chemistry', 'LFP'], ['Capacity', '6kWh - 15kWh'], ['AC Output', '7200W'], ['Switch', '<20ms'], ['Temp', '-4°F to 113°F']] },
        'estate': { title: 'Apex Estate Pro S2 Specifications', specs: [['System Capacity', '5,120Wh (5.1kWh)'], ['Continuous Power', '3,000W'], ['Surge Peak', '6,000W'], ['Battery Type', 'LiFePO4 (6,000+ Cycles)'], ['UPS Mode', '24/7 Integration'], ['Solar Input', '2,400W Max']] },
        'industrial': { 
            title: 'Apex Industrial X1 Specifications', 
            specs: [
                ['Energy Capacity', '14.3kWh (Expandable to 85kWh+)'], 
                ['Max PV Input', '8,000 Watts (Dual MPPT)'], 
                ['AC Output', '6,000W Cont. / 12,000W Surge'], 
                ['Voltage Architecture', '120V/240V Split-Phase'], 
                ['Durability Rating', 'IP65 All-Weather Rated'], 
                ['Safety', 'Fire Arrestors & Self-Heating']
            ] 
        }
    };

    document.querySelectorAll('.btn-view-specs').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = e.target.closest('.product-card');
            const productKey = card.getAttribute('data-product');
            const data = specData[productKey];
            const specSection = document.getElementById('specs');
            
            specSection.style.display = 'block';
            document.getElementById('active-spec-title').innerText = data.title;
            document.getElementById('spec-table-body').innerHTML = data.specs.map(s => `<tr><td>${s[0]}</td><td>${s[1]}</td></tr>`).join('');
            
            specSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // 6. Navigation & Mobile Menu Auto-Close
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            // This part turns the "X" back to a Hamburger when you click a link
            hamburger.classList.remove('is-active');
            navMenu.classList.remove('active');

            if(target) {
                window.scrollTo({ 
                    top: target.offsetTop - 60, 
                    behavior: 'smooth' 
                });
            }
        });
    });

    // 7. FormSubmit Notification
    // We do NOT use e.preventDefault() here so the form can actually send.
    const leadForm = document.getElementById('lead-form');
    if (leadForm) {
        leadForm.addEventListener('submit', () => {
            // This shows for a split second before FormSubmit takes over
            console.log("Architectural assessment data captured. Sending to server...");
        });
    }
});