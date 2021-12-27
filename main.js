const itemCtrl = (function(){
    const Item = function(id, description, amount){
        this.id = id;
        this.description = description;
        this.amount = amount;
    }

    return{
        
        addMoney: function(description, amount){
            let ID = itemCtrl.createID();
            newMoney = new Item(ID, description, amount);
            data.items.push(newMoney);
            return newMoney;
        },
        createID: function(){
            return idNum;
        },
    }
})();

const UICtrl = (function(){
    const UISelectors = {
        incomeBtn: '#add__income',
        expenseBtn: '#add__expense',
        description: '#description',
        amount: '#amount',
        moneyEarned: '#amount__earned',
        moneyAvailable: '#amount__available',
        moneySpent: '#amount__spent',
        incomeList: '#income__container',
        expensesList: '#expenses__container',
        incomeItem: '.income__amount',
        expenseItem: '.expense__amount',
        itemsContainer: '.items__container'
    }
    return{
        getSelectors: function(){
            return UISelectors
        },
        getDescriptionInput: function(){
            return {
                descriptionInput: document.querySelector(UISelectors.description).value
            }
        },
        getValueInput: function(){
            return{
                amountInput: document.querySelector(UISelectors.amount).value
            }
        },
    
        updateEarned: function(){
            const allIncome = document.querySelectorAll(UISelectors.incomeItem);
            const earnedTotal = document.querySelector(UISelectors.moneyEarned);
        },
        
        updateSpent: function(){
            const allExpenses = document.querySelectorAll(UISelectors.expenseItem);
            const expensesTotal = document.querySelector(UISelectors.moneySpent);
        },
        updateAvailable: function(){
            const earned = document.querySelector(UISelectors.moneyEarned);
            const spent = document.querySelector(UISelectors.moneySpent)
            const available = document.querySelector(UISelectors.moneyAvailable);
        },
        
    }
})();

const App = (function(){
    const loadEventListeners = function(){
        const UISelectors = UICtrl.getSelectors();
        document.querySelector(UISelectors.incomeBtn).addEventListener('click', addIncome);
        document.querySelector(UISelectors.expenseBtn).addEventListener('click', addExpense);
        document.querySelector(UISelectors.itemsContainer).addEventListener('click', deleteItem);
    }

    const addIncome = function(){
        const description = UICtrl.getDescriptionInput();
        const amount = UICtrl.getValueInput();
        if(description.descriptionInput !=='' && amount.amountInput !== ''){
            const newMoney = itemCtrl.addMoney(description.descriptionInput, amount.amountInput);
            UICtrl.addIncomeItem(newMoney);
            UICtrl.updateEarned();
            UICtrl.updateAvailable();
        }
    }

    const addExpense = function(){
        const description = UICtrl.getDescriptionInput();
        const amount = UICtrl.getValueInput();
        if(description.descriptionInput !=='' && amount.amountInput !== ''){
            const newMoney = itemCtrl.addMoney(description.descriptionInput, amount.amountInput);
            UICtrl.addExpenseItem(newMoney);
            UICtrl.updateSpent();
            UICtrl.updateAvailable();
        }
    }

    return{
            loadEventListeners();
    }
})

