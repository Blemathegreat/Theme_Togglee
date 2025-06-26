Accessibility Compliance Report
Overview

This project implements a light/dark theme toggle using CSS custom properties and JavaScript, with a strong focus on accessibility and user experience.

1. Color Contrast
All color pairs (background/text, header, buttons) meet or exceed WCAG 2.1 AA contrast requirements.
Dark mode uses #181818 background and #f3f4f6 text (contrast ratio > 12:1).
Light mode uses #ffffff background and #181818 text (contrast ratio > 12:1).
2. Keyboard Accessibility
The theme toggle button is reachable via keyboard (tabindex="0").
The button has a visible focus outline for clear navigation.
All interactive elements are accessible using standard keyboard navigation.
3. Screen Reader Support
The toggle button uses aria-label="Toggle dark mode" for descriptive labeling.
The button’s state is communicated with aria-pressed, reflecting the current theme.
The icon changes (🌙/☀️) provide an additional visual cue.
4. User Preference & System Preference
The theme respects the user’s system preference on first load via prefers-color-scheme.
User selection is persisted using localStorage and overrides system preference.
If the system preference changes and the user has not set a preference, the theme updates automatically.
5. Smooth Transitions
Theme changes are animated with CSS transitions for background and text color, reducing visual disruption.
6. Known Limitations & Recommendations
The toggle button could be enhanced with a visible text label for users who may not recognize the icon.
Regular accessibility audits with tools like axe or Lighthouse are recommended for ongoing compliance.
7. Testing
Manual keyboard navigation and screen reader testing performed (NVDA, VoiceOver).
Verified color contrast with WebAIM Contrast Checker.
Conclusion:
This theme toggle implementation meets modern accessibility standards and provides an inclusive experience for all users.
