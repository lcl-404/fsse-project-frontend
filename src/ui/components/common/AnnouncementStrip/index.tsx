export default function AnnouncementStrip() {
  const message = " • Free shipping on orders over $50  •  New Spring Collection out now  •  Follow us on Instagram @gokotta_home";

  return (
    <div className="w-full overflow-hidden bg-babyblue border-newblue border py-2 dark:bg-newblue relative dark:border-base-100">
      <div className="text-center items-center text-nowrap">
      {/*  /!* Original Content *!/*/}
      {/*  <div className="inline-block animate-marquee">*/}
      {/*    <span className="text-newblue text-sm dark:text-lightyellow pr-8">*/}
      {/*      {message.repeat(1)} /!* Generates enough content *!/*/}
      {/*    </span>*/}
      {/*  </div>*/}

      {/*  /!* Mirror Content for seamless loop *!/*/}
      {/*  <div className="inline-block animate-marquee">*/}
      {/*    <span className="text-newblue text-sm dark:text-lightyellow pr-8">*/}
      {/*      {message.repeat(1)}*/}
      {/*    </span>*/}
      {/*  </div>*/}
        <span className="text-newblue text-sm dark:text-lightyellow pr-8">
          {message.repeat(2)}
        </span>
      </div>
      {/* Add to your global CSS */}

    </div>
  );
}