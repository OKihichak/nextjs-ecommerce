# 🛍️ NextCommerce E-commerce Platform
![Product Page Screenshot](https://github.com/user-attachments/assets/example-product-page.png)
![Comments Section Screenshot](https://github.com/user-attachments/assets/example-comments-section.png)

📝 **Contents**
- [Introduction](#-introduction)
- [Technology Stack](#-technology-stack)
- [App Features](#-app-features)
- [Directory Structure](#-directory-structure)
- [How to Run](#-how-to-run)
- [Upcoming Features](#-upcoming-features)
- [Contribution Guidelines](#-contribution-guidelines)
- [Get in Touch](#-get-in-touch)

## 🗺️ Introduction
**NextCommerce** is a modern e-commerce platform designed for an intuitive user experience and seamless shopping. The app showcases products dynamically from Sanity CMS and includes features like a cart and a simple comment system to allow user feedback.

## 💻 Technology Stack
- **Next.js 14**: Latest features for server-side rendering and static generation.
- **Sanity**: CMS for managing product and comment data.
- **TypeScript**: For type safety and improved developer experience.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React**: Library for building the user interface.
- **Lucide-React**: Icons for better UI interaction.
- **use-shopping-cart**: Simplified cart functionality.

## 👀 App Features
- **Dynamic Product Display**: Products fetched from Sanity, categorized for easy browsing.
- **Search Functionality**: Search bar for finding specific products.
- **Product Details Page**: Includes product images, descriptions, and pricing.
- **Comment System**: Users can submit comments for products.
- **Shopping Cart**: Add-to-cart functionality with checkout options.
- **Responsive Design**: Mobile and desktop friendly.

## 🗂️ Directory Structure
- **`/app`**: Main directory for routing and components.
  - **`components/`**: Reusable components (e.g., `AddComment`, `ImageGallery`, `AllComments`).
  - **`lib/`**: Contains Sanity client setup and configurations.
  - **`/api`**: API routes for handling backend operations like comment submissions.
- **`/public`**: Static assets such as images.
- **`interface.ts`**: TypeScript interfaces for data consistency.
- **`tailwind.config.js`**: Tailwind CSS configuration.

## 🚀 How to Run
1. **Clone the repository:**
    ```bash
    git clone https://github.com/OKihichak/nextjs-ecommerce.git
    cd nextjs-ecommerce
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Run the development server:**
    ```bash
    npm run dev
    ```

4. **Set up Sanity CMS**:
   - Connect to your Sanity project and make sure your environment variables for `SANITY_PROJECT_ID` and `SANITY_DATASET` are properly set.

## 🚀 Upcoming Features
- **User Authentication**: Enabling user login and personalized experiences.
- **Payment Integration**: Secure payment options through Stripe or PayPal.
- **Enhanced Comments**: Features like likes and replies for user comments.
- **Wishlist Functionality**: Allow users to save items for later.

## 🤝 Contribution Guidelines
Interested in contributing? Here's how:

1. **Fork the repo** and clone your fork locally.
2. **Create a new branch**:
    ```bash
    git checkout -b feature/YourFeatureName
    ```
3. **Commit your changes**:
    ```bash
    git commit -m 'Add YourFeatureName'
    ```
4. **Push your branch**:
    ```bash
    git push origin feature/YourFeatureName
    ```
5. **Create a pull request** for review.

## 📧 Get in Touch
- **Email**: oleg15062005@gmail.com
- **GitHub**: [Oleh Kihichak](https://github.com/OKihichak)
