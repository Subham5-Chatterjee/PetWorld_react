export default function Offercardtwo({
  offerImg,
  offertwotitle,
  subtitle,
  subtitle1,
  offerurl,
  offerbtntext,
}) {
  return (
    <div class="offerinfo position-relative">
      <img src={offerImg} class="img-fluid" alt="" />
      <div class="offerText_one">
        <p>{offertwotitle}</p>
        <h3>
          {subtitle}
          <br />
          {subtitle1}
        </h3>
        <a href={offerurl} class="btn btnoffer">
          {offerbtntext}
        </a>
      </div>
    </div>
  );
}
