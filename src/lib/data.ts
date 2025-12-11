
export const portfolioData = {
  name: "Jessica B",
  role: "Computer Science Engineering Student",
  hero: {
    intro:
      "A passionate CSE student who loves building meaningful tech solutions and exploring real-world problem solving through projects and hackathons.",
  },
  about:
    "I'm Jessica, a motivated and hardworking Computer Science Engineering student with a passion for building real-world digital solutions. I love exploring new technologies, understanding how things work, and transforming ideas into practical, usable projects.\n\nI enjoy solving problems, experimenting with new tools, and continuously improving my technical and creative skills. Whether it’s working on app prototypes, AI experiments, or web platforms, I focus on creating meaningful solutions.\n\nWith strong communication, teamwork, leadership, and adaptability, I thrive in collaborative environments and enjoy taking on challenges that help me grow both personally and professionally.",
  whatIDo: [
    {
      title: "Web Development",
      description: "Creating simple and responsive platforms using modern tools.",
    },
    {
      title: "App Prototyping",
      description: "Designing intuitive UI mockups and student-focused interfaces.",
    },
    {
      title: "Problem Solving",
      description: "Turning ideas into functional and meaningful tech solutions.",
    },
    {
      title: "AI & Tech Exploration",
      description: "Experimenting with Python, AI concepts, and automation.",
    },
  ],
  projects: [
    {
      title: "Blood Connect",
      tag: "App Design",
      description:
        "A real-time platform that helps recipients quickly find nearby blood donors.",
      longDescription: "In emergency situations, delays in locating suitable blood donors or nearby blood banks can be life-threatening. \nBlood Connect addresses this by providing a real-time donor discovery platform integrated with Google Maps, \nenabling recipients to locate and reach nearby donors instantly. The system sends alerts through push \nnotifications, SMS, direct calls, and WhatsApp (with prior consent). \nEducational institutions, corporates, and NGOs can register official WhatsApp groups within the app, allowing \nurgent requests to be broadcast to large networks, drastically reducing response time. The platform connects \npatients, hospitals, and blood banks to verified donors, while encouraging volunteers to contribute by \ndonation, coordinating, or spreading urgent requests. \nKey Features: \n• Real-time matching of donors based on blood type and location \n• Interactive map for nearby donor search \n• Multi-channel instant alerts (Notifications, SMS, WhatsApp) \n• Group integration for wider reach in emergencies",
      image_id: "project-blood-connect",
      techStack: ["Figma", "UI/UX Design", "Prototyping"],
      link: "#",
    },
    {
      title: "OD Tracker System",
      tag: "Web Platform",
      description:
        "Automates the on-duty approval workflow with role-based dashboards and tracking.",
      longDescription: "Manual On-Duty (OD) approvals in academic institutions often involve paper forms and repeated follow-ups, \ncausing delays and lack of transparency. OD Tracker System digitizes and automates this process through a \nrole-based workflow that eliminates unnecessary waiting time. \nThe system features three dashboards—Student, Staff/Mentor/Class Coordinator, and HoD—ensuring that \nonce a request is submitted by a student, it automatically routes to the respective mentor, then to the class \ncoordinator, and finally to the HoD for approval. Each stage is updated in real time, allowing applicants to track \ntheir request status instantly. \nKey Features: \n• Role-based dashboards for different approval authorities \n• Automated request forwarding between approval levels \n• Real-time status tracking for transparency \n• Reduced administrative workload and faster processing times",
      image_id: "project-od-tracker",
      techStack: ["React", "Node.js", "MySQL", "Express"],
      link: "#",
    },
    {
      title: "CartVision AI",
      tag: "AI Project",
      description:
        "An AI-powered retail assistant that detects products without barcodes using computer vision.",
      longDescription: "Smart basket equipped with an inbuilt barcode scanner and Vision AI module for instant product identification\n• Vision AI automatically detects items placed inside the basket and updates product names, quantities, and prices in real time\n• A digital cart is created instantly, eliminating manual scanning at billing counters\n• Seamless checkout happens through linked phone number or unique customer ID\n• Final bill is generated automatically and sent via SMS, app, or email for complete transparency\n\nHow It Solves the Problem\n\n• No queues → Vision AI handles instant product recognition, removing the need to wait at checkout counters\n• Error-free billing → eliminates manual scanning mistakes and mismatched pricing\n• Real-time bill view → customers always know what they’re being charged for\n• Dynamic discounts → system can identify product combos and suggest offers to reduce wastage and cost\n• Faster, modern, frictionless shopping experience for all customers",
      image_id: "project-cart-vision",
      techStack: ["Python", "OpenCV", "TensorFlow", "Flask"],
      link: "#",
    },
    {
      title: "Safe Streets",
      tag: "IoT + App",
      description:
        "A smart safety jacket with SOS alerts and real-time location updates for emergencies.",
      longDescription: "Many individuals—especially women and the elderly—feel unsafe walking through dimly lit or isolated streets. Most crimes happen before help can be reached, and existing apps offer support only after danger has already started. There is no early-warning system to detect if someone is being followed.\n\nSafeRoute provides proactive protection through a combined mobile+hardware system. The smart safety jacket includes GPS, an SOS button, and multiple sensors that detect unusual movement or signs of danger. The app gives real-time alerts, suggests safer routes, and shares the user’s live location with trusted contacts.\n\nKey Features:\n• Smart safety jacket with sensors, GPS, and SOS button\n• Real-time detection of suspicious activity\n• Safe route suggestions for night travel\n• Instant alerts and live location sharing\n• One-tap emergency SOS activation",
      image_id: "project-safe-streets",
      techStack: ["Arduino", "React Native", "Firebase", "GPS Module"],
      link: "#",
    },
  ],
  education: {
    degree: "B.E. Computer Science and Engineering",
    college: "Easwari Engineering College",
    duration: "2024 – 2028",
    cgpa: "8.72",
  },
  skills: {
    technical: ["Java", "Python", "C", "MySQL"],
    soft: ["Communication", "Teamwork", "Problem Solving", "Adaptability", "Leadership"]
  },
  achievements: [
    "EMF'25 — 3rd place",
    "Zero Gravity'25",
    "Ignite'25",
    "INNOTHON'25",
    "VisAIon Hacks'25",
  ],
  certifications: [
    "JLPT N5 cleared",
    "Python for data science (silver + elite)-NPTEL",
    "Ethical hacking (elite)-NPTEL",
    "Core Java Programming Revisited-Infosys Springboard",
  ],
  internship: {
      title: "1M1M AI for Sustainability",
      duration: "6 weeks",
  },
  socials: {
    linkedin: "https://linkedin.com/in/jessica-b-8a18a2334",
    email: "jessicabenno28@gmail.com",
  },
};
