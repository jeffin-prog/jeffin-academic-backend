const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors({ origin: '*' }));
app.use(express.json());

const profile = {
  name: "Dr. Jeffin Gracewell",
  title: "Associate Professor & Research Scholar",
  department: "Department of Computer Science & Engineering",
  institution: "Your Institution Name",
  location: "Nagercoil, Tamil Nadu, India",
  email: "jeffin@gracewell.in",
  phone: "+91 94000 00000",
  bio: "Dr. Jeffin Gracewell is a researcher and academic with expertise in AI, NLP and Machine Learning.",
  scholar: "https://scholar.google.com/citations?user=7zyWunkAAAAJ&hl=en",
  linkedin: "https://in.linkedin.com/in/jeffin-gracewell-0634007b"
};

const education = [
  {
    degree: "Ph.D. – Electronics & Communication Engineering",
    institution: "Anna University, Chennai",
    year: "2020",
    thesis: "Efficient Techniques for Motion Estimation and Event Detection in Video Surveillance"
  },
  {
    degree: "M.E. – Communication Systems",
    institution: "SSN College of Engineering, Chennai",
    year: "2012",
    thesis: "Bilingual Speech Recognition System for Tamil and Indian English"
  },
  {
    degree: "B.E. – Electronics & Communication Engineering",
    institution: "Karunya University, Coimbatore",
    year: "2010",
    thesis: "PXI Based Data Acquisition Development – ISRO Project"
  },

];

const publications = [
  {
    id: 1,
    type: "Journal",
    title: "Hierarchical Aspect-Based Sentiment Analysis Using Semantic Capsuled Multi-Granular Networks",
    authors: "Jeffin Gracewell et al.",
    journal: "Information Systems, Elsevier",
    year: 2025,
    doi: "10.1016/j.is.2025.102556",
    citations: 2
  },
  {
    id: 2,
    type: "Journal",
    title: "VLSI Design and Hardware Implementation for Optimal Image Dehazing with Adaptive Bilateral Filtering",
    authors: "A. Arul Edwin Raj, Nabihah Binti Ahmad, Jeffin Gracewell et al.",
    journal: "Journal of Parallel and Distributed Computing, Elsevier",
    year: 2025,
    doi: "10.1016/j.jpdc.2025.105186",
    citations: 1
  },
  {
    id: 3,
    type: "Journal",
    title: "Enhancing Driver Assistance Systems with FPGA-Based Adaptive Image Processing Framework",
    authors: "A. Arul Edwin Raj, Nabihah Binti Ahmad, J. Jeffin Gracewell et al.",
    journal: "Engineering Applications of Artificial Intelligence, Elsevier",
    year: 2025,
    doi: "10.1016/j.engappai.2025.111921",
    citations: 3
  },
  {
    id: 4,
    type: "Journal",
    title: "Dynamic Edge Clustering and Task Scheduling for Edge Assisted Metaverse System",
    authors: "R. Renugadevi, C. T. Kalaivani, A. Arul Edwin Raj, Jeffin Gracewell",
    journal: "Concurrency and Computation: Practice and Experience, Wiley",
    year: 2024,
    doi: "10.1002/cpe.8139",
    citations: 8
  },
  {
    id: 5,
    type: "Journal",
    title: "Revolutionizing Heart Disease Prediction with Quantum-Enhanced Machine Learning",
    authors: "Babu S.V., Ramya P. & Gracewell J.",
    journal: "Scientific Reports, Nature",
    year: 2024,
    doi: "10.1038/s41598-024-55991-w",
    citations: 22
  },
  {
    id: 6,
    type: "Journal",
    title: "A Turbulent Flow Optimized Deep Fused Ensemble Model for Sentiment Analysis",
    authors: "Aarthi E., Gracewell J. J. et al.",
    journal: "Social Network Analysis and Mining, Springer",
    year: 2024,
    doi: "10.1007/s13278-024-01203-2",
    citations: 11
  },
  {
    id: 7,
    type: "Journal",
    title: "Reinforcement Learning Based Blockchain Model for Revoking Unauthorized Access in IoT Mobile Edge Computing",
    authors: "C. T. Kalaivani, R. Renugadevi, Jeffin Gracewell, A. Arul Edwin Raj",
    journal: "Transactions on Emerging Telecommunications Technologies, Wiley",
    year: 2024,
    doi: "10.1002/ett.4981",
    citations: 18
  },
  {
    id: 8,
    type: "Journal",
    title: "Secure Wireless Sensor Network Transmission Using Reinforcement Learning and Homomorphic Encryption",
    authors: "Sheela M.S., Jayakanth, Gracewell J. et al.",
    journal: "International Journal of Data Science and Analytics, Springer",
    year: 2024,
    doi: "10.1007/s41060-024-00633-7",
    citations: 9
  },
  {
    id: 9,
    type: "Journal",
    title: "Dynamic Background Modeling Using Deep Learning Autoencoder Network",
    authors: "Gracewell J. & John M.",
    journal: "Multimedia Tools and Applications, Springer",
    year: 2019,
    doi: "10.1007/s11042-019-7411-0",
    citations: 47
  },
  {
    id: 10,
    type: "Journal",
    title: "Content Deduplication with Granularity Tweak Based on Base and Deviation for Large Text Dataset",
    authors: "Venkatesh Babu, Ramya, Jeffin Gracewell",
    journal: "Scientific Programming, Hindawi",
    year: 2022,
    doi: "10.1155/2022/9515181",
    citations: 15
  },
  {
    id: 11,
    type: "Conference",
    title: "Detecting Human Behavior from a Silhouette Using Convolutional Neural Networks",
    authors: "Gracewell J. et al.",
    journal: "ICEARS 2023, IEEE",
    year: 2023,
    doi: "10.1109/ICEARS56392.2023.10085686",
    citations: 12
  },
  {
    id: 12,
    type: "Conference",
    title: "Image Fusion for Improved Situational Awareness in Military Operations Using Machine Learning",
    authors: "J. Gracewell, R. Santhosh and V. Sabarish",
    journal: "ICAICCIT 2024, IEEE",
    year: 2024,
    doi: "10.1109/ICAICCIT64383.2024.10912129",
    citations: 4
  },
  {
    id: 13,
    type: "Conference",
    title: "Applying Machine Learning Algorithms for Classification of Sleep Disorders",
    authors: "R. Haneef, N. M. Rao and J. J. Gracewell",
    journal: "ICSCNA 2024, IEEE",
    year: 2024,
    doi: "10.1109/ICSCNA63714.2024.10864175",
    citations: 3
  },
  {
    id: 14,
    type: "Conference",
    title: "Case Study on Implementation of Li-Fi Technologies in Controlling Home Appliances Using IoT",
    authors: "Jeffin Gracewell, Sirivelu Vedeepya, Swetha Jeevith",
    journal: "AIP Conference Proceedings",
    year: 2025,
    doi: "10.1063/5.0247319",
    citations: 1
  }
];


const projects = [
  {
    id: 1,
    title: "Virtual Workshop on Business Model Canvas & Business Model Fit",
    fundingBody: "Prathyusha Engineering College – IIC",
    duration: "07 April 2026",
    role: "Resource Person",
    amount: "Online",
    status: "Ongoing",
    description: "Delivered a virtual workshop on BMC & Business Model Fit as part of IIC 8.0 Calendar Activity for students and faculty."
  },
  {
    id: 2,
    title: "Building Brands Online: The Essentials of Digital Marketing",
    fundingBody: "SRM Institute of Science and Technology, Chennai",
    duration: "03 Feb 2025",
    role: "Guest Lecturer",
    amount: "On-site",
    status: "Completed",
    description: "Delivered a guest lecture on digital marketing essentials covering brand building, social media strategy and online presence."
  },
  {
    id: 3,
    title: "Accelerators/Incubation – Opportunities for Students & Early-Stage Entrepreneurs",
    fundingBody: "Moradabad Institute of Technology, UP",
    duration: "29 Aug 2024",
    role: "Guest Lecturer",
    amount: "Online",
    status: "Completed",
    description: "Delivered an online session on startup accelerators and incubation opportunities for students and early-stage entrepreneurs."
  },
  {
    id: 4,
    title: "Digital Marketing for Startup",
    fundingBody: "SVKMs Institute of Technology, Dhule, Maharashtra",
    duration: "12 Aug 2024",
    role: "Guest Lecturer",
    amount: "Online",
    status: "Completed",
    description: "Delivered a talk on digital marketing strategies for startups covering growth hacking, SEO and social media marketing."
  },
  {
    id: 5,
    title: "Digital Transformations and Upskilling",
    fundingBody: "HolyCross College, Nagercoil",
    duration: "19 Sep 2023",
    role: "Innovation Ambassador",
    amount: "On-site",
    status: "Completed",
    description: "Delivered a guest lecture as Innovation Ambassador on digital transformation and upskilling for the modern workforce."
  },
  {
    id: 6,
    title: "Entrepreneurship: Innovation towards Startup",
    fundingBody: "M. Kumarasamy College of Engineering, Karur",
    duration: "19 Sep 2023",
    role: "Resource Person – FDP",
    amount: "On-site",
    status: "Completed",
    description: "Invited as Resource Person in a Faculty Development Program on entrepreneurship and innovation towards startup ecosystem."
  },
  {
    id: 7,
    title: "Machine Learning for CSE Students",
    fundingBody: "Christian College of Engineering & Technology, Oddanchatram",
    duration: "19 Sep 2022",
    role: "Guest Lecturer",
    amount: "On-site",
    status: "Completed",
    description: "Delivered a guest lecture on Machine Learning fundamentals and applications for CSE students."
  },
  {
    id: 8,
    title: "Exploring the Basics of Machine Learning with Programming",
    fundingBody: "MET College of Engineering & Technology, Nagercoil",
    duration: "16 May 2020",
    role: "Resource Person – Webinar",
    amount: "Online",
    status: "Completed",
    description: "Invited as Resource Person for a webinar on Machine Learning basics with hands-on programming demonstrations."
  }
];


app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email and message are required.' });
  }
  console.log('New contact message:', { name, email, subject, message });
  res.json({ success: true, message: 'Message received! Dr. Gracewell will respond shortly.' });
});


app.get('/', (req, res) => {
  res.json({ message: 'Dr. Jeffin API is running!' });
});

app.get('/api/profile', (req, res) => {
  res.json(profile);
});


app.get('/api/projects', (req, res) => {
  res.json(projects);
});

app.get('/api/education', (req, res) => {
  res.json(education);
});


app.get('/api/publications', (req, res) => {
  res.json(publications);
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});