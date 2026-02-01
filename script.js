// https://motivational-spark-api.vercel.app/api/quotes/random/10
const container = document.querySelector(".container");
const btn=document.querySelector(".btn");
async function getQuotes() {
  try {
    const res = await fetch(
      "https://motivational-spark-api.vercel.app/api/quotes/random/5"
    );

    const data = await res.json(); // convert to JSON

    container.innerHTML = data.map(quote => `<div class="box">
      <p>"${quote.quote}"</p>
      <small>- ${quote.author}</small>
      </div>
    `).join("");

  } catch (err) {
    console.error(err);
    container.innerHTML = "Failed to load quotes 😢";
  }
}
getQuotes();
btn.addEventListener("click",()=>getQuotes())
