import {useEffect} from "react";

export default function Landing() {
  useEffect(() => {
    console.log("hihi");
  }, []);

  return (
    <a href="#" className="block">
      <div className="bg-oyster">
        <div className="max-w-screen-xl mx-auto w-full flex items-center justify-between relative">
          <img src="/assets/img/table-grey.png" className="w-full h-auto" />
          <div
            className="card text-lightyellow w-96 absolute mt-70 ml-8"
            onClick={(e) => e.stopPropagation()} // Prevent card clicks from triggering the <a> tag
          >
            <div className="card-body">
              <h2 className="card-title">Spring Collection</h2>
              <p>A beautiful collection of tableware and glassware, make your summer parties and gatherings picture-perfect.</p>
              <div className="card-actions justify-bottom">
                <a href="#" className="btn text-newblue bg-oyster mt-5">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}