export default function NewsLetter(){
  return(
    <div className="hero py-10 bg-babyblue dark:bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="/assets/img/green.jpg"
          className="rounded-3xl shadow-2xl w-full lg:w-1/2 h-64 object-cover"
        />
        <div>
          <h1 className="text-5xl font-mono text-newblue italic">Get Inspired</h1>
          <p className="py-6 text-darkcyan dark:text-oyster">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>

          <div className="flex flex-row gap-4">
            <label className="input validator no-focus-ring">
              <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input type="email" placeholder="youremail@site.com" required />
            </label>
            <div className="validator-hint hidden">Enter valid email address</div>

            <button className="btn w-30 bg-oyster text-newblue">Subscribe</button>
          </div>

        </div>
      </div>
    </div>
  )
}