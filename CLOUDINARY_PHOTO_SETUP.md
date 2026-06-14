# Add Your Photo to About Section

## 🎯 Quick Setup (2 minutes)

### 1. Upload to Cloudinary

```
1. Go to: https://cloudinary.com/console/dashboard
2. Click "Upload" button
3. Select your professional photo/headshot
4. Wait for upload to complete
5. Click on the uploaded image
6. Copy the image URL (looks like below)
```

**Example Cloudinary URL format:**
```
https://res.cloudinary.com/dn37tck9g/image/upload/v1234567890/photo_name.jpg
```

### 2. Add URL to Your Portfolio

Open this file in your editor:
```
data/portfolio.ts
```

Find this line (around line 490):
```typescript
photoUrl: "REPLACE_WITH_CLOUDINARY_URL",
```

Replace with your actual URL:
```typescript
photoUrl: "https://res.cloudinary.com/dn37tck9g/image/upload/v1234567890/your_photo.jpg",
```

### 3. Save & View

Your photo will now appear in the About section automatically! ✨

---

## 📸 Photo Recommendations

| Aspect | Recommendation |
|--------|-----------------|
| **Dimensions** | Square (400x400px minimum) |
| **Format** | JPG or PNG |
| **Type** | Professional headshot/casual professional |
| **Background** | Clean, neutral, or light |
| **Quality** | High resolution (not compressed) |

---

## 🔗 Finding Your Cloudinary URL

After uploading an image in Cloudinary Dashboard:

1. Click the uploaded image thumbnail
2. Look for the "URL" field in the right panel
3. Copy the full URL (it will look like):
   ```
   https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/v[VERSION]/[FILENAME].[FORMAT]
   ```

### Example Structure:
```
https://res.cloudinary.com/dn37tck9g/image/upload/v1640000000/siddharth_profile.jpg
              ↑                                        ↑                    ↑
         Your Cloud Name                       Version                 File Name
```

---

## ✅ Verification Checklist

- [ ] Image uploaded to Cloudinary
- [ ] URL copied correctly
- [ ] URL pasted in `data/portfolio.ts` (line ~490)
- [ ] No `REPLACE_WITH_CLOUDINARY_URL` text remains
- [ ] File saved
- [ ] Browser refreshed
- [ ] Photo appears in About section on desktop
- [ ] Photo appears in About section on mobile

---

## 🎨 How Your Photo Will Display

### Desktop View
```
┌─────────────────────────────────┐
│  About Section                  │
│  ┌──────────────────────────┐  │
│  │ Headline & Description   │  │ ┌──────────┐
│  │ Lorem ipsum dolor sit... │  │ │          │
│  │                          │  │ │          │
│  │ [Content area]           │  │ │  YOUR    │
│  └──────────────────────────┘  │ │  PHOTO   │
│                                  │ │          │
│                                  │ │          │
│                                  │ └──────────┘
└─────────────────────────────────┘
```

### Mobile View
```
┌──────────────────────┐
│  About Section       │
│  ┌────────────────┐  │
│  │  YOUR PHOTO    │  │
│  └────────────────┘  │
│  Headline & Desc...  │
│  Content area...     │
│  More content...     │
└──────────────────────┘
```

---

## 🚀 Advanced: Cloudinary Transformations (Optional)

You can add transformations to your URL for automatic optimization:

### Add rounded corners:
```typescript
https://res.cloudinary.com/dn37tck9g/image/upload/r_50/v1234567890/photo.jpg
```

### Auto-compress and optimize:
```typescript
https://res.cloudinary.com/dn37tck9g/image/upload/q_auto,f_auto/v1234567890/photo.jpg
```

### Combine (rounded + optimized):
```typescript
https://res.cloudinary.com/dn37tck9g/image/upload/r_50,q_auto,f_auto/v1234567890/photo.jpg
```

---

## 🐛 Troubleshooting

### Photo not showing?
- ✓ Check URL is complete (starts with `https://res.cloudinary.com/`)
- ✓ Verify no extra spaces in URL
- ✓ Save file and hard-refresh browser (Ctrl+F5 / Cmd+Shift+R)

### URL shows but image doesn't load?
- ✓ Test URL directly in browser address bar
- ✓ Ensure image still exists in Cloudinary dashboard
- ✓ Check internet connection

### Photo looks stretched/squished?
- ✓ Upload a square image (e.g., 500x500px)
- ✓ Use Cloudinary's crop/resize tools before copying URL

---

## 📚 More Resources

- [Cloudinary Documentation](https://cloudinary.com/documentation)
- [Image Upload Guide](https://cloudinary.com/documentation/upload_images)
- [URL Transformations](https://cloudinary.com/documentation/image_transformation_reference)

---

**Done!** Your About section is now complete with your professional photo. 🎉
