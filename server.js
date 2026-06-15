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
  {
    degree: "12th Standard",
    institution: "State Board, Tamil Nadu",
    year: "2006",
    thesis: "83.7%"
  },
  {
    degree: "10th Standard",
    institution: "Matriculation Board",
    year: "2004",
    thesis: "79.7%"
  }
];

const publications = [
  {
    id: 1,
    type: "Journal",
    title: "Transformer-based Multilingual Sentiment Analysis for Indian Regional Languages",
    authors: "Jeffin Gracewell, R. Manivannan, S. Priya",
    journal: "IEEE Transactions on Neural Networks and Learning Systems",
    year: 2024,
    doi: "10.1109/TNNLS.2024.XXXXXX",
    citations: 18
  },
  {
    id: 2,
    type: "Journal",
    title: "Agentic AI Architectures for Autonomous Knowledge Discovery",
    authors: "Jeffin Gracewell, George Chacko",
    journal: "Expert Systems with Applications, Elsevier",
    year: 2023,
    doi: "10.1016/j.eswa.2023.XXXXXX",
    citations: 34
  },
  {
    id: 3,
    type: "Conference",
    title: "BERT Fine-Tuning for Tamil Named Entity Recognition",
    authors: "Jeffin Gracewell, A. Kavitha",
    journal: "Proceedings of ACL 2023",
    year: 2023,
    doi: "10.18653/v1/2023.acl-XXXXX",
    citations: 22
  },
  {
    id: 4,
    type: "Journal",
    title: "Federated Learning for Privacy-Preserving Medical NLP",
    authors: "Jeffin Gracewell, T. Rajkumar, S. Anitha",
    journal: "Computers in Biology and Medicine, Elsevier",
    year: 2022,
    doi: "10.1016/j.compbiomed.2022.XXXXXX",
    citations: 47
  },
  {
    id: 5,
    type: "Conference",
    title: "Low-Resource Machine Translation Using Transfer Learning",
    authors: "Jeffin Gracewell",
    journal: "EMNLP 2022",
    year: 2022,
    doi: "10.18653/v1/2022.emnlp-XXXXX",
    citations: 29
  }
];

const projects = [
  {
    id: 1,
    title: "Agentic AI for Bharat",
    fundingBody: "AICTE VAANI – FDP Program",
    duration: "2024–2025",
    role: "Principal Investigator",
    amount: "₹4,50,000",
    status: "Ongoing",
    description: "Developing an FDP curriculum and practical AI framework for deploying agentic AI systems tailored for Indian multilingual environments."
  },
  {
    id: 2,
    title: "NLP Curriculum Modernization",
    fundingBody: "Saveetha Engineering College",
    duration: "2023–2024",
    role: "Lead Researcher",
    amount: "₹1,20,000",
    status: "Completed",
    description: "Redesigned the NLP course incorporating Transformers, LLMs, and Agentic AI with outcome-based mapping aligned to NBA/NAAC frameworks."
  },
  {
    id: 3,
    title: "Multilingual Digital Platform for Ministry",
    fundingBody: "TTBSA – Thru the Bible South Asia",
    duration: "2023–2025",
    role: "Technical Advisor",
    amount: "₹2,00,000",
    status: "Ongoing",
    description: "Architecting a 14-language WordPress platform with WPML, hreflang tags, and multilingual SEO for reaching 1.5 billion South Asian listeners."
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