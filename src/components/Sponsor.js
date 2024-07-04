import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import sponsorLogo1 from '../images/sponsors/1.png';
import sponsorLogo2 from '../images/sponsors/1.png';

const sponsors = [








  {
    id: 2,
    logo: sponsorLogo2,
    name: 'KHALEEL URRAHMAN',
    description: 'Introducing our Platinum sponsor, Khaleel Urrahman, a distinguished finance professional...',
    details: [
      'Drawing upon his extensive experience, Khaleel specializes in long-term investment planning for education and retirement, multi-generational wealth strategies, and personalized insurance solutions.',
      'As an immigrant to Canada in 2011, Khaleel understands the unique financial needs of immigrant families, and he’s here to assist you.',
      'Whether you’re beginning your financial journey or seeking to optimize your current plan, Khaleel’s expertise will empower you to make informed decisions.',
      'Join us in welcoming Khaleel Urrahman. We encourage you to reach out to him to leverage his education, experience, and dedication to build a tailored plan to secure the financial future for you and your family.'
    ],
    contact: {
      phone: '(506) 857-3663 ext. 2277',
      email: 'k.khaleelurrahman@sunlife.com',
      website: 'www.sunlife.ca/k.khaleelurrahman',
    },
  },
];

const Sponsor = () => {
  return (
    <div className="bg-light py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="text-primary">Our Sponsors</h2>
          <p className="lead text-secondary">
            Local businesses who support FAM and its mission - we are immensely grateful for our sponsors who play a vital role in making our events a success. Their support allows us to bring our vision to life, providing resources, funding, and valuable partnerships. They gain valuable exposure and the opportunity to showcase their brand to our engaged and diverse audience, creating meaningful connections and fostering brand loyalty.
          </p>
        </div>
        <div className="row">
          {sponsors.map((sponsor) => (
            <div key={sponsor.id} className="col-md-6 mb-4">
              <div className="card h-100 shadow-sm">
                <img src={sponsor.logo} className="card-img-top p-3" alt={sponsor.name} />
                <div className="card-body">
                  <h5 className="card-title text-primary">{sponsor.name}</h5>
                  <p className="card-text text-secondary">{sponsor.description}</p>
                  <ul className="list-unstyled text-secondary">
                    {sponsor.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                  <div className="mt-3">
                    <h6 className="text-primary">Contact Us:</h6>
                    <p className="mb-1">Phone: {sponsor.contact.phone}</p>
                    <p className="mb-1">Email: <a href={`mailto:${sponsor.contact.email}`} className="text-primary">{sponsor.contact.email}</a></p>
                    <p>Website: <a href={`https://${sponsor.contact.website}`} target="_blank" rel="noopener noreferrer" className="text-primary">{sponsor.contact.website}</a></p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
