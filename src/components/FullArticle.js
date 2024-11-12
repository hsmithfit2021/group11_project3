import '../style/FullArticle.css';
import logo from "../assets/Newslook.svg"

// Placeholder/Template, will need to be generated based on selected article
function FullArticle({article, onClose}) {
    return (
        <div class="article-page">
            <div class="exit">
                <button class="exitbtn" onClick={onClose}>X</button>
            </div>
            <h1 class="logo">
                <img src={logo}/>
            </h1>
            <div class="image">
                <img src={article.large_image_url} alt={article.title} />
            </div>
            <br/>
            <div class="link">
                <a href={article.link}>
                    {shortenURL(article.link)}
                </a>
            </div>
            <br/>
            <h2 class="title">
                {article.title}
            </h2>
            <br/>
            <p class="date">
                <p className="date"><strong>{formatDate(article.published_date)}</strong></p>
            </p>
            <br/>
            <p class="topic">
                {article.topic}
            </p>
            <br/>
            <pre class="preformat">
                <p class="content">
                    {formatText(article.content)}
                </p>
            </pre>
            <br/>
            <table>
                <tr>
                    <td>
                        Word Count
                    </td>
                    <td>
                        <p>{countWords(article.content)}</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        Sentence Count
                    </td>
                    <td>
                        <p>{countSentences(article.content)}</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        Syllable Count
                    </td>
                    <td>
                        <p>{countSyllables(article.content)}</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        Flesch Index
                    </td>
                    <td>
                        <p>{computeFleschIndex(countSyllables(article.content), countWords(article.content), countSentences(article.content))}</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        Grade Level
                    </td>
                    <td>
                        <p>{classifyArticleReadability(computeFleschIndex(countSyllables(article.content), countWords(article.content), countSentences(article.content)))}</p>
                    </td>
                </tr>
            </table>
        </div>
    );
  }

  // Helper function to format the date
  function formatDate(dateString) {
    const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  }

  // Function to count the words
  function countWords(text) {
    return text.split(/\s+/).filter((word) => word.length > 0).length;
  }
  
  // Function to count the sentences
  function countSentences(text) {
    return (text.match(/[.!?;:]+/g) || []).length;
  }
  
  // Function to count the syllables
  function countSyllables(word) {
    word = word.toLowerCase();
    if (word.length <= 3) return 1;
    word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
    word = word.replace(/^y/, '');
    const syllableMatch = word.match(/[aeiouy]{1,2}/g);
    return syllableMatch ? syllableMatch.length : 1;
  }
  
  // Function to compute the flesch index
  function computeFleschIndex(syllableCount, wordCount, sentenceCount) {
    return (
      206.835 -
      1.015 * (wordCount / sentenceCount) -
      84.6 * (syllableCount / wordCount)
    );
  }
  
  // Function to rate article readability
  function classifyArticleReadability(fleschIndex) {
    if (fleschIndex >= 90) return '5th grade';
    if (fleschIndex >= 80) return '6th grade';
    if (fleschIndex >= 70) return '7th grade';
    if (fleschIndex >= 60) return '8th & 9th grade';
    if (fleschIndex >= 50) return '10th to 12th grade';
    if (fleschIndex >= 30) return 'College';
    return 'College graduate';
  }

  // Function to shorten url to just include domain
  function shortenURL(url) {
    const shortened = new URL(url).hostname;
    return shortened.slice(4);
  }

  // Function to replace \n\n with actual newlines
  function formatText(text) {
    return text.replace(/\\n\\n/g, '<br>');
  }

  export default FullArticle;