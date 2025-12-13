# Firebase Studio Portfolio

This is a Next.js portfolio starter created in Firebase Studio.

## Getting a Sharable Link (Deployment)

To get a live, sharable link for your portfolio, you need to deploy it to a hosting service. This project is set up to be deployed with **Firebase App Hosting**.

Follow these steps in your computer's terminal to deploy your site:

### 1. Install the Firebase CLI

If you don't have it installed already, open your terminal and run this command:

```bash
npm install -g firebase-tools
```

### 2. Log into Firebase

Next, log in to your Firebase account. This will open a browser window for you to sign in.

```bash
firebase login
```

### 3. Deploy to Firebase App Hosting

Navigate to your project's root directory in your terminal. Then, run the following command. You will be prompted to select a Firebase project and a region.

```bash
firebase apphosting:backends:deploy
```

Once the deployment is complete, the terminal will give you a public URL. That's the link you can share with your staff and anyone else!

---

To get started with local development, take a look at `src/app/page.tsx`.
