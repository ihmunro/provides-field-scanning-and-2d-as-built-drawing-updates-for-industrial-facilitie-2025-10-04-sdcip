# AsBuilt Landing Page Maintenance Guide

This guide provides detailed instructions for maintaining and customizing the AsBuilt landing page. Whether you're new to web development or need a quick reference, follow these steps to make common updates safely and effectively.

## Table of Contents
- [Updating Text and Styling](#updating-text-and-styling)
- [Managing Navigation Links](#managing-navigation-links)
- [Adding Privacy and Terms Pages](#adding-privacy-and-terms-pages)
- [Troubleshooting](#troubleshooting)

## Updating Text and Styling

### Main Sections Overview
The landing page is divided into these key sections:
```html
<!-- Main sections in order -->
<header> <!-- Navigation bar -->
<section class="pt-32..."> <!-- Hero section -->
<section id="features"> <!-- Features section -->
<section id="benefits"> <!-- Benefits section -->
<section id="faq"> <!-- FAQ section -->
<section id="contact"> <!-- Contact section -->
<footer> <!-- Footer section -->
```

### Updating Text Content

1. **Company Name**
```html
<!-- Located in header and footer -->
<a href="#" class="text-xl font-semibold text-blue-600">AsBuilt</a>
```
To change the company name, update the text between the `<a>` tags.

2. **Hero Section**
```html
<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
    Field Scanning & 2D As-Built Drawing Updates for Industrial Facilities
</h1>
```
To modify the main headline, edit the text within the `<h1>` tags.

3. **Feature Cards**
```html
<div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
    <h3 class="text-xl font-semibold mb-4">Fast Field Scans</h3>
    <p class="text-gray-600 leading-relaxed">Quick and efficient scanning process...</p>
</div>
```
To update feature cards, locate the corresponding `<div>` in the features section and modify the `<h3>` title and `<p>` description text.

### Modifying Tailwind CSS Classes

1. **Understanding Responsive Classes**
```html
text-4xl md:text-5xl lg:text-6xl
```
- `text-4xl`: Base size for mobile
- `md:text-5xl`: Size for medium screens (768px+)
- `lg:text-6xl`: Size for large screens (1024px+)

2. **Common Class Patterns**
- Spacing: `p-8` (padding), `mb-4` (margin-bottom)
- Colors: `text-blue-600`, `bg-white`
- Hover effects: `hover:bg-blue-700`
- Transitions: `transition-all duration-300`

## Managing Navigation Links

### Internal Navigation Links
```html
<div class="hidden md:flex space-x-8">
    <a href="#features" class="text-gray-600 hover:text-blue-600 transition-colors duration-300">Features</a>
    <a href="#benefits" class="text-gray-600 hover:text-blue-600 transition-colors duration-300">Benefits</a>
    <a href="#faq" class="text-gray-600 hover:text-blue-600 transition-colors duration-300">FAQ</a>
    <a href="#contact" class="text-gray-600 hover:text-blue-600 transition-colors duration-300">Contact</a>
</div>
```
To update internal links:
1. Locate the link in the navigation menu
2. Update the `href` attribute to match the section ID
3. Ensure the section ID exists in the corresponding section tag

### Email Links
```html
<a href="mailto:iainhmunro@gmail.com" class="text-gray-400 hover:text-white transition-colors duration-300">
    iainhmunro@gmail.com
</a>
```
To update email addresses:
1. Replace `iainhmunro@gmail.com` in both the `href` and display text
2. Update all instances in both contact section and footer

## Adding Privacy and Terms Pages

### Current Footer Links
```html
<div>
    <h3 class="text-xl font-semibold mb-4">Legal</h3>
    <ul class="space-y-2">
        <li><a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a></li>
        <li><a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a></li>
    </ul>
</div>
```

### Steps to Add Policy Pages

1. Create new HTML files:
   - Create `privacy.html`
   - Create `terms.html`

2. Update footer links:
```html
<li><a href="privacy.html" class="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a></li>
<li><a href="terms.html" class="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a></li>
```

3. Ensure consistent styling by copying the header and footer from `index.html` to your new pages.

## Troubleshooting

### Common Issues

1. **Broken Internal Links**
- Check that section IDs match exactly with href attributes
- Verify no spaces in IDs
- Example: `href="#contact"` must match `id="contact"`

2. **Responsive Design Issues**
- Check responsive classes are properly ordered (base, md:, lg:)
- Test on different screen sizes
- Use browser dev tools to verify breakpoints

3. **Style Inconsistencies**
- Maintain consistent color classes (e.g., `text-blue-600`)
- Keep consistent spacing patterns
- Copy existing classes for new elements

### Need Help?

If you encounter issues:
1. Check the Tailwind CSS documentation
2. Verify HTML syntax
3. Test links in multiple browsers
4. Ensure all files are in the correct directory
5. Validate your HTML using W3C Validator

Remember to always backup your files before making changes, and test thoroughly after each update.