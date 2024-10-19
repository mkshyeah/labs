fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                console.log(users);
                
                
                document.getElementById('json-output').textContent = JSON.stringify(users, null, 2);

                const usersTable = document.getElementById('users-table').getElementsByTagName('tbody')[0];

                users.forEach(user => {
                    const row = document.createElement('tr');

                    const nameCell = document.createElement('td');
                    nameCell.textContent = user.name;
                    row.appendChild(nameCell);

                    const emailCell = document.createElement('td');
                    emailCell.textContent = user.email;
                    row.appendChild(emailCell);

                    usersTable.appendChild(row);
                });
            })
            .catch(error => {
                console.error('Ошибка при получении данных:', error);
            });
