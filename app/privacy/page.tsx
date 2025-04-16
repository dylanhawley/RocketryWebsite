export default function PrivacyPolicy() {
  return (
    <main className="flex-1">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-400 mb-8">Last updated: January 24, 2024</p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <p className="text-gray-300 mb-4">
              We collect information that you provide directly to us when using Rocketry:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Account information (email address, name)</li>
              <li>Device information and preferences</li>
              <li>Usage data and interaction with the app</li>
              <li>Push notification preferences</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-300 mb-4">We use the collected information for the following purposes:</p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Provide and maintain the Rocketry service</li>
              <li>Send notifications about upcoming launches</li>
              <li>Improve and personalize your experience</li>
              <li>Analyze app usage and performance</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">3. Data Storage and Security</h2>
            <p className="text-gray-300 mb-4">
              We implement appropriate security measures to protect your personal information. Your data is stored on
              secure servers and we use industry-standard encryption for data transmission.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">4. Third-Party Services</h2>
            <p className="text-gray-300 mb-4">We may use third-party services to:</p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Process payments</li>
              <li>Analyze app usage</li>
              <li>Send push notifications</li>
              <li>Provide customer support</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
            <p className="text-gray-300 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  )
}

