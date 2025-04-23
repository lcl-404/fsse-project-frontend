// components/LandingSlide.tsx

type LandingSlideProps = {
  imageUrl: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
};

export default function LandingSlide(props: LandingSlideProps) {
  const { imageUrl, title, description, buttonText, buttonLink } = props;

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      <img
        src={imageUrl}
        className="w-full h-full object-cover object-center"
        alt={title}
      />

      <div
        className="absolute top-3/4 left-20 transform -translate-y-1/2 card text-white w-96 bg-opacity-70 "
        //onClick={(e) => e.stopPropagation()}
      >
        <div className="card-body text-lg">
          <h2 className="card-title text-xl">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-start">
            <a href={buttonLink} className="btn text-newblue bg-oyster mt-5">
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
