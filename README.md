# Nightshift

An original, responsive Roblox community landing page inspired by the reference's minimal full-screen layout. The background illustration is made from CSS shapes and texture; it does not use the reference site's media or code.

## Customize

- In `app/page.tsx`, replace `discordUrl` with your Discord invite.
- Replace `profileUrl` with your Roblox group or profile URL. The card copies this address.
- Update the `nightshift` wordmark and page copy to your own name and community details.

## Run locally

Install Node.js, then run `npm install` and `npm run dev` in this folder. Open the local address printed by Next.js.

## Deploy on Vercel

1. Put this folder in a GitHub repository.
2. In Vercel, choose **Add New → Project**, import that repository, and keep the detected Next.js settings.
3. Select **Deploy**. Vercel will publish the site and provide a URL.

You can also install the Vercel CLI and run `vercel` from this folder, then use `vercel --prod` when you are ready for production.
