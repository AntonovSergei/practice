import dayjs from 'dayjs';

export default function NewsItem({
  author,
  title,
  descreption,
  url,
  img,
  publishedAt,
  source,
}) {
  return (
    <div className="newsitem">
      <div className="block">
        <p className="title">
          <a href={url}>{title}</a>
        </p>
        <p className="descreption">{descreption}</p>
        <p className="source">
          <a href={url}>{source}</a>
          {author}
          {dayjs(publishedAt).format('DD/MM/YYYY hh:mm')}
        </p>
      </div>
      {img !== null ? <img className="img" src={img} alt="картинка" /> : ""}
    </div>
  );
}
