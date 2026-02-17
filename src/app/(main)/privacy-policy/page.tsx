const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
        <section>
          <p>
            Your privacy is crucial to us. This Privacy Policy explains how we
            collect, use, and protect your personal information when you use
            Dine With Love. Last updated: February 2024.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
            1. Information We Collect
          </h2>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
              1.1 Personal Identification Information
            </h3>
            <p>
              We collect information you provide directly to us, such as when
              you create an account. This includes your name, email address,
              phone number, and physical address.
            </p>
            <h3 className="text-xl font-semibold text-gray-800">
              1.2 Compatibility Profile
            </h3>
            <p>
              To provide our core service, we collect details about your
              personality, dining preferences, interests, and lifestyle choices
              through our compatibility tests.
            </p>
            <h3 className="text-xl font-semibold text-gray-800">
              1.3 Usage Data
            </h3>
            <p>
              We automatically collect information about how you interact with
              our website, including IP addresses, browser types, page views,
              and time spent on our platform.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
            2. How We Use Your Information
          </h2>
          <p>
            We use your information to provide and improve our services,
            including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Matching you with compatible partners based on our proprietary
              algorithm.
            </li>
            <li>
              Booking reservations at restaurant partners under your name or a
              pseudonym.
            </li>
            <li>
              Communicating with you regarding upcoming events and security
              alerts.
            </li>
            <li>
              Analyzing platform performance and optimizing user experience.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
            3. Data Sharing and Disclosure
          </h2>
          <p>
            We do not sell your personal data. We only share information with
            third parties in the following cases:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Restaurant Partners:</strong> Basic details needed for
              booking your table.
            </li>
            <li>
              <strong>Service Providers:</strong> Secure payment processors and
              email delivery services.
            </li>
            <li>
              <strong>Legal Requirements:</strong> If required by law to comply
              with judicial proceedings or subpoenas.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
            4. Your Data Rights
          </h2>
          <p>
            You have the right to access, correct, or delete your personal data.
            You can manage your profile settings within the dashboard or contact
            us for a complete data deletion request. We will respond to your
            request within 30 days.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
            5. Cookies and Tracking
          </h2>
          <p>
            We use cookies to remember your login state and preferences. You can
            disable cookies through your browser settings, but some features of
            Dine With Love may not function properly.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
            6. Security
          </h2>
          <p>
            We implement industry-standard encryption (SSL/TLS) to protect your
            data during transmission. However, no method of transmission over
            the internet is 100% secure, and we cannot guarantee absolute
            security.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
