export function renderStars(rating = 0, maxStars = 5) {
  const stars = [];
  for (let i = 1; i <= maxStars; i++) {
    stars.push(
      <i
        key={i}
        className={`fa-solid fa-star${i <= rating ? "" : " text-muted"}`}
        style={{ marginRight: 2 }}
      ></i>
    );
  }
  return <span className="revw-rating mt-0">{stars}</span>;
}