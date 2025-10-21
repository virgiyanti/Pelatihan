<p id="pesan"></p>
<button id="sapaButton">Klik Saya</button>

<script>
const tombolSapa = document.getElementById('sapaButton');
const pesan = document.getElementById('pesan');

tombolSapa.addEventListener('click', function() {
  pesan.textContent = 'Hallo! Terima kasih sudah berkunjung!';
});
</script>
