import React from 'react';
import BillDetails from './components/BillDetails';
import ItemList from './components/ItemList';
import TotalAmount from './components/TotalAmount';
import { jsPDF } from 'jspdf';
import './App.css';

function App() {
    const [items, setItems] = React.useState([]);

    const handleAddItem = (item) => {
        setItems([...items, item]);
    };

    const handleDeleteItem = (index) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
    };

    const calculateTotalAmount = () => {
        return items.reduce(
            (total, item) =>
                total +
                item.quantity *
                item.price, 0);
    };

    const handleDownloadPDF = () => {
        const pdf = new jsPDF();
        pdf.text('INVOICE | REPORT', 20, 20);

        // Add items to PDF
        items.forEach((item, index) => {
            const yPos = 40 + index * 20;
            pdf.text(
                `ITEM: ${item.item}:    Quantity: ${item.quantity}, 
                          Price: Ksh ${item.price}`, 20, yPos);
        });

        // Add total amount to PDF
        const totalAmount =
            calculateTotalAmount();
        pdf.text(
            `TOTAL AMOUNT=  Ksh: ${totalAmount.toFixed(2)}`, 20, 200);

        // Save the PDF
        pdf.save('invoice.pdf');
    };

    return (
      <div className="App">
        <h1 className='title'>Bill & Invoice manager</h1>
        <BillDetails onAddItem={handleAddItem} />
        <ItemList items={items} onDeleteItem={handleDeleteItem} />
        <TotalAmount total={calculateTotalAmount()} />
        <button onClick={handleDownloadPDF}>Download PDF</button>
      </div>
    );

}

export default App
