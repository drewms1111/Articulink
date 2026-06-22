const transactions = [
  { type: "Charge", text: "2026 H1 Fee - 200 QAR" },
  { type: "Payment", text: "Paid 100 QAR" },
  { type: "Charge", text: "Workshop Fee - 50 QAR" }
];

function renderChat() {
  const chat = document.getElementById("chat");

  chat.innerHTML = "";

  transactions.forEach(t => {
    const div = document.createElement("div");
    div.classList.add("msg");

    div.classList.add(t.type === "Payment" ? "payment" : "charge");
    div.innerText = `${t.type}: ${t.text}`;

    chat.appendChild(div);
  });

  document.getElementById("balance").innerText =
    "Balance: 150 QAR (Due)";
}

renderChat();