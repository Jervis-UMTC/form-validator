# Form Validator

A responsive registration form with real-time validation and custom error handling built with vanilla HTML, CSS, and JavaScript.

## Features

### 🎨 **User Interface**
- Clean, modern design with rounded corners and subtle shadows
- Responsive layout that works on desktop and mobile devices
- Smooth transitions and hover effects
- Color-coded validation feedback (red for errors, green for success)

### ✅ **Validation Rules**

#### Username
- **Required**: Cannot be empty
- **Length**: 3-16 characters
- **Format**: Must contain both letters and numbers
- **Restrictions**: No spaces or special characters (underscore allowed)

#### Email
- **Required**: Cannot be empty
- **Format**: Valid email address pattern (user@domain.com)

#### Password
- **Required**: Cannot be empty
- **Length**: Minimum 8 characters
- **Complexity**: Must contain:
  - At least one uppercase letter (A-Z)
  - At least one lowercase letter (a-z)
  - At least one number (0-9)
  - At least one special character (@$!%*?&)
- **Restrictions**: No spaces allowed

#### Confirm Password
- **Matching**: Must match the password field exactly
- **Note**: Only validated when password field is valid

### 🚀 **Technical Features**
- **No Framework Dependencies**: Pure vanilla JavaScript
- **Client-Side Validation**: Instant feedback without server requests
- **Accessibility**: Proper form labels and error associations
- **Browser Validation Disabled**: Uses `novalidate` attribute for custom handling
- **Dynamic Error Messages**: Context-aware error text with proper spacing

## File Structure

```
form-validator/
├── index.html          # Main HTML structure
├── styles.css          # Styling and responsive design
├── script.js           # Validation logic and DOM manipulation
└── README.md          # This documentation
```

## Setup Instructions

1. **Clone or Download** the project files
2. **Open** `index.html` in any modern web browser
3. **No server required** - runs entirely in the browser

## Usage

1. Fill out the registration form fields
2. **Real-time feedback**: Errors appear as you type and submit
3. **Visual indicators**: 
   - Red border and error message for invalid fields
   - Green border for valid fields
4. **Success**: Alert message appears when all validations pass

## Code Structure

### Main Components

#### `script.js`
- **Event Handling**: Form submission and validation triggers
- **Validation Functions**: Separate functions for each field type
- **Error Display**: Dynamic error message system
- **Success Feedback**: Visual confirmation for valid inputs

#### Key Functions
```javascript
checkRequired()     // Validates required fields
checkUsername()     // Username-specific validation
checkEmail()        // Email format validation
checkPassword()     // Password complexity validation
showError()         // Displays error messages
showSuccess()       // Shows success state
```

#### `styles.css`
- **Responsive Grid**: Flexbox-based layout
- **Form Styling**: Custom input and button designs
- **Error States**: Red borders and text for validation errors
- **Success States**: Green borders for valid inputs
- **Mobile Optimization**: Media queries for smaller screens

## Customization

### Validation Rules
Modify the regex patterns in `script.js`:

```javascript
// Username pattern (letters, numbers, underscore only)
const hasSpecialChar = !/^[a-zA-Z0-9_]+$/.test(value);

// Email pattern
const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Password pattern (8+ chars, upper, lower, number, special)
const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]){8,}$/;
```

### Styling
Update colors and spacing in `styles.css`:

```css
/* Error styling */
.form-group.error small { color: #ef4444; }
.form-group.error input { border-color: #ef4444; }

/* Success styling */
.form-group.success input { border-color: #22c55e; }

/* Primary button color */
#registration-form button { background-color: dodgerblue; }
```

### Error Messages
Customize error text in the validation functions:

```javascript
showError(input, `Username must be 3-16 characters`);
showError(input, `Email format is invalid`);
showError(input, `Password too weak`);
```

## Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **JavaScript Features**: ES6+ features used
- **CSS Features**: Flexbox, CSS transitions, media queries

## Future Enhancements

### Potential Features
- [ ] Server-side validation integration
- [ ] Password strength indicator
- [ ] Real-time availability checking for usernames
- [ ] Email verification workflow
- [ ] Remember me functionality
- [ ] Social login options
- [ ] Form data persistence (localStorage)
- [ ] Accessibility improvements (ARIA labels)
- [ ] Unit tests for validation functions

### Performance Optimizations
- [ ] Debounced validation for better performance
- [ ] Lazy loading for large forms
- [ ] Input sanitization
- [ ] CSP (Content Security Policy) headers

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

**Made with ❤️ using vanilla JavaScript**
