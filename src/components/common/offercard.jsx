export default function OfferCard({
  name,
  thubImg,
  subTitle,
  title1,
  title2,
  btnurl,
  btnText,
}) {
  return (
    <div className="offerinfo position-relative">
      <img src={thubImg} className="img-fluid" alt="" />
      <div className={name}>
        <p>{subTitle}</p>
        <h3>
          {title1}
          <br />
          {title2}
        </h3>
        <a href={btnurl} className="btn btnoffer">
          {btnText}
        </a>
      </div>
    </div>
  );
}
