import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables from .env file in the root
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '../.env') });

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Set up Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

app.post('/api/commission', async (req, res) => {
  try {
    const {
      fullName,
      email,
      contactNumber,
      company,
      projectType,
      budgetRange,
      preferredDeadline,
      projectDescription,
      referenceUrl,
      contactMethod
    } = req.body;

    // Server-side validation
    if (!fullName || !email || !projectType || !budgetRange || !projectDescription) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'markchristianvillanueva23@gmail.com',
      replyTo: email,
      subject: `New Commission Request | ${fullName} | ${projectType}`,
      text: `
NEW COMMISSION REQUEST

Client Information
-------------------------
Name: ${fullName}
Email: ${email}
Contact Number: ${contactNumber || 'N/A'}
Company: ${company || 'N/A'}

Project Information
-------------------------
Project Type: ${projectType}
Budget: ${budgetRange}
Preferred Deadline: ${preferredDeadline || 'N/A'}
Reference Website: ${referenceUrl || 'N/A'}
Preferred Contact Method: ${contactMethod}

Project Description
-------------------------
${projectDescription}

Submitted from:
Tian's Portfolio Website

Submitted at:
${new Date().toLocaleString()}
      `.trim()
    };

    // Send email
    await transporter.sendMail(mailOptions);
    
    res.status(200).json({ success: true, message: 'Commission request sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send commission request' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
