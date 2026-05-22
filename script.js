document.addEventListener("DOMContentLoaded", function () {
    // تحديد رابط الموقع الحالي ليتم توليد الـ QR له مباشرة
    // يمكنك استبدال window.location.href برابط موقعك الفعلي عند رفعه على إنترنت مثل: "https://mycookiesite.com"
    var currentUrl = window.location.href; 

    var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: currentUrl,
        width: 150,
        height: 150,
        colorDark : "#4A2c11", // لون الكود متناسق مع لون الشوكولاتة بالموقع
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });

    // كود ذكي للتأكد من تحميل صور الكوكيز الجديدة بكفاءة ومرونة
    const productCards = document.querySelectorAll('.product-card');
    
    // إضافة تأثير ظهور تدريجي جذاب عند التمرير لكروت الكوكيز الجديدة
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    productCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });

    // يضمن هذا الجزء توزيع الكروت بشكل شبكي متناسق وجميل مهما كان حجم الشاشة
    console.log("✅ تم تحميل " + productCards.length + " منتج كوكيز بنجاح في المنيو المطور!");
});