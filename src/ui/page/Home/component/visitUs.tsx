export default function VisitUs() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
    <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-mono text-newblue dark:text-lightyellow">Visit Our Location</h2>
  <p className="mt-4 text-lg text-newblue dark:text-lightyellow">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</div>
  <div className="mt-16 lg:mt-20">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="rounded-3xl overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
          width="100%" height="480" className="border:0;" allowFullScreen loading="lazy"></iframe>
      </div>
      <div>
        <div className="max-w-full mx-auto rounded-lg overflow-hidden">
          <div className="px-6 py-4">
            <h3 className="text-lg font-medium text-darkcyan dark:text-oyster">Our Address</h3>
            <p className="mt-1 text-darkcyan dark:text-oyster">123 Main St, San Francisco, CA 94105</p>
          </div>
          <div className="border-t border-gray-200 px-6 py-4">
            <h3 className="text-lg font-medium text-gray-900 dark:text-oyster">Hours</h3>
            <p className="mt-1 text-darkcyan dark:text-oyster whitespace-pre-line">
              Monday - Friday: 9am - 5pm{'\n'}
              Saturday: 10am - 4pm{'\n'}
              Sunday: Closed
            </p>
          </div>
          <div className="border-t border-gray-200 px-6 py-4">
            <h3 className="text-lg font-medium text-gray-900 dark:text-oyster">Contact</h3>
            <p className="mt-1 text-darkcyan dark:text-oyster whitespace-pre-line">
              Email: info@example.com{'\n'}
              Phone: +1 23494 34993
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}