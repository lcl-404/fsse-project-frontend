export default function AnnouncementStrip() {
  const message =
    "• Free shipping on orders over $50 • New Spring Collection out now • Follow us on Instagram @gokotta_home \u00A0\u00A0\u00A0\u00A0"; // Add some trailing spaces
  const repeatedMessage = message.repeat(3); // Adjust the repeat count
  const animationDuration = 15; // seconds

  return (
    <div className="w-full overflow-hidden bg-babyblue border-newblue border py-2 dark:bg-newblue">
      <div
        className="relative whitespace-nowrap"
        style={{
          animation: `marquee ${animationDuration}s linear infinite`,
        }}
      >
        <span className="text-newblue text-sm dark:text-lightyellow">{repeatedMessage}</span>
      </div>
    </div>
  );
}