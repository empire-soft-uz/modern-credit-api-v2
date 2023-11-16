import { ICredit } from "../database/models/credit";


export function calculateMonthlyPayments(credit: ICredit) {
    const product = credit.product.product;
    const productPrice = credit.product.price;
    const deposit_amount:any = credit.deposit_amount;
    const period:any= credit.period;
    const percent = credit.percent;
    const totalCredit = deposit_amount * (percent / 100) + deposit_amount;
    const monthlyPayment = parseInt(((parseInt(deposit_amount) * ( percent / 100)) + deposit_amount)) / period;
    const date = new Date();
    const nextPayment = new Date(date);

    //To collect all payment dates
    const paymentDates:Date[] = [];

    for( let i = 1; i <= period; i++){
        const currentDate = new Date(nextPayment);
        currentDate.setMonth(nextPayment.getMonth()+i);
        paymentDates.push(currentDate);
    }
 
    return {product, totalCredit, monthlyPayment, period,date, paymentDates};
}