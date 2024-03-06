import css from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead className={css.tableHeader}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }, index) => {
          return (
            <tr className={index % 2 ? css.tableGray : css.tableWhite} key={id}>
              <td className={css.tableData}>{type}</td>
              <td className={css.tableData}>{amount}</td>
              <td className={css.tableData}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TransactionHistory;
