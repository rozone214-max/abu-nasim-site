const form = document.querySelector("#booking-form");
const note = document.querySelector("#form-note");

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const email = String(data.get("email") || "").trim();
  const message = String(data.get("message") || "").trim();

  const body = [
    `Name: ${name}`,
    `Email: ${email}`,
    "",
    "I would like to schedule a 15-minute conversation.",
    "",
    message ? `What I would like to talk about: ${message}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const subject = encodeURIComponent("15-minute conversation request");
  const mailBody = encodeURIComponent(body);

  window.location.href = `mailto:hello@example.com?subject=${subject}&body=${mailBody}`;
  note.textContent = "Opening your email app to request a time.";
});
