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
          <button className="btn bg-oyster dark:bg-cyanblue text-newblue">Subscribe</button>
        </div>
      </div>
    </div>
  )
}