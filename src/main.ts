import "./styles/base.css";
import "./styles/sections.css";
import "./styles/forms-footer.css";
import "./styles/responsive.css";
import { Footer, Header, Hero, Packages, Process, Quote, Standards } from "./content";
import { Faqs } from "./faqs";

const app = document.querySelector<HTMLDivElement>("#app");
if (!app) throw new Error("App root was not found");

app.innerHTML = `${Header()}<main id="main">${Hero()}${Packages()}${Process()}${Standards()}${Faqs()}${Quote()}</main>${Footer()}`;

const header = document.querySelector<HTMLElement>("[data-header]");
const menuButton = document.querySelector<HTMLButtonElement>("[data-menu-button]");
const menuClose = document.querySelector<HTMLButtonElement>("[data-menu-close]");
const mobileNav = document.querySelector<HTMLElement>("[data-mobile-nav]");

function setMenu(open: boolean): void {
  mobileNav?.classList.toggle("is-open", open);
  menuButton?.setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("menu-open", open);
}

menuButton?.addEventListener("click", () => setMenu(true));
menuClose?.addEventListener("click", () => setMenu(false));
mobileNav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMenu(false)));

window.addEventListener("scroll", () => header?.classList.toggle("is-scrolled", window.scrollY > 40), { passive: true });

const postcodePattern = /^[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}$/i;
// The postcode check intentionally validates format only until launch coverage data is connected.
document.querySelectorAll<HTMLFormElement>("[data-postcode-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const postcode = String(data.get("postcode") ?? "").trim();
    const message = form.querySelector<HTMLElement>("[data-postcode-message]");
    if (!postcodePattern.test(postcode)) {
      if (message) message.textContent = "Please enter a full UK postcode.";
      return;
    }
    const quotePostcode = document.querySelector<HTMLInputElement>("#postcode");
    if (quotePostcode) quotePostcode.value = postcode.toUpperCase();
    document.querySelector("#quote")?.scrollIntoView({ behavior: "smooth" });
  });
});

document.querySelectorAll<HTMLAnchorElement>("[data-package]").forEach((link) => {
  link.addEventListener("click", () => {
    const select = document.querySelector<HTMLSelectElement>("#package");
    if (select && link.dataset.package) select.value = link.dataset.package;
  });
});

document.querySelector<HTMLFormElement>("[data-quote-form]")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget as HTMLFormElement;
  const status = form.querySelector<HTMLElement>("[data-form-status]");
  if (!form.reportValidity()) return;
  if (status) status.textContent = "Thanks — your survey request is ready to send. Connect this form to your CRM before launch.";
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });

// Reveal each section only once to keep scrolling calm and predictable.
document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
