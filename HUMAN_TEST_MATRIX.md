# Human test matrix

| ID | Area | Device / Browser | Preconditions | Test steps | Expected result | Result | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| HT-01 | Load and routes | Desktop / Chrome | Local server running | Open `/`, `/images.html`, and `/bio.html`; refresh each | All three pages load without errors or layout shift | NOT TESTED | |
| HT-02 | Desktop layout | 1440×900 / Chrome, Safari, Firefox | Site loaded | Inspect home at 100% zoom | Mosaic fills viewport; name and navigation remain readable and unobscured | NOT TESTED | |
| HT-03 | Laptop layout | 1280×720 / Chrome | Site loaded | Inspect all pages | All text remains visible; no overlap or page scrollbars | NOT TESTED | |
| HT-04 | Tablet | iPad portrait and landscape / Safari | Site loaded | Rotate device and navigate between pages | Layout adapts cleanly; tap targets remain usable | NOT TESTED | |
| HT-05 | Mobile | iPhone and Android / Safari, Chrome | Site loaded | Open home, Images, and Bio; rotate device | Portrait crops and five-image mosaic remain intentional; all controls are legible | NOT TESTED | |
| HT-06 | Keyboard | Desktop / Chrome, Firefox | Site loaded | Use Tab, Shift+Tab, Enter | Focus is visible and logical; Bio, email, and home controls activate correctly | NOT TESTED | Placeholder links are intentionally disabled. |
| HT-07 | Touch | Phone / Safari or Chrome | Site loaded | Tap Bio, name, and return arrow | Bio opens; name launches mail client; arrow returns home | NOT TESTED | Requires approved email before final sign-off. |
| HT-08 | Reduced motion | macOS/iOS / Safari | Reduce Motion enabled | Load and navigate pages | Content appears without meaningful animation; nothing is hidden | NOT TESTED | |
| HT-09 | Text scaling | Mobile / Safari | Text size increased to 200% | Inspect and navigate both pages | Controls remain readable and do not overlap | NOT TESTED | |
| HT-10 | Contrast and semantics | Desktop / accessibility tools | Site loaded | Run automated audit and inspect landmarks/names | Navigation and controls have meaningful names; focus and text contrast pass | NOT TESTED | |
| HT-11 | Media failure | Desktop / Chrome DevTools | Disable cache and block one JPG | Reload home and Bio | Page controls remain functional; Bio alt text identifies the portrait | NOT TESTED | Mosaic images are decorative. |
| HT-12 | Slow network | Mobile throttling / Chrome | Disable cache, use Slow 3G | Load each page first and repeat time | Layout dimensions stay stable while full-resolution images load | NOT TESTED | Visual loading time should be reviewed before production. |
| HT-13 | Rapid interaction | Desktop / Chrome | Site loaded | Hover quickly across tiles and repeatedly switch pages | Hover transitions remain smooth; controls do not shift | NOT TESTED | |
| HT-14 | Client edits | Desktop / any browser | Test copy of files | Add approved URLs and email, then reload | Links open their intended destinations; styling is unchanged | NOT TESTED | |
| HT-15 | Malformed links | Desktop / Chrome | Test copy with an invalid URL | Activate edited link | Browser handles failure without breaking page navigation | NOT TESTED | |
