export default function RefundPolicy() {
  return (
    <div className="container mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-8">Refund Policy</h1>
      <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
        <section>
          <p>
            At Dine With Love, we strive to ensure a premium experience for all
            our members. Understanding our refund policy is essential for a
            smooth experience. Last updated: February 2024.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
            1. Membership Subscriptions
          </h2>
          <div className="space-y-4">
            <p>
              <strong>Monthly Plans:</strong> Subscription fees for monthly
              plans are non-refundable. You may cancel your subscription at any
              time to avoid future charges, but we do not provide pro-rated
              refunds for unused portions of the month.
            </p>
            <p>
              <strong>Annual Plans:</strong> Annual subscriptions are eligible
              for a partial refund if requested within 14 days of the initial
              charge, minus a processing fee and the cost of one month at the
              standard monthly rate.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
            2. Experience Booking Fees
          </h2>
          <p>
            The fees paid to Dine With Love for curating and matching your
            dinner experience follow these rules:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Cancellations &gt; 48 Hours:</strong> Full refund or 100%
              credit toward your next experience.
            </li>
            <li>
              <strong>Cancellations 24-48 Hours:</strong> 50% refund or 60%
              credit toward your next experience.
            </li>
            <li>
              <strong>Cancellations &lt; 24 Hours:</strong> No refund or credit
              will be issued, as we have already committed resources and
              restaurant bookings.
            </li>
            <li>
              <strong>No-Shows:</strong> No refund. Repeated no-shows may lead
              to account suspension.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
            3. Technical Issues
          </h2>
          <p>
            If you are unable to use our platform due to a confirmed technical
            failure on our end (e.g., website downtime during a planned event),
            you will be eligible for a full credit or refund for that specific
            experience. Please provide screenshots or clear details to our
            support team.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
            4. Restaurant Disputes
          </h2>
          <p>
            Dine With Love acts as a matching and reservation service. Payments
            for meals and drinks made directly to restaurants are subject to the
            individual restaurant&apos;s refund policy. We are not responsible
            for disputes regarding food quality or service at the venue.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
            5. How to Request a Refund
          </h2>
          <p>
            To request a refund, please email{" "}
            <strong>billing@dine-with-love.com</strong> with your account email
            address, the date of the transaction, and the reason for the
            request. Our billing team will review and process your request
            within 5-7 business days.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
            6. Changes to This Policy
          </h2>
          <p>
            We may update our Refund Policy from time to time. We will notify
            you of any changes by posting the new Refund Policy on this page.
            You are advised to review this Refund Policy periodically for any
            changes.
          </p>
        </section>
      </div>
    </div>
  );
}
