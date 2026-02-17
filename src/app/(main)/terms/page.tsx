const TermsOfService = () => {
  return (
    <div className="container mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
        <section>
          <p>
            Welcome to Dine With Love. By accessing our website and using our
            services, you agree to be bound by the following terms and
            conditions. Please read them carefully.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
            1. Acceptance of Terms
          </h2>
          <p>
            By creating an account or using any part of our service, you agree
            to these Terms of Service and our Privacy Policy. If you do not
            agree, you must not use our platform.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
            2. Eligibility and Account
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>You must be at least 18 years of age to use this service.</li>
            <li>
              You are responsible for maintaining the confidentiality of your
              account credentials.
            </li>
            <li>
              You agree to provide accurate and current information during
              registration.
            </li>
            <li>
              Accounts are for personal use only and cannot be shared or
              transferred.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
            3. User Conduct
          </h2>
          <p>
            Dine With Love is a community built on respect. You agree NOT to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Harass, abuse, or threaten other members or restaurant staff.
            </li>
            <li>
              Post or transmit any content that is defamatory, obscene, or
              discriminatory.
            </li>
            <li>
              Use the platform for any illegal activities or unauthorized
              commercial purposes.
            </li>
            <li>
              Attempt to scrape, hack, or interfere with the platform&apos;s
              technical operation.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
            4. Dining Experiences and Bookings
          </h2>
          <p>When you book a dinner through Dine With Love:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              You are expected to arrive on time. Arriving more than 20 minutes
              late may result in forfeiture of your reservation without a
              refund.
            </li>
            <li>
              You are responsible for paying for your own meal and drinks at the
              restaurant, unless specified otherwise by a special package.
            </li>
            <li>
              You must adhere to the restaurant&apos;s dress code and code of
              conduct.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
            5. Intellectual Property
          </h2>
          <p>
            All content on this website, including text, graphics, logos, and
            software, is the property of Dine With Love and is protected by
            international copyright laws.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
            6. Limitation of Liability
          </h2>
          <p>
            Dine With Love provides a matching service. We are not responsible
            for the conduct of users during or after their dining experiences.
            We shall not be liable for any indirect, incidental, or
            consequential damages arising from your use of the service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
            7. Billing and Payments
          </h2>
          <p>
            Certain aspects of the service may require payment. You agree to
            provide accurate payment information and authorize us to charge you
            for all applicable fees. All payments are inclusive of applicable
            taxes unless stated otherwise.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
            8. Termination of Account
          </h2>
          <p>
            We reserve the right to suspend or terminate your account at our
            sole discretion, without notice, for any violation of these terms or
            for conduct that we deem harmful to our community or business
            interests. Upon termination, your right to use the service will
            immediately cease.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
            9. Dispute Resolution
          </h2>
          <p>
            Any disputes arising out of or relating to these terms or our
            services shall be resolved through binding arbitration in accordance
            with the rules of the local jurisdiction. You agree to waive your
            right to participate in class action lawsuits.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
            10. Modifications to Service and Terms
          </h2>
          <p>
            We reserve the right to modify or discontinue our service at any
            time without notice. We may also update these Terms of Service from
            time to time; your continued use of the platform constitutes
            acceptance of the new terms.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
