/* Aside & Navbar: dropdowns */

Array.from(document.getElementsByClassName('dropdown')).forEach(elA => {
  elA.addEventListener('click', e => {
    if (e.currentTarget.classList.contains('navbar-item')) {
      e.currentTarget.classList.toggle('active')
    } else {
      const dropdownIcon = e.currentTarget.getElementsByClassName('mdi')[1]

      e.currentTarget.parentNode.classList.toggle('active')
      dropdownIcon.classList.toggle('mdi-plus')
      dropdownIcon.classList.toggle('mdi-minus')
    }
  })
})

/* Aside Mobile toggle */

Array.from(document.getElementsByClassName('mobile-aside-button')).forEach(el => {
  el.addEventListener('click', e => {
    const dropdownIcon = e.currentTarget
        .getElementsByClassName('icon')[0]
        .getElementsByClassName('mdi')[0]

    document.documentElement.classList.toggle('aside-mobile-expanded')
    dropdownIcon.classList.toggle('mdi-forwardburger')
    dropdownIcon.classList.toggle('mdi-backburger')
  })
})

/* NavBar menu mobile toggle */

Array.from(document.getElementsByClassName('--jb-navbar-menu-toggle')).forEach(el => {
  el.addEventListener('click', e => {
    const dropdownIcon = e.currentTarget
        .getElementsByClassName('icon')[0]
        .getElementsByClassName('mdi')[0]

    document.getElementById(e.currentTarget.getAttribute('data-target')).classList.toggle('active')
    dropdownIcon.classList.toggle('mdi-dots-vertical')
    dropdownIcon.classList.toggle('mdi-close')
  })
})


/* Modal: open */
document.addEventListener('click', async function (e) {
  const btn = e.target.closest('.--jb-modal');
  if (btn) {
    const modalId = btn.getAttribute('data-target');
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('active');
      document.documentElement.classList.add('clipped');
    }
  }


  /* Modal: close */
  const closeBtn = e.target.closest('.--jb-modal-close');
  if (closeBtn) {
    const modal = closeBtn.closest('.modal');
    if (modal) {
      modal.classList.remove('active');
      document.documentElement.classList.remove('clipped');
    }
  }


  const deleteBtn = e.target.closest('.button.red.--jb-modal[data-id]');
  if (deleteBtn) {
    barangIdToDelete = deleteBtn.getAttribute('data-id');
  }

});

// Button delete
async function deleteBarang() {
  if (!barangIdToDelete) return alert("ID barang tidak ditemukan");
  try {
    await fetch(`${API_URL}/barang/${barangIdToDelete}`, {
      method: 'DELETE',
      credentials: 'include'
    });
    barangIdToDelete = null;
    alert("Data Barang Berhasil di Hapus")
    window.location.reload();
  } catch (err) {
    console.error(err);
    alert("Gagal menghapus data");
  }
}

// fungsi fetch data barang halaman dashboard
let barangData = [];
let currentPage = 1;
const itemsPerPage = 5;

async function fetchBarang() {
  try {
      const res = await fetch(`${API_URL}/barang/new`,
        {
          method: "GET",
          credentials: "include"
        }
      );
      const data = await res.json();

      if (!Array.isArray(data)) throw new Error('Data barang tidak valid');

      barangData = data;
      renderBarangPage(currentPage);
      renderPagination();
    } catch (err) {
      console.error('Gagal memuat data: ' + err.message);
    }
  }

  //Fungsi submit edit data  barang
  async function submitEditBarang() {
    const id = document.getElementById('edit-id').value;
    if (!id) return alert("ID barang tidak valid.");

    const data = {
      nama: document.getElementById('edit-nama').value,
      deskripsi: document.getElementById('edit-deskripsi').value,
      stok: Number(document.getElementById('edit-stok').value),
      harga: Number(document.getElementById('edit-harga').value),
      kategori: document.getElementById('edit-kategori').value,
      gambar: document.getElementById('edit-gambar').value
    };

    try {
      const res = await fetch(`${API_URL}/barang/edit/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(data)
      });

      const result = await res.json();
      if (!res.ok) return alert(result.message || 'Gagal mengedit barang.');
      alert("Data Barang Berhasil di Ubah")
      window.location.reload();
    } catch (err) {
      console.error(err);
      alert("Gagal menyimpan perubahan.");
    }
  }


  function renderBarangPage(page) {
    const tbody = document.getElementById('barang-table-body');
    tbody.innerHTML = '';

    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageData = barangData.slice(start, end);

    pageData.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td data-label="Id">
          ${item.id}
        </td>
        <td data-label="Nama">${item.nama}</td>
        <td data-label="Stok">${item.stok}</td>
        <td data-label="Harga">Rp${Number(item.harga).toLocaleString()}</td>
        <td data-label="Kategori">${item.kategori || '-'}</td>
        <td data-label="Created">
          <small class="text-gray-500">${new Date(item.created_at).toLocaleDateString()}</small>
        </td>
        <td data-label="gambar">
            <a href="${item.gambar || '-'}" target="_blank" rel="noopener noreferrer class="text-blue-600 underline">Lihat</a>
          </td>
      `;
      tbody.appendChild(row);
    });

    document.getElementById('page-info').textContent = `Page ${page} of ${Math.ceil(barangData.length / itemsPerPage)}`;
  }

  function renderPagination() {
    const container = document.getElementById('pagination-buttons');
    container.innerHTML = '';
    const totalPages = Math.ceil(barangData.length / itemsPerPage);

    for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement('button');
      btn.textContent = i;
      btn.className = `button ${i === currentPage ? 'active' : ''}`;
      btn.onclick = () => {
        currentPage = i;
        renderBarangPage(i);
        renderPagination();
      };
      container.appendChild(btn);
    }
  }
