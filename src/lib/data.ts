
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
      longDescription: "CartVision AI is a proof-of-concept for an AI-powered retail assistant. Using a camera and computer vision models, it identifies products that don't have a scannable barcode (like fresh produce) and automatically adds them to a digital shopping cart, aiming to streamline the checkout process.",
      image_id: "project-cart-vision",
      techStack: ["Python", "OpenCV", "TensorFlow", "Flask"],
      link: "#",
    },
    {
      title: "Safe Streets",
      tag: "IoT + App",
      description:
        "A smart safety jacket with SOS alerts and real-time location updates for emergencies.",
      longDescription: "Safe Streets is an IoT project consisting of a smart safety jacket connected to a mobile app. The jacket has sensors to detect falls or manual triggers, which then send SOS alerts with real-time GPS location to pre-configured emergency contacts via the app.",
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
