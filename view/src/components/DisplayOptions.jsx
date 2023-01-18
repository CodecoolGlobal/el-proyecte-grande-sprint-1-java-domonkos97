import {Form} from "react-bootstrap";
import {Link} from "react-router-dom";

function DisplayOptions({ isMain, handleOnClick, expenses, incomes, transaction }) {
    if (isMain) {
        let link;
        if (isMain){
            link = <Link  style={{color: 'black'}} to="/add">Add Transaction</Link>
        } else {
            link = <></>
        }
        return(
            <div className="displayOptions">
                <button className="button simple-button active" onClick={() => {handleOnClick(transaction)}}>All Transactions</button>
                <button className="button simple-button" onClick={() => {handleOnClick(expenses)}}>Expenses</button>
                <button className="button simple-button" onClick={() => {handleOnClick(incomes)}}>Incomes</button>
                <button className="button add-transaction">{link}</button>
                {/*    <input type="radio" id="all-transactions" name="radio" value="all-transactions"></input>*/}
                {/*    <label htmlFor="all-transactions">All Transactions</label>*/}
                {/*<input type="radio" id="expenses" name="radio" value="expenses"></input>*/}
                {/*    <label htmlFor="expenses">Expenses</label>*/}
                {/*<input type="radio" id="income" name="radio" value="income"></input>*/}
                {/*    <label htmlFor="income">Income</label>*/}
            </div>
        )
    } else {
        return(
            <>
            </>
        )
    }
}

export default DisplayOptions;