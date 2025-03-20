// Module 1: Data Simulation
const dashboardData = {
    overview: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        data: [12, 19, 3, 5, 2]
    },
    sales: [
        { date: '2023-10-26', product: 'Laptop', amount: 1200 },
        { date: '2023-10-27', product: 'Mouse', amount: 25 },
        { date: '2023-10-28', product: 'Keyboard', amount: 50 }
    ],
    users: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        data: [100, 150, 120, 180]
    }
};

// Module 2: Charting
function createChart(canvasId, labels, data) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Data',
                data: data,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

createChart('overviewChart', dashboardData.overview.labels, dashboardData.overview.data);
createChart('userChart', dashboardData.users.labels, dashboardData.users.data);

// Module 3: Table Rendering
function renderTable(tableId, data) {
    const tableBody = document.getElementById(tableId).querySelector('tbody');
    tableBody.innerHTML = '';
    data.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${row.date}</td><td>${row.product}</td><td>${row.amount}</td>`;
        tableBody.appendChild(tr);
    });
}

renderTable('salesTable', dashboardData.sales);

// Module 4: Navigation
document.querySelectorAll('.sidebar nav ul li a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const sectionId = event.target.dataset.section;
        document.querySelectorAll('.dashboard-section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(sectionId).classList.add('active');
        document.querySelectorAll('.sidebar nav ul li a').forEach(a=>{a.classList.remove("active");});
        event.target.classList.add("active");
    });
});
document.querySelector(".sidebar nav ul li a").click();