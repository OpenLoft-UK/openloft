import { arrow, check, close, menu, phone } from "./icons";

const packageRows = [
  ["OpenLoft 10", "10 m²", "A focused storage platform for boxes and seasonal kit.", "£995"],
  ["OpenLoft 20", "20 m²", "Our everyday family package with room to organise properly.", "£1,595"],
  ["OpenLoft 30", "30 m²", "A generous platform for busy homes with serious storage needs.", "£2,195"],
];

export function Header(): string {
  return `<div class="utility"><div class="shell"><span>Loft storage, surveyed and professionally installed</span><a href="#quote">Book a free survey ${arrow}</a></div></div>
  <header class="header" data-header><div class="shell nav-wrap">
    <a class="brand" href="#top" aria-label="OpenLoft home"><img src="/assets/openloft-header-red.png" alt="OpenLoft" /></a>
    <nav class="desktop-nav" aria-label="Main navigation"><a href="#packages">Packages</a><a href="#process">How it works</a><a href="#standards">Our standards</a><a href="#faqs">FAQs</a></nav>
    <a class="button button-small" href="#quote">Check your postcode ${arrow}</a>
    <button class="menu-button" type="button" aria-label="Open menu" aria-expanded="false" data-menu-button>${menu}</button>
  </div><nav class="mobile-nav" aria-label="Mobile navigation" data-mobile-nav><button type="button" aria-label="Close menu" data-menu-close>${close}</button><a href="#packages">Packages</a><a href="#process">How it works</a><a href="#standards">Our standards</a><a href="#faqs">FAQs</a><a class="button" href="#quote">Get a free survey ${arrow}</a></nav></header>`;
}

export function Hero(): string {
  return `<section class="hero" id="top"><div class="hero-image" role="img" aria-label="Spacious timber loft ready for practical storage"></div><div class="hero-shade"></div>
    <div class="shell hero-inner"><p class="eyebrow light">Loft boarding for real homes</p><h1>Make room<br />at home.</h1><p class="hero-copy">Safe, raised loft storage installed around your insulation—without turning your home upside down.</p>
    <form class="postcode-form" data-postcode-form><label for="hero-postcode">See if we cover your area</label><div><input id="hero-postcode" name="postcode" autocomplete="postal-code" placeholder="Postcode" required /><button type="submit">Check postcode ${arrow}</button></div><p data-postcode-message aria-live="polite"></p></form></div>
    <div class="hero-proof"><div class="shell"><span>${check} Free home survey</span><span>${check} Fixed-price quote</span><span>${check} Clean, careful installation</span></div></div>
  </section>`;
}

export function Packages(): string {
  const rows = packageRows.map(([name, size, copy, price], index) => `<article class="package-row reveal"><span class="package-index">0${index + 1}</span><div><p class="eyebrow">${size} raised platform</p><h3>${name}</h3></div><p>${copy}</p><div class="package-price"><span>From</span><strong>${price}</strong><small>including VAT</small></div><a href="#quote" data-package="${name}">Choose package ${arrow}</a></article>`).join("");
  return `<section class="packages section" id="packages"><div class="shell"><div class="section-head"><p class="eyebrow">Simple packages</p><h2>Start with the space you need.</h2><p>Every home is surveyed before we confirm the work. Your quote explains the platform, access and any extras clearly.</p></div><div class="package-list">${rows}</div><p class="fine-print">Prices shown are planning prices for standard installations and remain subject to survey.</p></div></section>`;
}

export function Process(): string {
  return `<section class="process section" id="process"><div class="shell process-grid"><div class="process-media reveal"><img src="/assets/loft-empty.jpg" alt="Empty timber loft ready to be surveyed for storage" loading="lazy" /><span>Survey before we specify</span></div><div class="process-copy"><p class="eyebrow">How it works</p><h2>A better loft in three clear steps.</h2><ol><li class="reveal"><span>01</span><div><h3>We survey your loft</h3><p>We check access, insulation, ventilation, structure and what you want to store.</p></div></li><li class="reveal"><span>02</span><div><h3>You get one clear quote</h3><p>A fixed specification, price and installation date—with no on-site upselling.</p></div></li><li class="reveal"><span>03</span><div><h3>We install and leave it tidy</h3><p>Your team protects the route, photographs the work and explains how to use the space.</p></div></li></ol></div></div></section>`;
}

export function Standards(): string {
  return `<section class="standards section" id="standards"><div class="shell standards-grid"><div><p class="eyebrow light">Built around your home</p><h2>Storage above the insulation. Not through it.</h2><p>Our raised platform approach is designed to preserve insulation depth and keep ventilation and service routes accessible. If a loft is not suitable, we say so.</p><ul><li>${check} Surveyed before quotation</li><li>${check} Clear storage-use limits</li><li>${check} Photo record at handover</li><li>${check} No solo working inside the loft</li></ul><a class="text-link" href="#quote">Talk through your loft ${arrow}</a></div><figure class="reveal"><img src="/assets/loft-ladder.jpg" alt="Loft ladder leading into a timber roof space" loading="lazy" /><figcaption>Access, platform and lighting can be specified together.</figcaption></figure></div></section>`;
}

export function Quote(): string {
  return `<section class="quote section" id="quote"><div class="shell quote-grid"><div><p class="eyebrow">Free home survey</p><h2>Show us the loft.<br />We’ll make the plan.</h2><p>Tell us where you are and what you need to store. We’ll confirm whether your postcode is in the launch area and arrange the next step.</p><div class="quote-contact">${phone}<div><span>Prefer to speak?</span><strong>Request a callback</strong></div></div></div>
    <form class="quote-form" data-quote-form><div class="field"><label for="name">Name</label><input id="name" name="name" autocomplete="name" required /></div><div class="field"><label for="email">Email</label><input id="email" name="email" type="email" autocomplete="email" required /></div><div class="field"><label for="phone">Phone</label><input id="phone" name="phone" type="tel" autocomplete="tel" required /></div><div class="field"><label for="postcode">Postcode</label><input id="postcode" name="postcode" autocomplete="postal-code" required /></div><div class="field field-wide"><label for="package">What are you considering?</label><select id="package" name="package"><option>Not sure yet</option><option>OpenLoft 10</option><option>OpenLoft 20</option><option>OpenLoft 30</option><option>Boarding, ladder and lighting</option></select></div><button class="button field-wide" type="submit">Request my free survey ${arrow}</button><p class="form-status field-wide" data-form-status aria-live="polite"></p></form></div></section>`;
}

export function Footer(): string {
  return `<footer><div class="shell footer-main"><a href="#top"><img src="/assets/openloft-wordmark-white.png" alt="OpenLoft" /></a><p>Practical loft storage, properly surveyed and professionally installed.</p><div><a href="#packages">Packages</a><a href="#process">How it works</a><a href="#faqs">FAQs</a><a href="#quote">Free survey</a></div></div><div class="shell footer-base"><span>© ${new Date().getFullYear()} OpenLoft Ltd</span><span>Storage installation—not habitable loft conversion</span></div></footer>`;
}
