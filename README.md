# Eco-Friendly Shopping Guide

## Idea Brief
Eco-Friendly Shopping Guide is a web or mobile app that helps users discover eco-friendly products, sustainable brands, and nearby stores that support green initiatives. It promotes sustainable shopping habits by recommending ethical, biodegradable, recycled, and energy-efficient products.

## Key Features & Development Approach

### 1️⃣ Product Scanner & Sustainability Ratings
**Implementation:**
- Use a Barcode Scanner API for scanning product barcodes.
- Fetch sustainability ratings from third-party sources like Good On You, Ecolabel Index, or Open Food Facts.
- Display ratings using a 1-5 Green Leaves 🌿 scale.

**Tech Stack:**
- Frontend: React.js / React Native
- Backend: Node.js + Express.js
- Database: MongoDB / Firebase

### 2️⃣ Eco-Friendly Product Recommendations
**Implementation:**
- Store product data with sustainability scores.
- Use OpenAI API for AI-driven eco-friendly product recommendations.
- Display impact scores, reviews, and certifications (Fair Trade, FSC, etc.).

### 3️⃣ Local Sustainable Store Locator
**Implementation:**
- Integrate Google Maps API to show nearby green stores.
- Users can filter stores by categories like organic grocery, zero-waste shops, sustainable fashion, etc.

### 4️⃣ Personalized Shopping Lists & Eco-Savings Tracker
**Implementation:**
- Users can save eco-friendly products to lists and track their carbon footprint reduction.
- AI-powered suggestions based on past purchases.

### 5️⃣ Community Reviews & Green Tips
**Implementation:**
- Users can leave reviews on sustainable products & brands.
- Add a daily green tip feature for eco-friendly shopping challenges.

### 6️⃣ Integration with E-commerce Platforms
**Implementation:**
- Fetch products from Amazon, eBay Green, or sustainable marketplaces.
- Add Buy Now buttons linking to verified sellers.
- (Optional) Implement Stripe Payments for an in-app eco-friendly store.

## Daily Plan & Timelines
✅ **Week 1: Research & Wireframing**
- Research sustainable product databases & APIs.
- Design UI wireframes for product scanning, recommendations, and store locator.

✅ **Week 2: Backend Setup & API Integration**
- Set up Express.js server & MongoDB Atlas.
- Implement Google Maps API & Barcode Scanner API.

✅ **Week 3: Frontend Development (Product Scanner & Ratings)**
- Build the barcode scanner feature.
- Implement sustainability rating UI.

✅ **Week 4: Product Recommendations & Store Locator**
- Add AI-based eco-friendly product suggestions.
- Display nearby sustainable stores using Google Maps API.

✅ **Week 5: Shopping Lists & Community Features**
- Implement shopping lists & eco-savings tracker.
- Add community reviews & daily green tips.

✅ **Week 6: E-commerce Integration & Testing**
- Fetch products from e-commerce APIs.
- Implement checkout/payment (if applicable).
- Conduct frontend and backend testing.

✅ **Week 7: Deployment & Final Touches**
- Deploy the app using Cloudflare Pages / Vercel (Frontend) and Render / Heroku (Backend).
- Write project documentation & prepare for showcase.

## Tech Stack Summary
🔹 **Frontend:** React.js (Web) / React Native (Mobile), Tailwind CSS / Material UI
🔹 **Backend:** Node.js + Express.js
🔹 **Database:** MongoDB Atlas / Firebase

### APIs:
- **Google Maps API** (store locator)
- **Barcode Scanner API** (product scanning)
- **OpenAI API** (product recommendations)
- **Stripe API** (payments, if needed)

## Potential Challenges & Solutions
🚧 **Challenge:** Getting sustainability data for products.
✅ **Solution:** Use existing databases like Good On You, Ecolabel Index, Open Food Facts, and web scraping if necessary.

🚧 **Challenge:** Encouraging user engagement.
✅ **Solution:** Implement gamification (eco-points, badges, and rewards) to incentivize sustainable shopping.

## Deploying backend server
https://s69-diya-capstone-sustainable-umwh.onrender.com
