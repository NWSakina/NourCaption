# NourCaption - Project Status

## 1. الهدف الرئيسي للمشروع

بناء أداة تعمل من المتصفح لتحويل الفيديو إلى فيديو مترجم تلقائياً.

المسار:

فيديو
↓
استخراج الصوت
↓
تحويل الصوت إلى نص
↓
إنشاء الترجمة
↓
إظهار الترجمة على الفيديو
↓
إخراج الفيديو النهائي


## 2. خارطة ملفات المشروع

NourCaption/

- index.html
- style.css
- script.js
- audio.js
- speech.js
- ffmpeg.js

- ffmpeg/
  - ملفات محرك FFmpeg

- ffmpeg-lib/

- backup/
  - NourCaption_Project_Status.md
  - النسخ السابقة

- README.md


## 3. الحالة الحالية

### يعمل ✅

- الواجهة
- اختيار الفيديو
- معاينة الفيديو
- إضافة النص


### متوقف ❌

- استخراج الصوت بسبب مشكلة FFmpeg Worker


## 4. سجل التقدم

### المرحلة 1
✅ إنشاء الواجهة

### المرحلة 2
✅ اختيار الفيديو

### المرحلة 3
✅ معاينة الفيديو

### المرحلة 4
⏳ استخراج الصوت من الفيديو

### المرحلة 5
⬜ تحويل الصوت إلى نص

### المرحلة 6
⬜ إنشاء الترجمة

### المرحلة 7
⬜ إخراج الفيديو النهائي


## 5. سجل القرارات

- لا نعيد بناء المشروع من الصفر.
- لا نغير الملفات التي تعمل.
- أي تعديل يكون باستبدال ملف كامل أو مجلد كامل.
- الهدف الحالي: حل استخراج الصوت فقط.
- 
- # المرحلة الحالية (Audio Engine)

## الهدف

استبدال طبقة FFmpeg الحالية بالكامل بطبقة مستقرة ومتوافقة مع GitHub Pages دون المساس بباقي المشروع.

## سبب القرار

بعد فحص ملفات الحزمة:

- worker.js ✔
- ffmpeg-core.js ✔
- ffmpeg-core.wasm ✔

تبين أن الملفات موجودة، لكن التطبيق ما زال يحاول تحميل Worker من:

https://unpkg.com/@ffmpeg/ffmpeg@0.12.10/dist/esm/worker.js

بدلاً من الملف المحلي داخل المشروع.

لذلك تقرر عدم الاستمرار في إصلاح هذه النسخة، بل استبدال طبقة FFmpeg بالكامل.

## الملفات التي لن يتم تغييرها

- index.html
- style.css
- script.js
- speech.js

## الملفات التي يمكن استبدالها

- ffmpeg.js
- audio.js
- مجلد ffmpeg/

## معيار نجاح المرحلة

عند الضغط على "معالجة الفيديو":

1. يبدأ تحميل محرك FFmpeg بنجاح.
2. يتم استخراج الصوت من الفيديو.
3. ينتج ملف WAV داخل التطبيق.
4. لا يظهر أي خطأ متعلق بـ Worker أو unpkg.
## Checkpoint 1 – FFmpeg Local Setup

**Date:** 2026-07-23

### Completed
- GitHub Pages configured and project published.
- Created `ffmpeg/` folder.
- Added:
  - `ffmpeg-core.js`
  - `ffmpeg-core.wasm`
  - `worker.js`
- Created `ffmpeg-lib/`.
- Copied all JavaScript files from:
  `node_modules/@ffmpeg/ffmpeg/dist/esm/`
- Updated `ffmpeg.js`:
  - Replaced CDN import:
    `https://unpkg.com/@ffmpeg/ffmpeg/...`
  - With local import:
    `./ffmpeg-lib/index.js`
- All changes committed and pushed to GitHub.

### Current Status
- Old setup phase is finished.
- Do **not** repeat creation of `ffmpeg/` or `ffmpeg-lib/`.
- Do **not** modify `ffmpeg.js` again unless a new issue is confirmed.

### Current Issue
The application no longer stops at the original Worker setup phase.

The remaining task is to inspect:

`ffmpeg-lib/index.js`

and verify whether it still contains references to `unpkg` or any external dependency that prevents `ffmpeg.load()` from completing successfully.

### Next Session
1. Open `NourCaption_Project_Status.md`.
2. Continue from this checkpoint.
3. Inspect `ffmpeg-lib/index.js`.
4. Only after fixing it, test the application again.
