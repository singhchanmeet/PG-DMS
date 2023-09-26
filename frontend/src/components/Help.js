import React from 'react';
import SidePanel from './SidePanel';
import AnalyticNavbar from './AnalyticNavbar';

const Help = () => {
  return (
    <div className=''>
      <div className='flex'>
        <div className=''>
        </div>
        <div className="flex-[70%] bg-blue-50">
          <div className='px-2 bg-white p-4 rounded shadow-lg mx-2'>
            <h2 className="text-2xl text-purple-600 font-semibold mb-4">Help</h2>

            <h3 className="text-lg font-semibold mb-2 text-pink-700">Welcome to Our Research Portal</h3>
            <p>
              Our research portal is designed to streamline the research process and provide support to students, guides, and researchers across the country. Below, you'll find an overview of key features and how to use them.
            </p>

            <h3 className="text-lg text-pink-700 font-semibold mt-4 mb-2">Key Features:</h3>
            <ul className="list-disc pl-6">
              <li>Thrust Ideas of Research: Explore research topics aligned with the department's thrust areas.</li>
              <li>Maintain Student-Guide Ratio: Ensure a balanced ratio of students to guides for effective mentoring.</li>
              <li>Avoid Duplication: Prevent duplicate research efforts through a comprehensive database.</li>
              <li>Approvals and Ethical Issues: Streamline the approval process and address ethical considerations.</li>
              <li>Monitoring Research Progress: Keep track of the progress of ongoing research projects.</li>
              <li>Evaluation of Dissertations: Assess and evaluate student dissertations for quality.</li>
              <li>Publication: Publish research findings arising from dissertations.</li>
              <li>Database of Dissertations: Maintain a searchable database of dissertations across categories.</li>
              <li>Withholding Results: Implement measures to withhold final year results for disapproved dissertations.</li>
            </ul>

            <h3 className="text-lg text-pink-700 font-semibold mt-4 mb-2">How to Use the Portal:</h3>
            <p>
              To make the most of our research portal, follow these steps:
            </p>

            <ol className="list-decimal pl-6">
              <li>Create an Account: Sign up for an account to access the portal.</li>
              <li>Explore Thrust Ideas: Browse available research topics aligned with your department's thrust areas.</li>
              <li>Submit a Dissertation: If you're a student, submit your dissertation for approval.</li>
              <li>Approval and Feedback: Guides and the university will review and provide feedback on your dissertation.</li>
              <li>Plagiarism Check: Your dissertation will undergo a plagiarism check for academic integrity.</li>
              <li>Publication (if applicable): If your dissertation leads to publications, they will be made available.</li>
              <li>Search and Discover: Explore the database of dissertations under various categories using the search option.</li>
              <li>Monitoring: Continuously manage and monitor the progress of your research projects.</li>
              <li>Evaluation: Participate in the evaluation process for dissertations.</li>
              <li>Withholding Results: Be aware that results may be withheld for disapproved postgraduate dissertations.</li>
            </ol>

            <p className="mt-4">
              If you have any questions or need assistance, please don't hesitate to contact our support team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
