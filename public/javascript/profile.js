document.getElementById('phoneNumber').addEventListener('blur', e => {
    console.log(e.target.value)
    const phoneRegex = /^(0|\+84)[3-9](\d{2}[-\s]?){3}\d{2}$/;
    if(!phoneRegex.test(e.target.value)) {
        alert('Số điện thoại không đúng định dạng !')
        return
    }
})