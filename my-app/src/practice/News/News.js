import NewsItem from '../../Component/NewsItem/NewsItem.js';
import { news } from '../../data/news.js';

// my-app/src/Component/NewsItem/NewsItem.js
// /Users/sergeiantonov/git/practice/my-app/src/Component/NewsItem/NewsItem.js

function News() {
    return (
        <main className='news'>
            {news.map((el)=> (
                <NewsItem 
                    author={el.author}
                    title={el.title}
                    descreption={el.description}
                    url={el.url}
                    publishedAt={el.publishedAt}
                    img={el.urlToImage}
                    source={el.source.name}
                    key={el.source.id}
                />
            ))}
        </main>
    )
}

export default News;