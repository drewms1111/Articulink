const SUPABASE_URL = "https://crmfrsefuudjelxpjpbi.supabase.co";
const SUPABASE_KEY = "sb_publishable_4hi1EYwTDVkfe2XDznmmUQ_Wi07-KXO";

async function loadData() {
  const res = await fetch(
    SUPABASE_URL + "/rest/v1/transactions?select=*",
    {
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: "Bearer " + SUPABASE_KEY
      }
    }
  );

  const transactions = await res.json();

  const chat = document.getElementById("chat");
  chat.innerHTML = "";

  let balance = 0;

  transactions.forEach(t => {
    if (t.type === "Charge") balance += Number(t.amount || 0);
    if (t.type === "Payment") balance -= Number(t.amount || 0);

    const div = document.createElement("div");
    div.classList.add("msg");

    div.classList.add(t.type === "Payment" ? "payment" : "charge");

    div.innerHTML = `
      <b>${t.type}</b><br>
      ${t.description}<br>
      ${t.amount} QAR
    `;

    chat.appendChild(div);
  });

  document.getElementById("balance").innerText =
    "Balance: " + balance + " QAR";
}

loadData();
