# Phase 10: Testing & Deployment

## Testing Strategy

### Unit Tests
- Components rendered without errors
- Utility/helper function logic
- Validation schemas

### Integration Tests
- Page rendering with mock data
- API route responses
- Form submissions

### E2E Tests (Future)
- WhatsApp booking flow
- Admin CRUD operations
- User navigation

## Deployment

### Vercel (Recommended)
1. Connect GitHub repository
2. Set environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `NEXT_PUBLIC_SITE_URL`
3. Deploy: `vercel --prod`

### Build Command
```
npm run build
```

### Post-Deployment Checklist
- [ ] All pages load without errors
- [ ] WhatsApp buttons open correct URLs
- [ ] Admin login works
- [ ] SEO metadata renders correctly
- [ ] Sitemap and robots.txt accessible
- [ ] Analytics configured
- [ ] Performance tested (Lighthouse)
