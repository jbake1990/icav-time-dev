# Neon PostgreSQL Setup for ICAV Time Tracker

## Step 1: Add Neon Database to Vercel Project

1. Go to your Vercel dashboard: https://vercel.com/dashboard
2. Select your `icav-time-dev` project
3. Go to the **Storage** tab
4. Click **"Create Database"**
5. Select **"Neon"** from the options
6. Choose your preferred region
7. Click **"Create"**

Vercel will automatically:
- Create the Neon database
- Add all required environment variables to your project
- Configure the connection

## Step 2: Deploy Your Project

1. Push your code to GitHub (if not already done)
2. Vercel will automatically deploy with the new database

## Step 3: Initialize Database Schema

After deployment, call the database initialization endpoint:

```bash
curl -X POST https://your-vercel-project.vercel.app/api/init-db
```

Or visit in your browser:
```
https://your-vercel-project.vercel.app/api/init-db
```

## Step 4: Verify Setup

The initialization will create:
- Database tables (users, time_entries, user_sessions)
- Default users with these credentials:

| Username | Password | Role |
|----------|----------|------|
| admin | admin123 | Administrator |
| john.doe | tech123 | Technician |
| jane.smith | tech123 | Technician |
| mike.johnson | tech123 | Technician |
| sarah.wilson | tech123 | Technician |
| david.brown | tech123 | Technician |

## Step 5: Test Your API

Test the health endpoint:
```
https://your-vercel-project.vercel.app/api/health
```

## Environment Variables

Vercel automatically sets these variables:
- `POSTGRES_URL`
- `POSTGRES_HOST`
- `POSTGRES_DATABASE`
- `POSTGRES_USERNAME`
- `POSTGRES_PASSWORD`

## Security Notes

⚠️ **Important**: Change default passwords in production!

The default users are for testing only. In production:
1. Change all default passwords
2. Remove test users
3. Add your actual team members

## Troubleshooting

If the database initialization fails:
1. Check Vercel function logs
2. Verify environment variables are set
3. Ensure Neon database is accessible
4. Check the API endpoint response for error details 