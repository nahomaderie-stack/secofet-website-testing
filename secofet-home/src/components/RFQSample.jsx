import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/RFQSample.css';

const RFQSample = ({ title = 'Quote.' }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    country: '',
    buyerType: '',
    processingType: '',
    coffeeType: '',
    coffeeOrigin: '',
    coffeeGrade: '',
    quantityRequired: '',
    destinationCountry: '',
    destinationPort: '',
    incoterm: '',
    shipmentDate: '',
  });
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = Object.entries(formData)
      .map(([field, value]) => `${field.replace(/([A-Z])/g, ' $1')}: ${value || 'Not specified'}`)
      .join('\n');
    window.location.href = `mailto:info@secofet.com?subject=${encodeURIComponent('Website request for quote')}&body=${encodeURIComponent(body)}`;
    setSubmitMessage('Your email app is opening with your quote request. Send the draft to complete your request.');
  };

  return (
    <section className="rfq-section" id="rfq" >
      <div className="rfq-container">
        {/* Header Block */}
        <div className="rfq-header">
          <h2 className="rfq-title">
            Request a <span className="serif-text">{title}</span>
          </h2>
          <p className="rfq-subtitle">
            Tell us what you're looking for, and our team will prepare a
            tailored quotation based on your requirements. Share the details of
            your project, product, or inquiry, and we'll get back to you with
            the right solution.
          </p>
        </div>

        {/* Form Container Card */}
        <div className="rfq-card">
          <form className="rfq-form" onSubmit={handleSubmit}>
            <div className="rfq-grid">
              {/* Left Column Fields */}
              <div className="form-col">
                <div className="field-group">
                  <label htmlFor="companyName">Company Name</label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    placeholder="e.g. Acme Coffee Roasters"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="field-group">
                  <label htmlFor="contactPerson">Contact Person</label>
                  <input
                    type="text"
                    id="contactPerson"
                    name="contactPerson"
                    placeholder="Full Name"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="field-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="field-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="field-group">
                  <label htmlFor="country">Country</label>
                  <div className="select-wrapper">
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled hidden>
                        Select Country
                      </option>
                      <option value="United States">United States</option>
                      <option value="Germany">Germany</option>
                      <option value="Japan">Japan</option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="United Kingdom">United Kingdom</option>
                    </select>
                  </div>
                </div>

                <div className="field-group">
                  <label htmlFor="buyerType">Buyer Type</label>
                  <div className="select-wrapper">
                    <select
                      id="buyerType"
                      name="buyerType"
                      value={formData.buyerType}
                      onChange={handleChange}
                    >
                      <option value="" disabled hidden>
                        Select Buyer Type
                      </option>
                      <option value="Roaster">Roaster</option>
                      <option value="Importer">Importer</option>
                      <option value="Distributor">Distributor</option>
                      <option value="Retailer">Retailer</option>
                    </select>
                  </div>
                </div>

                <div className="field-group">
                  <label htmlFor="processingType">Processing Method</label>
                  <div className="select-wrapper">
                    <select
                      id="processingType"
                      name="processingType"
                      value={formData.processingType}
                      onChange={handleChange}
                    >
                      <option value="" disabled hidden>
                        Select Processing
                      </option>
                      <option value="Washed">Washed</option>
                      <option value="Natural">Natural / Sun-Dried</option>
                      <option value="Honey">Honey Processed</option>
                      <option value="Anaerobic">Anaerobic Fermentation</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Right Column Fields */}
              <div className="form-col">
                <div className="field-group">
                  <label htmlFor="coffeeType">Coffee Type</label>
                  <div className="select-wrapper">
                    <select
                      id="coffeeType"
                      name="coffeeType"
                      value={formData.coffeeType}
                      onChange={handleChange}
                    >
                      <option value="" disabled hidden>
                        Select Coffee Type
                      </option>
                      <option value="Specialty Arabica">
                        Specialty Arabica
                      </option>
                      <option value="Commercial Grade">Commercial Grade</option>
                      <option value="Organic Certified">
                        Organic Certified
                      </option>
                    </select>
                  </div>
                </div>

                <div className="field-group">
                  <label htmlFor="coffeeOrigin">Coffee Origin</label>
                  <div className="select-wrapper">
                    <select
                      id="coffeeOrigin"
                      name="coffeeOrigin"
                      value={formData.coffeeOrigin}
                      onChange={handleChange}
                    >
                      <option value="" disabled hidden>
                        Select Origin Region
                      </option>
                      <option value="Yirgacheffe">Yirgacheffe</option>
                      <option value="Sidama">Sidama</option>
                      <option value="Gedeo">Gedeo</option>
                      <option value="Guji">Guji</option>
                      <option value="Jimma">Jimma</option>
                    </select>
                  </div>
                </div>

                <div className="field-group">
                  <label htmlFor="coffeeGrade">Coffee Grade</label>
                  <div className="select-wrapper">
                    <select
                      id="coffeeGrade"
                      name="coffeeGrade"
                      value={formData.coffeeGrade}
                      onChange={handleChange}
                    >
                      <option value="" disabled hidden>
                        Select Grade
                      </option>
                      <option value="Grade 1 (Specialty)">
                        Grade 1 (Specialty)
                      </option>
                      <option value="Grade 2 (Specialty)">
                        Grade 2 (Specialty)
                      </option>
                      <option value="Grade 3 (Commercial)">
                        Grade 3 (Commercial)
                      </option>
                      <option value="Grade 4 (Commercial)">
                        Grade 4 (Commercial)
                      </option>
                    </select>
                  </div>
                </div>

                <div className="field-group">
                  <label htmlFor="quantityRequired">
                    Quantity Required (Bags/MT)
                  </label>
                  <input
                    type="text"
                    id="quantityRequired"
                    name="quantityRequired"
                    placeholder="e.g. 1 FCL (320 bags / 19.2 MT)"
                    value={formData.quantityRequired}
                    onChange={handleChange}
                  />
                </div>

                <div className="field-group">
                  <label htmlFor="destinationCountry">
                    Destination Country
                  </label>
                  <div className="select-wrapper">
                    <select
                      id="destinationCountry"
                      name="destinationCountry"
                      value={formData.destinationCountry}
                      onChange={handleChange}
                    >
                      <option value="" disabled hidden>
                        Select Destination
                      </option>
                      <option value="United States">United States</option>
                      <option value="Germany">Germany</option>
                      <option value="Japan">Japan</option>
                      <option value="Netherlands">Netherlands</option>
                      <option value="South Korea">South Korea</option>
                    </select>
                  </div>
                </div>

                <div className="field-group">
                  <label htmlFor="destinationPort">Destination Port</label>
                  <div className="select-wrapper">
                    <select
                      id="destinationPort"
                      name="destinationPort"
                      value={formData.destinationPort}
                      onChange={handleChange}
                    >
                      <option value="" disabled hidden>
                        Select Port
                      </option>
                      <option value="Hamburg">Hamburg (Germany)</option>
                      <option value="Rotterdam">Rotterdam (Netherlands)</option>
                      <option value="New York / New Jersey">
                        New York / New Jersey (USA)
                      </option>
                      <option value="Yokohama">Yokohama (Japan)</option>
                      <option value="Jebel Ali">Jebel Ali (UAE)</option>
                    </select>
                  </div>
                </div>

                <div className="field-group">
                  <label htmlFor="incoterm">Preferred Incoterm</label>
                  <div className="select-wrapper">
                    <select
                      id="incoterm"
                      name="incoterm"
                      value={formData.incoterm}
                      onChange={handleChange}
                    >
                      <option value="" disabled hidden>
                        Select Incoterm
                      </option>
                      <option value="FOB Djibouti">FOB (Djibouti)</option>
                      <option value="CIF (Cost, Insurance & Freight)">
                        CIF (Destination Port)
                      </option>
                      <option value="CFR (Cost & Freight)">
                        CFR (Destination Port)
                      </option>
                      <option value="EXW (Ex Works)">
                        EXW (Addis Ababa Warehouse)
                      </option>
                    </select>
                  </div>
                </div>

                <div className="field-group">
                  <label htmlFor="shipmentDate">Target Shipment Date</label>
                  <input
                    type="text"
                    id="shipmentDate"
                    name="shipmentDate"
                    placeholder="e.g. Q4 2026 / Nov 2026"
                    value={formData.shipmentDate}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* Bottom Actions Row */}
            <div className="rfq-actions">
              <button type="submit" className="btn-submit-rfq">
                Submit Request
              </button>

              <Link to="/contact" className="btn-contact-link">
                Contact Us ↗
              </Link>
            </div>
            {submitMessage && <p role="status">{submitMessage}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default RFQSample;
