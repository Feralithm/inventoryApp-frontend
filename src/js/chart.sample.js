async function fetchDashboardData() {
  try {
    const response = await fetch(`${API_URL}/dashboard`,{
      method: 'GET',
      credentials: 'include'
    })
    if (!response.ok) {
      return response.json()
    }
    
    const data = await response.json()
    return data
  } catch (err) {
    console.error('Gagal fetch:', err)
    return null
  }
}

  async function renderPerformaChart() {
  const rupiah = (number) => new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
  }).format(number);

  const data = await fetchDashboardData();
  if (!data) return;

  const penjualan = data.penjualanBulanan.map(item => parseInt(item.total_penjualan));
  const bulanPenjualan = data.penjualanBulanan.map(item => item.bulan)
  const totalStok = parseInt(data.totalStok);
  const barangMasuk = data.masukKeluar.find(x => x.jenis === 'masuk')?.jumlah || 0;
  const barangKeluar = data.masukKeluar.find(x => x.jenis === 'keluar')?.jumlah || 0;

  // Tampilkan data
  document.getElementById('stok').innerHTML = totalStok;
  document.getElementById('penjualan').innerHTML = rupiah(penjualan.reduce((a, b) => a + b, 0));
  document.getElementById('barangMasuk').innerHTML = barangMasuk;
  document.getElementById('barangKeluar').innerHTML = barangKeluar;

  const ctx = document.getElementById('big-line-chart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: bulanPenjualan, 
      datasets: [{
        label: 'Penjualan Bulanan',
        data: penjualan,
        borderColor: '#01F1B2',
        backgroundColor: 'rgba(10, 255, 125, 0.3)',
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#01F1B2'
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: (value) => {
              return new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR'
              }).format(value);
            }
          }
        }
      }
    }
  });
}

renderPerformaChart();