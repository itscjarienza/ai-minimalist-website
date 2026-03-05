# Project Notes

## Deploying Changes

To push updates to the live site (hosted via GitHub + Vercel):

```
git add .
git commit -m "short description of what changed"
git push
```

Vercel auto-deploys on every push to the main branch. Changes typically go live within ~30 seconds.

**First push on a new machine** (if Git asks you to set an upstream):
```
git push -u origin main
```
After that, plain `git push` works every time.

**Tip:** Don't commit `.env` files or anything with API keys/secrets.
