document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('calc-form');
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
    const operation = document.getElementById('operation');
    const result = document.getElementById('result');
    const error = document.getElementById('error');
    const history = document.getElementById('history');
    const themeToggle = document.getElementById('theme-toggle');

    const toggleTheme = () => {
        const isDark = document.body.classList.contains('dark');
        document.body.classList.toggle('dark', !isDark);
        document.body.classList.toggle('light', isDark);
        themeToggle.textContent = isDark ? 'Тёмная тема' : 'Светлая тема';
    };

    document.body.classList.add('light');
    themeToggle.textContent = 'Тёмная тема';

    themeToggle.addEventListener('click', toggleTheme);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        error.textContent = '';

        if (!num1.value || !num2.value) {
            error.textContent = 'Заполните оба поля!';
            return;
        }

        const n1 = parseFloat(num1.value);
        const n2 = parseFloat(num2.value);

        if (isNaN(n1) || isNaN(n2)) {
            error.textContent = 'Введите числовые значения!';
            return;
        }

        let res;
        let symbol;
        switch (operation.value) {
            case 'add':
                res = n1 + n2;
                symbol = '+';
                break;
            case 'subtract':
                res = n1 - n2;
                symbol = '-';
                break;
            case 'multiply':
                res = n1 * n2;
                symbol = '×';
                break;
            case 'divide':
                if (n2 === 0) {
                    error.textContent = 'Деление на ноль невозможно!';
                    return;
                }
                res = n1 / n2;
                symbol = '÷';
                break;
        }

        result.textContent = `Результат: ${res}`;

        const historyItem = document.createElement('li');
        historyItem.textContent = `${n1} ${symbol} ${n2} = ${res}`;
        history.appendChild(historyItem);

        num1.value = '';
        num2.value = '';
    });
});