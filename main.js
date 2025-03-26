// زر الطوارئ
document.getElementById('emergency-btn').addEventListener('click', function() {
    if(confirm('هل تريد طلب مساعدة طارئة؟ سيتم إخطار الفريق الطبي فورًا.')) {
        // إرسال طلب الطوارئ
        alert('تم إرسال طلب الطوارئ. سيتم الاتصال بك قريبًا.');
        
        // هنا يمكنك إضافة كود AJAX لإرسال الطلب إلى الخادم
        /*
        fetch('/api/emergency', {
            method: 'POST',
            body: JSON.stringify({patientId: '123'}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            alert('تم إرسال الطلب بنجاح');
        });
        */
    }
});

// كود لإدارة المواعيد
function bookAppointment(doctorId, date, time) {
    // كود لحجز الموعد
    console.log(`حجز موعد مع الطبيب ${doctorId} في ${date} الساعة ${time}`);
}

// كود لإدارة الملف الطبي
function loadMedicalRecords(patientId) {
    // جلب بيانات المريض من الخادم
    fetch(`/api/patients/${patientId}/records`)
    .then(response => response.json())
    .then(data => {
        // عرض البيانات في الصفحة
        console.log(data);
    });
}

// يمكنك إضافة المزيد من الوظائف حسب الحاجة
