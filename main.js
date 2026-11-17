 const balance = document.getElementById('balance');
        const display = document.getElementById('display');
        const message = document.getElementById('message');

        let currentBalance = 15000;
        let inputAmount = '';

       

            function updateBalanceUI() {
                balance.textContent = currentBalance.toLocaleString('ru-RU') + ' ₽';
            }

            function pressDigit(digit) {
                message.textContent = '';

                if(inputAmount === '' && digit === '0') return;
                if(inputAmount.length >= 7) return;

            inputAmount += digit;
            display.textContent = inputAmount;
            }

            function clearInput() {
                display.textContent = '0';
                inputAmount = '';
            }

            

            function withdraw() {
                const amount = Number(inputAmount);

                if(amount <= 0) {
                    showMessage('Введите сумму больше нуля.' ); return
                }
                if(amount > currentBalance) {
                    showMessage('Недостаточно средств на счете.'); return
                }
                currentBalance -= amount;
                updateBalanceUI();
                showMessage('Вы успешно сняли ' + amount.toLocaleString('ru-RU') + ' ₽', 'success');
                clearInput();
                
                

            }
            function showMessage(msg, type) {
                message.textContent = msg;
                message.className = 'screen-message ' + (type === 'error' ? 'msg-error' : 'msg-success');
            }
        
