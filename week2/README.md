# Week 2: CSS

## 1. Introduction to CSS
- **Definition of CSS:** Cascading Style Sheets (CSS) is a stylesheet language used to control the presentation, layout, and visual appearance of HTML documents.
- **Purpose of CSS:**
  - Separates content from design.
  - Improves website maintainability.
  - Provides responsive and consistent styling.
  - Enhances user experience through animations and effects.
- **Types of CSS:**
  - **Inline CSS:** Applied directly within an HTML element using the `style` attribute.
  - **Internal CSS:** Written inside the `<style>` tag within the `<head>` section.
  - **External CSS:** Stored in a separate `.css` file and linked using the `<link>` tag.

---

## 2. CSS Syntax & Selectors
- **CSS Syntax**
  ```css
  selector {
      property: value;
  }
  ```
- **Basic Selectors**
  - Universal Selector (`*`)
  - Element Selector (`p`, `h1`, `table`)
  - Class Selector (`.container`)
  - ID Selector (`#header`)
  - Group Selector (`h1, h2, h3`)
- **Combinators**
  - Descendant Selector (`div p`)
  - Child Selector (`div > p`)
  - Adjacent Sibling (`h1 + p`)
  - General Sibling (`h1 ~ p`)

---

## 3. Colors, Backgrounds & Typography
- **Colors**
  - Named Colors
  - RGB
  - RGBA
  - HEX
  - HSL
- **Background Properties**
  - `background-color`
  - `background-image`
  - `background-repeat`
  - `background-size`
  - `background-position`
  - `background-attachment`
- **Typography**
  - `font-family`
  - `font-size`
  - `font-weight`
  - `font-style`
  - `text-align`
  - `text-transform`
  - `letter-spacing`
  - `line-height`
  - `text-shadow`

---

## 4. CSS Box Model
- **Content**
- **Padding**
- **Border**
- **Margin**
- **Width & Height**
- **Border Radius**
- **Box Shadow**
- **Outline**
- **Box Sizing**
  - `content-box`
  - `border-box`

---

## 5. CSS Layout Techniques
- **Display Property**
  - Block
  - Inline
  - Inline-block
  - None
- **Position Property**
  - Static
  - Relative
  - Absolute
  - Fixed
  - Sticky
- **Float & Clear**
- **Overflow**
  - Visible
  - Hidden
  - Scroll
  - Auto
- **Z-index**

---

## 6. Flexbox Layout
- **Display Flex**
- **Main Axis & Cross Axis**
- **Properties**
  - `justify-content`
  - `align-items`
  - `align-content`
  - `flex-direction`
  - `flex-wrap`
  - `gap`
  - `order`
  - `flex-grow`
  - `flex-shrink`

---

## 7. CSS Grid Layout
- **Display Grid**
- **Grid Container**
- **Grid Items**
- **Grid Columns**
- **Grid Rows**
- **Grid Gap**
- **Grid Template Areas**
- **Responsive Grid Layout**

---

## 8. Forms & User Interface Styling
- Styling Text Fields
- Password Fields
- Text Areas
- Select Menus
- Checkboxes
- Radio Buttons
- File Upload Controls
- Submit & Reset Buttons
- Placeholder Styling
- Focus Effects

---

## 9. CSS Pseudo Classes & Pseudo Elements
### Pseudo Classes
- `:hover`
- `:focus`
- `:active`
- `:visited`
- `:checked`
- `:first-child`
- `:last-child`
- `:nth-child()`

### Pseudo Elements
- `::before`
- `::after`
- `::first-letter`
- `::first-line`
- `::selection`

---

## 10. CSS Animations & Transitions
- **Transitions**
  - `transition`
  - `transition-duration`
  - `transition-delay`
  - `transition-timing-function`
- **Transforms**
  - `translate()`
  - `rotate()`
  - `scale()`
  - `skew()`
- **Animations**
  - `@keyframes`
  - `animation-name`
  - `animation-duration`
  - `animation-delay`
  - `animation-iteration-count`
  - `animation-direction`
  - `animation-fill-mode`

---

## 11. Responsive Web Design
- Viewport Meta Tag
- Media Queries
- Responsive Images
- Flexible Layouts
- Percentage Widths
- Viewport Units (`vw`, `vh`)
- Mobile-First Design

---

## 12. Modern CSS Features
- CSS Variables (`--primary-color`)
- Linear Gradients
- Radial Gradients
- Multiple Backgrounds
- Opacity
- Filter Effects
- Backdrop Filter
- Glassmorphism
- Neumorphism

---

## 13. Best Practices
- Use External CSS Files.
- Keep CSS Modular and Organized.
- Use Meaningful Class Names.
- Minimize Code Duplication.
- Write Responsive Designs.
- Optimize Images and Fonts.
- Comment Large Sections of Code.
- Follow Consistent Naming Conventions.
- Validate CSS Before Deployment.

---

## 14. Mini Project
### South Central Railway – Intern Registration Portal

### Technologies Used
- HTML5
- CSS3

### Features Implemented
- Professional Registration Form
- Responsive Layout
- Fieldset Design
- Input Focus Effects
- Button Hover Animations
- Gradient Background
- Smooth Page Animation
- Box Shadows
- Rounded Corners
- External CSS Styling
- Clean User Interface
- Mobile-Friendly Design

---

## Learning Outcomes
After completing Week 2, learners will be able to:

- Understand the fundamentals of CSS.
- Apply styling using Inline, Internal, and External CSS.
- Build responsive web pages.
- Design modern user interfaces.
- Create animations and hover effects.
- Use Flexbox and Grid layouts.
- Style HTML forms professionally.
- Develop visually appealing websites following industry best practices.
