export function Faqs(): string {
  const faqs = [
    ["Will boarding squash my insulation?", "Our standard approach uses a raised platform so the boarding sits above the insulation. We confirm the suitable detail during the survey."],
    ["Can I use the loft as a room?", "No. OpenLoft packages create access and storage space, not a habitable room. Conversion work needs a different design and approvals process."],
    ["How long does installation take?", "Many standard packages are planned as a one-day installation. Your survey and quote will confirm the expected duration."],
    ["What can I store?", "Light household items such as boxed belongings and seasonal equipment. We explain storage limits at handover and do not specify the platform for unusually heavy loads."],
    ["Do I need to clear the loft first?", "Usually, yes. Tell us about existing boards or stored items when booking so we can explain what needs to happen before installation."],
  ];
  const content = faqs.map(([question, answer]) => `<details><summary>${question}<span aria-hidden="true">+</span></summary><p>${answer}</p></details>`).join("");
  return `<section class="faqs section" id="faqs"><div class="shell faq-grid"><div><p class="eyebrow">Common questions</p><h2>Straight answers before you book.</h2></div><div>${content}</div></div></section>`;
}
