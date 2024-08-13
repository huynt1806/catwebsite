document.querySelectorAll('.cat-item img').forEach(item => {
    item.addEventListener('click', () => {
        alert('You clicked on a cute cat!');
    });
});
const runningCat = document.getElementById('running-cat');

let mouseX = 0;
let mouseY = 0;
let catX = 0;
let catY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCat() {
    // Tính toán khoảng cách giữa vị trí hiện tại của mèo và con trỏ
    const dx = mouseX - catX;
    const dy = mouseY - catY;
    
    // Di chuyển mèo từ từ về phía con trỏ, với tốc độ chậm hơn
    catX += dx * 0.05; // Thay đổi hệ số để điều chỉnh tốc độ
    catY += dy * 0.05;
    
    // Cập nhật vị trí của mèo
    runningCat.style.transform = `translate(${catX}px, ${catY}px)`;

    // Lặp lại hàm animateCat để tạo hiệu ứng mượt mà
    requestAnimationFrame(animateCat);
}

// Bắt đầu quá trình animation
animateCat();
