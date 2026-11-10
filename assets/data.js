const KB_DATA = [
  {
    "slug": "company-setup",
    "number": "01",
    "title": "Company Setup",
    "intro": "Company formation, licensing, ownership, approvals and company changes.",
    "topics": [
      {
        "slug": "business-licence-activities",
        "title": "Business licence and activities",
        "summary": "Understand licence categories, activity selection and the supporting requirements.",
        "purpose": "Explain how to select a suitable business licence and activities. Confirm the exact activity wording and any authority requirements against the current official MFZ activity list before advising a client.",
        "steps": [
          "Confirm the client's proposed products or services and business model.",
          "Identify suitable activities from the current MFZ activity list.",
          "Check whether the activities fall under commercial, service, industrial or another licence category.",
          "Confirm whether external or third-party approvals apply.",
          "Explain the documents, fees and expected processing steps after verification."
        ],
        "documents": [
          "Proposed business activities and product/service description",
          "Shareholder and manager details, as requested by MFZ",
          "Any activity-specific approvals or supporting documents"
        ],
        "notes": "Activity selection must be confirmed against the current official activity list. Do not promise approval based only on a similar activity name."
      },
      {
        "slug": "pre-post-approval",
        "title": "Pre-approval and post-approval",
        "summary": "Understand when approvals are required before or after licence issuance.",
        "purpose": "Describe the distinction between approvals required before licence issuance and conditions or approvals required after licence issuance.",
        "steps": [
          "Review the selected activity and identify any external authority involvement.",
          "Confirm whether pre-approval is required before the licence application can proceed.",
          "Collect and submit the required information to the relevant authority.",
          "After the relevant milestone, complete any post-approval or registration requirements.",
          "Save the approval evidence and update the client or ticket."
        ],
        "documents": [
          "Application details",
          "Supporting documents requested by the relevant authority",
          "Approval or NOC evidence, where applicable"
        ],
        "notes": "Approval timing varies by activity and authority. Verify the sequence for the specific activity."
      },
      {
        "slug": "shareholders-ubo-management",
        "title": "Shareholders, UBO, manager and directors",
        "summary": "Understand ownership, beneficial ownership and company officer roles.",
        "purpose": "Provide employees with a consistent explanation of company ownership and management roles.",
        "steps": [
          "Collect the proposed ownership and control structure.",
          "Identify direct and indirect beneficial owners in accordance with applicable rules.",
          "Record shareholder, manager and director details in the required forms.",
          "Check role limits and eligibility against current MFZ rules.",
          "Escalate complex ownership structures or discrepancies for compliance review."
        ],
        "documents": [
          "Identity and contact details for relevant persons",
          "Ownership chart or supporting ownership records, if requested",
          "UBO declaration and related forms, where applicable"
        ],
        "notes": "Do not rely on historic shareholder or director limits without checking current MFZ policy and applicable regulations."
      },
      {
        "slug": "company-documents",
        "title": "Company documents",
        "summary": "Identify the key documents issued during company incorporation.",
        "purpose": "Help employees explain the purpose of the company’s incorporation and registration documents.",
        "steps": [
          "Confirm the company incorporation or renewal stage.",
          "Check the document list issued for the specific company package.",
          "Explain the purpose of each document to the client.",
          "Check names, licence details and dates for consistency.",
          "Escalate missing or incorrect documents to the responsible team."
        ],
        "documents": [
          "Trade licence",
          "Certificate of incorporation or formation",
          "Memorandum and Articles of Association, where issued",
          "Share certificate or register of shareholders, where issued",
          "Lease or facility agreement, where applicable"
        ],
        "notes": "Document names and availability can vary by company type and package. Use the actual issued documents as the source of truth."
      },
      {
        "slug": "company-amendments",
        "title": "Company amendments",
        "summary": "Handle changes to company details after incorporation.",
        "purpose": "Cover requests such as company name, shareholder, manager, director or activity amendments.",
        "steps": [
          "Identify the requested change and confirm the company record.",
          "Check whether the change is permitted and whether approvals are needed.",
          "Provide the current amendment application and document checklist.",
          "Submit the request through the approved internal system or department.",
          "Verify the amended company documents and update the ticket."
        ],
        "documents": [
          "Amendment request or application",
          "Updated identity documents for affected persons",
          "Share transfer or resolution documents, where applicable",
          "External approval or NOC, if required"
        ],
        "notes": "Fees, forms, permitted changes and processing times must be confirmed for the specific amendment."
      },
      {
        "slug": "re-domiciliation",
        "title": "Re-domiciliation",
        "summary": "Understand the process for transferring a company’s registration to Meydan Free Zone.",
        "purpose": "Summarise eligibility, prerequisites, documents and internal handling.",
        "steps": [
          "Confirm the company’s current jurisdiction and legal form.",
          "Check eligibility and whether the existing activities are supported by MFZ.",
          "Obtain the current requirements from the responsible MFZ team.",
          "Collect the NOC, exit certificate or equivalent evidence required by the licensing authority.",
          "Submit the request and track completion before making any post-transfer amendments."
        ],
        "documents": [
          "Current trade licence and incorporation documents",
          "NOC, exit certificate or equivalent from the previous authority",
          "Ownership and company structure documents",
          "Other documents requested by MFZ"
        ],
        "notes": "The user's earlier working notes referenced UAE registration, LLC form and a time-limited exit certificate. Treat these as historical notes until reconfirmed by MFZ."
      }
    ]
  },
  {
    "slug": "visa-services",
    "number": "02",
    "title": "Visa Services",
    "intro": "Visa allocation, residence visa processes, dependants and employee-related immigration procedures.",
    "topics": [
      {
        "slug": "visa-allocation",
        "title": "Visa allocation",
        "summary": "Understand visa allocation and how to check available visa entitlement.",
        "purpose": "Explain the difference between a company’s visa allocation and an individual visa application.",
        "steps": [
          "Check the company licence and current visa allocation.",
          "Confirm whether the requested visa is within the available allocation.",
          "Explain any additional allocation request process if required.",
          "Proceed with the relevant visa application after confirming eligibility."
        ],
        "documents": [
          "Company licence and establishment details",
          "Passport and applicant details",
          "Additional documents requested for allocation"
        ],
        "notes": "Allocation and visa eligibility are subject to current immigration and MFZ rules."
      },
      {
        "slug": "residence-visa-issuance",
        "title": "Residence visa issuance",
        "summary": "Process a new employee or investor residence visa application.",
        "purpose": "Cover the main stages for applicants inside and outside the UAE.",
        "steps": [
          "Confirm whether the applicant is inside or outside the UAE.",
          "Check eligibility, passport validity and required employment or investor documents.",
          "Prepare the employment contract where applicable and submit the entry permit application.",
          "For an applicant inside the UAE, follow the approved change-of-status process where applicable.",
          "Arrange medical fitness testing and Emirates ID steps.",
          "Complete residence visa issuance and confirm the final status."
        ],
        "documents": [
          "Passport copy and photograph",
          "Employment contract or investor/shareholder supporting documents, as applicable",
          "Attested qualification documents where required for the role",
          "Medical fitness and Emirates ID application information"
        ],
        "notes": "Entry permit validity, change-of-status requirements and visa steps must be checked against current GDRFA/ICP instructions."
      },
      {
        "slug": "residence-visa-renewal",
        "title": "Residence visa renewal",
        "summary": "Renew an existing residence visa before expiry.",
        "purpose": "Explain the renewal sequence and supporting requirements.",
        "steps": [
          "Check the current residence visa expiry date.",
          "Confirm the company licence and establishment records are valid.",
          "Check passport, insurance and other renewal prerequisites.",
          "Arrange medical fitness testing if required for the applicant category.",
          "Submit the renewal and Emirates ID steps through the approved channel.",
          "Confirm completion and share the updated documents."
        ],
        "documents": [
          "Passport copy",
          "Current residence visa and Emirates ID details",
          "Health insurance evidence, where required",
          "Medical fitness result, where required"
        ],
        "notes": "Start early and verify current grace periods, fees and insurance requirements. Do not assume historic fee figures remain current."
      },
      {
        "slug": "residence-visa-amendment",
        "title": "Residence visa amendment",
        "summary": "Handle permitted changes to an existing residence visa record.",
        "purpose": "Use for corrections or changes to visa or employee details where the relevant authority permits.",
        "steps": [
          "Identify the exact field or detail that needs changing.",
          "Check whether the change is handled as an amendment, replacement or new application.",
          "Confirm required employer and applicant supporting documents.",
          "Submit through the approved immigration process.",
          "Verify the updated record and retain evidence."
        ],
        "documents": [
          "Passport copy",
          "Current visa and Emirates ID details",
          "Updated employment or company documents, where relevant",
          "Correction evidence, if applicable"
        ],
        "notes": "The type of amendment and required evidence depend on the field being changed. Confirm with the responsible immigration team."
      },
      

{
  "slug": "employee-visas",
  "title": "Employee Visa Guidelines",
  "summary": "Explain the requirements, eligibility, costs and application process for obtaining an employee residence visa through Meydan Free Zone.",
  "purpose": "Guide employees and company representatives through the employee visa application process, whether the applicant is inside or outside the UAE.",
  "steps": [
    "Confirm that the company has an active Meydan Free Zone trade licence and valid establishment or immigration card.",
    "Check the company's available visa allocation and eligibility to apply for an employee visa.",
    "Confirm that the applicant is being sponsored as an employee and identify the correct job designation.",
    "Check the applicant's age and passport validity. Passport validity must be more than six months.",
    "Collect the passport copy, passport-size photograph and attested educational certificate, where applicable.",
    "Prepare and complete the required employment contract.",
    "Select the correct application type: Outside Application for an applicant outside the UAE, or Inside Application for an applicant already inside the UAE.",
    "Submit the employee visa application with the required supporting documents.",
    "After entry permit approval, arrange the applicant's entry into the UAE if applying from outside the country.",
    "For applicants already inside the UAE, complete the Change of Status process and pay the applicable fee.",
    "Arrange the medical fitness test at an approved UAE medical centre.",
    "Complete the Emirates ID application and biometric requirements, where applicable.",
    "Ensure the required health insurance is arranged.",
    "Complete the residence visa issuance process and monitor the application until approval.",
    "Share the completed visa and relevant documents with the employee and update the company records."
  ],
  "documents": [
    "Passport copy with more than six months validity",
    "Recent passport-size photograph",
    "Attested educational degree, if required for the job designation",
    "Signed employment contract",
    "Existing UAE visa or entry permit details, if applicable",
    "Additional documents or approvals requested by Meydan Free Zone or the immigration authority"
  ],
  "notes": "DOCUMENT REQUIREMENTS: An attested degree is required for Manager-level designations and above, according to the supplied Meydan internal guideline. Exception supplied: if the applicant is the Manager named on the trade licence and applies under the designation GENERAL MANAGER, an attested degree is not required. Confirm this exception with the current Meydan processing team before applying. Other professions may require additional qualifications or third-party approvals.\n\nELIGIBILITY: Minimum age: 18 years. Maximum age: 63 years, according to the supplied Meydan guideline. The maximum age must be confirmed against current Meydan and immigration rules before publication. Applicants aged 18 and above are subject to medical fitness requirements.\n\nAPPLICATION TYPE: Outside Application: for applicants currently outside the UAE. Inside Application: for applicants currently inside the UAE. The applicable Change of Status fee is charged for an inside application. The applicant must not work until the required legal work authorisation and visa status are in place.\n\nCOST BREAKDOWN — SUPPLIED MEYDAN REFERENCE: Employee Visa: AED 3,500. Change of Status: AED 1,500, applicable to inside applications. Medicals and Emirates ID: AED 2,250. Outside application reference total: AED 5,750. Inside application reference total: AED 7,250. These are reference amounts supplied for this SOP and must be confirmed with the current Meydan fee schedule before quoting clients. Check whether insurance, additional services, VAT or other charges are excluded.\n\nIMPORTANT: Visa approval, validity, processing time, age limits, fees and document requirements are subject to current Meydan Free Zone and immigration authority rules. Do not guarantee approval or quote outdated fees."
},
      
{
  "slug": "investor-visas",
  "title": "Investor / Partner Visa Guidelines",
  "summary": "Explain the eligibility, documents, fees and application process for investor and partner residence visas through Meydan Free Zone.",
  "purpose": "Guide company shareholders, owners and partners through the process of obtaining an investor or partner residence visa.",
  "steps": [
    "Confirm whether the applicant is the sole shareholder or one of multiple shareholders in the Meydan Free Zone company.",
    "Determine the correct visa category: Investor Visa for an eligible sole shareholder or Partner Visa for an eligible shareholder in a company with multiple shareholders.",
    "Verify the applicant's shareholding, share capital and eligibility with Meydan Free Zone.",
    "Check that the company has an active trade licence and the required establishment or immigration registration.",
    "Collect the applicant's passport, photograph and six-month bank statement.",
    "Collect company ownership evidence, such as the share certificate, shareholder register or Memorandum of Association, where required.",
    "Confirm whether the bank statement must be personal or corporate and whether any minimum balance or transaction requirements apply.",
    "Select the correct application type: Outside Application for an applicant outside the UAE, or Inside Application for an applicant already inside the UAE.",
    "Submit the investor or partner visa application with the required supporting documents.",
    "For applicants outside the UAE, arrange entry into the UAE after the entry permit is approved.",
    "For applicants inside the UAE, complete the Change of Status process and pay the applicable fee.",
    "Arrange the medical fitness test at an approved UAE medical centre.",
    "Complete the Emirates ID application and biometric requirements, where applicable.",
    "Ensure the required health insurance is arranged.",
    "Complete the residence visa issuance process and track the application until approval.",
    "Share the completed residence visa and relevant documents with the applicant and update company records."
  ],
  "documents": [
    "Passport copy with more than six months validity",
    "Recent passport-size photograph",
    "Personal or corporate bank statement for the last six months, as requested by Meydan",
    "Share certificate or other proof of shareholding",
    "Memorandum of Association or company ownership documents, where required",
    "Valid company trade licence",
    "Existing UAE visa or entry permit details, if applicable",
    "Additional documents requested by Meydan Free Zone or the immigration authority"
  ],
  "notes": "ELIGIBILITY: Minimum age: 18 years. No maximum age limit is stated in the supplied Meydan guideline. Applicants must still satisfy applicable immigration, medical fitness and company eligibility requirements.\n\nVISA CATEGORY: An eligible sole shareholder generally applies for an Investor Visa. An eligible shareholder in a company with multiple shareholders generally applies for a Partner Visa. Confirm the current shareholding and share capital eligibility requirements with Meydan. Meydan's published FAQ refers to AED 50,000 or more in share capital as an eligibility threshold; verify the current rule before processing.\n\nBANK STATEMENT: The supplied Meydan guideline requests a corporate or personal bank statement covering the last six months. Confirm which statement is required for the applicant's specific case, whether it must be from a UAE bank, and whether a minimum balance or transaction history is required. Do not assume that either statement type is interchangeable.\n\nAPPLICATION TYPE: Outside Application: for applicants currently outside the UAE. Inside Application: for applicants currently inside the UAE. The Change of Status fee applies to inside applications.\n\nCOST BREAKDOWN — SUPPLIED MEYDAN REFERENCE: Investor / Partner Visa Application: AED 4,000. Change of Status: AED 1,500, applicable to inside applications. Medicals and Emirates ID: AED 2,250. Outside application reference total: AED 6,250. Inside application reference total: AED 7,750. These figures must be checked against the current Meydan fee schedule. They exclude any additional charges not listed here, such as insurance, visa allocation, establishment card or other applicable services.\n\nVALIDITY: Meydan's published 2024 fee document referred to a two-year investor/partner visa. Confirm the validity on the current application and issued residence permit rather than assuming it is unchanged.\n\nIMPORTANT: Visa issuance is subject to Meydan Free Zone checks and final approval by the relevant immigration authority. Do not guarantee approval or quote outdated fees."
},
      {
        "slug": "dependent-visas",
        "title": "Dependent visas",
        "summary": "Explain how an eligible UAE resident may sponsor qualifying family members.",
        "purpose": "Provide a checklist-led overview of dependent sponsorship.",
        "steps": [
          "Confirm the sponsor’s current UAE residence status and eligibility.",
          "Identify the family relationship and dependent category.",
          "Check current income, accommodation, insurance and document requirements.",
          "Collect relationship documents and attestations where required.",
          "Submit the application and complete medical/Emirates ID steps for eligible dependants."
        ],
        "documents": [
          "Sponsor passport, visa and Emirates ID",
          "Dependent passport and photograph",
          "Attested marriage or birth certificate, as applicable",
          "Insurance and accommodation evidence, where required"
        ],
        "notes": "Eligibility and requirements vary by dependent type and current UAE immigration rules."
      },
      {
        "slug": "absconding-process",
        "title": "Absconding process",
        "summary": "Explain the internal handling of an employee absconding request.",
        "purpose": "Provide a careful evidence-led workflow for authorised cases.",
        "steps": [
          "Confirm the reported absence and the applicable legal/immigration criteria.",
          "Collect evidence of contact attempts and the employee’s absence.",
          "Check the current authority process and required documents.",
          "Obtain internal authorisation before submitting any report.",
          "Submit through the authorised channel and retain the outcome."
        ],
        "documents": [
          "Employer request letter",
          "Employee passport and visa details",
          "Immigration movement report, if required",
          "Evidence of attempts to contact the employee"
        ],
        "notes": "Use only current legal criteria and authorised internal guidance. Do not treat a fixed absence period from old notes as universal legal advice."
      }
    ]
  },
  {
    "slug": "channel-partner",
    "number": "03",
    "title": "Channel Partner",
    "intro": "Partner onboarding, registration, KYC and support workflows.",
    "topics": [
      {
        "slug": "partner-registration",
        "title": "Partner registration",
        "summary": "Guide prospective partners through the registration and onboarding process.",
        "purpose": "Explain the enquiry, eligibility, application, review and activation stages.",
        "steps": [
          "Receive the partner enquiry and identify the applicant entity.",
          "Share the current partner registration requirements and application route.",
          "Collect the requested company and contact details.",
          "Submit the application to the responsible partner team.",
          "Track review, agreement execution and onboarding confirmation."
        ],
        "documents": [
          "Company trade licence or equivalent registration document",
          "Authorised representative identity and contact details",
          "Company profile and other documents requested by the partner team"
        ],
        "notes": "Confirm current eligibility, application route and commercial terms with the partner team."
      },
      {
        "slug": "required-documents",
        "title": "Required documents",
        "summary": "List the documents commonly requested during partner onboarding.",
        "purpose": "Help employees send a complete and current checklist.",
        "steps": [
          "Identify the applicant type and jurisdiction.",
          "Use the latest partner onboarding checklist.",
          "Check that documents are legible, valid and consistent.",
          "Request missing or expired documents.",
          "Send the complete set through the approved secure channel."
        ],
        "documents": [
          "Valid trade licence or equivalent",
          "Authorised signatory identification",
          "Company details and contact information",
          "Additional forms or declarations requested by the partner team"
        ],
        "notes": "This is a starter checklist, not a substitute for the latest official partner checklist."
      },
      {
        "slug": "partner-kyc",
        "title": "KYC verification",
        "summary": "Explain how to perform and route partner KYC checks.",
        "purpose": "Ensure KYC information is collected and handled securely.",
        "steps": [
          "Confirm the partner's identity and registered entity details.",
          "Collect only the documents required by the approved KYC checklist.",
          "Check document validity and consistency.",
          "Record completion in the approved system.",
          "Escalate discrepancies or risk indicators to the compliance team."
        ],
        "documents": [
          "Company registration document",
          "Authorised signatory identity",
          "UBO and ownership information, where required",
          "Completed KYC forms and declarations"
        ],
        "notes": "Never upload passport copies, personal data or KYC evidence to the public website. Use approved secure systems."
      },
      {
        "slug": "partner-support",
        "title": "Partner support",
        "summary": "Route partner questions and support requests to the right team.",
        "purpose": "Describe how employees should identify and hand over partner-related requests.",
        "steps": [
          "Read the request and identify its subject.",
          "Check whether it is a partner onboarding, commercial, technical or operational issue.",
          "Use the current internal routing list.",
          "Forward with relevant context and existing ticket references.",
          "Track the handover where required."
        ],
        "documents": [
          "Partner name and reference, if applicable",
          "Summary of the request",
          "Relevant ticket or correspondence reference"
        ],
        "notes": "Keep department email addresses and escalation contacts in a controlled, verified internal directory."
      }
    ]
  },
  {
    "slug": "meydan-plus",
    "number": "04",
    "title": "Meydan+ Services",
    "intro": "Service overview and routing for Meydan and non-Meydan client enquiries.",
    "topics": [
      {
        "slug": "service-overview",
        "title": "Meydan+ service overview",
        "summary": "Explain the Meydan+ service offering and how to identify the right service.",
        "purpose": "Provide an overview of available services and enquiry handling.",
        "steps": [
          "Identify the client and whether they are an MFZ or non-MFZ client.",
          "Understand the service requested and the intended outcome.",
          "Check the current Meydan+ service catalogue.",
          "Route the enquiry to the responsible team.",
          "Record the handover and update the client as appropriate."
        ],
        "documents": [
          "Client or company name",
          "Service requested",
          "Contact details and enquiry summary"
        ],
        "notes": "Confirm current service names, scope, eligibility and pricing before sharing with clients."
      },
      {
        "slug": "meydan-client-enquiries",
        "title": "Meydan client enquiries",
        "summary": "Handle Meydan Free Zone client requests for Meydan+ services.",
        "purpose": "Provide the intake and routing steps for existing MFZ clients.",
        "steps": [
          "Confirm the client’s MFZ company details.",
          "Identify the requested Meydan+ service.",
          "Check whether the enquiry can be handled by the receiving team.",
          "Create or update the relevant ticket.",
          "Route to the service owner and track the response."
        ],
        "documents": [
          "MFZ company name or reference",
          "Client registered contact details",
          "Description of requested service"
        ],
        "notes": "Use the current internal routing and service eligibility rules."
      },
      {
        "slug": "non-meydan-client-enquiries",
        "title": "Non-Meydan client enquiries",
        "summary": "Route Meydan+ service enquiries from non-MFZ clients.",
        "purpose": "Follow the internal referral instruction supplied by the user, subject to reconfirmation.",
        "steps": [
          "Identify that the enquiry is from a non-MFZ client.",
          "Do not process it as an MFZ client ticket.",
          "Forward the enquiry to msale@meydanfz.ae, if this routing remains current.",
          "Include the client’s contact details and a concise request summary.",
          "Retain the handover record where required."
        ],
        "documents": [
          "Client or company name",
          "Contact details",
          "Enquiry and service requested"
        ],
        "notes": "Internal routing note supplied by the process owner: msale@meydanfz.ae. Verify the address before operational use."
      },
      {
        "slug": "department-referral",
        "title": "Department referral process",
        "summary": "Ensure enquiries are handed to the correct internal department.",
        "purpose": "Standardise routing and avoid handling requests outside the employee’s remit.",
        "steps": [
          "Read the enquiry and identify the responsible service or department.",
          "Check the latest department routing directory.",
          "Forward the original request with a short summary and relevant reference.",
          "Do not promise an outcome on behalf of another team.",
          "Track the handover if required by the ticket process."
        ],
        "documents": [
          "Original client enquiry",
          "Company or ticket reference",
          "Relevant supporting correspondence"
        ],
        "notes": "Maintain the department directory separately and verify addresses periodically."
      }
    ]
  },
  {
    "slug": "email-kyc",
    "number": "05",
    "title": "Email & KYC Workflow",
    "intro": "Registered email verification, ticket handling and secure request routing.",
    "topics": [
      {
        "slug": "email-verification",
        "title": "Email verification",
        "summary": "Verify the sender's email address before processing a client request.",
        "purpose": "Use the registered email check to help protect client information and company records.",
        "steps": [
          "Open the incoming email and read the client’s query.",
          "Compare the sender address with the email registered in Meydan FZ records.",
          "If it matches, proceed with the ticket and reply to the client.",
          "If it does not match, request that the client resend the request from the registered email address.",
          "If the registered email cannot be identified, use the company name to search the record where appropriate."
        ],
        "documents": [
          "Incoming email and sender address",
          "Company name or company reference",
          "Registered email record"
        ],
        "notes": "Do not disclose confidential company information or process restricted requests until verification is complete."
      },
      {
        "slug": "registered-email-checks",
        "title": "Registered email checks",
        "summary": "Find and validate the email address recorded against a company.",
        "purpose": "Explain how to handle cases where the sender address is unknown or differs.",
        "steps": [
          "Search the company record using the available company name or reference.",
          "Locate the registered email field in the approved system.",
          "Compare the registered address with the sender address exactly.",
          "Record the result in the ticket.",
          "Escalate missing, conflicting or outdated records."
        ],
        "documents": [
          "Company legal name or reference",
          "Sender email address",
          "Approved company record"
        ],
        "notes": "Use only approved systems. Do not share the registered email with an unverified requester unless policy permits."
      },
      {
        "slug": "ticket-handling",
        "title": "Ticket handling",
        "summary": "Process and respond to verified client tickets consistently.",
        "purpose": "Set expectations for ticket review, action, response and record keeping.",
        "steps": [
          "Read the full ticket history and identify the requested action.",
          "Complete the required verification checks.",
          "Check the current SOP and supporting documents.",
          "Resolve the request or route it to the correct team.",
          "Write a clear response and record actions taken."
        ],
        "documents": [
          "Ticket reference",
          "Verified company and contact details",
          "Supporting documents, if required"
        ],
        "notes": "Keep replies factual, professional and within your authority. Do not mark a ticket resolved until the required action is complete."
      },
      {
        "slug": "department-forwarding",
        "title": "Department forwarding",
        "summary": "Forward requests that belong to another department.",
        "purpose": "Use for queries such as CP Support or other specialist teams.",
        "steps": [
          "Identify that the request belongs to another department.",
          "Do not process the request outside your responsibility.",
          "Check the current department routing directory.",
          "Forward the email or ticket with a concise summary and relevant history.",
          "Record the handover where required."
        ],
        "documents": [
          "Original email or ticket",
          "Company name and reference",
          "Reason for referral"
        ],
        "notes": "The user's workflow says not to work on another department's email; forward it to the relevant team."
      }
    ]
  },
  {
    "slug": "operations",
    "number": "06",
    "title": "Company Operations & SOPs",
    "intro": "Internal systems, procedures, fees, processing times, templates and working references.",
    "topics": [
      {
        "slug": "step-by-step-procedures",
        "title": "Step-by-step procedures",
        "summary": "A consistent format for documenting and following internal processes.",
        "purpose": "Use this structure when creating or revising any operational SOP.",
        "steps": [
          "Define the purpose and scope.",
          "List eligibility and required documents.",
          "Write each action in the order it must be completed.",
          "Add decision points, exceptions and escalation steps.",
          "Obtain process-owner approval before publishing."
        ],
        "documents": [
          "Approved process notes",
          "Current forms and checklists",
          "Process owner and review date"
        ],
        "notes": "An SOP must distinguish verified requirements from assumptions and historic notes."
      },
      {
        "slug": "system-navigation",
        "title": "System navigation",
        "summary": "Document where employees should go and what actions to take in internal systems.",
        "purpose": "Use screenshots and numbered instructions to explain system paths.",
        "steps": [
          "Name the system and the access role required.",
          "Write the exact menu path and page name.",
          "Capture screenshots using test or non-sensitive data.",
          "Annotate buttons and fields without exposing personal data.",
          "Ask the system owner to verify the steps before publishing."
        ],
        "documents": [
          "System name and approved access",
          "Non-sensitive screenshots",
          "System owner confirmation"
        ],
        "notes": "Never include passwords, access tokens, client records or personal data in screenshots."
      },
      {
        "slug": "fees-processing-times",
        "title": "Fees and processing times",
        "summary": "Maintain a clear reference for fees, timelines and validity periods.",
        "purpose": "Use this page as a controlled reference, not as a guarantee of authority processing.",
        "steps": [
          "Identify the service and fee component.",
          "Confirm the latest fee from the official or authorised internal source.",
          "Record currency, effective date and whether additional charges may apply.",
          "Confirm the processing time and whether it is an estimate or service standard.",
          "Add source, verification date and owner."
        ],
        "documents": [
          "Current official fee schedule or authorised quote",
          "Processing time source",
          "Effective date and reviewer"
        ],
        "notes": "All fees and timelines are subject to change. Historic user notes must be rechecked before publication."
      },
      {
        "slug": "templates-documents",
        "title": "Templates and documents",
        "summary": "Provide approved forms, letters, checklists and reusable resources.",
        "purpose": "Keep current approved templates accessible from the relevant SOP.",
        "steps": [
          "Confirm the document owner and approval status.",
          "Remove personal or confidential sample data.",
          "Upload the approved blank template to the repository.",
          "Link the file from the relevant SOP page.",
          "Review the link and template version periodically."
        ],
        "documents": [
          "Approved blank form or template",
          "Version number and owner",
          "Approval or source reference"
        ],
        "notes": "Only publish blank, approved, non-confidential templates. Store completed client documents in secure systems."
      }
    ]
  },
  {
    "slug": "faqs",
    "number": "07",
    "title": "FAQs & Troubleshooting",
    "intro": "Answers to common questions, employee guidance and resolution of recurring issues.",
    "topics": [
      {
        "slug": "client-faqs",
        "title": "Common client questions",
        "summary": "Provide clear answers to frequently asked client questions.",
        "purpose": "Build answers from approved SOPs and current official information.",
        "steps": [
          "Collect recurring client questions from tickets and enquiries.",
          "Group questions by subject.",
          "Draft short, plain-language answers with links to the relevant SOP.",
          "Verify fees, eligibility and timelines before including them.",
          "Have the relevant process owner approve the answers."
        ],
        "documents": [
          "Recurring client questions",
          "Approved SOP references",
          "Verified source information"
        ],
        "notes": "Do not publish an answer that conflicts with the current approved SOP."
      },
      {
        "slug": "employee-queries",
        "title": "Employee queries",
        "summary": "Help employees find internal process answers quickly.",
        "purpose": "Use internal questions to improve the knowledge base.",
        "steps": [
          "Record the question and the process area.",
          "Search the existing knowledge base before drafting a new answer.",
          "Link to the relevant SOP or create a draft FAQ if needed.",
          "Ask the process owner to verify the answer.",
          "Publish after approval."
        ],
        "documents": [
          "Employee question",
          "Relevant SOP or process owner",
          "Verified answer"
        ],
        "notes": "Avoid publishing personal employee details or confidential internal discussions."
      },
      {
        "slug": "application-troubleshooting",
        "title": "Common application issues",
        "summary": "Provide a structured first response to common application problems.",
        "purpose": "Help employees identify, document and escalate issues.",
        "steps": [
          "Record the exact error message and stage of the application.",
          "Check whether required documents and fields are complete.",
          "Compare the case with the relevant SOP and current system guidance.",
          "Try only approved troubleshooting steps.",
          "Escalate unresolved issues with screenshots that contain no sensitive personal data."
        ],
        "documents": [
          "Application or ticket reference",
          "Error message and process stage",
          "Sanitised screenshot, if useful"
        ],
        "notes": "Do not guess at immigration or licensing outcomes. Escalate system or authority errors to the responsible team."
      }
    ]
  }
];
