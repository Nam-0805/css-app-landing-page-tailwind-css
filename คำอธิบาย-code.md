# คำอธิบาย Code ใน index.html (ทีละบรรทัด)

เลขบรรทัดอ้างอิงจากไฟล์ [index.html](index.html)

## ส่วนหัวของไฟล์ (บรรทัด 1-15)

| บรรทัด | Code | คำอธิบาย |
|---|---|---|
| 1 | `<!DOCTYPE html>` | บอกเบราว์เซอร์ว่านี่คือเอกสาร HTML5 |
| 2 | `<html lang="en">` | เริ่มเอกสาร HTML และระบุว่าภาษาหลักของหน้าคือภาษาอังกฤษ |
| 3 | `<head>` | เริ่มส่วนข้อมูลของหน้า (ไม่แสดงบนจอ) เช่น ชื่อ ฟอนต์ สคริปต์ |
| 4 | `<meta charset="UTF-8" />` | กำหนดการเข้ารหัสตัวอักษรเป็น UTF-8 เพื่อแสดงอีโมจิและภาษาอื่นได้ถูกต้อง |
| 5 | `<meta http-equiv="X-UA-Compatible" ... />` | บอก Internet Explorer รุ่นเก่าให้ใช้โหมดล่าสุด (ปัจจุบันแทบไม่จำเป็น) |
| 6 | `<meta name="viewport" ... />` | ทำให้หน้าแสดงผลพอดีกับความกว้างจอมือถือ ถ้าไม่มีบรรทัดนี้ Responsive จะไม่ทำงาน |
| 7 | `<title>Acme App</title>` | ชื่อที่แสดงบนแท็บของเบราว์เซอร์ |
| 8 | `<script src="https://cdn.tailwindcss.com"></script>` | โหลด Tailwind CSS จาก CDN ทำให้ใช้คลาสอย่าง `flex`, `bg-white` ได้ทันทีโดยไม่ต้องติดตั้ง |
| 9 | `<link rel="preconnect" href="https://fonts.googleapis.com" />` | เชื่อมต่อกับเซิร์ฟเวอร์ Google Fonts ล่วงหน้าเพื่อให้โหลดฟอนต์เร็วขึ้น |
| 10 | `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />` | เชื่อมต่อล่วงหน้ากับเซิร์ฟเวอร์ที่เก็บไฟล์ฟอนต์จริง (`crossorigin` จำเป็นสำหรับฟอนต์) |
| 11-14 | `<link href="...Inter..." rel="stylesheet" />` | โหลดฟอนต์ Inter น้ำหนัก 400-800 `display=swap` คือให้แสดงฟอนต์สำรองก่อนระหว่างรอโหลด |
| 15 | `</head>` | ปิดส่วน head |

## Body และ Header (บรรทัด 17-54)

| บรรทัด | Code | คำอธิบาย |
|---|---|---|
| 17 | `<body class="...">` | เริ่มส่วนที่แสดงบนจอ คลาสที่ใช้: `min-h-screen` สูงอย่างน้อยเต็มจอ, `bg-[#f7f6fb]` พื้นหลังสีเทาอมม่วง, `font-['Inter']` ใช้ฟอนต์ Inter, `text-[#16142a]` สีตัวอักษรเกือบดำ, `antialiased` ทำให้ตัวอักษรเรียบเนียน |
| 18 | `<!-- Header -->` | คอมเมนต์ บอกว่าเป็นส่วนหัว (ไม่แสดงบนจอ) |
| 19 | `<header class="px-3 pt-2 md:px-2">` | ส่วนหัวของเว็บ เว้นขอบซ้ายขวา `px-3` และขอบบน `pt-2` บนจอ `md` ขึ้นไปเว้นซ้ายขวา `px-2` |
| 20 | `<nav class="relative rounded-full bg-white px-6 py-4 shadow-sm md:px-10">` | แถบเมนู: `relative` เป็นจุดอ้างอิงให้ดรอปดาวน์, `rounded-full` โค้งมนสุด, `bg-white` พื้นขาว, `px-6 py-4` เว้นขอบใน, `shadow-sm` เงาบางๆ, `md:px-10` เว้นซ้ายขวามากขึ้นบนจอใหญ่ |
| 21 | `<input id="menu-toggle" type="checkbox" class="peer sr-only" ... />` | checkbox ที่ซ่อนไว้ ใช้เป็น "สวิตช์" เปิด/ปิดเมนูมือถือโดยไม่ใช้ JavaScript `peer` ทำให้ element ถัดไปอ่านสถานะของมันได้ `sr-only` ซ่อนจากสายตาแต่ screen reader ยังอ่านได้ |
| 22 | `<div class="flex items-center justify-between">` | กล่องที่จัดโลโก้/เมนู/ปุ่ม ให้อยู่แถวเดียวกัน (`flex`) จัดกึ่งกลางแนวตั้ง (`items-center`) และดันไปชิดซ้ายขวา (`justify-between`) |
| 23 | `<a href="#home" class="text-xl font-bold tracking-tight">` | ลิงก์โลโก้ ขนาดตัวอักษร `text-xl` ตัวหนา และชิดตัวอักษรเล็กน้อย |
| 24 | `Acme<span class="align-super ...">●</span>` | ข้อความ "Acme" กับจุดสีม่วงที่ยกสูงขึ้น (`align-super`) ขนาดเล็ก `text-[10px]` |
| 25 | `</a>` | ปิดลิงก์โลโก้ |
| 27 | `<ul class="hidden items-center gap-10 text-xs font-medium md:flex">` | รายการเมนูสำหรับจอใหญ่: `hidden` ซ่อนไว้ก่อน แต่ `md:flex` แสดงเป็นแถวเมื่อจอ `md` ขึ้นไป `gap-10` เว้นระหว่างรายการ |
| 28 | `<li><a href="#home" class="text-[#5b3df5] underline ...">Home</a></li>` | เมนู Home เป็นสีม่วงและมีขีดเส้นใต้ เพื่อบอกว่าเป็นหน้าปัจจุบัน |
| 29-31 | `<li><a ... class="hover:text-[#5b3df5]">...</a></li>` | เมนู Features / Pricing / Contact เปลี่ยนเป็นสีม่วงเมื่อเอาเมาส์ไปชี้ (`hover:`) |
| 32 | `</ul>` | ปิดรายการเมนู |
| 34-37 | `<label for="menu-toggle" class="...md:hidden">` | ปุ่ม hamburger สำหรับมือถือ เมื่อกดจะไปติ๊ก checkbox ที่มี id `menu-toggle` (บรรทัด 21) `md:hidden` ซ่อนบนจอใหญ่ |
| 38-40 | `<svg ...><path ... /></svg>` | ไอคอนขีดสามเส้น (hamburger) วาดด้วย SVG |
| 41 | `</label>` | ปิดปุ่ม hamburger |
| 42 | `</div>` | ปิดกล่อง flex ของแถวบน |
| 44 | `<!-- Mobile dropdown ... -->` | คอมเมนต์ อธิบายว่าเมนูนี้แสดงเมื่อ checkbox ถูกติ๊ก |
| 45-47 | `<ul class="absolute ... hidden peer-checked:block ... md:!hidden">` | เมนูดรอปดาวน์มือถือ: `absolute left-0 right-0 top-full` วางต่อจากใต้แถบเมนูเต็มความกว้าง, `hidden` ซ่อนไว้ก่อน, `peer-checked:block` แสดงเมื่อ checkbox ถูกติ๊ก, `md:!hidden` บังคับซ่อนบนจอใหญ่, ส่วนที่เหลือคือมุมโค้ง พื้นขาว เงา และจัดข้อความกึ่งกลาง |
| 48 | `<li><a href="#home" class="block py-2 text-[#5b3df5]">Home</a></li>` | รายการ Home ในดรอปดาวน์ `block py-2` ทำให้พื้นที่กดใหญ่ขึ้น |
| 49-51 | `<li><a ... class="block py-2">...</a></li>` | รายการ Features / Pricing / Contact ในดรอปดาวน์ |
| 52 | `</ul>` | ปิดเมนูดรอปดาวน์ |
| 53 | `</nav>` | ปิดแถบเมนู |
| 54 | `</header>` | ปิดส่วนหัว |

## Hero (บรรทัด 56-80)

| บรรทัด | Code | คำอธิบาย |
|---|---|---|
| 56 | `<!-- Hero -->` | คอมเมนต์ บอกว่าเป็นส่วน Hero (ส่วนต้อนรับด้านบนของหน้า) |
| 57 | `<main>` | เนื้อหาหลักของหน้า |
| 58 | `<section id="home" class="mx-auto max-w-4xl px-4 pb-20 pt-16 text-center md:pt-24">` | ส่วน Hero: `id="home"` เป็นปลายทางของลิงก์ `#home`, `mx-auto max-w-4xl` จำกัดความกว้างและจัดกึ่งกลาง, `px-4 pb-20 pt-16` เว้นระยะขอบ, `text-center` จัดข้อความกึ่งกลาง, `md:pt-24` เว้นด้านบนมากขึ้นบนจอใหญ่ |
| 59-61 | `<span class="inline-flex ... bg-violet-100 ...">` | ป้ายเล็กสีม่วงอ่อนมุมโค้ง `text-[11px]` ตัวอักษรเล็ก |
| 62 | `🚀 Acme Productivity App` | ข้อความในป้าย พร้อมอีโมจิจรวด |
| 63 | `</span>` | ปิดป้าย |
| 65 | `<h1 class="mt-6 text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl md:text-7xl">` | หัวข้อหลักของหน้า (มีได้ 1 ตัวต่อหน้า) `mt-6` เว้นด้านบน, `text-5xl` ตัวใหญ่ แล้วขยายเป็น `sm:text-6xl` และ `md:text-7xl` ตามความกว้างจอ, `font-extrabold` หนามาก, `leading-tight` ชิดบรรทัด, `tracking-tight` ตัวอักษรชิดกัน |
| 66 | `Boost Your <span class="text-[#5b3df5]">Product</span>ivity` | ข้อความหัวข้อ โดยครอบเฉพาะ "Product" ด้วย `<span>` เพื่อให้เป็นสีม่วง ส่วน "ivity" ยังเป็นสีเดิม |
| 67 | `</h1>` | ปิดหัวข้อ |
| 69 | `<p class="mx-auto mt-5 max-w-xl text-base font-semibold md:text-lg">` | ย่อหน้าคำอธิบาย จำกัดความกว้าง `max-w-xl` จัดกึ่งกลาง ตัวหนาปานกลาง ขนาด `text-base` และ `md:text-lg` บนจอใหญ่ |
| 70 | `Streamline your workflow ...` | ข้อความคำอธิบาย |
| 71 | `</p>` | ปิดย่อหน้า |
| 73-76 | `<a href="#contact" class="mt-8 inline-block rounded-lg bg-[#16142a] ... hover:bg-slate-700">` | ปุ่มลิงก์ไปส่วน Contact: `inline-block` ให้ตั้งขนาดและเว้นระยะได้, `rounded-lg` มุมโค้ง, `bg-[#16142a]` พื้นเกือบดำ, `text-white` ตัวหนังสือขาว, `transition hover:bg-slate-700` เปลี่ยนสีพื้นอย่างนุ่มนวลเมื่อเอาเมาส์ชี้ |
| 77 | `Start Free Trial` | ข้อความบนปุ่ม |
| 78 | `</a>` | ปิดปุ่ม |
| 79 | `</section>` | ปิดส่วน Hero |
| 80 | `</main>` | ปิดเนื้อหาหลัก |
| 81 | `</body>` | ปิดส่วนที่แสดงบนจอ |
| 82 | `</html>` | ปิดเอกสาร HTML |

## คำศัพท์ Tailwind ที่ใช้บ่อยในไฟล์นี้

| คลาส | ความหมาย |
|---|---|
| `px-` / `py-` | เว้นขอบในแนวนอน / แนวตั้ง |
| `mt-` / `pt-` / `pb-` | เว้นขอบนอกด้านบน / ขอบในด้านบน / ขอบในด้านล่าง |
| `mx-auto` | จัดกล่องให้อยู่กึ่งกลางแนวนอน |
| `flex`, `items-center`, `justify-between` | จัดวางแบบ Flexbox |
| `md:` | ใช้สไตล์นี้เมื่อจอกว้างตั้งแต่ 768px ขึ้นไป |
| `hover:` | ใช้สไตล์นี้เมื่อเอาเมาส์ชี้ |
| `[#5b3df5]` | ค่าสีที่กำหนดเอง (arbitrary value) ในวงเล็บเหลี่ยม |
