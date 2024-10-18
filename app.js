const api_url = "https://quotes-api-self.vercel.app/quote";

async function Quotegenrator(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    document.querySelector("blockquote").innerHTML = data.quote;
    document.querySelector("span").innerHTML = data.author;
    
}
Quotegenrator(api_url);

document.querySelector("button").addEventListener("click", () => Quotegenrator(api_url));