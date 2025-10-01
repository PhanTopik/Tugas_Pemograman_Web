const scheduleData = [
    { day: 'Senin', code: 'TIF3103', course: 'Desain Interaksi', room: 'C-101', sks: 2, time: '10.30-12.10', type: 'MKWU', lecturers: ['Fanindia Purnamasari S.TI., M.IT'] },
    { day: 'Senin', code: 'IKL2107', course: 'Praktikum Pemograman Web', room: 'Lab 2', sks: 2, time: '14.50-16.30', type: 'REGULER', lecturers: ['Nurrahmadayeni M.Kom'] },
    { day: 'Selasa', code: 'MNJ2205', course: 'Sistem Informasi Manajemen', room: 'GL 2B', sks: 2, time: '10.30-12.10', type: 'MKWU', lecturers: ['Alwi Ihsan Nababan S.E., M.M'] },
    { day: 'Selasa', code: 'ILK2105', course: 'Praktikum Basis Data', room: 'Lab 1', sks: 2, time: '14.40-16.20', type: 'REGULER', lecturers: ['Dr. Dewi Sartika Br Ginting S.Kom., M.Kom'] },
    { day: 'Rabu', code: 'ILK2109', course: 'Struktur Data', room: 'D-104', sks: 3, time: '08:00-10:30', type: 'REGULER', lecturers: ['Anandhini Medianty Nababan S.Kom., M.T', 'Insidini Fawwaz M.Kom'] },
    { day: 'Rabu', code: 'ILK3102', course: 'Etika profesi', room: 'D-102', sks: 2, time: '13.00-14.40', type: 'REGULER', lecturers: ['Dr. Ir. Elviawaty Muisa Zamzami S.T., M.T., M.M., IPU', 'Dr. Eng Ade Candra S.T., M.Kom.'] },
    { day: 'Rabu', code: 'ILK2106', course: 'Pemograman Web', room: 'D-102', sks: 3, time: '14:40-17:10', type: 'REGULER', lecturers: ['Dr. Dewi Sartika Br Ginting S.Kom., M.Kom', 'Nurrahmadayeni M.Kom'] },
    { day: 'Kamis', code: 'ILK2110', course: 'Praktikum Struktur Data', room: 'Lab 2', sks: 2, time: '8.00-9.40', type: 'REGULER', lecturers: ['Anandhini Medianty Nababan S.Kom., M.T'] },
    { day: 'Kamis', code: 'ILK3107', course: 'Kecerdasan buatan', room: 'D-101', sks: 3, time: '13.00-15.30', type: 'REGULER', lecturers: ['Prof. Drs. Poltak Sihombing M.Kom., Ph.D', 'Dr. Amalia S.T., M.T.'] },
    { day: 'Jumat', code: 'ILK2104', course: 'Basis Data', room: 'D-101', sks: 3, time: '08:00-10:30', type: 'REGULER', lecturers: ['Dr. Dewi Sartika Br Ginting S.Kom., M.Kom', 'Insidini Fawwaz M.Kom'] }
];

function renderSchedule() {
    const container = document.getElementById('schedule-container');

    const groupedByDay = scheduleData.reduce((acc, item) => {
        acc[item.day] = acc[item.day] || [];
        acc[item.day].push(item);
        return acc;
    }, {});

    const table = document.createElement('table');
    table.setAttribute('border', '0');
    table.setAttribute('cellspacing', '5');
    table.setAttribute('cellpadding', '2');

    table.innerHTML = `
        <thead>
            <tr>
                <th>Hari</th>
                <th>Kode</th>
                <th>Mata Kuliah</th>
                <th>Ruangan</th>
                <th>SKS</th>
                <th>Waktu</th>
                <th>Tipe Kelas</th>
                <th>Dosen</th>
            </tr>
        </thead>
    `;

    const tbody = document.createElement('tbody');

    for (const day in groupedByDay) {
        const entries = groupedByDay[day];
        entries.forEach((item, index) => {
            const row = document.createElement('tr');
                       
            if (index === 0) {
                const dayCell = document.createElement('th');
                dayCell.setAttribute('rowspan', entries.length);
                dayCell.textContent = day;
                row.appendChild(dayCell);
            }
            
            row.innerHTML += `
                <th>${item.code}</th>
                <td>${item.course}</td>
                <td>${item.room}</td>
                <td>${item.sks}</td>
                <td>${item.time}</td>
                <td>${item.type}</td>
                <td>${item.lecturers.join('<br>')}</td>
            `;
            tbody.appendChild(row);
        });
    }

    table.appendChild(tbody);
    container.appendChild(table);
}

 function goToUrl(event) {
    const url = event.target.getAttribute('data-url');
    if (url) {
      window.location.href = url;
    }
  }

const clickableElements = document.querySelectorAll('.clickable');

clickableElements.forEach(function(element) {
    element.addEventListener('click', goToUrl);
  });

document.addEventListener('DOMContentLoaded', renderSchedule);

window.addEventListener('DOMContentLoaded', (event) => {

    const fotoProfil = document.getElementById('foto_profil_saya');

    fotoProfil.classList.add('muncul');

});