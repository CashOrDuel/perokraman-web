let display = document.getElementById('display');
let inputValue = ''; // Menyimpan input pengguna
let lastInput = '';  // Menyimpan input terakhir

function appendToDisplay(value) {
  inputValue += value;
  lastInput = value; // Simpan input terakhir
  display.value = inputValue; // Tampilkan semua input
}

function clearDisplay() {
  inputValue = '';
  display.value = '';
  lastInput = ''; // Reset input terakhir
}

function calculate() {
  try {
    // Mengganti simbol pangkat dengan yang bisa dieksekusi
    const result = eval(inputValue.replace(/\^/g, '**'));
    display.value = result;
    inputValue = result.toString();
  } catch (error) {
    display.value = 'Error';
  }
}
