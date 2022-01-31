import React from 'react';
import './widgetLar.css'

const WidgetLar = () => {
    const Button = ({ type }) => {
        return <button className={'widgetLar__table__tr__status__button ' + type}>{type}</button>
    }

    return <div className='widgetLar'>
        <span className='widgetLar__title'>Latest Transactions</span>
        <table className='widgetLar__table'>
            <tbody>
                <tr className='widgetLar__table__tr'>
                    <th className='widgetLar__table__tr__th'>Customer</th>
                    <th className='widgetLar__table__tr__th'>Date</th>
                    <th className='widgetLar__table__tr__th'>Amount</th>
                    <th className='widgetLar__table__tr__th'>Status</th>
                </tr>
                <tr className='widgetLar__table__tr'>
                    <td className='widgetLar__table__tr__user'>
                        <img src='https://lh3.googleusercontent.com/ogw/ADea4I58Inj3DBJziyAs4TN7yW9mM-6fA1hkUz4AmgCiow=s64-c-mo' alt='Profile Pic' className='widgetLar__table__tr__user__img'></img>
                        <span className='widgetLar__table__tr__user__username'>Susan Carlson</span>
                    </td>
                    <td className='widgetLar__table__tr__date'>
                        June 2 2021
                    </td>
                    <td className='widgetLar__table__tr__amount'>
                        $112.00
                    </td>
                    <td className='widgetLar__table__tr__status'>
                        <Button type={"Approved"}></Button>
                    </td>
                </tr>
                <tr className='widgetLar__table__tr'>
                    <td className='widgetLar__table__tr__user'>
                        <img src='https://lh3.googleusercontent.com/ogw/ADea4I58Inj3DBJziyAs4TN7yW9mM-6fA1hkUz4AmgCiow=s64-c-mo' alt='Profile Pic' className='widgetLar__table__tr__user__img'></img>
                        <span className='widgetLar__table__tr__user__username'>Susan Carlson</span>
                    </td>
                    <td className='widgetLar__table__tr__date'>
                        June 2 2021
                    </td>
                    <td className='widgetLar__table__tr__amount'>
                        $112.00
                    </td>
                    <td className='widgetLar__table__tr__status'>
                        <Button type={"Approved"}></Button>
                    </td>
                </tr>
                <tr className='widgetLar__table__tr'>
                    <td className='widgetLar__table__tr__user'>
                        <img src='https://lh3.googleusercontent.com/ogw/ADea4I58Inj3DBJziyAs4TN7yW9mM-6fA1hkUz4AmgCiow=s64-c-mo' alt='Profile Pic' className='widgetLar__table__tr__user__img'></img>
                        <span className='widgetLar__table__tr__user__username'>Susan Carlson</span>
                    </td>
                    <td className='widgetLar__table__tr__date'>
                        June 2 2021
                    </td>
                    <td className='widgetLar__table__tr__amount'>
                        $112.00
                    </td>
                    <td className='widgetLar__table__tr__status'>
                        <Button type={"Pending"}></Button>
                    </td>
                </tr>
                <tr className='widgetLar__table__tr'>
                    <td className='widgetLar__table__tr__user'>
                        <img src='https://lh3.googleusercontent.com/ogw/ADea4I58Inj3DBJziyAs4TN7yW9mM-6fA1hkUz4AmgCiow=s64-c-mo' alt='Profile Pic' className='widgetLar__table__tr__user__img'></img>
                        <span className='widgetLar__table__tr__user__username'>Susan Carlson</span>
                    </td>
                    <td className='widgetLar__table__tr__date'>
                        June 2 2021
                    </td>
                    <td className='widgetLar__table__tr__amount'>
                        $112.00
                    </td>
                    <td className='widgetLar__table__tr__status'>
                        <Button type={"Declined"}></Button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>;
};

export default WidgetLar;
