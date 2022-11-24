import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
    return (
      <table className={css.transactionHistoryTable}>
        <thead className={css.hederRow}>
          <tr className={css.valuesRow}>
            <th className={css.columnHeader}>Type</th>
            <th className={css.columnHeader}>Amount</th>
            <th className={css.columnHeader}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id} className={css.valuesRow}>
              <td className={css.transactionData}>{item.type}</td>
              <td className={css.transactionData}>{item.amount}</td>
              <td className={css.transactionData}>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
};

TransactionHistory.protoType = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.number.isRequired,
    })
  ).isRequired,
};

// {/* <table class="transaction-history">
//   <thead>
//     <tr>
//       <th>Type</th>
//       <th>Amount</th>
//       <th>Currency</th>
//     </tr>
//   </thead>

//   <tbody>
//     <tr>
//       <td>Invoice</td>
//       <td>125</td>
//       <td>USD</td>
//     </tr>
//     <tr>
//       <td>Withdrawal</td>
//       <td>85</td>
//       <td>USD</td>
//     </tr>
//   </tbody>
// </table>; */}
