const panjangInput = document.getElementById('panjangInput');
const lebarInput = document.getElementById('lebarInput');
const rectanglePreview = document.getElementById('rectanglePreview');
const mathText = document.getElementById('mathText');

function hitungPersegiPanjang() {
    const panjang = Number(panjangInput.value) || 0;
    const lebar = Number(lebarInput.value) || 0;

    const luas = panjang * lebar;
    const keliling = 2 * (panjang + lebar);

    document.getElementById('panjangOutput').textContent = panjang;
    document.getElementById('lebarOutput').textContent = lebar;
    document.getElementById('luas').textContent = luas;
    document.getElementById('keliling').textContent = keliling;

    const maxSisi = Math.max(panjang, lebar, 1);
    const width = (panjang / maxSisi) * 100;
    const height = (lebar / maxSisi) * 100;

    rectanglePreview.style.width = `${Math.max(width, 30)}%`;
    rectanglePreview.style.height = `${Math.max(height, 30)}%`;
    mathText.textContent = `${panjang} × ${lebar} = ${luas}`;
}

panjangInput.addEventListener('input', hitungPersegiPanjang);
lebarInput.addEventListener('input', hitungPersegiPanjang);

hitungPersegiPanjang();
