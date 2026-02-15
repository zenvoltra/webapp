# Firebase Setup Guide

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or select an existing project
3. Follow the setup wizard

## Step 2: Enable Firestore Database

1. In your Firebase project, go to **Firestore Database**
2. Click **Create database**
3. Choose **Start in test mode** (for now)
4. Select a location (choose closest to your users)
5. Click **Enable**

## Step 3: Get Your Firebase Config

1. Go to **Project Settings** (gear icon)
2. Scroll down to **Your apps** section
3. Click the **Web** icon (`</>`)
4. Register your app (give it a name like "TechMind Landing")
5. Copy the Firebase configuration values

## Step 4: Create Environment File

1. Create a file named `.env.local` in the root directory
2. Add your Firebase config:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

3. Replace the placeholder values with your actual Firebase config values

## Step 5: Set Up Firestore Security Rules

1. Go to **Firestore Database** > **Rules**
2. Update the rules to allow writes (for contact form):

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contacts/{document=**} {
      allow create: if request.auth == null; // Allow anonymous writes
      allow read: if request.auth != null; // Only authenticated users can read
    }
  }
}
```

**Note:** For production, you should add authentication or use Firebase Functions to handle form submissions securely.

## Step 6: Restart Your Dev Server

After creating `.env.local`, restart your Next.js dev server:

```bash
npm run dev
```

## Testing

1. Fill out the contact form on your landing page
2. Submit the form
3. Check Firestore Database in Firebase Console
4. You should see a new document in the `contacts` collection

## Collection Structure

Each contact submission will be stored with:
- `name` - User's name
- `email` - User's email
- `project` - Project type
- `timeline` - Project timeline
- `budget` - Budget range
- `message` - Project details
- `createdAt` - Timestamp (automatically added)
- `status` - Status (defaults to "new")

## Security Note

The current setup allows anonymous writes. For production, consider:
- Adding authentication
- Using Firebase Functions to handle submissions
- Adding rate limiting
- Adding spam protection
